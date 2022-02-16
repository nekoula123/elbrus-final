import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import roomRoutes from "./routes/roomRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import path from "path";
import config from "./config/index.js";
const __dirname = path.resolve();
const app = express();
const db = config.MONGO_URI;

app.use(express.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("the database is ready to use ..."))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/rooms", roomRoutes);
app.use("/user", authRoutes);
app.use("/mail", mailRoutes);
app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`every thing is okk ...${port} ${process.env.NODE_ENV}`);
});
