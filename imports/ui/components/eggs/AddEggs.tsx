import moment from "moment";
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

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { AddArgs } from "../../hooks/useEggs";
import useMobile from "../../hooks/useMobile";

interface Props {
  onClose: () => void;
  onAdd: (input: AddArgs) => Promise<any>;
}

const AddEggs: React.FC<Props> = ({ onClose, onAdd }) => {
  const [date, setDate] = useState<moment.Moment>(moment());
  const [number, setNumber] = useState<number>(1);

  const { isMobile, isLandscape } = useMobile();

  const handleAdd = () => {
    onAdd({ date, number })
      .then(() => {
        toast.success(
          <FormattedMessage
            id={"Form.success"}
            defaultMessage={"Successfully added"}
          />
        );
        onClose();
      })
      .catch(() => {
        toast.error(
          <FormattedMessage
            id={"Form.error"}
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
          id={"Form.Title"}
          defaultMessage={"Add eggs"}
        />
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <DateTimePicker
              label={
                <FormattedMessage
                  id={"Form.date"}
                  defaultMessage={"Pick-up date"}
                />
              }
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={
                <FormattedMessage
                  id={"Form.Number"}
                  defaultMessage={"Number of eggs"}
                />
              }
              type={"number"}
              value={number}
              onChange={({ target: { value } }) => setNumber(Number(value))}
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

export default AddEggs;
