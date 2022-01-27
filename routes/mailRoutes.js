import express from "express";
const router = express.Router();
import { formAPI } from "../controllers/mailContoller.js";

router.post("/", formAPI);

export default router;
