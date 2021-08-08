exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 7414:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const LIGHT_STATE = {
  ON: "on",
  OFF: "off"
};
/* harmony default export */ __webpack_exports__["Z"] = (LIGHT_STATE);

/***/ }),

/***/ 7524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ switchLight; },
/* harmony export */   "N": function() { return /* binding */ lightState; }
/* harmony export */ });
/* harmony import */ var _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7414);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_modules_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7806);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2557);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_logger__WEBPACK_IMPORTED_MODULE_3__);

 // @ts-ignore



const initialState = {
  state: _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF
};
const filePathState = "state/lightState.json";
const lightState = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePathState) ? JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePathState).toString()) : initialState;

const setLightState = (key, value) => {
  lightState[key] = value;
  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePathState, JSON.stringify(lightState));
};

const makeResponse = (status, message, logType = "info") => {
  const response = {
    status,
    message
  }; // @ts-ignore

  (_lib_logger__WEBPACK_IMPORTED_MODULE_3___default())[logType](message);
  return response;
};

const switchLight = state => {
  if (state !== _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.ON */ .Z.ON && state !== _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF) return makeResponse(400, "[Light] Invalid parameter (on/off)", "warn");
  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.ON */ .Z.ON && lightState.state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.ON */ .Z.ON) return makeResponse(409, "[Light] You ask to switch on the light : it's already on", "warn");
  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF && lightState.state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF) return makeResponse(409, "[Light] You ask to switch off the light : it's already off", "warn");

  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.ON */ .Z.ON) {
    // @ts-ignore
    _server_modules_light__WEBPACK_IMPORTED_MODULE_2__/* .lightInstance.turnOn */ .X.turnOn();
  } else if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF) {
    // @ts-ignore
    _server_modules_light__WEBPACK_IMPORTED_MODULE_2__/* .lightInstance.turnOff */ .X.turnOff();
  }

  setLightState("state", state);
  return makeResponse(200, `[Light] Switch the light ${state}`);
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
    format: winston.format.simple(),
    timestamp: true
  })]
});
module.exports = logger;

/***/ }),

/***/ 2472:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  exec
} = __webpack_require__(3129);

const LightAbstract = __webpack_require__(3917);

const getConfig = __webpack_require__(4847);

const config = getConfig();

class GCERelay extends LightAbstract {
  constructor() {
    var _config$light$options;

    super();

    _defineProperty(this, "device", void 0);

    this.device = ((_config$light$options = config.light.options) === null || _config$light$options === void 0 ? void 0 : _config$light$options.device) || "/dev/ttyUSB0";
  }

  async turnOn() {
    exec(`echo RLY${config.light.options.pin}${config.light.options.activateWhen ? "1" : "0"} > ${this.device}`);
  }

  async turnOff() {
    exec(`echo RLY${config.light.options.pin}${!config.light.options.activateWhen ? "1" : "0"} > ${this.device}`);
  }

}

module.exports = GCERelay;

/***/ }),

/***/ 6522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MotorAbstract = __webpack_require__(3917);

const getConfig = __webpack_require__(4847);

const config = getConfig();

class GPIO extends MotorAbstract {
  constructor() {
    super();

    _defineProperty(this, "gpio", void 0);

    _defineProperty(this, "pin", void 0);

    this.gpio = __webpack_require__(4854).Gpio;
    this.pin = new Gpio(config.light.options.pin, "high");
  }

  async turnOn() {
    this.pin.writeSync(config.door.options.activateWhen ? "1" : "0");
  }

  async turnOff() {
    this.pin.writeSync(!config.door.options.activateWhen ? "1" : "0");
  }

}

module.exports = GPIO;

/***/ }),

/***/ 3917:
/***/ (function(module) {

class LightAbstract {
  constructor() {
    // The constructor can be useful to initialize somethings
    return null;
  }

  async turnOn() {// Move the Motor to the up
  }

  async turnOff() {// Move the Motor to the down
  }

}

module.exports = LightAbstract;

/***/ }),

/***/ 7806:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

let lightInstance;

const GCERelay = __webpack_require__(2472);

const GPIO = __webpack_require__(6522);

const getConfig = __webpack_require__(4847);

const config = getConfig();

switch (config.light.module) {
  case "GCERelay":
    lightInstance = new GCERelay();
    break;

  case "GPIO":
    lightInstance = new GPIO();
    break;
}

exports.X = lightInstance;

/***/ })

};
;