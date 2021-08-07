import {NextApiRequest, NextApiResponse} from "next"
import { doorState, status } from "../../../engine/door";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ ...doorState, ...status });
};
