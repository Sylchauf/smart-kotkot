import { Meteor } from "meteor/meteor";
import { useState } from "react";
import { useConfirm } from "material-ui-confirm";
import { useQuery } from "react-query";

const useDoor = () => {
  const [isMoving, setIsMoving] = useState<boolean>(false);

  const confirm = useConfirm();

  const { data, isLoading } = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await Meteor.promise("devices.sendCommand", {
        endPoint: "/api/door/status",
      });

      setIsMoving(result?.status !== "stop");

      return result;
    },
    {
      refetchInterval: isMoving ? 2000 : 30000,
    }
  );

  const callEndPoint = async (endPoint) => {
    await confirm();

    setIsMoving(true);

    return Meteor.promise("devices.sendCommand", {
      endPoint,
    });
  };

  const open = () => callEndPoint("/api/door/up");
  const close = () => callEndPoint("/api/door/down");
  const calibrationUp = () => callEndPoint("/api/door/calibrate/up");
  const calibrationDown = () => callEndPoint("/api/door/calibrate/down");

  return {
    state: data?.state,
    isMoving,
    isLoading,
    nextAutomation: data?.nextAutomation?.[0] || {},
    open,
    close,
    calibrationUp,
    calibrationDown,
  };
};

export default useDoor;
