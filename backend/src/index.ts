import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello form express endpoint" });
});

app.listen(7000, () => {
  console.log("server listening on http://localhost:7000");
});
