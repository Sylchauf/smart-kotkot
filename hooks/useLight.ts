import axios from "axios";
import { useQuery } from "react-query";
import { useConfirm } from "material-ui-confirm";

const axiosInstance = axios.create({
  baseURL: "/api/light/",
});

const useLight = () => {
  const { data, isLoading, refetch } = useQuery<any>(
    "lightStatus",
    async () => {
      const result = await axiosInstance.get("status");

      return result.data;
    },
    {
      refetchInterval: 3000,
    }
  );

  const confirm = useConfirm();

  const on = () =>
    confirm().then(async () => {
      const res = await axiosInstance.get("on");
      refetch();
      return res;
    });
  const off = () =>
    confirm().then(async () => {
      const res = await axiosInstance.get("off");
      refetch();
      return res;
    });

  return {
    state: data?.state,
    nextAutomation: data?.nextAutomation?.[0] || {},
    isLoading,
    on,
    off,
  };
};

export default useLight;
