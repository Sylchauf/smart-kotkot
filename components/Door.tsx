import { Button, CircularProgress } from "@material-ui/core";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import useDoor from "../hooks/useDoor";
import OpenLock from "../public/open-lock.svg";
import Lock from "../public/lock.svg";

const Door = () => {
  const { state, isMoving, open, close } = useDoor();

  console.log("state:", state);

  const isOpen = state === "top";

  const stateToDisplay = isMoving ? (
    <FormattedMessage
      id={"Door.Moving"}
      defaultMessage={"The door is moving…"}
    />
  ) : isOpen ? (
    <FormattedMessage id={"Door.IsOpen"} defaultMessage={"Opened"} />
  ) : (
    <FormattedMessage id={"Door.IsClose"} defaultMessage={"Closed"} />
  );

  return (
    <div>
      <div>
        <FormattedMessage id={"Door.State"} defaultMessage={"State"} /> :{" "}
        {stateToDisplay}
      </div>

      <div>
        {isMoving ? (
          <CircularProgress />
        ) : (
          <Image src={isOpen ? OpenLock : Lock} />
        )}
      </div>

      {!isMoving && (
        <div>
          {!isOpen && (
            <Button onClick={open}>
              <FormattedMessage id={"Door.Open"} defaultMessage={"Open"} />
            </Button>
          )}
          {isOpen && (
            <Button onClick={close}>
              <FormattedMessage id={"Door.Close"} defaultMessage={"Close"} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Door;
