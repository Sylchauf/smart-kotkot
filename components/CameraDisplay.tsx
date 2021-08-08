import moment from "moment";
import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  config: any;
  lastRequest: string;
}

const CameraDisplay: React.FC<Props> = ({ id, lastRequest, config }) => {
  const date = moment(lastRequest).local().format("YYYY-MM-DD HH:mm:ss");

  return (
    <div>
      <div
        style={{
          background: "white",
          position: "absolute",
          color: "black",
          zIndex: 999,
          padding: 8,
          borderBottomRightRadius: 8,
        }}
      >
        {date}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"/api/camera/lastimage/" + id + `?lastRequest=${lastRequest}`}
        alt={"Camera"}
      />
    </div>
  );
};

export default CameraDisplay;
