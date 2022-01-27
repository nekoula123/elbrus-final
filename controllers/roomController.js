import rooms from "../data/data.js";
import { Room } from "../models/RoomModel.js";
import YooKassa from "yookassa";

export const addRooms = async (req, res) => {
  try {
    const response = await Room.insertMany(rooms);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

export const getRooms = async (req, res) => {
  try {
    const response = await Room.find({});
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

export const editRoom = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  try {
    const room = await Room.updateOne({ _id: id }, data);
    res.json(room);
  } catch (err) {
    console.log(err);
  }
};

export const findRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findOne({ _id: id });
    res.json(room);
  } catch (err) {
    console.log(err);
  }
};

export const makePayment = async (req, res) => {
  const { id } = req.params;
  const yooKassa = new YooKassa({
    shopId: "<Идентификатор магазина>",
    secretKey: "<Секретный ключ>",
  });

  try {
    const room = await Room.findOne({ _id: id });
    const payment = await yooKassa.createPayment({
      amount: {
        value: room.price.new,
        currency: "RUB",
      },
      payment_method_data: {
        type: "bank_card",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://elbrusplaza.ru/successPay",
      },
      description: "Заказ №72",
    });
  } catch (err) {
    console.log(err);
  }
};
