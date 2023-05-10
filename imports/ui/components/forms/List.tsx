import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { useConfirm } from "material-ui-confirm";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import MaterialTable from "@material-table/core";
import { toast } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";
import HomeCard from "../HomeCard";
import Form from "./Form";

interface Props {
  title: string;
  onDelete?: (id: number) => any;
  getters: {
    getItems: () => any;
    getItem: () => any;
  };
  schema: SimpleSchema2Bridge;
  forceValue?: Record<string, any>;
  hideColumns?: string[];
  renderColumns?: Record<
    string,
    (rowData: Record<string, any>) => string
  >;
}

const List: React.FC<Props> = ({
  title,
  schema,
  getters: { getItems, getItem },
  forceValue,
  hideColumns = [],
  renderColumns = {},
}) => {
  const { list, remove } = getItems();

  const [editId, setEditId] = useState<string | null>(null);

  const confirm = useConfirm();

  const columns = schema.schema
    .objectKeys()
    .filter((i) => !hideColumns.includes(i))
    .map((key) => {
      return {
        title: key,
        field: key,
        render: (rowData) =>
          renderColumns?.[key]
            ? renderColumns[key](rowData)
            : String(rowData?.[key]),
      };
    });

  const handleDelete = (rowData) => {
    confirm().then(() => {
      toast.success(
        <FormattedMessage
          id={"ListInventory.successDelete"}
          defaultMessage={"Successfully deleted"}
        />
      );

      remove(rowData._id);
    });
  };

  const handleEdit = (values) => setEditId(values._id);

  const actions = [
    <Button key={"add"} onClick={() => setEditId("-1")}>
      <AddIcon />{" "}
      <FormattedMessage
        id={"Header.Form"}
        defaultMessage={`Add an {type}`}
        values={{
          type: title.toLowerCase(),
        }}
      />
    </Button>,
  ];

  const content = (
    <>
      {editId && (
        <Form
          id={editId}
          schema={schema}
          title={title}
          onClose={() => setEditId(null)}
          getItems={getItems}
          getItem={getItem}
          forceValue={forceValue}
        />
      )}
      <MaterialTable
        columns={columns}
        data={list}
        actions={[
          {
            icon: EditIcon,
            onClick: (event, rawData) => handleEdit(rawData),
          },
          {
            icon: DeleteIcon,
            onClick: (event, rawData) => handleDelete(rawData),
          },
        ]}
        options={{
          search: false,
          toolbar: false,
          actionsColumnIndex: -1,
        }}
      />
    </>
  );

  return <HomeCard title={title} content={content} actions={actions} />;
};

export default List;
