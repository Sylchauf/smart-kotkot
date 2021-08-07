import { correctTop } from "../../../../engine/door";

export default (req, res) => {
  const result = correctTop();

  res.status(result.status).json(result);
};
