import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: "/api/door/",
});

const useDoor = () => {
  const result = useQuery<any>(
    "doorStatus",
    async () => {
      const result = await axiosInstance.get("status");

      return result.data;
    },
    {
      refetchInterval: 3000,
    }
  );

  const open = () => axiosInstance.get("up");
  const close = () => axiosInstance.get("down");

  return {
    state: result?.data?.state,
    isMoving: result?.data?.status !== "stop",
    open,
    close,
  };
};

export default useDoor;
