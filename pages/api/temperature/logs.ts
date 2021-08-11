import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = fs.readFileSync("./state/temperature.log").toString();

  const lines = data.split("\n").map((line) => {
    const [date, temp, hum] = line.split(" ");

    return { date, temp, hum };
  });

  res.status(200).json(lines);
};
