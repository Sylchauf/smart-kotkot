import { Button, IconButton } from "@mui/material";
import React from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormattedMessage, useIntl } from "react-intl";

import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

import DeviceDisplayer from "./DeviceDisplayer";
import Logo from "./Logo";

const Header: React.FC = () => {
  const navigate = useNavigate();

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
      <Logo onClick={() => navigate("/")} />

      <div style={{ display: "flex", alignItems: "center" }}>
        <DeviceDisplayer />

        <IconButton onClick={() => navigate("/settings")}>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
