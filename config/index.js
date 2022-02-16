import dotenv from "dotenv";
dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
  YOOKASSA_KEY: process.env.YOOKASSA_KEY,
};

export default config;
