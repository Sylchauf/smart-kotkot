import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

const useDevices = () => {
  const { data, isLoading, refetch } = useQuery(
    "devices",
    () => Meteor.promise("devices.read"),
    { refetchInterval: 5000 }
  );

  return {
    data: data || [],
    isLoading,
    refetch,
  };
};

export default useDevices;
