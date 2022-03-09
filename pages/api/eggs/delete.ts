import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../server/database";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const stmt = database.prepare("DELETE FROM eggs WHERE id = ?");
  const info = stmt.run(req.body.id);

  res.status(200).json(info);
};
