import React from "react";

import { Chip, Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";

import useDevices from "../hooks/useDevices";

const DeviceDisplayer: React.FC = () => {
  const { data } = useDevices();

  return (
    <div>
      {data.map((device) => {
        const color = device.isOnline ? "success" : "error";
        const title = device.isOnline ? (
          <FormattedMessage
            id={"DeviceDisplayer.online"}
            defaultMessage={"{deviceId} is online"}
            values={{ deviceId: device._id }}
          />
        ) : (
          <FormattedMessage
            id={"DeviceDisplayer.offline"}
            defaultMessage={"{deviceId} is offline"}
            values={{ deviceId: device._id }}
          />
        );

        return (
          <Tooltip title={title} key={device._id}>
            <Chip
              style={{ marginRight: 8 }}
              size={"small"}
              color={color}
              label={device.name || device._id}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};

export default DeviceDisplayer;
