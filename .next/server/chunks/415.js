exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 4814:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const DOOR_DIRECTION = {
  UP: "up",
  DOWN: "down"
};
/* harmony default export */ __webpack_exports__["Z"] = (DOOR_DIRECTION);

/***/ }),

/***/ 3415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gv": function() { return /* binding */ correctBottom; },
  "Jn": function() { return /* binding */ correctTop; },
  "Yi": function() { return /* binding */ doorState; },
  "LW": function() { return /* binding */ moveDoor; },
  "i7": function() { return /* binding */ door_status; }
});

// EXTERNAL MODULE: ./lib/getConfig.js
var getConfig = __webpack_require__(4847);
var getConfig_default = /*#__PURE__*/__webpack_require__.n(getConfig);
;// CONCATENATED MODULE: ./constants/DOOR_STATE.js
const DOOR_STATE = {
  TOP: "top",
  BOTTOM: "bottom"
};
/* harmony default export */ var constants_DOOR_STATE = (DOOR_STATE);
// EXTERNAL MODULE: ./constants/DOOR_DIRECTION.js
var DOOR_DIRECTION = __webpack_require__(4814);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./server/modules/motor/index.js
const motor_getConfig = __webpack_require__(4847);

let motorInstance;
const config = motor_getConfig();

const GCERelay = __webpack_require__(65);

const GPIO = __webpack_require__(5494);

switch (config.door.module) {
  case "GCERelay":
    motorInstance = new GCERelay();
    break;

  case "GPIO":
    motorInstance = new GPIO();
    break;
}


// EXTERNAL MODULE: ./lib/logger.js
var logger = __webpack_require__(2557);
var logger_default = /*#__PURE__*/__webpack_require__.n(logger);
;// CONCATENATED MODULE: ./engine/door.ts




const door_config = getConfig_default()(); // @ts-ignore



const door_status = {
  status: "stop",
  previousStatus: "stop"
};
const initialState = {
  durationUpSec: 0,
  durationDownSec: 0,
  state: constants_DOOR_STATE.BOTTOM
};
const filePathState = "state/doorState.json";
const doorState = external_fs_default().existsSync(filePathState) ? JSON.parse(external_fs_default().readFileSync(filePathState).toString()) : initialState;

const setDoorState = (key, value) => {
  doorState[key] = value;
  external_fs_default().writeFileSync(filePathState, JSON.stringify(doorState));
};

const setDoorStatus = _status => {
  // Remember old values
  door_status.previousStatus = door_status.status;
  door_status.status = _status;
};

const correctTop = () => {
  logger_default().info(`[Door] Try to apply correction for up (${door_config.door.correctionSec}s)`);
  const response = moveDoor(DOOR_DIRECTION/* default.UP */.Z.UP, door_config.door.correctionSec);

  if (response.status === 200) {
    setDoorState("durationUpSec", doorState.durationUpSec + door_config.door.correctionSec);
    setDoorState("state", constants_DOOR_STATE.TOP);
  }

  return response;
};

const correctBottom = () => {
  logger_default().info(`[Door] Apply correction for down (${door_config.door.correctionSec}s)`);
  const response = moveDoor(DOOR_DIRECTION/* default.DOWN */.Z.DOWN, door_config.door.correctionSec);

  if (response.status === 200) {
    setDoorState("durationDownSec", doorState.durationDownSec + door_config.door.correctionSec);
    setDoorState("state", constants_DOOR_STATE.BOTTOM);
  }

  return response;
};

const makeResponse = (status, message, logType = "info") => {
  const response = {
    status,
    message
  }; // @ts-ignore

  (logger_default())[logType](message);
  return response;
};

const moveDoor = (direction, forceDuration) => {
  // Check if the motor can move
  if (direction !== DOOR_DIRECTION/* default.UP */.Z.UP && direction !== DOOR_DIRECTION/* default.DOWN */.Z.DOWN) return makeResponse(400, "[Door] Invalid parameter (up/down)", "warn");
  if (direction === DOOR_DIRECTION/* default.UP */.Z.UP && doorState.state === constants_DOOR_STATE.TOP && !forceDuration) return makeResponse(409, "[Door] You ask to open the door : it's already open", "warn");
  if (direction === DOOR_DIRECTION/* default.DOWN */.Z.DOWN && doorState.state === constants_DOOR_STATE.BOTTOM && !forceDuration) return makeResponse(409, "[Door] You ask to close the door : it's already close", "warn");
  if (direction === DOOR_DIRECTION/* default.UP */.Z.UP && doorState.state === constants_DOOR_STATE.BOTTOM && forceDuration) return makeResponse(403, "[Door] You ask to calibrate the door to the up : it's impossible for the moment. Please end the bottom calibration then ask open the door. After the door has moved, you will start the up calibration", "warn");
  if (direction === DOOR_DIRECTION/* default.DOWN */.Z.DOWN && doorState.state === constants_DOOR_STATE.TOP && forceDuration) return makeResponse(403, "[Door] You ask to calibrate the door to the down : it's impossible for the moment. Please end the top calibration then ask close the door. After the door has moved, you will start the down calibration", "warn");
  if (door_status.status !== "stop") return makeResponse(425, `[Door] Already moving ...`); // Ok, we pass securities : start the engine now

  const duration = forceDuration ? forceDuration : direction === DOOR_DIRECTION/* default.UP */.Z.UP ? doorState.durationUpSec : doorState.durationDownSec;
  if (duration <= 0) return makeResponse(500, `[Door] Cant move for ${duration}s ...`);

  if (direction === DOOR_DIRECTION/* default.UP */.Z.UP) {
    // @ts-ignore
    motorInstance.moveUp();
  } else if (direction === DOOR_DIRECTION/* default.DOWN */.Z.DOWN) {
    // @ts-ignore
    motorInstance.moveDown();
  }

  setDoorStatus("moving " + direction); // Switch off the motor later

  setTimeout(() => {
    stopDoor();
    if (!forceDuration) setDoorState("state", direction === DOOR_DIRECTION/* default.UP */.Z.UP ? constants_DOOR_STATE.TOP : constants_DOOR_STATE.BOTTOM);
    logger_default().info(`[Door] Stopping…`);
  }, duration * 1000);
  return makeResponse(200, `[Door] Moving ${direction} for ${duration}s ${forceDuration ? "(forced/calibration)" : "(classical)"}`);
};

