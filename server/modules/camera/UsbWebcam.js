const CameraAbstract = require("./CameraAbstract");
const { exec } = require("child_process");
const fs = require("fs");
const md5 = require("md5");

class UsbWebcam extends CameraAbstract {
  cameraConfig;

  constructor(camera) {
    super();

    if (!camera.options?.device) return;

    this.cameraConfig = camera;
  }

  async takePicture() {
    const fileName = `/tmp/shot-${md5(this.cameraConfig.options.device)}.jpg`;

    return new Promise((resolve, reject) => {
      const resolution =
        this.cameraConfig.options?.width && this.cameraConfig.options?.height
          ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}`
          : "";
      const device = this.cameraConfig.options?.device
        ? `-d ${this.cameraConfig.options.device}`
        : "";

      const commandLine = `fswebcam ${device} ${resolution} -S 20 --no-banner --jpeg -1 ${fileName}`;

      exec(commandLine, (error) => {
        if (error) reject(error);
        else {
          fs.readFile(fileName, (err, image) => {
            if (err) reject(err);
            else resolve(image);
          });
        }
      });
    });
  }
}

module.exports = UsbWebcam;
