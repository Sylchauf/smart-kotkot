import { NextApiRequest, NextApiResponse } from "next";
import { takePhoto } from "../../../../../server/camera";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await takePhoto(String(req.query.cameraId), true);

  if (result) res.status(200).send("OK");
  else res.status(500).send("");
};
