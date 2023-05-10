import useData from "./useData";
import useDatas from "./useDatas";

export type Inventory = {
  _id: string;
  name: String;
};

export const useInventories = () => useDatas<Inventory>("inventories");
export const useInventory = (id?: string) => useData<Inventory>("inventories", id);

const gettersInventories = {
  getItems: useInventories,
  getItem: useInventory,
};

export default gettersInventories;
