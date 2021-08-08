import { NextApiRequest, NextApiResponse } from "next";
import LIGHT_STATE from "../../../constants/LIGHT_STATE";
import { switchLight } from "../../../engine/light";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = switchLight(LIGHT_STATE.ON);

  res.status(result.status).json(result);
};
