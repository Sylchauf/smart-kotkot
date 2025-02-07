import { IconButton } from "@mui/material";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import useMobile from "../hooks/useMobile";
import usePlots from "../hooks/usePlots";

import Logo from "./Logo";
import { useInventories } from "../hooks/useInventories";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  const plots = usePlots();
  const inventories = useInventories();

  const logo = <Logo onClick={() => navigate("/")} />;
  const menu = (
    <IconButton onClick={() => navigate("/settings")}>
      <MenuIcon />
    </IconButton>
  );

  const plotsMenu = plots.data.map((plot) => (
    <Link
      key={plot._id}
      style={{ marginRight: 32 }}
      href={`/garden/${plot._id}`}
      underline={"hover"}
    >
      {plot.name}
    </Link>
  ));

  const inventoriesMenu = inventories.list.map((inventory) => (
    <Link
      key={inventory._id}
      style={{ marginRight: 32 }}
      href={`/inventory/${inventory._id}`}
      underline={"hover"}
    >
      {inventory.name}
    </Link>
  ));

  const itemsMenu = (
    <>
      <Link style={{ marginRight: 32 }} href={`/`} underline={"hover"}>
        <FormattedMessage id={"Header.Home"} defaultMessage={"Home"} />
      </Link>
      <Link style={{ marginRight: 32 }} href={`/calendar`} underline={"hover"}>
        <FormattedMessage id={"Header.Calendar"} defaultMessage={"Calendar"} />
      </Link>
      {plotsMenu}
      {inventoriesMenu}
    </>
  );

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
          <div style={{ display: "flex", marginLeft: 32 }}>{itemsMenu}</div>
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
      <div style={{ marginTop: 8 }}>{itemsMenu}</div>
    </div>
  );
};

export default Header;
