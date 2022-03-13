import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Meteor } from "meteor/meteor";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { toast } from "react-toastify";

import DevicesList from "./components/DevicesList";
import HomeCard from "./components/HomeCard";

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
    <Button onClick={handleAddDevice}>
      <AddIcon />{" "}
      <FormattedMessage
        id={"Header.AddDevice"}
        defaultMessage={"Add a device"}
      />{" "}
    </Button>,
  ];

  return (
    <div>
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
    </div>
  );
};

export default Settings;
