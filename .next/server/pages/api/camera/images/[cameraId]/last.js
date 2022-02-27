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
exports.id = "pages/api/camera/images/[cameraId]/last";
exports.ids = ["pages/api/camera/images/[cameraId]/last"];
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

/***/ "./pages/api/camera/images/[cameraId]/last.ts":
/*!****************************************************!*\
  !*** ./pages/api/camera/images/[cameraId]/last.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../server/camera */ \"./server/camera.js\");\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_camera__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const image = (0,_server_camera__WEBPACK_IMPORTED_MODULE_0__.getJpg)(String(req.query.cameraId));\n\n  if (image) {\n    res.status(200).setHeader(\"Content-Type\", \"image/jpeg\");\n    res.send(image);\n  } else res.status(404).send(\"\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9wYWdlcy9hcGkvY2FtZXJhL2ltYWdlcy9bY2FtZXJhSWRdL2xhc3QudHM/NDEwNiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJpbWFnZSIsImdldEpwZyIsIlN0cmluZyIsInF1ZXJ5IiwiY2FtZXJhSWQiLCJzdGF0dXMiLCJzZXRIZWFkZXIiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUVBLCtEQUFlLENBQUNBLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzVELFFBQU1DLEtBQUssR0FBR0Msc0RBQU0sQ0FBQ0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsUUFBWCxDQUFQLENBQXBCOztBQUVBLE1BQUlKLEtBQUosRUFBVztBQUNURCxPQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxTQUFoQixDQUEwQixjQUExQixFQUEwQyxZQUExQztBQUVBUCxPQUFHLENBQUNRLElBQUosQ0FBU1AsS0FBVDtBQUNELEdBSkQsTUFJT0QsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsSUFBaEIsQ0FBcUIsRUFBckI7QUFDUixDQVJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhbWVyYS9pbWFnZXMvW2NhbWVyYUlkXS9sYXN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRKcGcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc2VydmVyL2NhbWVyYVwiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBnZXRKcGcoU3RyaW5nKHJlcS5xdWVyeS5jYW1lcmFJZCkpO1xuXG4gIGlmIChpbWFnZSkge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJpbWFnZS9qcGVnXCIpO1xuXG4gICAgcmVzLnNlbmQoaW1hZ2UpO1xuICB9IGVsc2UgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/camera/images/[cameraId]/last.ts\n");

/***/ }),

