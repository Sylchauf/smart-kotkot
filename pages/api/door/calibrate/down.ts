import { NextApiRequest, NextApiResponse } from "next";
import { correctBottom } from "../../../../engine/door";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = correctBottom();

  res.status(result.status).json(result);
};
