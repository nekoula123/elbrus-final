import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  first_image: { type: String },
  second_image: { type: String },
  type: { type: String },
  size: { type: String },
  guests: { type: String },
  price: {
    old: { type: String },
    new: { type: String },
  },
  holiday: {
    old: { type: String },
    new: { type: String },
  },
  newYear: { type: String },
  discription: { type: String },
});

export const Room = mongoose.model("Room", RoomSchema);
