import Image from "next/image";
import React from "react";
import COLORS from "../constants/colors";
import logo from "../public/logo.svg";

const egg = (
  <div
    style={{
      fontSize: 24,
      display: "inline-block",
      position: "relative",
      top: 1,
      left: -3,
      width: 25,
      overflow: "hidden",
    }}
  >
    🥚
  </div>
);

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={logo} alt={"NAME"} />
      <div style={{ fontSize: 36, fontWeight: 600 }}>
        <span style={{ color: COLORS.primary }}>S</span>mart{"  "}
        <span style={{ color: COLORS.primary }}>
          K{egg}tK{egg}t
        </span>
      </div>
    </div>
  );
};

export default Logo;
