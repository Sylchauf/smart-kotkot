import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useConfirm } from "material-ui-confirm";

const axiosInstance = axios.create({
  baseURL: "/api/door/",
});

const useDoor = () => {
  const [isMoving, setIsMoving] = useState<boolean>(false);

  const { data, isLoading } = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await axiosInstance.get("status");

      console.log(
        'result?.data?.status !== "stop":',
        result?.data,
        result?.data?.status !== "stop"
      );

      setIsMoving(result?.data?.status !== "stop");

      return result.data;
    },
    {
      refetchInterval: 3000,
      staleTime: 1000,
    }
  );

  const confirm = useConfirm();

  const open = () =>
    confirm().then(() => {
      setIsMoving(true);
      return axiosInstance.get("up");
    });
  const close = () =>
    confirm().then(() => {
      setIsMoving(true);
      return axiosInstance.get("down");
    });
  const calibrationUp = () =>
    confirm().then(() => {
      setIsMoving(true);
      return axiosInstance.get("calibrate/up");
    });
  const calibrationDown = () =>
    confirm().then(() => {
      setIsMoving(true);
      return axiosInstance.get("calibrate/down");
    });

  console.log("isMovingIN:", isMoving);

  return {
    state: data?.state,
    isMoving,
    nextAutomation: data?.nextAutomation?.[0] || {},
    isLoading,
    open,
    close,
    calibrationUp,
    calibrationDown,
  };
};

export default useDoor;
