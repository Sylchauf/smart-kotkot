import React from "react";

import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton, TextField, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const PlotEditor = ({ plot, onAdd, shapes, onSelect, onChange }) => {
  const theme = useTheme();

  return (
    <div>
      <TextField
        fullWidth
        label={"Nom de la parcelle"}
        value={plot?.name || ""}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <br />
      <br />

      <TextField
        fullWidth
        label={"Longeur de la parcelle (en mètre)"}
        value={(plot?.width / 100).toFixed(2)}
        onChange={(e) => onChange("width", Number(e.target.value) * 100)}
      />
      <br />
      <br />

      <TextField
        fullWidth
        label={"Largeur de la parcelle (en mètre)"}
        value={(plot?.height / 100).toFixed(2)}
        onChange={(e) => onChange("height", Number(e.target.value) * 100)}
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
          Listes des espaces:
        </div>
        <Button
          size={"small"}
          startIcon={<AddIcon />}
          variant={"outlined"}
          onClick={() => onAdd()}
        >
          Ajouter un espace
        </Button>
      </div>
      <div>
        {shapes.length === 0 && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            Aucun espace défini
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