/***/ "./server/camera.js":
/*!**************************!*\
  !*** ./server/camera.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst logger = __webpack_require__(/*! ../lib/logger */ \"./lib/logger.js\");\n\nconst {\n  getCameraInstance\n} = __webpack_require__(/*! ./modules/camera */ \"./server/modules/camera/index.js\");\n\nconst getConfig = __webpack_require__(/*! ../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst config = getConfig();\nconst cameraTemplate = {\n  image: null,\n  time: null,\n  busy: false,\n  lastRequest: null,\n  ir: {\n    on: null,\n    time: null,\n    image: null,\n    queued: false\n  }\n};\n\nconst initializeCameras = () => {\n  config.camera.forEach((oneCamera, index) => {\n    setupCamera(String(index), oneCamera);\n  });\n};\n\nconst setupCamera = (id, cameraConfig) => {\n  global.cameraList[id] = _objectSpread(_objectSpread({}, cameraTemplate), {}, {\n    config: cameraConfig,\n    cameraInstance: getCameraInstance(cameraConfig)\n  });\n  logger.info(`[CAMERA] Setup new camera ${id} «${cameraConfig.name}» (${cameraConfig.module})`);\n  takePhoto(id);\n};\n\nconst takePhoto = async (id, manualTake = false) => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  const cameraInstance = camera.cameraInstance;\n  camera.lastRequest = moment();\n\n  if (camera.busy) {\n    logger.warn(\"[CAMERA] Can not take picture : Camera is busy.\");\n    return false;\n  } else {\n    camera.busy = true;\n    logger.debug(`[CAMERA] Taking a picture (${id} - ${camera.config.name})`);\n    let takingPicture = moment();\n    return cameraInstance.takePicture().then(photo => {\n      var _camera$config$save;\n\n      const newPicTime = moment().format(\"X\");\n      let fileName;\n\n      if ((_camera$config$save = camera.config.save) !== null && _camera$config$save !== void 0 && _camera$config$save.path) {\n        fs.mkdirSync(camera.config.save.path, {\n          recursive: true\n        });\n        fileName = path.join(camera.config.save.path, `${newPicTime}.jpg`);\n        fs.writeFileSync(path.join(camera.config.save.path, `${newPicTime}.jpg`), photo);\n      }\n\n      camera.image = photo;\n      camera.time = newPicTime;\n      camera.busy = false; // Statistics about camera duration\n\n      let tookPicture = moment();\n      let duration = tookPicture.diff(takingPicture);\n      logger.debug(`[CAMERA] Took a picture - ${duration} ms`); // Schedule taking the next picture\n\n      if (camera.lastRequest && camera.config.intervalSec > 0 && !manualTake) {\n        setTimeout(() => {\n          takePhoto(id);\n        }, camera.config.intervalSec * 1000);\n      }\n\n      return true;\n    }).catch(logger.error);\n  }\n};\n\nconst getJpg = id => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  return camera.image;\n};\n\nmodule.exports = {\n  initializeCameras,\n  getJpg,\n  takePhoto\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9zZXJ2ZXIvY2FtZXJhLmpzPzYzOGYiXSwibmFtZXMiOlsibW9tZW50IiwicmVxdWlyZSIsImxvZ2dlciIsImdldENhbWVyYUluc3RhbmNlIiwiZ2V0Q29uZmlnIiwicGF0aCIsImZzIiwiY29uZmlnIiwiY2FtZXJhVGVtcGxhdGUiLCJpbWFnZSIsInRpbWUiLCJidXN5IiwibGFzdFJlcXVlc3QiLCJpciIsIm9uIiwicXVldWVkIiwiaW5pdGlhbGl6ZUNhbWVyYXMiLCJjYW1lcmEiLCJmb3JFYWNoIiwib25lQ2FtZXJhIiwiaW5kZXgiLCJzZXR1cENhbWVyYSIsIlN0cmluZyIsImlkIiwiY2FtZXJhQ29uZmlnIiwiZ2xvYmFsIiwiY2FtZXJhTGlzdCIsImNhbWVyYUluc3RhbmNlIiwiaW5mbyIsIm5hbWUiLCJtb2R1bGUiLCJ0YWtlUGhvdG8iLCJtYW51YWxUYWtlIiwid2FybiIsImRlYnVnIiwidGFraW5nUGljdHVyZSIsInRha2VQaWN0dXJlIiwidGhlbiIsInBob3RvIiwibmV3UGljVGltZSIsImZvcm1hdCIsImZpbGVOYW1lIiwic2F2ZSIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsImpvaW4iLCJ3cml0ZUZpbGVTeW5jIiwidG9va1BpY3R1cmUiLCJkdXJhdGlvbiIsImRpZmYiLCJpbnRlcnZhbFNlYyIsInNldFRpbWVvdXQiLCJjYXRjaCIsImVycm9yIiwiZ2V0SnBnIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxzQ0FBRCxDQUF0Qjs7QUFDQSxNQUFNO0FBQUVFO0FBQUYsSUFBd0JGLG1CQUFPLENBQUMsMERBQUQsQ0FBckM7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHSCxtQkFBTyxDQUFDLDRDQUFELENBQXpCOztBQUNBLE1BQU1JLElBQUksR0FBR0osbUJB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QXFCLE1BQU0sQ0FBQ3lCLE9BQVAsR0FBaUI7QUFBRXZDLG1CQUFGO0FBQXFCc0MsUUFBckI7QUFBNkJ2QjtBQUE3QixDQUFqQiIsImZpbGUiOiIuL3NlcnZlci9jYW1lcmEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZShcIi4uL2xpYi9sb2dnZXJcIik7XG5jb25zdCB7IGdldENhbWVyYUluc3RhbmNlIH0gPSByZXF1aXJlKFwiLi9tb2R1bGVzL2NhbWVyYVwiKTtcbmNvbnN0IGdldENvbmZpZyA9IHJlcXVpcmUoXCIuLi9saWIvZ2V0Q29uZmlnXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5cbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuXG5jb25zdCBjYW1lcmFUZW1wbGF0ZSA9IHtcbiAgaW1hZ2U6IG51bGwsXG4gIHRpbWU6IG51bGwsXG4gIGJ1c3k6IGZhbHNlLFxuICBsYXN0UmVxdWVzdDogbnVsbCxcbiAgaXI6IHtcbiAgICBvbjogbnVsbCxcbiAgICB0aW1lOiBudWxsLFxuICAgIGltYWdlOiBudWxsLFxuICAgIHF1ZXVlZDogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBpbml0aWFsaXplQ2FtZXJhcyA9ICgpID0+IHtcbiAgY29uZmlnLmNhbWVyYS5mb3JFYWNoKChvbmVDYW1lcmEsIGluZGV4KSA9PiB7XG4gICAgc2V0dXBDYW1lcmEoU3RyaW5nKGluZGV4KSwgb25lQ2FtZXJhKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXR1cENhbWVyYSA9IChpZCwgY2FtZXJhQ29uZmlnKSA9PiB7XG4gIGdsb2JhbC5jYW1lcmFMaXN0W2lkXSA9IHtcbiAgICAuLi5jYW1lcmFUZW1wbGF0ZSxcbiAgICBjb25maWc6IGNhbWVyYUNvbmZpZyxcbiAgICBjYW1lcmFJbnN0YW5jZTogZ2V0Q2FtZXJhSW5zdGFuY2UoY2FtZXJhQ29uZmlnKSxcbiAgfTtcblxuICBsb2dnZXIuaW5mbyhcbiAgICBgW0NBTUVSQV0gU2V0dXAgbmV3IGNhbWVyYSAke2lkfSDCqyR7Y2FtZXJhQ29uZmlnLm5hbWV9wrsgKCR7Y2FtZXJhQ29uZmlnLm1vZHVsZX0pYFxuICApO1xuXG4gIHRha2VQaG90byhpZCk7XG59O1xuXG5jb25zdCB0YWtlUGhvdG8gPSBhc3luYyAoaWQsIG1hbnVhbFRha2UgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBjYW1lcmEgPSBnbG9iYWwuY2FtZXJhTGlzdFtpZF07XG5cbiAgaWYgKCFjYW1lcmEpIHtcbiAgICBsb2dnZXIud2FybihgW0NBTUVSQV0gQ2FtZXJhIG5vdCBmb3VuZCAke2lkfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNhbWVyYUluc3RhbmNlID0gY2FtZXJhLmNhbWVyYUluc3RhbmNlO1xuXG4gIGNhbWVyYS5sYXN0UmVxdWVzdCA9IG1vbWVudCgpO1xuXG4gIGlmIChjYW1lcmEuYnVzeSkge1xuICAgIGxvZ2dlci53YXJuKFwiW0NBTUVSQV0gQ2FuIG5vdCB0YWtlIHBpY3R1cmUgOiBDYW1lcmEgaXMgYnVzeS5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNhbWVyYS5idXN5ID0gdHJ1ZTtcbiAgICBsb2dnZXIuZGVidWcoYFtDQU1FUkFdIFRha2luZyBhIHBpY3R1cmUgKCR7aWR9IC0gJHtjYW1lcmEuY29uZmlnLm5hbWV9KWApO1xuICAgIGxldCB0YWtpbmdQaWN0dXJlID0gbW9tZW50KCk7XG5cbiAgICByZXR1cm4gY2FtZXJhSW5zdGFuY2VcbiAgICAgIC50YWtlUGljdHVyZSgpXG4gICAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGljVGltZSA9IG1vbWVudCgpLmZvcm1hdChcIlhcIik7XG5cbiAgICAgICAgbGV0IGZpbGVOYW1lO1xuXG4gICAgICAgIGlmIChjYW1lcmEuY29uZmlnLnNhdmU/LnBhdGgpIHtcbiAgICAgICAgICBmcy5ta2RpclN5bmMoY2FtZXJhLmNvbmZpZy5zYXZlLnBhdGgsIHtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZpbGVOYW1lID0gcGF0aC5qb2luKGNhbWVyYS5jb25maWcuc2F2ZS5wYXRoLCBgJHtuZXdQaWNUaW1lfS5qcGdgKTtcblxuICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoXG4gICAgICAgICAgICBwYXRoLmpvaW4oY2FtZXJhLmNvbmZpZy5zYXZlLnBhdGgsIGAke25ld1BpY1RpbWV9LmpwZ2ApLFxuICAgICAgICAgICAgcGhvdG9cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FtZXJhLmltYWdlID0gcGhvdG87XG4gICAgICAgIGNhbWVyYS50aW1lID0gbmV3UGljVGltZTtcbiAgICAgICAgY2FtZXJhLmJ1c3kgPSBmYWxzZTtcblxuICAgICAgICAvLyBTdGF0aXN0aWNzIGFib3V0IGNhbWVyYSBkdXJhdGlvblxuICAgICAgICBsZXQgdG9va1BpY3R1cmUgPSBtb21lbnQoKTtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gdG9va1BpY3R1cmUuZGlmZih0YWtpbmdQaWN0dXJlKTtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBbQ0FNRVJBXSBUb29rIGEgcGljdHVyZSAtICR7ZHVyYXRpb259IG1zYCk7XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdGFraW5nIHRoZSBuZXh0IHBpY3R1cmVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbWVyYS5sYXN0UmVxdWVzdCAmJlxuICAgICAgICAgIGNhbWVyYS5jb25maWcuaW50ZXJ2YWxTZWMgPiAwICYmXG4gICAgICAgICAgIW1hbnVhbFRha2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0YWtlUGhvdG8oaWQpO1xuICAgICAgICAgIH0sIGNhbWVyYS5jb25maWcuaW50ZXJ2YWxTZWMgKiAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChsb2dnZXIuZXJyb3IpO1xuICB9XG59O1xuXG5jb25zdCBnZXRKcGcgPSAoaWQpID0+IHtcbiAgY29uc3QgY2FtZXJhID0gZ2xvYmFsLmNhbWVyYUxpc3RbaWRdO1xuXG4gIGlmICghY2FtZXJhKSB7XG4gICAgbG9nZ2VyLndhcm4oYFtDQU1FUkFdIENhbWVyYSBub3QgZm91bmQgJHtpZH1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FtZXJhLmltYWdlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXRpYWxpemVDYW1lcmFzLCBnZXRKcGcsIHRha2VQaG90byB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/camera.js\n");

