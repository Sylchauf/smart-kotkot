import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

import { BASE_URL } from "../../constants/api";
import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: BASE_URL + "/api/eggs/",
});

export interface AddArgs {
  date: Date;
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
  deleteEggs: (id: number) => Promise<any>;
}

const useEggs = (): Return => {
  const { config } = useConfig();

  const { data, isLoading, refetch } = useQuery<any>(
    "eggs",
    async () => {
      return Meteor.promise("eggs.read", {
        date: { $gte: moment().startOf("year").toDate() },
      });
    },
    {
      refetchInterval: config.refetchIntervalEggs || 120000,
    }
  );

  const addEggs = async ({ date, number }: AddArgs) => {
    const res = await Meteor.promise("eggs.create", { date, value: number });
    refetch();
    return res;
  };

  const deleteEggs = async (_id: string) => {
    console.log("_id:", _id);
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
