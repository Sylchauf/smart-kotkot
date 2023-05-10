import { Meteor } from "meteor/meteor";
import { useState } from "react";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import DevicesList from "./components/DevicesList";
import HomeCard from "./components/HomeCard";
import PlotsList from "./components/PlotsList";
import Profile from "./components/Profile";
import AddVegetables from "./components/vegetables/AddVegetables";
import ListVegetables from "./components/vegetables/ListVegetables";
import { bridge as InventorySchema } from "../db/Inventories/schema";
import { bridge as ItemCategoriesSchema } from "../db/ItemCategories/schema";
import List from "./components/forms/List";
import gettersInventories from "./hooks/useInventories";
import gettersItemCategories from "./hooks/useItemCategories";

const Settings = () => {
  const [openAddVegetables, setOpenAddVegetables] = useState<boolean>(false);

  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  const handleAddDevice = async () => {
    const moduleId = prompt(
      formatMessage({
        id: "Header.TypeModuleId",
        defaultMessage: "Type the module ID",
      })
    );

    if (moduleId) {
      try {
        await Meteor.promise("devices.associate", moduleId);

        toast.success(
          <FormattedMessage
            id={"Header.successAddModule"}
            defaultMessage={"The module is now linked"}
          />
        );
      } catch (error) {
        toast.error(
          <FormattedMessage
            id={"Header.errorAddModule"}
            defaultMessage={"The module can not be linked"}
          />
        );
      }
    }
  };

  const handleAddPlot = async () => {
    const plotName = prompt(
      formatMessage({
        id: "Header.TypePlotName",
        defaultMessage: "Type the plot name",
      })
    );

    if (plotName) {
      try {
        const result = await Meteor.promise("plots.create", {
          name: plotName,
          width: 1000,
          height: 1000,
          shapes: [],
        });

        navigate(`/garden/${result}/editor`);
      } catch (error) {
        console.error(error);
        toast.error(
          <FormattedMessage
            id={"Header.errorAddPlot"}
            defaultMessage={"The plot can not be created"}
          />
        );
      }
    }
  };

  const devicesActions = [
    <Button key={"add-device"} onClick={handleAddDevice}>
      <AddIcon />{" "}
      <FormattedMessage
        id={"Header.AddDevice"}
        defaultMessage={"Add a device"}
      />
    </Button>,
  ];

  const plotsActions = [
    <Button key={"add-plot"} onClick={handleAddPlot}>
      <AddIcon />{" "}
      <FormattedMessage id={"Header.AddPlot"} defaultMessage={"Add a plot"} />
    </Button>,
  ];

  const vegetablesActions = [
    <Button key={"add-vegetable"} onClick={() => setOpenAddVegetables(true)}>
      <AddIcon />{" "}
      <FormattedMessage id={"Header.Form"} defaultMessage={"Add a vegetable"} />
    </Button>,
  ];

  return (
    <Grid container spacing={2}>
      {openAddVegetables && (
        <AddVegetables onClose={() => setOpenAddVegetables(false)} />
      )}
      <Grid item xs={12}>
        <HomeCard
          title={
            <FormattedMessage
              id={"Settings.Profile"}
              defaultMessage={"Your profile"}
            />
          }
          content={<Profile />}
        />
      </Grid>
      <Grid item xs={12}>
        <HomeCard
          title={
            <FormattedMessage id={"Settings.Plots"} defaultMessage={"Plots"} />
          }
          content={<PlotsList />}
          actions={plotsActions}
        />
      </Grid>
      <Grid item xs={12}>
        <HomeCard
          title={
            <FormattedMessage
              id={"Settings.Devices"}
              defaultMessage={"Devices"}
            />
          }
          content={<DevicesList />}
          actions={devicesActions}
        />
      </Grid>
      <Grid item xs={12}>
        <HomeCard
          title={
            <FormattedMessage
              id={"Settings.Vegetables"}
              defaultMessage={"Vegetables"}
            />
          }
          content={<ListVegetables />}
          actions={vegetablesActions}
        />
      </Grid>
      <Grid item xs={12}>
        <List
          title={"Inventory"}
          schema={InventorySchema}
          getters={gettersInventories}
        />
      </Grid>
      <Grid item xs={12}>
        <List
          title={"Item categories"}
          schema={ItemCategoriesSchema}
          getters={gettersItemCategories}
        />
      </Grid>
      Version v{require("../../package.json").version}
    </Grid>
  );
};

export default Settings;
