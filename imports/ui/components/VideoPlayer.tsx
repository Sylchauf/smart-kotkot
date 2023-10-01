import React from "react";

export const VideoPlayer = ({ url }) => {
  return (
    <iframe
      src={url}
      style={{
        objectFit: "contain",
        width: "100%",
        height: 463,
        background: "black",
      }}
    />
  );
};

export default VideoPlayer;
