import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import useDoor from "../hooks/useDoor";
import useMobile from "../hooks/useMobile";
import Door from "./Door";
import HomeCard from "./HomeCard";

const DoorCard: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const {
    state,
    nextAutomation,
    isMoving,
    isLoading,
    open,
    close,
    calibrationUp,
    calibrationDown,
  } = useDoor();

  const { isMobile, isLandscape } = useMobile();

  const doorActions = [
    <IconButton
      size={"small"}
      key={"settings"}
      onClick={() => setOpenDialog(true)}
    >
      <SettingsIcon />
    </IconButton>,
  ];

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        fullScreen={isMobile || isLandscape}
      >
        <DialogTitle>
          <FormattedMessage
            id={"Door.Advanced"}
            defaultMessage={"Advanced actions"}
          />
        </DialogTitle>
        <DialogContent>
          <h4>
            <FormattedMessage
              id={"Door.Calibration"}
              defaultMessage={"Calibration"}
            />
          </h4>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                onClick={calibrationUp}
                disabled={isMoving}
                variant={"outlined"}
                fullWidth
              >
                <FormattedMessage
                  id={"Door.CalibrationUp"}
                  defaultMessage={"Force move to the up"}
                />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={calibrationDown}
                disabled={isMoving}
                variant={"outlined"}
                fullWidth
              >
                <FormattedMessage
                  id={"Door.CalibrationDown"}
                  defaultMessage={"Force move to the down"}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>
            <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
          </Button>
        </DialogActions>
      </Dialog>
      <HomeCard
        title={<FormattedMessage id={"Home.Door"} defaultMessage={"Door"} />}
        content={
          <Door
            {...{ state, nextAutomation, isLoading, isMoving, open, close }}
          />
        }
        actions={doorActions}
      />
    </div>
  );
};

export default DoorCard;
