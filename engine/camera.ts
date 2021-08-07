import moment from "moment";
var gpioRelais = require("./gpio-relais.js");
var events = require("./events.js");
const logger = require("../lib/logger");

const camera = {
  image: null,
  time: null,
  intervalSec: 30,
  maxAgeSec: 10,
  timeNextImage: null,
  busy: false,
  lastRequest: null,
  ir: {
    on: null,
    time: null,
    image: null,
    queued: false,
  },
};

const configure = (intervalSec, maxAgeSec, autoTakeSec) => {
  camera.intervalSec = intervalSec;
  camera.maxAgeSec = maxAgeSec;
  camera.autoTakeSec = autoTakeSec;

  logger.debug(
    "Camera Configure: " +
      "  intervalSec " +
      camera.intervalSec +
      "  maxAgeSec " +
      camera.maxAgeSec +
      "  autoTakeSec " +
      camera.autoTakeSec
  );

  gpioRelais.setNightVision(false);
  getIRStatus();
};

const queueNightvision = () => {
  camera.ir.queued = true;
  return this.takePhoto(true);
};

const takePhoto = async (nightVision = false) => {
  camera.lastRequest = new moment();
  let now = new Date();
  let max = camera.timeNextImage;

  // Check if nightvision pic is queued
  if (camera.ir.queued) {
    nightVision = true;
  }

  if (now <= max && !nightVision) {
    logger.debug("Not taking picture. Picture still good.");
    return "picture still good";
  } else if (camera.busy) {
    logger.debug("Not taking picture. Camera busy.");
    return "camera busy";
  } else {
    if (nightVision && !gpioRelais.setNightVision(true)) {
      logger.warn(`Could not turn on Night Vision`);
    }

    camera.busy = true;
    logger.info("Taking a" + (nightVision ? " night vision" : "") + " picture");
    let takingPicture = moment();

    cameraInstance
      .takePicture()
      .then((photo) => {
        const newPicTime = new Date();

        camera.image = photo;
        camera.time = newPicTime;

        if (nightVision) {
          camera.ir.image = photo;
          camera.ir.time = newPicTime;
          camera.ir.queued = false;
        } else {
          camera.timeNextImage = new Date();
          camera.timeNextImage.setSeconds(
            camera.timeNextImage.getSeconds() + camera.maxAgeSec
          );
        }
        camera.busy = false;

        // Turn off Infrared LEDs again
        if (nightVision && !gpioRelais.setNightVision(false)) {
          logger.warn("Error when turning night vision off");
        }

        // Push new Webcam pictures via sse
        events.send("newWebcamPic" + (nightVision ? "IR" : ""), newPicTime);

        // Statistics about camera duration
        let tookPicture = moment();
        let duration = tookPicture.diff(takingPicture);
        logger.info(
          `Took a ${nightVision ? "night vision " : ""}picture - ${duration} ms`
        );

        // Schedule taking the next picture (only non-night vision)
        if (camera.lastRequest && !nightVision && camera.intervalSec > 0) {
          logger.info(
            `Taking another picture in ${
              camera.intervalSec
            }s. Last Request ${camera.lastRequest.format("HH:mm:ss")}`
          );
          setTimeout(function nextPicPls() {
            takePhoto();
          }, camera.intervalSec * 1000);
        }
      })
      .catch((error) => {
        logger.error(error.toString());
      });
    return true;
  }
};

takePhoto();

const getJpg = () => {
  return camera.image;
};

const getIRJpg = () => {
  camera.ir.lastRequest = new moment();
  return camera.ir.image;
};

const getIRStatus = () => {
  camera.ir.on = gpioRelais.IRIsOn();
};

exports.data = camera;
exports.configure = configure;
exports.takePhoto = takePhoto;
exports.getJpg = getJpg;
exports.getIRJpg = getIRJpg;
exports.queueNightvision = queueNightvision;

export { configure, takePhoto, getJpg, getIRJpg, queueNightvision };
