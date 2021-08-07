import { NextApiRequest, NextApiResponse } from "next";
import { moveDoor } from "../../../engine/door";
import DOOR_DIRECTION from "../../../constants/DOOR_DIRECTION";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const result = moveDoor(DOOR_DIRECTION.UP);

  res.status(result.status).json(result);
};
