import { Button } from "@mui/material";
import moment from "moment";
import React from "react";
import { FormattedMessage } from "react-intl";
import useLight from "../hooks/useLight";

const IMAGE_SIZE = 56;

const Light: React.FC = () => {
  const { state, nextAutomation, isLoading, on, off } = useLight();

  if (isLoading) return null;

  const isOn = state === "on";

  const stateToDisplay = isOn ? (
    <FormattedMessage id={"Light.IsOn"} defaultMessage={"On"} />
  ) : (
    <FormattedMessage id={"Light.IsOff"} defaultMessage={"Off"} />
  );

  return (
    <div>
      <div>
        <b>
          <FormattedMessage id={"Light.State"} defaultMessage={"State"} /> :{" "}
        </b>
        <span style={{ color: isOn ? "green" : "red" }}>{stateToDisplay}</span>
      </div>

      <div style={{ color: "gray", fontSize: "75%" }}>
        {nextAutomation.action === "light_off" && (
          <FormattedMessage
            id={"Light.NextOffAt"}
            values={{
              // @ts-ignore
              // eslint-disable-next-line react/display-name
              b: (...chunks) => <b>{chunks}</b>,
              time: moment(nextAutomation.nextDate).local().format("HH:mm"),
            }}
            defaultMessage={"Next automatic <b>switch off at {time}</b>"}
          />
        )}
        {nextAutomation.action === "light_on" && (
          <FormattedMessage
            id={"Light.NextOnAt"}
            values={{
              // @ts-ignore
              // eslint-disable-next-line react/display-name
              b: (...chunks) => <b>{chunks}</b>,
              time: moment(nextAutomation.nextDate).local().format("HH:mm"),
            }}
            defaultMessage={"Next automatic <b>switch on at {time}</b>"}
          />
        )}
      </div>

      <br />

      <div style={{ margin: "0 auto", width: IMAGE_SIZE, height: IMAGE_SIZE }}>
        <img src={isOn ? "/light-on.svg" : "/light-off.svg"} alt={state} />
      </div>

      <br />

      <div>
        {!isOn && (
          <Button onClick={on} fullWidth variant={"outlined"} size={"small"}>
            <FormattedMessage id={"Light.On"} defaultMessage={"On"} />
          </Button>
        )}
        {isOn && (
          <Button onClick={off} fullWidth variant={"outlined"} size={"small"}>
            <FormattedMessage id={"Light.Off"} defaultMessage={"Off"} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Light;
