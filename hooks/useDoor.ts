import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useConfirm } from "material-ui-confirm";
import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: "/api/door/",
});

const useDoor = () => {
  const [isMoving, setIsMoving] = useState<boolean>(false);

  const { config } = useConfig();

  const { data, isLoading } = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await axiosInstance.get("status");

      setIsMoving(result?.data?.status !== "stop");

      return result.data;
    },
    {
      refetchInterval: config.refetchIntervalDoor || 3000,
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
