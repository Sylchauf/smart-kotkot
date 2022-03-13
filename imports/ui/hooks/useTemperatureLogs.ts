import moment from "moment";
import { useIntl } from "react-intl";
import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

const useTemperatureLogs = () => {
  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery<any>(
    "temperatureLogs",
    async () => {
      return Meteor.promise("devices.sendCommand", {
        endPoint: "/api/temperature/logs",
      });
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
