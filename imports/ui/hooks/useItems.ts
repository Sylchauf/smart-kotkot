import useData from "./useData";
import useDatas from "./useDatas";

export type Item = {
  _id: string;
  name: String;
  comment?: String;
  inventoryId: String;
  itemCategoryId: String;
};

const useItems = (options) => useDatas<Item>("items", options);
const useItem = (id?: string) => useData<Item>("items", id);

const gettersItems = {
  getItems: useItems,
  getItem: useItem,
};

export default gettersItems;
