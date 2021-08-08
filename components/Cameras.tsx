import React from "react";
import { Carousel } from "react-responsive-carousel";
import useCameraList from "../hooks/useCameraList";
import CameraDisplay from "./CameraDisplay";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Cameras: React.FC = () => {
  const cameraList = useCameraList();

  if (!cameraList) return null;

  return (
    <Carousel autoPlay showThumbs={false}>
      {cameraList.map((oneCamera) => (
        <div key={oneCamera.id + oneCamera.config.name}>
          <CameraDisplay
            id={oneCamera.id}
            config={oneCamera.config}
            lastRequest={oneCamera.lastRequest}
          />
          <p className="legend">{oneCamera.config.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Cameras;
