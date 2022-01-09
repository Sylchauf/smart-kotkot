import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Carousel } from "react-responsive-carousel";
import useCameraHistory from "../hooks/useCameraHistory";
import useCameraList from "../hooks/useCameraList";
import useMobile from "../hooks/useMobile";
import CameraDisplay from "./CameraDisplay";

const CameraHistory: React.FC = () => {
  const [cameraSelected, setCameraSelected] = useState<string>("0");

  const cameraList = useCameraList();
  const files = useCameraHistory(cameraSelected);
  const { formatMessage } = useIntl();
  const { isMobile, isLandscape } = useMobile();

  const handleChange = (event: any) => {
    setCameraSelected(event.target.value as string);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="camera-list-label">
          <FormattedMessage
            id={"Camera.SelectCamera"}
            defaultMessage={"Choose the camera"}
          />{" "}
          :
        </InputLabel>
        <Select
          labelId="camera-list-label"
          value={cameraSelected}
          onChange={handleChange}
          label={formatMessage({
            id: "Camera.SelectCamera",
            defaultMessage: "Choose the camera",
          })}
        >
          {cameraList
            .filter((camera: any) => !!camera.config.save?.path)
            .map((camera: any) => (
              <MenuItem key={camera.id} value={camera.id}>
                {camera.config.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <div
        style={{
          width: isMobile || isLandscape ? "100%" : "69vw",
          margin: "0 auto",
        }}
      >
        <Carousel showThumbs={false} showIndicators={false} autoPlay={false}>
          {files.map((file: string) => (
            <CameraDisplay
              key={file}
              id={cameraSelected}
              imageId={file}
              lastRequest={Number(file.split(".")[0]) * 1000}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(CameraHistory);
