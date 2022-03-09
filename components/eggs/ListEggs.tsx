import { useConfirm } from "material-ui-confirm";
import React from "react";
import { FormattedMessage } from "react-intl";
import MaterialTable, { Column } from "@material-table/core";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

import { Eggs } from "../../hooks/useEggs";
import useMobile from "../../hooks/useMobile";

interface Props {
  list: Eggs[];
  onClose: () => void;
  onDelete: (id: number) => any;
}

const columns: Array<Column<Eggs>> = [
  {
    title: <FormattedMessage id={"ListEggs.Date"} defaultMessage={"Date"} />,
    field: "date",
    type: "datetime",
    defaultSort: "desc",
  },
  {
    title: (
      <FormattedMessage
        id={"ListEggs.number"}
        defaultMessage={"Number of eggs"}
      />
    ),
    field: "value",
  },
];

const ListEggs: React.FC<Props> = ({ list, onClose, onDelete }) => {
  const { isMobile, isLandscape } = useMobile();

  const confirm = useConfirm();

  const handleDelete = (rowData: Eggs) => {
    confirm().then(() => {
      toast.success(
        <FormattedMessage
          id={"ListEggs.successDelete"}
          defaultMessage={"Successfully deleted"}
        />
      );
      onDelete(rowData.id);
    });
  };

  return (
    <Dialog
      open={true}
      onClose={() => onClose()}
      fullWidth
      fullScreen={isMobile || isLandscape}
    >
      <DialogTitle>
        <FormattedMessage
          id={"ListEggs.Title"}
          defaultMessage={"Picked up eggs"}
        />
      </DialogTitle>

      <DialogContent>
        <MaterialTable
          columns={columns}
          data={list}
          actions={[
            {
              icon: DeleteIcon,
              onClick: (event, rawData) => handleDelete(rawData as Eggs),
            },
          ]}
          options={{
            search: false,
            toolbar: false,
            actionsColumnIndex: -1,
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={() => onClose()}>
          <FormattedMessage id={"ListEggs.close"} defaultMessage={"Close"} />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListEggs;
