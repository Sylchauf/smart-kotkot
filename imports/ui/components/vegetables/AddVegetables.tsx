import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

import useVegetables from "../../hooks/useVegetables";
import useMobile from "../../hooks/useMobile";

interface Props {
  onClose: () => void;
}

const AddVegetables: React.FC<Props> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [dataLink, setDataLink] = useState<string>("");
  const { isMobile, isLandscape } = useMobile();

  const { addVegetables } = useVegetables();

  const handleAdd = () => {
    addVegetables({ name: { fr: name }, dataLink })
      .then(() => {
        toast.success(
          <FormattedMessage
            id={"AddVegetables.success"}
            defaultMessage={"Successfully added"}
          />
        );
        onClose();
      })
      .catch(() => {
        toast.error(
          <FormattedMessage
            id={"AddVegetables.error"}
            defaultMessage={"Something happend. Try again later"}
          />
        );
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
          id={"AddVegetables.Title"}
          defaultMessage={"Add a new vegetable"}
        />
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <TextField
              label={
                <FormattedMessage
                  id={"AddVegetables.name"}
                  defaultMessage={"Name"}
                />
              }
              value={name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={
                <FormattedMessage
                  id={"AddVegetables.dataLink"}
                  defaultMessage={"Data"}
                />
              }
              value={dataLink}
              onChange={({ target: { value } }) => setDataLink(value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>
          <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
        </Button>
        <Button onClick={() => handleAdd()}>
          <FormattedMessage id={"Actions.Add"} defaultMessage={"Add"} />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddVegetables;
