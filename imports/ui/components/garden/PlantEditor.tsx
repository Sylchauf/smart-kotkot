import { DatePicker } from "@mui/x-date-pickers";
import { useConfirm } from "material-ui-confirm";
import moment from "moment";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useParams } from "react-router-dom";
import { Random } from "meteor/random";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";

import EVENT_TYPE, {
  EVENT_TYPE_TRANSLATED,
} from "../../../constants/eventType";
import usePlot from "../../hooks/usePlot";
import HomeCard from "../HomeCard";

const PlantEditor = ({ selectedPlant, onChange, onDelete, onExit }) => {
  const [editEventId, setEditEventId] = useState(null);

  const { id } = useParams();
  const plot = usePlot(id);
  const { locale } = useIntl();
  const confirm = useConfirm();

  const shapeSelected = plot?.data?.shapes.find(
    (s) => s.id === selectedPlant.shapeId
  );

  const maxWidth = (shapeSelected.width - selectedPlant.x) / 100;
  const maxHeight = (shapeSelected.height - selectedPlant.y) / 100;

  const handleAddEvent = () => {
    const newEvents = selectedPlant.events || [];

    newEvents.push({
      _id: Random.id(),
      type: EVENT_TYPE.COMMENT,
      date: new Date(),
    });

    onChange(selectedPlant._id, "events", newEvents);
  };

  const handleChangeEvent = (eventId, key, value) => {
    const newEvents = selectedPlant.events || [];
    const index = newEvents.findIndex((e) => e._id === eventId);
    newEvents[index][key] = value;

    onChange(selectedPlant._id, "events", newEvents);
  };

  const handleDeleteEvent = async (eventId) => {
    await confirm();

    const newEvents = selectedPlant.events || [];

    onChange(
      selectedPlant._id,
      "events",
      newEvents.filter((e) => e._id !== eventId)
    );
  };

  const actions = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tooltip title={"Ajouter un évènement"}>
        <IconButton color={"primary"} onClick={() => handleAddEvent()}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={"Supprimer ce plant"}>
        <IconButton color={"error"} onClick={() => onDelete()}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  );

  return (
    <HomeCard
      hideCard
      title={
        <div>
          <Tooltip title={"Retour à la liste"}>
            <IconButton color={"primary"} onClick={() => onExit()}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>{" "}
          {selectedPlant.vegetable.name[locale]}
        </div>
      }
      actions={actions}
    >
      <Select
        label={"Espace de culture"}
        value={selectedPlant.shapeId}
        fullWidth
      >
        {plot?.data?.shapes.map((s) => (
          <MenuItem value={s.id}>{s.name}</MenuItem>
        ))}
      </Select>

      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={"Longeur (en mètre)"}
            type={"number"}
            size={"small"}
            inputProps={{
              min: 0.01,
              step: 0.01,
              max: maxWidth,
            }}
            value={(selectedPlant?.width / 100).toFixed(2)}
            onChange={(e) =>
              onChange(
                selectedPlant._id,
                "width",
                Number((Number(e.target.value) * 100).toFixed(0))
              )
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={"Largeur (en mètre)"}
            type={"number"}
            size={"small"}
            inputProps={{
              min: 0.01,
              step: 0.01,
              max: maxHeight,
            }}
            value={(selectedPlant?.height / 100).toFixed(2)}
            onChange={(e) =>
              onChange(
                selectedPlant._id,
                "height",
                Number((Number(e.target.value) * 100).toFixed(0))
              )
            }
          />
        </Grid>
      </Grid>

      <br />
      <Divider />

      {selectedPlant.events.map((event) => {
        return (
          <Card
            elevation={5}
            style={{
              borderRadius: 4,
              padding: 8,
              marginTop: 16,
              cursor: editEventId === event._id ? "initial" : "pointer",
            }}
            onClick={() => setEditEventId(event._id)}
          >
            <div
              style={{
                pointerEvents: editEventId === event._id ? "auto" : "none",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <DatePicker
                    label={"Date"}
                    value={event.date}
                    inputFormat="DD/MM/YYYY"
                    onChange={(value) =>
                      handleChangeEvent(
                        event._id,
                        "date",
                        moment(value).toISOString()
                      )
                    }
                    renderInput={(params) => (
                      <TextField size={"small"} fullWidth {...params} />
                    )}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Select
                    label={"Type d'évènement"}
                    value={event.type}
                    fullWidth
                    size={"small"}
                    onChange={({ target: { value } }) =>
                      handleChangeEvent(event._id, "type", value)
                    }
                  >
                    {Object.values(EVENT_TYPE).map((e) => (
                      <MenuItem key={e} value={e}>
                        {EVENT_TYPE_TRANSLATED[e][locale]}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <br />

              <TextField
                label={"Description"}
                fullWidth
                value={event.comment}
                multiline
                onChange={({ target: { value } }) =>
                  handleChangeEvent(event._id, "comment", value)
                }
              />

              <br />
              <br />

              {editEventId === event._id && (
                <div style={{ float: "right" }}>
                  <Button
                    color={"error"}
                    variant={"text"}
                    size={"small"}
                    onClick={() => handleDeleteEvent(event._id)}
                  >
                    Supprimer
                  </Button>
                </div>
              )}
            </div>
          </Card>
        );
      })}
    </HomeCard>
  );
};

export default PlantEditor;