const stopDoor = () => {
  // @ts-ignore
  motorInstance.stop();
  setDoorStatus("stop");
};



/***/ }),

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
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console({
    format: winston.format.simple()
  })]
});
module.exports = logger;

/***/ }),

/***/ 65:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  exec
} = __webpack_require__(3129);

const config = __webpack_require__(3801);

const MotorAbstract = __webpack_require__(4188);

class GCERelay extends MotorAbstract {
  constructor() {
    var _config$door$options;

    super();

    _defineProperty(this, "device", void 0);

    this.device = ((_config$door$options = config.door.options) === null || _config$door$options === void 0 ? void 0 : _config$door$options.device) || "/dev/ttyUSB0";
  }

  async moveUp() {
    exec(`echo RLY${config.door.options.upPin}${config.door.options.activateWhen ? "1" : "0"} > ${this.device}`);
    exec(`echo RLY${config.door.options.downPin}${!config.door.options.activateWhen ? "1" : "0"} > ${this.device}`);
  }

  async moveDown() {
    exec(`echo RLY${config.door.options.upPin}${!config.door.options.activateWhen ? "1" : "0"} > ${this.device}`);
    exec(`echo RLY${config.door.options.downPin}${config.door.options.activateWhen ? "1" : "0"} > ${this.device}`);
  }

  async stop() {
    exec(`echo RLY${config.door.options.upPin}${config.door.options.activateWhen ? "0" : "1"} > ${this.device}`);
    exec(`echo RLY${config.door.options.downPin}${config.door.options.activateWhen ? "0" : "1"} > ${this.device}`);
  }

}

module.exports = GCERelay;

/***/ }),

/***/ 5494:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const config = __webpack_require__(3801);

const MotorAbstract = __webpack_require__(4188);

class GPIO extends MotorAbstract {
  constructor() {
    super();

    _defineProperty(this, "gpio", void 0);

    _defineProperty(this, "pinUp", void 0);

    _defineProperty(this, "pinDown", void 0);

    this.gpio = __webpack_require__(4854).Gpio;
    this.pinUp = new Gpio(config.door.options.upPin, "high");
    this.pinDown = new Gpio(config.door.options.downPin, "high");
  }

  async moveUp() {
    this.pinUp.writeSync(config.door.options.activateWhen ? "1" : "0");
    this.pinDown.writeSync(!config.door.options.activateWhen ? "1" : "0");
  }

  async moveDown() {
    this.pinUp.writeSync(!config.door.options.activateWhen ? "1" : "0");
    this.pinDown.writeSync(config.door.options.activateWhen ? "1" : "0");
  }

  async stop() {
    this.pinUp.writeSync(config.door.options.activateWhen ? "0" : "1");
    this.pinDown.writeSync(config.door.options.activateWhen ? "0" : "1");
  }

}

module.exports = GPIO;

/***/ }),

/***/ 4188:
/***/ (function(module) {

class MotorAbstract {
  constructor() {
    // The constructor can be useful to initialize somethings
    return null;
  }

  async moveUp() {// Move the Motor to the up
  }

  async moveDown() {// Move the Motor to the down
  }

  async stop() {// Stop the Motor)
  }

}

module.exports = MotorAbstract;

/***/ }),

/***/ 3801:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale":"fr","skipGpio":{"dht22":true,"sensoren":true,"bme280":true,"cputemp":true,"ir":true},"gpioPorts":{"in":{"dht22":14,"oben":5,"unten":6,"bme280":"0x76"},"out":{"hoch":23,"runter":24,"ir":25}},"intervals":{"dht22":30,"dht22OnError":300,"cpu":30,"sensoren":1,"bme280":60},"door":{"module":"GCERelay","options":{"upPin":1,"downPin":2,"activateWhen":true},"correctionSec":2,"automation":{"openTimes":["sunrise+30"],"closeTimes":["sunset+25"]}},"light":{"module":"GCERelay","options":{"pin":5,"activateWhen":true}},"camera":[{"module":"UsbWebcam","options":{"device":"/dev/video0","width":1024,"height":768},"intervalSec":20}],"location":{"lat":45.288331,"lon":1.589881},"heating":{"enabled":true,"heatBelowC":5,"minimumHeatingMins":30,"timeFrame":{"from":"sunrise+0","to":"dusk-60"}},"shelly":{"url":"xxx","intervalSec":30}}');

/***/ })

};
;