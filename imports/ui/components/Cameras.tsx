import React from "react";
import { Carousel } from "react-responsive-carousel";
import useCamera from "../hooks/useCamera";
import CameraDisplay from "./CameraDisplay";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Cameras: React.FC = () => {
  const { list } = useCamera();

  if (!list || list.length === 0) return null;

  return (
    <Carousel autoPlay={false} showThumbs={false}>
      {list.map((oneCamera: any, index) => (
        <div key={index}>
          <CameraDisplay camera={oneCamera} />
          <p className="legend">{oneCamera.config.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default React.memo(Cameras);
