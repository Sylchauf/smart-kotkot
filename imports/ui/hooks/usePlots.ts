import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

const usePlots = () => {
  const { data, isLoading, refetch } = useQuery("plots", () =>
    Meteor.promise("plots.read")
  );

  return {
    data: data || [],
    isLoading,
    refetch,
  };
};

export default usePlots;
