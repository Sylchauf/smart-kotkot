import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { FormattedMessage } from "react-intl";
import InputSize from "../tools/InputSize";

const SpaceEditor = ({ selectedShape, onChange, onDelete, onExit }) => {
  return (
    <div>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        color={"primary"}
        onClick={() => onExit()}
      >
        <FormattedMessage id={"SpaceEditor.Back"} defaultMessage={"Back"} />
      </Button>
      <br />
      <br />

      <TextField
        fullWidth
        label={
          <FormattedMessage
            id={"SpaceEditor.Name"}
            defaultMessage={"Name of the space"}
          />
        }
        value={selectedShape?.name || ""}
        onChange={(e) => onChange("name", e.target.value)}
      />

      <br />
      <br />

      <InputSize
        label={
          <FormattedMessage
            id={"SpaceEditor.Length"}
            defaultMessage={"Length"}
          />
        }
        value={selectedShape.width}
        onChange={(e) =>
          onChange("width", Number((Number(e.target.value) * 100).toFixed(0)))
        }
      />

      <br />
      <br />

      <InputSize
        label={
          <FormattedMessage id={"SpaceEditor.Width"} defaultMessage={"Width"} />
        }
        value={selectedShape.height}
        onChange={(e) =>
          onChange("height", Number((Number(e.target.value) * 100).toFixed(0)))
        }
      />

      <br />
      <br />

      <Button
        variant="text"
        startIcon={<DeleteIcon />}
        color={"error"}
        onClick={() => onDelete()}
      >
        <FormattedMessage
          id={"SpaceEditor.Delete"}
          defaultMessage={"Delete this space"}
        />
      </Button>
    </div>
  );
};

export default SpaceEditor;
