import { formatMessage } from "@formatjs/intl";
import axios from "axios";
import moment from "moment";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";

const axiosInstance = axios.create({
  baseURL: "/api/temperature/",
});

const useTemperatureLogs = () => {
  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery<any>(
    "temperatureLogs",
    async () => {
      const result = await axiosInstance.get("logs");

      return result.data;
    },
    {
      enabled: false,
    }
  );

  const { formatMessage } = useIntl();

  const seriesTemp: any = [];
  const seriesHum: any = [];

  data.forEach((line: any) => {
    const timestamp = Number(moment.utc(line.date).local().format("X")) * 1000;
    seriesTemp.push([timestamp, line.temp]);
    seriesHum.push([timestamp, line.hum]);
  });

  return {
    series: [
      {
        name: formatMessage({
          id: "Temperature.Temperature",
          defaultMessage: "Temperature",
        }),
        data: seriesTemp,
      },
      {
        name: formatMessage({
          id: "Temperature.Humidity",
          defaultMessage: "Humidity",
        }),
        data: seriesHum,
      },
    ],
    isLoading,
    refetch,
  };
};

export default useTemperatureLogs;
