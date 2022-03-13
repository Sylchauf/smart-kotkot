import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

const useTemperature = () => {
  const { data, isLoading } = useQuery<any>(
    "temperatureStatus",
    async () => {
      return Meteor.promise("devices.sendCommand", {
        endPoint: "/api/temperature/status",
      });
    },
    {
      refetchInterval: 300000,
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
