import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

import useConfig from "./useConfig";

const axiosInstance = axios.create({
  baseURL: "/api/eggs/",
});

export interface AddArgs {
  date: Date;
  number: number;
}

export type Eggs = {
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
      const result = await axiosInstance.get("list", {
        params: {
          since: moment().startOf("year").toDate(),
        },
      });

      return result.data;
    },
    {
      refetchInterval: config.refetchIntervalEggs || 120000,
    }
  );

  const addEggs = async ({ date, number }: AddArgs) => {
    const res = await axiosInstance.post("add", { date, number });
    refetch();
    return res;
  };

  const deleteEggs = async (id: number) => {
    const res = await axiosInstance.post("delete", { id });
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
