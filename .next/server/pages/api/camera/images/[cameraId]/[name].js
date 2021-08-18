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
exports.id = "pages/api/camera/images/[cameraId]/[name]";
exports.ids = ["pages/api/camera/images/[cameraId]/[name]"];
exports.modules = {

/***/ "./pages/api/camera/images/[cameraId]/[name].ts":
/*!******************************************************!*\
  !*** ./pages/api/camera/images/[cameraId]/[name].ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const camera = global.cameraList[String(req.query.cameraId)];\n  const image = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(camera.config.save.path, req.query.name));\n\n  if (image) {\n    res.status(200).setHeader(\"Content-Type\", \"image/jpeg\");\n    res.send(image);\n  } else res.status(404).send(\"\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9pbWFnZXMvW2NhbWVyYUlkXS9bbmFtZV0udHM/NzBjYSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJjYW1lcmEiLCJnbG9iYWwiLCJjYW1lcmFMaXN0IiwiU3RyaW5nIiwicXVlcnkiLCJjYW1lcmFJZCIsImltYWdlIiwiZnMiLCJwYXRoIiwiY29uZmlnIiwic2F2ZSIsIm5hbWUiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsTUFBTSxDQUFDTCxHQUFHLENBQUNNLEtBQUosQ0FBVUMsUUFBWCxDQUF4QixDQUFmO0FBRUEsUUFBTUMsS0FBSyxHQUFHQyxzREFBQSxDQUNaQyxnREFBQSxDQUFVUixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkYsSUFBN0IsRUFBbUNWLEdBQUcsQ0FBQ00sS0FBSixDQUFVTyxJQUE3QyxDQURZLENBQWQ7O0FBSUEsTUFBSUwsS0FBSixFQUFXO0FBQ1RQLE9BQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLFNBQWhCLENBQTBCLGNBQTFCLEVBQTBDLFlBQTFDO0FBRUFkLE9BQUcsQ0FBQ2UsSUFBSixDQUFTUixLQUFUO0FBQ0QsR0FKRCxNQUlPUCxHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCRSxJQUFoQixDQUFxQixFQUFyQjtBQUNSLENBWkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FtZXJhL2ltYWdlcy9bY2FtZXJhSWRdL1tuYW1lXS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGNhbWVyYSA9IGdsb2JhbC5jYW1lcmFMaXN0W1N0cmluZyhyZXEucXVlcnkuY2FtZXJhSWQpXTtcblxuICBjb25zdCBpbWFnZSA9IGZzLnJlYWRGaWxlU3luYyhcbiAgICBwYXRoLmpvaW4oY2FtZXJhLmNvbmZpZy5zYXZlLnBhdGgsIHJlcS5xdWVyeS5uYW1lKVxuICApO1xuXG4gIGlmIChpbWFnZSkge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJpbWFnZS9qcGVnXCIpO1xuXG4gICAgcmVzLnNlbmQoaW1hZ2UpO1xuICB9IGVsc2UgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/camera/images/[cameraId]/[name].ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/camera/images/[cameraId]/[name].ts"));
module.exports = __webpack_exports__;

})();