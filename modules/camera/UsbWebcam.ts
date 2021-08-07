const CameraAbstract = require('./CameraAbstract')
const config = require('../../state/config.json');
const { exec } = require("child_process");
const fs = require("fs");

class UsbWebcam extends CameraAbstract {
  constructor() {
    super()

    if (!config.camera.options?.device) return
  }

  async takePicture() {
    const fileName = '/tmp/shot.jpg'

    return new Promise((resolve, reject) => {
      const resolution = config.camera.options?.width && config.camera.options?.height ? `-r ${config.camera.options.width}x${config.camera.options.height}`: ''
      const device = config.camera.options?.device ? `-d ${config.camera.options.device}` : ''

      const commandLine = `fswebcam ${device} ${resolution} -S 20 --jpeg -1 ${fileName}`

      exec(commandLine, (error) => {
        if (error) reject(error)
        else {
          const image = fs.readFileSync(fileName)

          resolve(image)
        }
      })
    })
  }
}

module.exports = UsbWebcam
