import { useConfirm } from "material-ui-confirm";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import MaterialTable, { Column } from "@material-table/core";
import { toast } from "react-toastify";

import DeleteIcon from "@mui/icons-material/Delete";

import useVegetables, { Vegetables } from "../../hooks/useVegetables";

interface Props {
  onDelete: (id: number) => any;
}

const ListVegetables: React.FC<Props> = ({ onDelete }) => {
  const { list } = useVegetables();

  const confirm = useConfirm();
  const { locale } = useIntl();

  const columns: Array<Column<Vegetables>> = [
    {
      title: (
        <FormattedMessage id={"ListVegetables.Name"} defaultMessage={"Name"} />
      ),
      field: "name",
      defaultSort: "desc",
      render: (rawData) => rawData.name[locale] || rawData.name["en"],
    },
  ];

  const handleDelete = (rowData: Vegetables) => {
    confirm().then(() => {
      toast.success(
        <FormattedMessage
          id={"ListVegetables.successDelete"}
          defaultMessage={"Successfully deleted"}
        />
      );
      onDelete(rowData._id);
    });
  };

  return (
    <MaterialTable
      columns={columns}
      data={list}
      actions={[
        {
          icon: DeleteIcon,
          onClick: (event, rawData) => handleDelete(rawData as Vegetables),
        },
      ]}
      options={{
        search: false,
        toolbar: false,
        actionsColumnIndex: -1,
      }}
    />
  );
};

export default ListVegetables;
