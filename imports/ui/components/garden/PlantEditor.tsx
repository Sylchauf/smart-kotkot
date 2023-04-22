import { DatePicker } from "@mui/x-date-pickers";
import { useConfirm } from "material-ui-confirm";
import moment from "moment";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
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
import InputSize from "../tools/InputSize";

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
      <Tooltip
        title={
          <FormattedMessage
            id={"PlantEditor.AddEvent"}
            defaultMessage={"Add an event"}
          />
        }
      >
        <IconButton color={"primary"} onClick={() => handleAddEvent()}>
          <AddIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={
          <FormattedMessage
            id={"PlantEditor.Delete"}
            defaultMessage={"Delete this plant"}
          />
        }
      >
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
          <Tooltip
            title={
              <FormattedMessage
                id={"PlantEditor.Back"}
                defaultMessage={"Back"}
              />
            }
          >
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
        label={
          <FormattedMessage id={"PlantEditor.Space"} defaultMessage={"Space"} />
        }
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
          <InputSize
            label={
              <FormattedMessage
                id={"PlantEditor.Width"}
                defaultMessage={"Width"}
              />
            }
            value={selectedPlant.width}
            max={maxWidth}
            onChange={(e) =>
              onChange(selectedPlant._id, "width", Number(e.target.value) * 100)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <InputSize
            label={
              <FormattedMessage
                id={"PlantEditor.Height"}
                defaultMessage={"Length"}
              />
            }
            value={selectedPlant.height}
            max={maxHeight}
            onChange={(e) =>
              onChange(
                selectedPlant._id,
                "height",
                Number(e.target.value) * 100
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
                    value={moment(event.date)}
                    format="DD/MM/YYYY"
                    onChange={(value) =>
                      handleChangeEvent(
                        event._id,
                        "date",
                        moment(value).toISOString()
                      )
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <Select
                    label={
                      <FormattedMessage
                        id={"PlantEditor.TypeEvent"}
                        defaultMessage={"Type of event"}
                      />
                    }
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
                    <FormattedMessage
                      id={"PlantEditor.DeleteEvent"}
                      defaultMessage={"Delete"}
                    />
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
