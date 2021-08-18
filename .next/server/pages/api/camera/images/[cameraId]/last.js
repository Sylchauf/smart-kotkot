(function() {
var exports = {};
exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 4847:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const fs = __webpack_require__(5747);

const logger = __webpack_require__(2557);

const getConfig = () => {
  if (fs.existsSync("./state/config.json")) return JSON.parse(fs.readFileSync("./state/config.json").toString());else {
    const message = "FATAL ERROR - NO CONFIG FILE DETECTED";
    logger.error(message);
    throw new Error(message);
  }
};

module.exports = getConfig;

/***/ }),

/***/ 2557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const winston = __webpack_require__(944);

__webpack_require__(2510);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console({
    format: winston.format.simple(),
    timestamp: true
  })]
});
module.exports = logger;

/***/ }),

/***/ 9993:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5540);
/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_camera__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const image = (0,_server_camera__WEBPACK_IMPORTED_MODULE_0__.getJpg)(String(req.query.cameraId));

  if (image) {
    res.status(200).setHeader("Content-Type", "image/jpeg");
    res.send(image);
  } else res.status(404).send("");
});

/***/ }),

/***/ 5540:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const moment = __webpack_require__(2470);

const logger = __webpack_require__(2557);

const {
  getCameraInstance
} = __webpack_require__(3980);

const getConfig = __webpack_require__(4847);

const path = __webpack_require__(5622);

const fs = __webpack_require__(5747);

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
    queued: false
  }
};

const initializeCameras = () => {
  config.camera.forEach((oneCamera, index) => {
    setupCamera(String(index), oneCamera);
  });
};

const setupCamera = (id, cameraConfig) => {
  global.cameraList[id] = _objectSpread(_objectSpread({}, cameraTemplate), {}, {
    config: cameraConfig,
    cameraInstance: getCameraInstance(cameraConfig)
  });
  logger.info(`[CAMERA] Setup new camera ${id} «${cameraConfig.name}» (${cameraConfig.module})`);
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
    camera.busy = true;
    logger.info(`[CAMERA] Taking a picture (${id} - ${camera.config.name})`);
    let takingPicture = moment();
    cameraInstance.takePicture().then(photo => {
      var _camera$config$save;

      const newPicTime = moment().format("X");

      if ((_camera$config$save = camera.config.save) !== null && _camera$config$save !== void 0 && _camera$config$save.path) {
        fs.mkdirSync(camera.config.save.path, {
          recursive: true
        });
        fs.writeFileSync(path.join(camera.config.save.path, `${newPicTime}.jpg`), photo);
      }

      camera.image = photo;
      camera.time = newPicTime;
      camera.busy = false; // Statistics about camera duration

      let tookPicture = moment();
      let duration = tookPicture.diff(takingPicture);
      logger.debug(`[CAMERA] Took a picture - ${duration} ms`); // Schedule taking the next picture

      if (camera.lastRequest && camera.config.intervalSec > 0) {
        setTimeout(() => {
          takePhoto(id);
        }, camera.config.intervalSec * 1000);
      }
    }).catch(logger.error);
    return true;
  }
};

const getJpg = id => {
  const camera = global.cameraList[id];

  if (!camera) {
    logger.warn(`[CAMERA] Camera not found ${id}`);
    return false;
  }

  return camera.image;
};

module.exports = {
  initializeCameras,
  getJpg
};

/***/ }),

/***/ 6982:
/***/ (function(module) {

class CameraAbstract {
  constructor() {
    // The constructor can be useful to initialize somethings
    return null;
  }

  async takePicture() {// Take a picture and return a buffer containing the image
  }

}

module.exports = CameraAbstract;

/***/ }),

/***/ 4578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CameraAbstract = __webpack_require__(6982);

const cameraConfig = {
  raspistill: {
    rotation: 180,
    noFileSave: true,
    encoding: "jpg",
    width: 1296,
    height: 972,
    quality: 50
  }
};

class RaspberryPiWebcam extends CameraAbstract {
  constructor() {
    super();

    _defineProperty(this, "cam", void 0);

    const Raspistill = __webpack_require__(94).Raspistill;

    this.cam = new Raspistill(cameraConfig.raspistill);
  }

  async takePicture() {
    return this.cam.takePhoto();
  }

}

module.exports = RaspberryPiWebcam;

/***/ }),

/***/ 9423:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CameraAbstract = __webpack_require__(6982);

const {
  exec
} = __webpack_require__(3129);

const fs = __webpack_require__(5747);

const md5 = __webpack_require__(204);

class UsbWebcam extends CameraAbstract {
  constructor(camera) {
    var _camera$options;

    super();

    _defineProperty(this, "cameraConfig", void 0);

    if (!((_camera$options = camera.options) !== null && _camera$options !== void 0 && _camera$options.device)) return;
    this.cameraConfig = camera;
  }

  async takePicture() {
    const fileName = `/tmp/shot-${md5(this.cameraConfig.options.device)}.jpg`;
    return new Promise((resolve, reject) => {
      var _this$cameraConfig$op, _this$cameraConfig$op2, _this$cameraConfig$op3;

      const resolution = (_this$cameraConfig$op = this.cameraConfig.options) !== null && _this$cameraConfig$op !== void 0 && _this$cameraConfig$op.width && (_this$cameraConfig$op2 = this.cameraConfig.options) !== null && _this$cameraConfig$op2 !== void 0 && _this$cameraConfig$op2.height ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}` : "";
      const device = (_this$cameraConfig$op3 = this.cameraConfig.options) !== null && _this$cameraConfig$op3 !== void 0 && _this$cameraConfig$op3.device ? `-d ${this.cameraConfig.options.device}` : "";
      const commandLine = `fswebcam ${device} ${resolution} -D 1 --no-banner --jpeg -1 ${fileName}`;
      exec(commandLine, error => {
        if (error) reject(error);else {
          fs.readFile(fileName, (err, image) => {
            if (err) reject(err);else resolve(image);
          });
        }
      });
    });
  }

}

module.exports = UsbWebcam;

/***/ }),

/***/ 3980:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const RaspberryPiWebcam = __webpack_require__(4578);

const UsbWebcam = __webpack_require__(9423);

const getCameraInstance = camera => {
  switch (camera.module) {
    case "RaspberryPiWebcam":
      return new RaspberryPiWebcam(camera);

    case "UsbWebcam":
      return new UsbWebcam(camera);
  }
};

exports.getCameraInstance = getCameraInstance;

/***/ }),

/***/ 3129:
/***/ (function(module) {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 204:
/***/ (function(module) {

"use strict";
module.exports = require("md5");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 94:
/***/ (function(module) {

"use strict";
module.exports = require("node-raspistill");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 944:
/***/ (function(module) {

"use strict";
module.exports = require("winston");;

/***/ }),

/***/ 2510:
/***/ (function(module) {

"use strict";
module.exports = require("winston-daily-rotate-file");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9993));
module.exports = __webpack_exports__;

})();