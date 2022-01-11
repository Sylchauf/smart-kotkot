import React from "react";
import { Carousel } from "react-responsive-carousel";
import useCamera from "../hooks/useCamera";
import CameraDisplay from "./CameraDisplay";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Cameras: React.FC = () => {
  const { list } = useCamera();

  if (!list) return null;

  return (
    <Carousel autoPlay={false} showThumbs={false} infiniteLoop>
      {list.map((oneCamera: any) => (
        <div key={oneCamera.id + oneCamera.config.name}>
          <CameraDisplay
            id={oneCamera.id}
            lastRequest={oneCamera.lastRequest}
          />
          <p className="legend">{oneCamera.config.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Cameras;
