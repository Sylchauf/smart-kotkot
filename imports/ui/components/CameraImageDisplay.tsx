import React from "react";
import { Meteor } from "meteor/meteor";
import { useQuery } from "react-query";

interface Props {
  id: string;
  imageId?: string;
}

const CameraImageDisplay: React.FC<Props> = ({ id, imageId = "last" }) => {
  const { data: image } = useQuery(
    ["image", id, imageId],
    () =>
      Meteor.promise("devices.sendCommand", {
        endPoint: `/api/camera/images/${id}/${imageId}`,
      }),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div style={{ position: "relative" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image && (
        <img
          src={`data:image/jpg;base64,${image}`}
          alt={"Camera"}
          loading="lazy"
          style={{
            objectFit: "contain",
            width: "100%",
            height: 463,
            background: "black",
          }}
        />
      )}
    </div>
  );
};

export default React.memo(CameraImageDisplay);
