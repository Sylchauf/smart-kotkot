import { NextApiRequest, NextApiResponse } from "next";
import { correctTop } from "../../../../engine/door";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = correctTop();

  res.status(result.status).json(result);
};
