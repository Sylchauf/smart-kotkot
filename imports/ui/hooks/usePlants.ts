import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

export type Plant = {
  _id: string;
  vegetableId: String;
  comment?: String;
};

interface Return {
  list: Plant[];
  isLoading: boolean;
  addPlant: (input: any) => Promise<any>;
  deletePlant: (id: string) => Promise<any>;
}

const usePlants = (): Return => {
  const { data, isLoading, refetch } = useQuery<any>("plants", async () => {
    return Meteor.promise("plants.read");
  });

  const addPlant = async ({ vegetableId, comment }: Plant) => {
    const res = await Meteor.promise("plants.create", {
      vegetableId,
      comment,
    });
    refetch();
    return res;
  };

  const deletePlant = async (_id: string) => {
    const res = await Meteor.promise("plants.delete", { _id });
    refetch();
    return res;
  };

  return {
    list: data ?? [],
    isLoading,
    addPlant,
    deletePlant,
  };
};

export default usePlants;
