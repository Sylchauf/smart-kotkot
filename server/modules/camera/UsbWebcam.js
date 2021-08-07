const CameraAbstract = require("./CameraAbstract");
const { exec } = require("child_process");
const fs = require("fs");

class UsbWebcam extends CameraAbstract {
  cameraConfig;

  constructor(camera) {
    super();

    if (!camera.options?.device) return;

    this.cameraConfig = camera;
  }

  async takePicture() {
    const fileName = "/tmp/shot.jpg";

    return new Promise((resolve, reject) => {
      const resolution =
        this.cameraConfig.options?.width && this.cameraConfig.options?.height
          ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}`
          : "";
      const device = this.cameraConfig.options?.device
        ? `-d ${this.cameraConfig.options.device}`
        : "";

      const commandLine = `fswebcam ${device} ${resolution} -S 20 --jpeg -1 ${fileName}`;

      exec(commandLine, (error) => {
        if (error) reject(error);
        else {
          const image = fs.readFileSync(fileName);

          resolve(image);
        }
      });
    });
  }
}

module.exports = UsbWebcam;
