const moment = require("moment");
const logger = require("../lib/logger");
const { getCameraInstance } = require("./modules/camera");
const getConfig = require("../lib/getConfig");

const config = getConfig();

const cameraTemplate = {
  image: null,
  time: null,
  busy: false,
  lastRequest: null,
  ir: {
    on: null,
    time: null,
    image: null,
    queued: false,
  },
};

const initializeCameras = () => {
  config.camera.forEach((oneCamera, index) => {
    setupCamera(String(index), oneCamera);
  });
};

const setupCamera = (id, cameraConfig) => {
  global.cameraList[id] = {
    ...cameraTemplate,
    config: cameraConfig,
    cameraInstance: getCameraInstance(cameraConfig),
  };

  logger.info(
    `[CAMERA] Setup new camera ${id} «${cameraConfig.name}» (${cameraConfig.module})`
  );

  takePhoto(id);
};

const takePhoto = async (id, nightVision = false) => {
  const camera = global.cameraList[id];

  if (!camera) {
    logger.warn(`[CAMERA] Camera not found ${id}`);
    return false;
  }

  const cameraInstance = camera.cameraInstance;

  camera.lastRequest = moment();

  if (camera.busy) {
    logger.warn("[CAMERA] Can not take picture : Camera is busy.");
    return false;
  } else {
    /*if (nightVision && !gpioRelais.setNightVision(true)) {
      logger.warn(`Could not turn on Night Vision`);
    }*/

    camera.busy = true;
    logger.info(
      `[CAMERA] Taking a" + (nightVision ? " night vision" : "") + " picture (${camera.config.name})`
    );
    let takingPicture = moment();

    cameraInstance
      .takePicture()
      .then((photo) => {
        const newPicTime = new Date();

        camera.image = photo;
        camera.time = newPicTime;
        camera.busy = false;

        // Turn off Infrared LEDs again
        /*if (nightVision && !gpioRelais.setNightVision(false)) {
          logger.warn("Error when turning night vision off");
        }*/

        // Statistics about camera duration
        let tookPicture = moment();
        let duration = tookPicture.diff(takingPicture);
        logger.debug(
          `[CAMERA] Took a ${
            nightVision ? "night vision " : ""
          }picture - ${duration} ms`
        );

        // Schedule taking the next picture
        if (camera.lastRequest && camera.config.intervalSec > 0) {
          setTimeout(() => {
            takePhoto(id);
          }, camera.config.intervalSec * 1000);
        }
      })
      .catch(logger.error);

    return true;
  }
};

const getJpg = (id) => {
  const camera = global.cameraList[id];

  if (!camera) {
    logger.warn(`[CAMERA] Camera not found ${id}`);
    return false;
  }

  return camera.image;
};

module.exports = { initializeCameras, getJpg };
