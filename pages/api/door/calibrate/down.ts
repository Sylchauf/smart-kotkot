import { correctBottom } from "../../../../engine/door";

export default (req, res) => {
  const result = correctBottom();

  res.status(result.status).json(result);
};
