import useData from "./useData";
import useDatas from "./useDatas";

export type ItemCategory = {
  _id: string;
  name: String;
};

const useItemCategories = () => useDatas<ItemCategory>("itemCategories");
const useItemCategory = (id?: string) =>
  useData<ItemCategory>("itemCategories", id);

const gettersItemCategories = {
  getItems: useItemCategories,
  getItem: useItemCategory,
};

export default gettersItemCategories;
