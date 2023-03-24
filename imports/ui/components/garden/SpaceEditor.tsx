import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const SpaceEditor = ({ selectedShape, onChange, onDelete, onExit }) => {
  return (
    <div>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        color={"primary"}
        onClick={() => onExit()}
      >
        Retour
      </Button>
      <br />
      <br />

      <TextField
        fullWidth
        label={"Nom de l'espace"}
        value={selectedShape?.name || ''}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={"Longeur (en mètre)"}
        value={(selectedShape?.width / 100).toFixed(2)}
        onChange={(e) =>
          onChange("width", Number((Number(e.target.value) * 100).toFixed(0)))
        }
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={"Largeur (en mètre)"}
        value={(selectedShape?.height / 100).toFixed(2)}
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
        Supprimer cet espace
      </Button>
    </div>
  );
};

export default SpaceEditor;
