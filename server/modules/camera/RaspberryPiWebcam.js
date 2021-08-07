const CameraAbstract = require("./CameraAbstract");

const cameraConfig = {
  raspistill: {
    rotation: 180,
    noFileSave: true,
    encoding: "jpg",
    width: 1296,
    height: 972,
    quality: 50,
  },
};

class RaspberryPiWebcam extends CameraAbstract {
  cam;

  constructor() {
    super();

    const Raspistill = require("node-raspistill").Raspistill;
    this.cam = new Raspistill(cameraConfig.raspistill);
  }

  async takePicture() {
    return this.cam.takePhoto();
  }
}

module.exports = RaspberryPiWebcam;
