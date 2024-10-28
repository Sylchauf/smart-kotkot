import { Button, CircularProgress } from "@mui/material";
import moment from "moment";
import React from "react";
import { FormattedMessage } from "react-intl";

const IMAGE_SIZE = 56;

interface Props {
  state: any;
  nextAutomation: any;
  isLoading: boolean;
  isMoving: boolean;
  open: () => void;
  close: () => void;
}

const Door: React.FC<Props> = ({
  state,
  nextAutomation,
  isLoading,
  isMoving,
  open,
  close,
}) => {
  if (isLoading) return null;

  const isOpen = state === "top";
  const isClosed = state === "bottom";

  let stateToDisplay;
  let color;

  if (isMoving) {
    stateToDisplay = (
      <FormattedMessage id={"Door.Moving"} defaultMessage={"Moving…"} />
    );
    color = "blue";
  } else if (isOpen) {
    stateToDisplay = (
      <FormattedMessage id={"Door.IsOpen"} defaultMessage={"Opened"} />
    );
    color = "green";
  } else if (isClosed) {
    stateToDisplay = (
      <FormattedMessage id={"Door.IsClose"} defaultMessage={"Closed"} />
    );
    color = "red";
  } else {
    stateToDisplay = (
      <FormattedMessage id={"Door.Unknown"} defaultMessage={"Unknown state"} />
    );
    color = "gray";
  }

  return (
    <div>
      <div>
        <b>
          <FormattedMessage id={"Door.State"} defaultMessage={"State"} /> :{" "}
        </b>
        <span style={{ color }}>{stateToDisplay}</span>
      </div>

      <div style={{ color: "gray", fontSize: "75%" }}>
        {nextAutomation.action === "close" && (
          <FormattedMessage
            id={"Door.NextCloseAt"}
            values={{
              // @ts-ignore
              // eslint-disable-next-line react/display-name
              b: (...chunks) => <b>{chunks}</b>,
              time: moment(nextAutomation.nextDate).local().format("HH:mm"),
            }}
            defaultMessage={"Next automatic <b>closing at {time}</b>"}
          />
        )}
        {nextAutomation.action === "open" && (
          <FormattedMessage
            id={"Door.NextOpenAt"}
            values={{
              // @ts-ignore
              // eslint-disable-next-line react/display-name
              b: (...chunks) => <b>{chunks}</b>,
              time: moment(nextAutomation.nextDate).local().format("HH:mm"),
            }}
            defaultMessage={"Next automatic <b>opening at {time}</b>"}
          />
        )}
      </div>

      <br />

      <div style={{ margin: "0 auto", width: IMAGE_SIZE, height: IMAGE_SIZE }}>
        {isMoving ? (
          <CircularProgress />
        ) : (
          <img src={isOpen ? "/open-lock.svg" : "lock.svg"} alt={state} />
        )}
      </div>

      <br />

      {!isMoving && state !== undefined && (
        <div>
          {!isOpen && (
            <Button
              onClick={open}
              fullWidth
              variant={"outlined"}
              size={"small"}
            >
              <FormattedMessage id={"Door.Open"} defaultMessage={"Open"} />
            </Button>
          )}
          {isOpen && (
            <Button
              onClick={close}
              fullWidth
              variant={"outlined"}
              size={"small"}
            >
              <FormattedMessage id={"Actions.Close"} defaultMessage={"Close"} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Door;
