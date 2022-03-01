import axios from "axios";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: "/api/temperature/",
});

const useTemperature = () => {
  const { data, isLoading } = useQuery<any>(
    "temperatureStatus",
    async () => {
      const result = await axiosInstance.get("status");

      return result.data;
    },
    {
      refetchInterval: 60000,
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
