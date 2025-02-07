import moment from "moment";
import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

export type AddArgs = Pick<
  Task,
  "startDate" | "endDate" | "title" | "description" | "status" | "priority"
>;

export type Task = {
  _id: string;
  startDate?: Date;
  endDate?: Date;
  title: string;
  description?: string;
  status: "pending" | "inProgress" | "done";
  priority: number;
};

interface Return {
  list: Task[];
  isLoading: boolean;
  addTasks: (input: AddArgs) => Promise<any>;
  updateTask: (input: Task) => Promise<any>;
  deleteTasks: (id: string) => Promise<any>;
}

const useTasks = (): Return => {
  const { data, isLoading, refetch } = useQuery<any>(
    "tasks",
    async () => {
      return Meteor.promise("tasks.read", {
        date: { $gte: moment().startOf("year").toDate() },
      });
    },
    {
      refetchInterval: 120000,
    }
  );

  const addTasks = async (input: AddArgs) => {
    const res = await Meteor.promise("tasks.create", input);
    refetch();
    return res;
  };

  const deleteTasks = async (_id: string) => {
    const res = await Meteor.promise("tasks.delete", { _id });
    refetch();
    return res;
  };

  const updateTask = async (input: Task) => {
    const res = await Meteor.promise("tasks.update", input._id, input);
    refetch();
    return res;
  };

  return {
    list: data ?? [],
    isLoading,
    addTasks,
    updateTask,
    deleteTasks,
  };
};

export default useTasks;
