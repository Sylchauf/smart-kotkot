import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import useMobile from "../hooks/useMobile";
import CameraHistory from "./CameraHistory";
import Cameras from "./Cameras";
import HomeCard from "./HomeCard";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const CameraCard: React.FC = () => {
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const { isMobile, isLandscape } = useMobile();

  const handleOpen = () => {
    setOpenHistory(true);
  };

  const cameraActions = [
    <IconButton size={"small"} key={"chart"} onClick={handleOpen}>
      <AccessTimeIcon />
    </IconButton>,
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
