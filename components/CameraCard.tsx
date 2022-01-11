import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import useCamera from "../hooks/useCamera";
import CameraHistory from "./CameraHistory";
import Cameras from "./Cameras";
import HomeCard from "./HomeCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const CameraCard: React.FC = () => {
  const [openHistory, setOpenHistory] = useState<boolean>(false);
  const [disableTakeButton, setDisableTakeButton] = useState<boolean>(false);

  const { takePictures } = useCamera();

  const handleOpen = () => {
    setOpenHistory(true);
  };

  const handleTakePictures = () => {
    setDisableTakeButton(true);

    takePictures().finally(() => {
      setDisableTakeButton(false);
    });
  };

  const cameraActions = [
    <Tooltip
      key={"picture"}
      title={
        <FormattedMessage
          id={"Camera.TakeNow"}
          defaultMessage={"Take pictures now"}
        />
      }
    >
      <IconButton
        size={"small"}
        onClick={handleTakePictures}
        disabled={disableTakeButton}
      >
        <CameraAltIcon />
      </IconButton>
    </Tooltip>,
    <Tooltip
      key={"chart"}
      title={
        <FormattedMessage
          id={"Camera.AccessHistory"}
          defaultMessage={"View all images"}
        />
      }
    >
      <IconButton size={"small"} onClick={handleOpen}>
        <AccessTimeIcon />
      </IconButton>
    </Tooltip>,
  ];

  return (
    <>
      <Dialog open={openHistory} fullScreen>
        <DialogTitle>
          <FormattedMessage
            id={"Camera.History"}
            defaultMessage={"Camera History"}
          />
        </DialogTitle>
        <DialogContent>
          <br />
          <CameraHistory />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenHistory(false)}>
            <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
          </Button>
        </DialogActions>
      </Dialog>
      <HomeCard
        title={
          <FormattedMessage id={"Home.Cameras"} defaultMessage={"Cameras"} />
        }
        content={<Cameras />}
        actions={cameraActions}
      />
    </>
  );
};

export default CameraCard;
