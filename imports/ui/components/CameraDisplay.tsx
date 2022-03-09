import moment from "moment";
import React from "react";
import {BASE_URL} from "../../constants/api"

interface Props {
  id: string;
  lastRequest: number;
  imageId?: string;
}

const CameraDisplay: React.FC<Props> = ({
  id,
  lastRequest,
  imageId = "last",
}) => {
  const date = moment(lastRequest).local().format("L HH:mm:ss");

  return (
    <div style={{ position: "relative" }}>
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
        src={`${BASE_URL}/api/camera/images/${id}/${imageId}?lastRequest=${lastRequest}`}
        alt={"Camera"}
        loading="lazy"
        style={{ objectFit: "cover", width: "100%", maxHeight: 600 }}
      />
    </div>
  );
};

export default CameraDisplay;
