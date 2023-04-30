import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";

import VideoPlayer from "./VideoPlayer";

interface Props {
  camera: any;
  lastRequest: number;
}

const CameraStreamDisplay: React.FC<Props> = ({ camera }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    Meteor.promise("stream.start", camera.id, (err, res) => {
      setUrl(res);
    });
  }, []);

  const handleSelectPreset = (index) => {
    Meteor.promise("devices.sendCommand", {
      endPoint: `/api/camera/move/${camera.id}/${index}`,
    });
  };

  if (!url) return null;
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 48, zIndex: 999 }}>
          {camera.config.options.presets.map((preset) => (
            <Button
              size={"small"}
              variant={"outlined"}
              style={{ marginLeft: 4 }}
              onClick={() => handleSelectPreset(preset.index)}
            >
              {preset.name}
            </Button>
          ))}
        </div>
        <VideoPlayer url={url} />
      </div>
    </div>
  );
};

export default React.memo(CameraStreamDisplay);
