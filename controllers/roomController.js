import rooms from "../data/data.js";
import { Room } from "../models/RoomModel.js";
import YooKassa from "yookassa";
import config from "../config/index.js";
import yookassa from "yookassa";
const yookassa_key = config.YOOKASSA_KEY;
const shopId = "872846";
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
  console.log(id);

  const { data } = req.body;
  console.log(id, data);
  try {
    const room = await Room.updateOne({ _id: id }, data);
    console.log(room);
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
  const { data } = req.body;
  const days = data.nodejsDate.length;
  const yooKassa = new YooKassa({
    shopId: shopId,
    secretKey: yookassa_key,
  });
  try {
    const room = await Room.findOne({ _id: id });
    const value = room.price.new * days;
    const payment = await yooKassa.createPayment({
      amount: {
        value: value,
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: "https://elbrusplaza.ru/",
      },
      description: `Забронирование номера - ${room.type} - ${days} дней`,
    });
    res.json(payment);
  } catch (err) {
    console.log("i am an error" + err);
  }
};
