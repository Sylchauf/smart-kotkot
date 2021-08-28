import { Button, CircularProgress } from "@material-ui/core";
import moment from "moment";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import OpenLock from "../public/open-lock.svg";
import Lock from "../public/lock.svg";

const IMAGE_SIZE = 56;

const Door = ({ state, nextAutomation, isLoading, isMoving, open, close }) => {
  if (isLoading) return null;

  const isOpen = state === "top";

  const stateToDisplay = isMoving ? (
    <FormattedMessage id={"Door.Moving"} defaultMessage={"Moving…"} />
  ) : isOpen ? (
    <FormattedMessage id={"Door.IsOpen"} defaultMessage={"Opened"} />
  ) : (
    <FormattedMessage id={"Door.IsClose"} defaultMessage={"Closed"} />
  );

  return (
    <div>
      <div>
        <b>
          <FormattedMessage id={"Door.State"} defaultMessage={"State"} /> :{" "}
        </b>
        <span style={{ color: isOpen ? "green" : isMoving ? "blue" : "red" }}>
          {stateToDisplay}
        </span>
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
          <Image
            src={isOpen ? OpenLock : Lock}
            alt={state}
            layout={"responsive"}
          />
        )}
      </div>

      <br />

      {!isMoving && (
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
              <FormattedMessage id={"Door.Close"} defaultMessage={"Close"} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Door;
