import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const camera = global.cameraList[String(req.query.cameraId)];

  const image = fs.readFileSync(
    path.join(camera.config.save.path, String(req.query.name))
  );

  if (image) {
    res.status(200).setHeader("Content-Type", "image/jpeg");

    res.send(image);
  } else res.status(404).send("");
};
