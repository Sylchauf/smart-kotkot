import { NextApiRequest, NextApiResponse } from "next";
import database from "../../../server/database";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }

  const stmt = database.prepare("SELECT * FROM eggs WHERE date >= date(?)");
  const result = stmt.all(req.query.since);

  res.status(200).json(result);
};
