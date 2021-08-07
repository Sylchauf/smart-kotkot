const RaspberryPiWebcam = require("./RaspberryPiWebcam");
const UsbWebcam = require("./UsbWebcam");

const getCameraInstance = (camera) => {
  switch (camera.module) {
    case "RaspberryPiWebcam":
      return new RaspberryPiWebcam(camera);
    case "UsbWebcam":
      return new UsbWebcam(camera);
  }
};

exports.getCameraInstance = getCameraInstance;
