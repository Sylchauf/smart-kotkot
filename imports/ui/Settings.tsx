import AddIcon from "@mui/icons-material/Add";
import { Meteor } from "meteor/meteor";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { toast } from "react-toastify";

import { Button, Grid } from "@mui/material";

import DevicesList from "./components/DevicesList";
import HomeCard from "./components/HomeCard";
import Profile from "./components/Profile";

const Settings = () => {
  const { formatMessage } = useIntl();

  const handleAddDevice = async () => {
    const moduleId = prompt(
      formatMessage({
        id: "Header.TypeModuleId",
        defaultMessage: "Type the module ID",
      })
    );

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
  };

  const devicesActions = [
    <Button key={'add-device'} onClick={handleAddDevice}>
      <AddIcon />{" "}
      <FormattedMessage
        id={"Header.AddDevice"}
        defaultMessage={"Add a device"}
      />{" "}
    </Button>,
  ];

  return (
    <Grid container spacing={2}>
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
            <FormattedMessage
              id={"Settings.Devices"}
              defaultMessage={"Devices"}
            />
          }
          content={<DevicesList />}
          actions={devicesActions}
        />
      </Grid>
    </Grid>
  );
};

export default Settings;
