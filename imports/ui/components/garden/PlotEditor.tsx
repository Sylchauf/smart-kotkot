import React from "react";

import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  CircularProgress,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FormattedMessage } from "react-intl";
import InputSize from "../tools/InputSize";

const PlotEditor = ({ plot, onAdd, shapes, onSelect, onChange }) => {
  const theme = useTheme();

  if (!plot) return <CircularProgress />;

  return (
    <div>
      <TextField
        fullWidth
        label={
          <FormattedMessage
            id={"PlotEditor.Name"}
            defaultMessage={"Name of the plot"}
          />
        }
        value={plot?.name || ""}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <br />

      <InputSize
        label={
          <FormattedMessage
            id={"PlotEditor.Width"}
            defaultMessage={"Length of the plot"}
          />
        }
        value={plot.width}
        onChange={(e) => {
          onChange("width", Number(e.target.value) * 100);
        }}
      />

      <br />
      <br />

      <InputSize
        label={
          <FormattedMessage
            id={"PlotEditor.Height"}
            defaultMessage={"Width of the plot"}
          />
        }
        value={plot.height}
        onChange={(e) => {
          onChange("height", Number(e.target.value) * 100);
        }}
      />

      <br />
      <br />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          <FormattedMessage
            id={"PlotEditor.ListSpace"}
            defaultMessage={"List of space"}
          />{" "}
          :
        </div>
        <Button
          size={"small"}
          startIcon={<AddIcon />}
          variant={"outlined"}
          onClick={() => onAdd()}
        >
          <FormattedMessage
            id={"PlotEditor.AddSpace"}
            defaultMessage={"Add a space"}
          />
        </Button>
      </div>
      <div>
        {shapes.length === 0 && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <FormattedMessage
              id={"PlotEditor.NoSpace"}
              defaultMessage={"No space found"}
            />
          </div>
        )}
        {shapes.map((s) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 8,
              borderRadius: 4,
              padding: 4,
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <div>
              {s.name}{" "}
              <span
                style={{
                  color: "gray",
                  fontStyle: "italic",
                  fontSize: "smaller",
                }}
              >
                ({((s.width * s.height) / 10000).toFixed(2)} m2)
              </span>
            </div>
            <IconButton onClick={() => onSelect(s.id)}>
              <EditIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlotEditor;
