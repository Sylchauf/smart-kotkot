import axios from "axios";
import { useQuery } from "react-query";
import {BASE_URL} from "../../constants/api"
const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api/interface/",
});

const useConfig = () => {
  const { data, isLoading } = useQuery<any>(
    "config",
    async () => {
      const result = await axiosInstance.get("config");

      return result.data;
    },
    {
      staleTime: 0,
    }
  );

  return {
    config: {
      ...data,
    },
    isLoading,
  };
};

export default useConfig;
