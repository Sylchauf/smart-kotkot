import { useConfirm } from "material-ui-confirm";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Meteor } from "meteor/meteor";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";

const EditDevice = ({ onClose }) => {
  const [config, setConfig] = useState<string>("");
  const [door, setDoor] = useState<string>("");
  const [light, setLight] = useState<string>("");

  const confirm = useConfirm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resultConfig = await Meteor.promise("devices.sendCommand", {
      endPoint: "/api/config/getGeneral",
    });

    const resultDoor = await Meteor.promise("devices.sendCommand", {
      endPoint: "/api/config/getDoor",
    });

    const resultLight = await Meteor.promise("devices.sendCommand", {
      endPoint: "/api/config/getLight",
    });

    setConfig(JSON.stringify(resultConfig, null, 2));
    setDoor(JSON.stringify(resultDoor, null, 2));
    setLight(JSON.stringify(resultLight, null, 2));
  };

  const handleUpdate = async () => {
    await confirm();

    try {
      await Meteor.promise("devices.sendCommand", {
        endPoint: "/api/config/setLight",
        data: { json: JSON.stringify(JSON.parse(light)) },
      });

      await Meteor.promise("devices.sendCommand", {
        endPoint: "/api/config/setDoor",
        data: { json: JSON.stringify(JSON.parse(door)) },
      });

      await Meteor.promise("devices.sendCommand", {
        endPoint: "/api/config/setGeneral",
        data: { json: JSON.stringify(JSON.parse(config)) },
      });

      toast.success(
        <FormattedMessage
          id={"EditDevice.success"}
          defaultMessage={"Good ! Configuration applied …"}
        />
      );

      onClose();
    } catch (error) {
      toast.error(
        <FormattedMessage
          id={"EditDevice.error"}
          defaultMessage={"Oh, no ! Configuration failed …"}
        />
      );
    }
  };

  return (
    <Dialog open fullWidth>
      <DialogTitle>
        <FormattedMessage
          id={"EditDevice.title"}
          defaultMessage={"Edit configuration"}
        />
      </DialogTitle>

      <DialogContent>
        <Alert severity={"warning"}>
          <FormattedMessage
            id={"EditDevice.warningReboot"}
            defaultMessage={
              "Be carefully when your update your configuration manually, you can can break your module. All modifications do a module reboot automatically."
            }
          />
          <br />
          <br />
          <FormattedMessage
            id={"EditDevice.warningReboot2"}
            defaultMessage={"Please read the documentation at : "}
          />
          <a href={"https://www.smartkotkot.net/docs"} target={"_blank"}>
            https://www.smartkotkot.net/docs/
          </a>
        </Alert>
        <br />

        <TextField
          label={"config.json"}
          value={config}
          multiline
          fullWidth
          onChange={({ target: { value } }) => setConfig(value)}
        />

        <br />
        <br />

        <TextField
          label={"doorState.json"}
          value={door}
          multiline
          fullWidth
          onChange={({ target: { value } }) => setDoor(value)}
        />

        <br />
        <br />

        <TextField
          label={"lightState.json"}
          value={light}
          multiline
          fullWidth
          onChange={({ target: { value } }) => setLight(value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          <FormattedMessage id={"EditDevice.close"} defaultMessage={"Close"} />
        </Button>

        <Button onClick={handleUpdate}>
          <FormattedMessage id={"EditDevice.save"} defaultMessage={"Save"} />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDevice;