/***/ }),

/***/ "./server/modules/camera/CameraAbstract.js":
/*!*************************************************!*\
  !*** ./server/modules/camera/CameraAbstract.js ***!
  \*************************************************/
/***/ (function(module) {

eval("class CameraAbstract {\n  constructor() {\n    // The constructor can be useful to initialize somethings\n    return null;\n  }\n\n  async takePicture() {// Take a picture and return a buffer containing the image\n  }\n\n}\n\nmodule.exports = CameraAbstract;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvQ2FtZXJhQWJzdHJhY3QuanM/MmQzNiJdLCJuYW1lcyI6WyJDYW1lcmFBYnN0cmFjdCIsImNvbnN0cnVjdG9yIiwidGFrZVBpY3R1cmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxjQUFOLENBQXFCO0FBQ25CQyxFQUFBQSxXQUFXLEdBQUc7QUFDWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFFBQU1DLFdBQU4sR0FBb0IsQ0FDbEI7QUFDRDs7QUFQa0I7O0FBVXJCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLGNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FtZXJhQWJzdHJhY3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBUaGUgY29uc3RydWN0b3IgY2FuIGJlIHVzZWZ1bCB0byBpbml0aWFsaXplIHNvbWV0aGluZ3NcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGFzeW5jIHRha2VQaWN0dXJlKCkge1xuICAgIC8vIFRha2UgYSBwaWN0dXJlIGFuZCByZXR1cm4gYSBidWZmZXIgY29udGFpbmluZyB0aGUgaW1hZ2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYUFic3RyYWN0XG4iXSwiZmlsZSI6Ii4vc2VydmVyL21vZHVsZXMvY2FtZXJhL0NhbWVyYUFic3RyYWN0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/modules/camera/CameraAbstract.js\n");

/***/ }),

