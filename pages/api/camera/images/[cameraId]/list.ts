import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const camera = global.cameraList[String(req.query.cameraId)];

  const files = fs.readdirSync(camera.config.save.path);

  if (files) res.status(200).json(files);
  else res.status(404).send("");
};
