import moment from "moment";
import React from "react";
import { FormattedMessage } from "react-intl";
import useTemperature from "../hooks/useTemperature";

const Temperature: React.FC = () => {
  const { date, actualTemp, actualHum } = useTemperature();
  const isInLimit = actualTemp >= 5 && actualTemp <= 36;

  const dateFormatted = moment(date).local().format("L - HH[h]mm");

  return (
    <div>
      <div>
        <FormattedMessage
          id={"Temperature.ActualTemp"}
          defaultMessage={"Current temperature"}
        />{" "}
        :{" "}
        <span style={{ color: isInLimit ? "green" : "red", fontSize: "140%" }}>
          {actualTemp}°
        </span>
      </div>
      <div>
        <FormattedMessage
          id={"Temperature.ActualHum"}
          defaultMessage={"Current humidity"}
        />{" "}
        :{" "}
        <span style={{ color: isInLimit ? "green" : "red" }}>{actualHum}%</span>
      </div>

      <br />

      <div style={{ color: "gray", fontSize: "75%" }}>
        <FormattedMessage
          id={"Temperature.LastRead"}
          defaultMessage={"Last reading at {date}"}
          values={{ date: dateFormatted }}
        />
      </div>
    </div>
  );
};

export default Temperature;
