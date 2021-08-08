import React from "react";

const NAME = "Smart KotKot";

const Header: React.FC = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={"/logo.svg"} alt={"NAME"} style={{ width: "100px" }} />
      <div style={{ fontSize: 36, fontWeight: 600 }}>{NAME}</div>
    </div>
  );
};

export default Header;
