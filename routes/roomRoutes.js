import express from "express";
import {
  getRooms,
  editRoom,
  addRooms,
  findRoom,
  makePayment,
} from "../controllers/roomController.js";
const router = express.Router();

router.get("/", getRooms);
router.get("/add", addRooms);
router.put("/edit/:id", editRoom);
router.get("/get/:id", findRoom);
router.post("/pay/:id", makePayment);

export default router;
