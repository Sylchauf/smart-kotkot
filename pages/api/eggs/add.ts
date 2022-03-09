import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../server/database";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  console.log("req.body.date:", req.body.date);

  const stmt = database.prepare("INSERT INTO eggs (date, value) VALUES (?, ?)");
  const info = stmt.run(req.body.date, req.body.number);

  res.status(200).json(info);
};
