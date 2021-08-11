(function() {
var exports = {};
exports.id = 886;
exports.ids = [886];
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

/***/ 729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4847);
/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_getConfig__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const config = _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default()();
  res.status(200).json({
    locale: config.locale
  });
});

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(729));
module.exports = __webpack_exports__;

})();