import React from "react";

import CameraImageDisplay from "./CameraImageDisplay";
import CameraStreamDisplay from "./CameraStreamDisplay";

interface Props {
  camera: any;
}

const CameraDisplay: React.FC<Props> = ({ camera }) => {
  return camera.capabilities.canLiveStream ? (
    <CameraStreamDisplay camera={camera} />
  ) : (
    <CameraImageDisplay id={camera.id} imageId={"last"} />
  );
};

export default React.memo(CameraDisplay);
