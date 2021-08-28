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

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst logger = __webpack_require__(/*! ./logger */ \"./lib/logger.js\");\n\nconst getConfig = () => {\n  if (fs.existsSync(\"./state/config.json\")) return JSON.parse(fs.readFileSync(\"./state/config.json\").toString());else {\n    const message = \"FATAL ERROR - NO CONFIG FILE DETECTED\";\n    logger.error(message);\n    throw new Error(message);\n  }\n};\n\nmodule.exports = getConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vbGliL2dldENvbmZpZy5qcz9jNmE4Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsImxvZ2dlciIsImdldENvbmZpZyIsImV4aXN0c1N5bmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsIm1lc3NhZ2UiLCJlcnJvciIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlDQUFELENBQXRCOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLE1BQUlILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLHFCQUFkLENBQUosRUFDRSxPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sRUFBRSxDQUFDTyxZQUFILENBQWdCLHFCQUFoQixFQUF1Q0MsUUFBdkMsRUFBWCxDQUFQLENBREYsS0FFSztBQUNILFVBQU1DLE9BQU8sR0FBRyx1Q0FBaEI7QUFDQVAsVUFBTSxDQUFDUSxLQUFQLENBQWFELE9BQWI7QUFDQSxVQUFNLElBQUlFLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQ0Q7QUFDRixDQVJEOztBQVVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFNBQWpCIiwiZmlsZSI6Ii4vbGliL2dldENvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xuXG5jb25zdCBnZXRDb25maWcgPSAoKSA9PiB7XG4gIGlmIChmcy5leGlzdHNTeW5jKFwiLi9zdGF0ZS9jb25maWcuanNvblwiKSlcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCIuL3N0YXRlL2NvbmZpZy5qc29uXCIpLnRvU3RyaW5nKCkpO1xuICBlbHNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gXCJGQVRBTCBFUlJPUiAtIE5PIENPTkZJRyBGSUxFIERFVEVDVEVEXCI7XG4gICAgbG9nZ2VyLmVycm9yKG1lc3NhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/getConfig.js\n");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const winston = __webpack_require__(/*! winston */ \"winston\");\n\n__webpack_require__(/*! winston-daily-rotate-file */ \"winston-daily-rotate-file\");\n\nconst logger = winston.createLogger({\n  level: process.env.LOG_LEVEL || \"info\",\n  format: winston.format.json(),\n  transports: [new winston.transports.Console({\n    format: winston.format.simple(),\n    timestamp: true\n  })]\n});\nmodule.exports = logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vbGliL2xvZ2dlci5qcz80NWUzIl0sIm5hbWVzIjpbIndpbnN0b24iLCJyZXF1aXJlIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJwcm9jZXNzIiwiZW52IiwiTE9HX0xFVkVMIiwiZm9ybWF0IiwianNvbiIsInRyYW5zcG9ydHMiLCJDb25zb2xlIiwic2ltcGxlIiwidGltZXN0YW1wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBQSxtQkFBTyxDQUFDLDREQUFELENBQVA7O0FBRUEsTUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLFlBQVIsQ0FBcUI7QUFDbENDLE9BQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosSUFBeUIsTUFERTtBQUVsQ0MsUUFBTSxFQUFFUixPQUFPLENBQUNRLE1BQVIsQ0FBZUMsSUFBZixFQUYwQjtBQUdsQ0MsWUFBVSxFQUFFLENBQ1YsSUFBSVYsT0FBTyxDQUFDVSxVQUFSLENBQW1CQyxPQUF2QixDQUErQjtBQUM3QkgsVUFBTSxFQUFFUixPQUFPLENBQUNRLE1BQVIsQ0FBZUksTUFBZixFQURxQjtBQUU3QkMsYUFBUyxFQUFFO0FBRmtCLEdBQS9CLENBRFU7QUFIc0IsQ0FBckIsQ0FBZjtBQVdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLE1BQWpCIiwiZmlsZSI6Ii4vbGliL2xvZ2dlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKFwid2luc3RvblwiKTtcbnJlcXVpcmUoXCJ3aW5zdG9uLWRhaWx5LXJvdGF0ZS1maWxlXCIpO1xuXG5jb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgXCJpbmZvXCIsXG4gIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuanNvbigpLFxuICB0cmFuc3BvcnRzOiBbXG4gICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuc2ltcGxlKCksXG4gICAgICB0aW1lc3RhbXA6IHRydWUsXG4gICAgfSksXG4gIF0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/logger.js\n");

/***/ }),

/***/ "./pages/api/interface/config.ts":
/*!***************************************!*\
  !*** ./pages/api/interface/config.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/getConfig */ \"./lib/getConfig.js\");\n/* harmony import */ var _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_getConfig__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const config = _lib_getConfig__WEBPACK_IMPORTED_MODULE_0___default()();\n  res.status(200).json({\n    locale: config.locale\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2ludGVyZmFjZS9jb25maWcudHM/MzNlZCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjb25maWciLCJnZXRDb25maWciLCJzdGF0dXMiLCJqc29uIiwibG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLE1BQU0sR0FBR0MscURBQVMsRUFBeEI7QUFFQUYsS0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFVBQU0sRUFBRUosTUFBTSxDQUFDSTtBQURJLEdBQXJCO0FBR0QsQ0FORCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9pbnRlcmZhY2UvY29uZmlnLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0Q29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbG9jYWxlOiBjb25maWcubG9jYWxlLFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/interface/config.ts\n");

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