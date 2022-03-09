const moment = require("moment");
const logger = require("../lib/logger");
const { getCameraInstance } = require("./modules/camera");
const getConfig = require("../lib/getConfig");
const path = require("path");
const fs = require("fs");

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

const takePhoto = async (id, manualTake = false) => {
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
    camera.busy = true;
    logger.debug(`[CAMERA] Taking a picture (${id} - ${camera.config.name})`);
    let takingPicture = moment();

    return cameraInstance
      .takePicture()
      .then((photo) => {
        const newPicTime = moment().format("X");

        let fileName;

        if (camera.config.save?.path) {
          fs.mkdirSync(camera.config.save.path, {
            recursive: true,
          });

          fileName = path.join(camera.config.save.path, `${newPicTime}.jpg`);

          fs.writeFileSync(
            path.join(camera.config.save.path, `${newPicTime}.jpg`),
            photo
          );
        }

        // usefull to take screenshot for github
        const IS_SCREEN_PRESENTATION = false;

        camera.image = IS_SCREEN_PRESENTATION
          ? fs.readFileSync("public/chicken-example.jpg")
          : photo;
        camera.time = newPicTime;
        camera.busy = false;

        // Statistics about camera duration
        let tookPicture = moment();
        let duration = tookPicture.diff(takingPicture);
        logger.debug(`[CAMERA] Took a picture - ${duration} ms`);

        // Schedule taking the next picture
        if (
          camera.lastRequest &&
          camera.config.intervalSec > 0 &&
          !manualTake
        ) {
          setTimeout(() => {
            takePhoto(id);
          }, camera.config.intervalSec * 1000);
        }

        return true;
      })
      .catch(logger.error);
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

module.exports = { initializeCameras, getJpg, takePhoto };
