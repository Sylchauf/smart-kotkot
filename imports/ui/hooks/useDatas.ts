import { useQuery } from "react-query";
import { Meteor } from "meteor/meteor";

interface Datas<Type> {
  list: Type[];
  isLoading: boolean;
  add: (input: Type) => Promise<any>;
  update: (input: Type) => Promise<any>;
  remove: (id: string) => Promise<any>;
}

const useDatas = <Type>(key: string, options = {}): Datas<Type> => {
  const { data, isLoading, refetch } = useQuery<any>(
    `${key}-${JSON.stringify(options)}`,
    async () => {
      return Meteor.promise(`${key}.read`, options);
    }
  );

  const add = async (values: Type) => {
    const res = await Meteor.promise(`${key}.create`, values);
    refetch();
    return res;
  };

  const update = async (values: Type) => {
    const res = await Meteor.promise(`${key}.update`, values._id, values);
    refetch();
    return res;
  };

  const remove = async (_id: string) => {
    const res = await Meteor.promise(`${key}.delete`, { _id });
    refetch();
    return res;
  };

  return {
    list: data ?? [],
    isLoading,
    add,
    update,
    remove,
  };
};

export default useDatas;
