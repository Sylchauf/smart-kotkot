import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

const usePlots = (id) => {
  const { data, isLoading, refetch } = useQuery(`plots-${id}`, () =>
    Meteor.promise("plots.read", { selector: id })
  );

  return {
    data: data?.[0] || null,
    isLoading,
    refetch,
  };
};

export default usePlots;