/***/ "./server/modules/camera/RaspberryPiWebcam.js":
/*!****************************************************!*\
  !*** ./server/modules/camera/RaspberryPiWebcam.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst CameraAbstract = __webpack_require__(/*! ./CameraAbstract */ \"./server/modules/camera/CameraAbstract.js\");\n\nconst cameraConfig = {\n  raspistill: {\n    rotation: 180,\n    noFileSave: true,\n    encoding: \"jpg\",\n    width: 1296,\n    height: 972,\n    quality: 50\n  }\n};\n\nclass RaspberryPiWebcam extends CameraAbstract {\n  constructor() {\n    super();\n\n    _defineProperty(this, \"cam\", void 0);\n\n    const Raspistill = __webpack_require__(/*! node-raspistill */ \"node-raspistill\").Raspistill;\n\n    this.cam = new Raspistill(cameraConfig.raspistill);\n  }\n\n  async takePicture() {\n    return this.cam.takePhoto();\n  }\n\n}\n\nmodule.exports = RaspberryPiWebcam;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvUmFzcGJlcnJ5UGlXZWJjYW0uanM/MWI1YSJdLCJuYW1lcyI6WyJDYW1lcmFBYnN0cmFjdCIsInJlcXVpcmUiLCJjYW1lcmFDb25maWciLCJyYXNwaXN0aWxsIiwicm90YXRpb24iLCJub0ZpbGVTYXZlIiwiZW5jb2RpbmciLCJ3aWR0aCIsImhlaWdodCIsInF1YWxpdHkiLCJSYXNwYmVycnlQaVdlYmNhbSIsImNvbnN0cnVjdG9yIiwiUmFzcGlzdGlsbCIsImNhbSIsInRha2VQaWN0dXJlIiwidGFrZVBob3RvIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsbUVBQUQsQ0FBOUI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxZQUFVLEVBQUU7QUFDVkMsWUFBUSxFQUFFLEdBREE7QUFFVkMsY0FBVSxFQUFFLElBRkY7QUFHVkMsWUFBUSxFQUFFLEtBSEE7QUFJVkMsU0FBSyxFQUFFLElBSkc7QUFLVkMsVUFBTSxFQUFFLEdBTEU7QUFNVkMsV0FBTyxFQUFFO0FBTkM7QUFETyxDQUFyQjs7QUFXQSxNQUFNQyxpQkFBTixTQUFnQ1YsY0FBaEMsQ0FBK0M7QUFHN0NXLGFBQVcsR0FBRztBQUNaOztBQURZOztBQUdaLFVBQU1DLFVBQVUsR0FBR1gsd0VBQW5COztBQUNBLFNBQUtZLEdBQUwsR0FBVyxJQUFJRCxVQUFKLENBQWVWLFlBQVksQ0FBQ0MsVUFBNUIsQ0FBWDtBQUNEOztBQUVELFFBQU1XLFdBQU4sR0FBb0I7QUFDbEIsV0FBTyxLQUFLRCxHQUFMLENBQVNFLFNBQVQsRUFBUDtBQUNEOztBQVo0Qzs7QUFlL0NDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsaUJBQWpCIiwiZmlsZSI6Ii4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1Jhc3BiZXJyeVBpV2ViY2FtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FtZXJhQWJzdHJhY3QgPSByZXF1aXJlKFwiLi9DYW1lcmFBYnN0cmFjdFwiKTtcblxuY29uc3QgY2FtZXJhQ29uZmlnID0ge1xuICByYXNwaXN0aWxsOiB7XG4gICAgcm90YXRpb246IDE4MCxcbiAgICBub0ZpbGVTYXZlOiB0cnVlLFxuICAgIGVuY29kaW5nOiBcImpwZ1wiLFxuICAgIHdpZHRoOiAxMjk2LFxuICAgIGhlaWdodDogOTcyLFxuICAgIHF1YWxpdHk6IDUwLFxuICB9LFxufTtcblxuY2xhc3MgUmFzcGJlcnJ5UGlXZWJjYW0gZXh0ZW5kcyBDYW1lcmFBYnN0cmFjdCB7XG4gIGNhbTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgUmFzcGlzdGlsbCA9IHJlcXVpcmUoXCJub2RlLXJhc3Bpc3RpbGxcIikuUmFzcGlzdGlsbDtcbiAgICB0aGlzLmNhbSA9IG5ldyBSYXNwaXN0aWxsKGNhbWVyYUNvbmZpZy5yYXNwaXN0aWxsKTtcbiAgfVxuXG4gIGFzeW5jIHRha2VQaWN0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbS50YWtlUGhvdG8oKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJhc3BiZXJyeVBpV2ViY2FtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/modules/camera/RaspberryPiWebcam.js\n");

