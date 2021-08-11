import axios from "axios";
import { useQuery } from "react-query";
const axiosInstance = axios.create({
  baseURL: "/api/interface/",
});

const useConfig = () => {
  const { data, isLoading } = useQuery<any>("config", async () => {
    const result = await axiosInstance.get("config");

    return result.data;
  });

  return {
    config: {
      ...data,
    },
    isLoading,
  };
};

export default useConfig;
