import { doorState, status } from "../../../engine/door";

export default (req, res) => {
  res.status(200).json({ ...doorState, ...status });
};
