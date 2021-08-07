import { moveDoor } from "../../../engine/door";
import DOOR_DIRECTION from "../../../constants/DOOR_DIRECTION";

export default (req, res) => {
  const result = moveDoor(DOOR_DIRECTION.DOWN);

  res.status(result.status).json(result);
};
