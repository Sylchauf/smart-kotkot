import moment, { Moment } from "moment";
import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

export interface AddArgs {
  date: Moment | Date;
  number: number;
}

export type Eggs = {
  _id: number;
  date: Date;
  value: number;
};

interface Return {
  list: Eggs[];
  isLoading: boolean;
  addEggs: (input: AddArgs) => Promise<any>;
  deleteEggs: (id: string) => Promise<any>;
}

const useEggs = (): Return => {
  const { data, isLoading, refetch } = useQuery<any>(
    "eggs",
    async () => {
      return Meteor.promise("eggs.read", {
        date: { $gte: moment().startOf("year").toDate() },
      });
    },
    {
      refetchInterval: 120000,
    }
  );

  const addEggs = async ({ date, number }: AddArgs) => {
    const res = await Meteor.promise("eggs.create", {
      date: moment(date).toDate(),
      value: number,
    });
    refetch();
    return res;
  };

  const deleteEggs = async (_id: string) => {
    const res = await Meteor.promise("eggs.delete", { _id });
    refetch();
    return res;
  };

  return {
    list: data ?? [],
    isLoading,
    addEggs,
    deleteEggs,
  };
};

export default useEggs;
