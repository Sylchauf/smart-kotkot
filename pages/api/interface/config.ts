import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "../../../lib/getConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const config = getConfig();

  res.status(200).json({
    locale: config.locale,
  });
};
