import { User } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const generateToken = async (id) => {
  return jwt.sign({ id }, "dsadsadsad", { expiresIn: "30D" });
};

export const login = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "пожалуйста, заполните все поля" });
  }
  try {
    try {
      let user = await User.findOne({ email });
      if (password !== user.password) {
        return res.status(400).json({ msg: "Пароль недействителен" });
        //console.log("Dsds");
      }
      generateToken(user._id).then((token) => {
        user.token = token;
        user.save((err, response) => {
          if (err) res.json(err);
          res.json({ token, userToken: user.token });
        });
      });
    } catch (err) {
      res.status(400).json({ msg: "Пользователь не найден" });
    }
  } catch (err) {
    console.log(err);
  }
};
