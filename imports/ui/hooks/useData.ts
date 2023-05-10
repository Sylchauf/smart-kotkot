import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

const useData = <Type>(key: string, id?: string) => {
  const { data, isLoading, refetch } = useQuery(
    `inventories-${id}`,
    () => {
      return Meteor.promise(`${key}.read`, { selector: { _id: id } });
    },
    { enabled: !!id }
  );

  return {
    data: (data?.[0] as Type) || null,
    isLoading,
    refetch,
  };
};

export default useData;
