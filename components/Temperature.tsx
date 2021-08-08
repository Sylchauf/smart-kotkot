import React from "react";
import { FormattedMessage } from "react-intl";

const Temperature: React.FC = () => {
  const isInLimit = true;

  return (
    <div>
      <div>
        <b>
          <FormattedMessage
            id={"Temperature.Actual"}
            defaultMessage={"Actually"}
          />{" "}
          :{" "}
          <span
            style={{ color: isInLimit ? "green" : "red", fontSize: "140%" }}
          >
            20.5°
          </span>
        </b>
      </div>
      <div>
          • <FormattedMessage
          id={"Temperature.12ago"}
          defaultMessage={"12h hours ago"}
        />{" "}
        : <span style={{ color: isInLimit ? "green" : "red" }}>18°</span>
      </div>
    </div>
  );
};

export default Temperature;
