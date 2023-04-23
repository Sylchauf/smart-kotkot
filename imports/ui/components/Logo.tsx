import { useTheme } from "@mui/material";
import React from "react";
import COLORS from "../../constants/colors";

const egg = (
  <div
    style={{
      fontSize: 24,
      display: "inline-block",
      position: "relative",
      top: 6,
      left: -3,
      width: 25,
      overflow: "hidden",
    }}
  >
    🥚
  </div>
);

const Logo = ({ onClick }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: 300,
        cursor: !!onClick ? "pointer" : "initial",
      }}
      onClick={onClick}
    >
      <img src={"/logo.svg"} alt={"NAME"} style={{ maxWidth: 64 }} />
      <div style={{ fontSize: 36, fontWeight: 600 }}>
        <span style={{ color: COLORS.primary }}>S</span>
        <span style={{ color: theme.palette.text.primary }}>mart</span>
        {"  "}
        <span style={{ color: COLORS.primary }}>
          K{egg}tK{egg}t
        </span>
      </div>
    </div>
  );
};

export default Logo;
