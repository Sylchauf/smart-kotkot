import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useConfirm } from "material-ui-confirm";
import {BASE_URL} from "../../constants/api"
import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api/door/",
});

const useDoor = () => {
  const [isMoving, setIsMoving] = useState<boolean>(false);

  const { config } = useConfig();

  const refetchInterval = config.refetchIntervalDoor || 30000;

  const { data, isLoading, refetch } = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await axiosInstance.get("status");

      setIsMoving(result?.data?.status !== "stop");

      return result.data;
    },
    {
      refetchInterval: isMoving ? 2000 : refetchInterval,
    }
  );

  const confirm = useConfirm();

  const open = () =>
    confirm().then(async () => {
      setIsMoving(true);
      return axiosInstance.get("up");
    });
  const close = () =>
    confirm().then(async () => {
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
