import { getJpg } from "../../../../server/camera";

export default (req, res) => {
  const image = getJpg(String(req.query.id));

  if (image) res.status(200).send(image);
  else res.status(404).send();
};