/***/ }),

/***/ "./server/modules/camera/UsbWebcam.js":
/*!********************************************!*\
  !*** ./server/modules/camera/UsbWebcam.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst CameraAbstract = __webpack_require__(/*! ./CameraAbstract */ \"./server/modules/camera/CameraAbstract.js\");\n\nconst {\n  exec\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\n\nclass UsbWebcam extends CameraAbstract {\n  constructor(camera) {\n    var _camera$options;\n\n    super();\n\n    _defineProperty(this, \"cameraConfig\", void 0);\n\n    if (!((_camera$options = camera.options) !== null && _camera$options !== void 0 && _camera$options.device)) return;\n    this.cameraConfig = camera;\n  }\n\n  async takePicture() {\n    const fileName = `/tmp/shot-${md5(this.cameraConfig.options.device)}.jpg`;\n    return new Promise((resolve, reject) => {\n      var _this$cameraConfig$op, _this$cameraConfig$op2, _this$cameraConfig$op3;\n\n      const resolution = (_this$cameraConfig$op = this.cameraConfig.options) !== null && _this$cameraConfig$op !== void 0 && _this$cameraConfig$op.width && (_this$cameraConfig$op2 = this.cameraConfig.options) !== null && _this$cameraConfig$op2 !== void 0 && _this$cameraConfig$op2.height ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}` : \"\";\n      const device = (_this$cameraConfig$op3 = this.cameraConfig.options) !== null && _this$cameraConfig$op3 !== void 0 && _this$cameraConfig$op3.device ? `-d ${this.cameraConfig.options.device}` : \"\";\n      const commandLine = `fswebcam ${device} ${resolution} -S 20 --no-banner --jpeg -1 ${fileName}`;\n      exec(commandLine, error => {\n        if (error) reject(error);else {\n          fs.readFile(fileName, (err, image) => {\n            if (err) reject(err);else resolve(image);\n          });\n        }\n      });\n    });\n  }\n\n}\n\nmodule.exports = UsbWebcam;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvVXNiV2ViY2FtLmpzP2JmZTAiXSwibmFtZXMiOlsiQ2FtZXJhQWJzdHJhY3QiLCJyZXF1aXJlIiwiZXhlYyIsImZzIiwibWQ1IiwiVXNiV2ViY2FtIiwiY29uc3RydWN0b3IiLCJjYW1lcmEiLCJvcHRpb25zIiwiZGV2aWNlIiwiY2FtZXJhQ29uZmlnIiwidGFrZVBpY3R1cmUiLCJmaWxlTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzb2x1dGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29tbWFuZExpbmUiLCJlcnJvciIsInJlYWRGaWxlIiwiZXJyIiwiaW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyxtRUFBRCxDQUE5Qjs7QUFDQSxNQUFNO0FBQUVDO0FBQUYsSUFBV0QsbUJBQU8sQ0FBQyxvQ0FBRCxDQUF4Qjs7QUFDQSxNQUFNRSxFQUFFLEdBQUdGLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFDQSxNQUFNRyxHQUFHLEdBQUdILG1CQUFPLENBQUMsZ0JBQUQsQ0FBbkI7O0FBRUEsTUFBTUksU0FBTixTQUF3QkwsY0FBeEIsQ0FBdUM7QUFHckNNLGFBQVcsQ0FBQ0MsTUFBRCxFQUFTO0FBQUE7O0FBQ2xCOztBQURrQjs7QUFHbEIsUUFBSSxxQkFBQ0EsTUFBTSxDQUFDQyxPQUFSLDRDQUFDLGdCQUFnQkMsTUFBakIsQ0FBSixFQUE2QjtBQUU3QixTQUFLQyxZQUFMLEdBQW9CSCxNQUFwQjtBQUNEOztBQUVELFFBQU1JLFdBQU4sR0FBb0I7QUFDbEIsVUFBTUMsUUFBUSxHQUFJLGFBQVlSLEdBQUcsQ0FBQyxLQUFLTSxZQUFMLENBQWtCRixPQUFsQixDQUEwQkMsTUFBM0IsQ0FBbUMsTUFBcEU7QUFFQSxXQUFPLElBQUlJLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFBQTs7QUFDdEMsWUFBTUMsVUFBVSxHQUNkLDhCQUFLTixZQUFMLENBQWtCRixPQUFsQix3RUFBMkJTLEtBQTNCLDhCQUFvQyxLQUFLUCxZQUFMLENBQWtCRixPQUF0RCxtREFBb0MsdUJBQTJCVSxNQUEvRCxHQUNLLE1BQUssS0FBS1IsWUFBTCxDQUFrQkYsT0FBbEIsQ0FBMEJTLEtBQU0sSUFBRyxLQUFLUCxZQUFMLENBQWtCRixPQUFsQixDQUEwQlUsTUFBTyxFQUQ5RSxHQUVJLEVBSE47QUFJQSxZQUFNVCxNQUFNLEdBQUcsK0JBQUtDLFlBQUwsQ0FBa0JGLE9BQWxCLDBFQUEyQkMsTUFBM0IsR0FDVixNQUFLLEtBQUtDLFlBQUwsQ0FBa0JGLE9BQWxCLENBQTBCQyxNQUFPLEVBRDVCLEdBRVgsRUFGSjtBQUlBLFlBQU1VLFdBQVcsR0FBSSxZQUFXVixNQUFPLElBQUdPLFVBQVcsZ0NBQStCSixRQUFTLEVBQTdGO0FBRUFWLFVBQUksQ0FBQ2lCLFdBQUQsRUFBZUMsS0FBRCxJQUFXO0FBQzNCLFlBQUlBLEtBQUosRUFBV0wsTUFBTSxDQUFDSyxLQUFELENBQU4sQ0FBWCxLQUNLO0FBQ0hqQixZQUFFLENBQUNrQixRQUFILENBQVlULFFBQVosRUFBc0IsQ0FBQ1UsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3BDLGdCQUFJRCxHQUFKLEVBQVNQLE1BQU0sQ0FBQ08sR0FBRCxDQUFOLENBQVQsS0FDS1IsT0FBTyxDQUFDUyxLQUFELENBQVA7QUFDTixXQUhEO0FBSUQ7QUFDRixPQVJHLENBQUo7QUFTRCxLQXBCTSxDQUFQO0FBcUJEOztBQW5Db0M7O0FBc0N2Q0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEIsU0FBakIiLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvVXNiV2ViY2FtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FtZXJhQWJzdHJhY3QgPSByZXF1aXJlKFwiLi9DYW1lcmFBYnN0cmFjdFwiKTtcbmNvbnN0IHsgZXhlYyB9ID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmNvbnN0IG1kNSA9IHJlcXVpcmUoXCJtZDVcIik7XG5cbmNsYXNzIFVzYldlYmNhbSBleHRlbmRzIENhbWVyYUFic3RyYWN0IHtcbiAgY2FtZXJhQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNhbWVyYSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoIWNhbWVyYS5vcHRpb25zPy5kZXZpY2UpIHJldHVybjtcblxuICAgIHRoaXMuY2FtZXJhQ29uZmlnID0gY2FtZXJhO1xuICB9XG5cbiAgYXN5bmMgdGFrZVBpY3R1cmUoKSB7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgL3RtcC9zaG90LSR7bWQ1KHRoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnMuZGV2aWNlKX0uanBnYDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXNvbHV0aW9uID1cbiAgICAgICAgdGhpcy5jYW1lcmFDb25maWcub3B0aW9ucz8ud2lkdGggJiYgdGhpcy5jYW1lcmFDb25maWcub3B0aW9ucz8uaGVpZ2h0XG4gICAgICAgICAgPyBgLXIgJHt0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLndpZHRofXgke3RoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnMuaGVpZ2h0fWBcbiAgICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBkZXZpY2UgPSB0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zPy5kZXZpY2VcbiAgICAgICAgPyBgLWQgJHt0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLmRldmljZX1gXG4gICAgICAgIDogXCJcIjtcblxuICAgICAgY29uc3QgY29tbWFuZExpbmUgPSBgZnN3ZWJjYW0gJHtkZXZpY2V9ICR7cmVzb2x1dGlvbn0gLVMgMjAgLS1uby1iYW5uZXIgLS1qcGVnIC0xICR7ZmlsZU5hbWV9YDtcblxuICAgICAgZXhlYyhjb21tYW5kTGluZSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZnMucmVhZEZpbGUoZmlsZU5hbWUsIChlcnIsIGltYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIGVsc2UgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNiV2ViY2FtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/modules/camera/UsbWebcam.js\n");

