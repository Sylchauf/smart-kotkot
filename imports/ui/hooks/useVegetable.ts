import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";
import { Vegetables } from "./useVegetables";

const useVegetable = (id?: string) => {
  const { data, isLoading, refetch } = useQuery(`vegetables-${id}`, () => {
    if (id) return Meteor.promise("vegetables.read", { selector: id });

    return [];
  });

  return {
    data: (data?.[0] as Vegetables) || null,
    isLoading,
    refetch,
  };
};

export default useVegetable;
