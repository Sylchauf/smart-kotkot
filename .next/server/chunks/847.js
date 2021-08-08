exports.id = 847;
exports.ids = [847];
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
  level: "info",
  format: winston.format.json(),
  transports: []
});

if (false) {} else {
  logger.add(new winston.transports.DailyRotateFile({
    filename: "logs/%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    timestamp: true
  }));
}

module.exports = logger;

/***/ })

};
;