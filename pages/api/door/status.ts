import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import { doorState, status } from "../../../engine/door";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const allCronJobs = global.cronJobs;

  const nextAutomation = allCronJobs
    .map((oneCron: any) => {
      return {
        action: oneCron.action,
        nextDate: oneCron.nextDates().toDate(),
      };
    })
      .filter((i: any) => ["open", "close"].includes(i.action))
    .sort((a: any, b: any) => {
      if (moment(a.nextDate).isBefore(moment(b.nextDate))) return -1;
      if (moment(a.nextDate).isAfter(moment(b.nextDate))) return 1;
      return 0;
    });

  res.status(200).json({ ...doorState, ...status, nextAutomation });
};
