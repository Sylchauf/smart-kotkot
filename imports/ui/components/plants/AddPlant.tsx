import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import usePlot from "../../hooks/usePlot";

import useVegetables from "../../hooks/useVegetables";
import useMobile from "../../hooks/useMobile";
import usePlants from "../../hooks/usePlants";

interface Props {
  onClose: () => void;
}

const AddPlant: React.FC<Props> = ({ onClose }) => {
  const [vegetableId, setVegetableId] = useState<string>("");
  const [shapeId, setShapeId] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const { isMobile, isLandscape } = useMobile();
  const { id } = useParams();
  const plot = usePlot(id);
  const { list } = useVegetables();
  const { addPlant } = usePlants();
  const { locale } = useIntl();

  const handleAdd = () => {
    addPlant({ shapeId, vegetableId, comment })
      .then(() => {
        toast.success(
          <FormattedMessage
            id={"AddPlant.success"}
            defaultMessage={"Successfully added"}
          />
        );
        onClose();
      })
      .catch(() => {
        toast.error(
          <FormattedMessage
            id={"AddPlant.error"}
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
          id={"AddPlant.Title"}
          defaultMessage={"Add a new plant"}
        />
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} style={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <Select
              label={"Espace de culture"}
              value={shapeId || plot?.data?.shapes[0]._id}
              fullWidth
              onChange={({ target: { value } }) => setShapeId(value as string)}
            >
              {plot?.data?.shapes.map((s) => (
                <MenuItem value={s.id}>{s.name}</MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Select
              label={
                <FormattedMessage
                  id={"AddPlant.vegetable"}
                  defaultMessage={"Vegetable"}
                />
              }
              fullWidth
              value={vegetableId}
              onChange={({ target: { value } }) =>
                setVegetableId(value as string)
              }
            >
              {list.map((veg) => (
                <MenuItem key={veg._id} value={veg._id}>
                  {veg.name[locale]}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={
                <FormattedMessage
                  id={"AddPlant.comment"}
                  defaultMessage={"Comment"}
                />
              }
              fullWidth
              value={comment}
              onChange={({ target: { value } }) => setComment(value)}
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

export default AddPlant;
