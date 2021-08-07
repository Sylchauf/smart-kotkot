let cameraInstance;

const config = require('../../state/config.json');

const RaspberryPiWebcam = require('./RaspberryPiWebcam')
const UsbWebcam = require('./UsbWebcam')

switch (config.camera.module) {
  case 'RaspberryPiWebcam':
    cameraInstance = new RaspberryPiWebcam();
    break
  case 'UsbWebcam':
    cameraInstance = new UsbWebcam();
    break
}

exports.cameraInstance = cameraInstance
