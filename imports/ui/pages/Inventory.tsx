import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import List from "../components/forms/List";
import { bridge as ItemsSchema } from "../../db/items/schema";
import useItemCategories from "../hooks/useItemCategories";
import gettersItems from "../hooks/useItems";

const Inventory: React.FC = () => {
  const { id } = useParams();

  const { list } = useItemCategories.getItems();

  const getItems = () =>
    gettersItems.getItems({ selector: { inventoryId: id } });

  return (
    <List
      title={"Test"}
      schema={ItemsSchema}
      getters={{ getItems, getItem: gettersItems.getItem }}
      forceValue={{ inventoryId: id }}
      hideColumns={["inventoryId"]}
      renderColumns={{
        expireAt: (rowData) => moment(rowData).format("L"),
        comment: (rowdata) => rowdata.comment || "",
        itemCategoryId: (rowData) =>
          list.find((i) => i._id === rowData.itemCategoryId)?.name || "",
      }}
    />
  );
};

export default Inventory;
