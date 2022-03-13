import moment from "moment";
import React from "react";
import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

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
  const { data: image } = useQuery(["image", lastRequest], () =>
    Meteor.promise("devices.sendCommand", {
      endPoint: `/api/camera/images/${id}/${imageId}`,
    })
  );

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
      {image && (
        <img
          src={`data:image/jpg;base64,${image}`}
          alt={"Camera"}
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", maxHeight: 600 }}
        />
      )}
    </div>
  );
};

export default React.memo(CameraDisplay);
