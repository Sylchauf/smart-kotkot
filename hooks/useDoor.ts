import axios from "axios";
import { useQuery } from "react-query";
import { useConfirm } from "material-ui-confirm";

const axiosInstance = axios.create({
  baseURL: "/api/door/",
});

const useDoor = () => {
  const { data, isLoading } = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await axiosInstance.get("status");

      return result.data;
    },
    {
      refetchInterval: 3000,
    }
  );

  const confirm = useConfirm();

  const open = () => confirm().then(() => axiosInstance.get("up"));
  const close = () => confirm().then(() => axiosInstance.get("down"));

  return {
    state: data?.state,
    isMoving: data?.status !== "stop",
    nextAutomation: data?.nextAutomation?.[0] || {},
    isLoading,
    open,
    close,
  };
};

export default useDoor;
