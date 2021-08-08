import { NextApiRequest, NextApiResponse } from "next";
import { getJpg } from "../../../../server/camera";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const image = getJpg(String(req.query.id));

  if (image) {
    res.status(200).setHeader("Content-Type", "image/jpeg");

    res.send(image);
  } else res.status(404).send("");
};
