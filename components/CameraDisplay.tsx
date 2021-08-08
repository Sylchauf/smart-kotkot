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
      <Image
        src={"/api/camera/lastimage/" + id + `?lastRequest=${lastRequest}`}
        width={config.options.width}
        height={config.options.height}
        alt={"Camera"}
        layout="responsive"
      />
    </div>
  );
};

export default CameraDisplay;
