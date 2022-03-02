import axios from "axios";
import { useQuery } from "react-query";
import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: "/api/temperature/",
});

const useTemperature = () => {
  const { config } = useConfig();

  const { data, isLoading } = useQuery<any>(
    "temperatureStatus",
    async () => {
      const result = await axiosInstance.get("status");

      return result.data;
    },
    {
      refetchInterval: config.refetchIntervalTemperature || 300000,
    }
  );

  return {
    actualTemp: data?.actualTemp,
    actualHum: data?.actualHum,
    date: data?.date,
    isLoading,
  };
};

export default useTemperature;