/***/ }),

/***/ "./server/modules/camera/index.js":
/*!****************************************!*\
  !*** ./server/modules/camera/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("const RaspberryPiWebcam = __webpack_require__(/*! ./RaspberryPiWebcam */ \"./server/modules/camera/RaspberryPiWebcam.js\");\n\nconst UsbWebcam = __webpack_require__(/*! ./UsbWebcam */ \"./server/modules/camera/UsbWebcam.js\");\n\nconst getCameraInstance = camera => {\n  switch (camera.module) {\n    case \"RaspberryPiWebcam\":\n      return new RaspberryPiWebcam(camera);\n\n    case \"UsbWebcam\":\n      return new UsbWebcam(camera);\n  }\n};\n\nexports.getCameraInstance = getCameraInstance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1rb3Rrb3QvLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvaW5kZXguanM/YTMzMSJdLCJuYW1lcyI6WyJSYXNwYmVycnlQaVdlYmNhbSIsInJlcXVpcmUiLCJVc2JXZWJjYW0iLCJnZXRDYW1lcmFJbnN0YW5jZSIsImNhbWVyYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLGlCQUFpQixHQUFHQyxtQkFBTyxDQUFDLHlFQUFELENBQWpDOztBQUNBLE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyx5REFBRCxDQUF6Qjs7QUFFQSxNQUFNRSxpQkFBaUIsR0FBSUMsTUFBRCxJQUFZO0FBQ3BDLFVBQVFBLE1BQU0sQ0FBQ0MsTUFBZjtBQUNFLFNBQUssbUJBQUw7QUFDRSxhQUFPLElBQUlMLGlCQUFKLENBQXNCSSxNQUF0QixDQUFQOztBQUNGLFNBQUssV0FBTDtBQUNFLGFBQU8sSUFBSUYsU0FBSixDQUFjRSxNQUFkLENBQVA7QUFKSjtBQU1ELENBUEQ7O0FBU0FFLHlCQUFBLEdBQTRCSCxpQkFBNUIiLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kdWxlcy9jYW1lcmEvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSYXNwYmVycnlQaVdlYmNhbSA9IHJlcXVpcmUoXCIuL1Jhc3BiZXJyeVBpV2ViY2FtXCIpO1xuY29uc3QgVXNiV2ViY2FtID0gcmVxdWlyZShcIi4vVXNiV2ViY2FtXCIpO1xuXG5jb25zdCBnZXRDYW1lcmFJbnN0YW5jZSA9IChjYW1lcmEpID0+IHtcbiAgc3dpdGNoIChjYW1lcmEubW9kdWxlKSB7XG4gICAgY2FzZSBcIlJhc3BiZXJyeVBpV2ViY2FtXCI6XG4gICAgICByZXR1cm4gbmV3IFJhc3BiZXJyeVBpV2ViY2FtKGNhbWVyYSk7XG4gICAgY2FzZSBcIlVzYldlYmNhbVwiOlxuICAgICAgcmV0dXJuIG5ldyBVc2JXZWJjYW0oY2FtZXJhKTtcbiAgfVxufTtcblxuZXhwb3J0cy5nZXRDYW1lcmFJbnN0YW5jZSA9IGdldENhbWVyYUluc3RhbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/modules/camera/index.js\n");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("md5");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "node-raspistill":
/*!**********************************!*\
  !*** external "node-raspistill" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("node-raspistill");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/camera/images/[cameraId]/last.ts"));
module.exports = __webpack_exports__;

})();