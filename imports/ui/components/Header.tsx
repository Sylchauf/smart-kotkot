import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import useMobile from "../hooks/useMobile";

import DeviceDisplayer from "./DeviceDisplayer";
import Logo from "./Logo";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();

  const logo = <Logo onClick={() => navigate("/")} />;
  const menu = (
    <IconButton onClick={() => navigate("/settings")}>
      <MenuIcon />
    </IconButton>
  );
  const devices = <DeviceDisplayer />;

  if (!isMobile)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid lightgray`,
          paddingBottom: 4,
          marginBottom: 16,
        }}
      >
        {logo}

        <div style={{ display: "flex", alignItems: "center" }}>
          {devices}
          {menu}
        </div>
      </div>
    );

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {logo}
        {menu}
      </div>

      {devices}
    </div>
  );
};

export default Header;
