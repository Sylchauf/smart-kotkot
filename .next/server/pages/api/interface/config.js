/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/interface/config";
exports.ids = ["pages/api/interface/config"];
exports.modules = {

/***/ "./lib/getConfig.js":
/*!**************************!*\
  !*** ./lib/getConfig.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst logger = __webpack_require__(/*! ./logger */ \"./lib/logger.js\");\n\nconst getConfig = () => {\n  if (fs.existsSync(\"./state/config.json\")) return JSON.parse(fs.readFileSync(\"./state/config.json\").toString());else {\n    const message = \"FATAL ERROR - NO CONFIG FILE DETECTED\";\n    logger.error(message);\n    throw new Error(message);\n  }\n};\n\nmodule.exports = getConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9saWIvZ2V0Q29uZmlnLmpzP2M2YTgiXSwibmFtZXMiOlsiZnMiLCJyZXF1aXJlIiwibG9nZ2VyIiwiZ2V0Q29uZmlnIiwiZXhpc3RzU3luYyIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwibWVzc2FnZSIsImVycm9yIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaUNBQUQsQ0FBdEI7O0FBRUEsTUFBTUUsU0FBUyxHQUFHLE1BQU07QUFDdEIsTUFBSUgsRUFBRSxDQUFDSSxVQUFILENBQWMscUJBQWQsQ0FBSixFQUNFLE9BQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixFQUFFLENBQUNPLFlBQUgsQ0FBZ0IscUJBQWhCLEVBQXVDQyxRQUF2QyxFQUFYLENBQVAsQ0FERixLQUVLO0FBQ0gsVUFBTUMsT0FBTyxHQUFHLHVDQUFoQjtBQUNBUCxVQUFNLENBQUNRLEtBQVAsQ0FBYUQsT0FBYjtBQUNBLFVBQU0sSUFBSUUsS0FBSixDQUFVRixPQUFWLENBQU47QUFDRDtBQUNGLENBUkQ7O0FBVUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsU0FBakIiLCJmaWxlIjoiLi9saWIvZ2V0Q29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKFwiLi9sb2dnZXJcIik7XG5cbmNvbnN0IGdldENvbmZpZyA9ICgpID0+IHtcbiAgaWYgKGZzLmV4aXN0c1N5bmMoXCIuL3N0YXRlL2NvbmZpZy5qc29uXCIpKVxuICAgIHJldHVybiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcIi4vc3RhdGUvY29uZmlnLmpzb25cIikudG9TdHJpbmcoKSk7XG4gIGVsc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkZBVEFMIEVSUk9SIC0gTk8gQ09ORklHIEZJTEUgREVURUNURURcIjtcbiAgICBsb2dnZXIuZXJyb3IobWVzc2FnZSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldENvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/getConfig.js\n");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const winston = __webpack_require__(/*! winston */ \"winston\");\n\n__webpack_require__(/*! winston-daily-rotate-file */ \"winston-daily-rotate-file\");\n\nconst logger = winston.createLogger({\n  level: process.env.LOG_LEVEL || \"info\",\n  format: winston.format.json(),\n  transports: [new winston.transports.Console({\n    format: winston.format.simple(),\n    timestamp: true\n  })]\n});\nmodule.exports = logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9saWIvbG9nZ2VyLmpzPzQ1ZTMiXSwibmFtZXMiOlsid2luc3RvbiIsInJlcXVpcmUiLCJsb2dnZXIiLCJjcmVhdGVMb2dnZXIiLCJsZXZlbCIsInByb2Nlc3MiLCJlbnYiLCJMT0dfTEVWRUwiLCJmb3JtYXQiLCJqc29uIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJzaW1wbGUiLCJ0aW1lc3RhbXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0FBLG1CQUFPLENBQUMsNERBQUQsQ0FBUDs7QUFFQSxNQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUNsQ0MsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBWixJQUF5QixNQURFO0FBRWxDQyxRQUFNLEVBQUVSLE9BQU8sQ0FBQ1EsTUFBUixDQUFlQyxJQUFmLEVBRjBCO0FBR2xDQyxZQUFVLEVBQUUsQ0FDVixJQUFJVixPQUFPLENBQUNVLFVBQVIsQ0FBbUJDLE9BQXZCLENBQStCO0FBQzdCSCxVQUFNLEVBQUVSLE9BQU8sQ0FBQ1EsTUFBUixDQUFlSSxNQUFmLEVBRHFCO0FBRTdCQyxhQUFTLEVBQUU7QUFGa0IsR0FBL0IsQ0FEVTtBQUhzQixDQUFyQixDQUFmO0FBV0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsTUFBakIiLCJmaWxlIjoiLi9saWIvbG9nZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2luc3RvbiA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpO1xucmVxdWlyZShcIndpbnN0b24tZGFpbHktcm90YXRlLWZpbGVcIik7XG5cbmNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCBcImluZm9cIixcbiAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5qc29uKCksXG4gIHRyYW5zcG9ydHM6IFtcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5zaW1wbGUoKSxcbiAgICAgIHRpbWVzdGFtcDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/logger.js\n");

/***/ }),

/***/ "./pages/api/interface/config.ts":
/*!***************************************!*\
  !*** ./pages/api/interface/config.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/getConfig */ \"./lib/getConfig.js\");\n/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_getConfig__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const config = _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default()();\n  res.status(200).json({\n    locale: config.locale,\n    theme: config.theme || \"automatic\"\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9wYWdlcy9hcGkvaW50ZXJmYWNlL2NvbmZpZy50cz8zM2VkIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImNvbmZpZyIsImdldENvbmZpZyIsInN0YXR1cyIsImpzb24iLCJsb2NhbGUiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFFQSwrREFBZSxPQUFPQSxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNsRSxRQUFNQyxNQUFNLEdBQUdDLHFEQUFTLEVBQXhCO0FBRUFGLEtBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxVQUFNLEVBQUVKLE1BQU0sQ0FBQ0ksTUFESTtBQUVuQkMsU0FBSyxFQUFFTCxNQUFNLENBQUNLLEtBQVAsSUFBZ0I7QUFGSixHQUFyQjtBQUlELENBUEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW50ZXJmYWNlL2NvbmZpZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiLi4vLi4vLi4vbGliL2dldENvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZSxcbiAgICB0aGVtZTogY29uZmlnLnRoZW1lIHx8IFwiYXV0b21hdGljXCIsXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/interface/config.ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("winston");;

/***/ }),

/***/ "winston-daily-rotate-file":
/*!********************************************!*\
  !*** external "winston-daily-rotate-file" ***!
  \********************************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/interface/config.ts"));
module.exports = __webpack_exports__;

})();