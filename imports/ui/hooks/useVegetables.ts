import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

export type Vegetables = {
  _id: string;
  name: String;
};

interface Return {
  list: Vegetables[];
  isLoading: boolean;
  addVegetables: (input: any) => Promise<any>;
  deleteVegetables: (id: number) => Promise<any>;
}

const useVegetables = (): Return => {
  const { data, isLoading, refetch } = useQuery<any>(
    "vegetables",
    async () => {
      return Meteor.promise("vegetables.read");
    }
  );

  const addVegetables = async ({ name }: Vegetables) => {
    const res = await Meteor.promise("vegetables.create", {
      name,
    });
    refetch();
    return res;
  };

  const deleteVegetables = async (_id: string) => {
    const res = await Meteor.promise("vegetables.delete", { _id });
    refetch();
    return res;
  };

  return {
    list: data ?? [],
    isLoading,
    addVegetables,
    deleteVegetables,
  };
};

export default useVegetables;
