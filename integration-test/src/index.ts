import express from "express";
import { prismaClient } from "./db";
export const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/sum", async (req: any, res: any) => {
  const a = req.body.a;
  const b = req.body.b;

  if (a > 1000000 || b > 1000000) {
    return res.status(422).json({
      message: "Sorry we don't support big numbers",
    });
  }

  const sum = a + b;

  const request = await prismaClient.request.create({
    data: {
      a,
      b,
      answer: sum,
      type: "ADD",
    },
  });

  res.json({ answer: sum, id: request.id });
});
