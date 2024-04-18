import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(4000, () => {
  console.log("server running");
});
