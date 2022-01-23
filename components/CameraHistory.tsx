import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import useCameraHistory from "../hooks/useCameraHistory";
import useCamera from "../hooks/useCamera";
import useMobile from "../hooks/useMobile";
import CameraDisplay from "./CameraDisplay";

const CameraHistory: React.FC = () => {
  const [cameraSelected, setCameraSelected] = useState<string>("0");
  const [imageSelected, setImageSelected] = useState<string>("");

  const { list } = useCamera();
  const files = useCameraHistory(cameraSelected);
  const { formatMessage } = useIntl();
  const { isMobile, isLandscape } = useMobile();

  useEffect(() => {
    if (!imageSelected) setImageSelected(files[files.length - 1]);
  }, [files]);

  const handleChange = (event: any) => {
    setCameraSelected(event.target.value as string);
  };

  const handleSelectImage = (event: any) => {
    setImageSelected(event.target.value as string);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
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
              {list
                .filter((camera: any) => !!camera.config.save?.path)
                .map((camera: any) => (
                  <MenuItem key={camera.id} value={camera.id}>
                    {camera.config.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="image-list-label">
              <FormattedMessage
                id={"Camera.SelectImage"}
                defaultMessage={"Select the image"}
              />{" "}
              :
            </InputLabel>
            <Select
              labelId="image-list-label"
              value={imageSelected}
              onChange={handleSelectImage}
              label={formatMessage({
                id: "Camera.SelectImage",
                defaultMessage: "Choose the image",
              })}
            >
              {files.map((file: any) => {
                const date = moment(Number(file.split(".")[0]) * 1000)
                  .local()
                  .format("L HH:mm:ss");

                return (
                  <MenuItem key={file} value={file}>
                    {date}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              width: isMobile || isLandscape ? "100%" : "69vw",
              margin: "0 auto",
            }}
          >
            {imageSelected && (
              <CameraDisplay
                id={cameraSelected}
                imageId={imageSelected}
                lastRequest={Number(imageSelected.split(".")[0]) * 1000}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(CameraHistory);
