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
exports.id = "pages/api/camera/lastimage/[id]";
exports.ids = ["pages/api/camera/lastimage/[id]"];
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

eval("const winston = __webpack_require__(/*! winston */ \"winston\");\n\n__webpack_require__(/*! winston-daily-rotate-file */ \"winston-daily-rotate-file\");\n\nconst logger = winston.createLogger({\n  level: \"info\",\n  format: winston.format.json(),\n  transports: [new winston.transports.Console({\n    format: winston.format.simple(),\n    timestamp: true\n  })]\n});\nmodule.exports = logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vbGliL2xvZ2dlci5qcz80NWUzIl0sIm5hbWVzIjpbIndpbnN0b24iLCJyZXF1aXJlIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJmb3JtYXQiLCJqc29uIiwidHJhbnNwb3J0cyIsIkNvbnNvbGUiLCJzaW1wbGUiLCJ0aW1lc3RhbXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBdkI7O0FBQ0FBLG1CQUFPLENBQUMsNERBQUQsQ0FBUDs7QUFFQSxNQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csWUFBUixDQUFxQjtBQUNsQ0MsT0FBSyxFQUFFLE1BRDJCO0FBRWxDQyxRQUFNLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBUixDQUFlQyxJQUFmLEVBRjBCO0FBR2xDQyxZQUFVLEVBQUUsQ0FDVixJQUFJUCxPQUFPLENBQUNPLFVBQVIsQ0FBbUJDLE9BQXZCLENBQStCO0FBQzdCSCxVQUFNLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBUixDQUFlSSxNQUFmLEVBRHFCO0FBRTdCQyxhQUFTLEVBQUU7QUFGa0IsR0FBL0IsQ0FEVTtBQUhzQixDQUFyQixDQUFmO0FBV0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsTUFBakIiLCJmaWxlIjoiLi9saWIvbG9nZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2luc3RvbiA9IHJlcXVpcmUoXCJ3aW5zdG9uXCIpO1xucmVxdWlyZShcIndpbnN0b24tZGFpbHktcm90YXRlLWZpbGVcIik7XG5cbmNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHtcbiAgbGV2ZWw6IFwiaW5mb1wiLFxuICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0Lmpzb24oKSxcbiAgdHJhbnNwb3J0czogW1xuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LnNpbXBsZSgpLFxuICAgICAgdGltZXN0YW1wOiB0cnVlLFxuICAgIH0pLFxuICBdLFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nZ2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/logger.js\n");

/***/ }),

/***/ "./pages/api/camera/lastimage/[id].ts":
/*!********************************************!*\
  !*** ./pages/api/camera/lastimage/[id].ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../server/camera */ \"./server/camera.js\");\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_camera__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const image = (0,_server_camera__WEBPACK_IMPORTED_MODULE_0__.getJpg)(String(req.query.id));\n\n  if (image) {\n    res.status(200).setHeader(\"Content-Type\", \"image/jpeg\");\n    res.send(image);\n  } else res.status(404).send(\"\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9sYXN0aW1hZ2UvW2lkXS50cz8zMWZiIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImltYWdlIiwiZ2V0SnBnIiwiU3RyaW5nIiwicXVlcnkiLCJpZCIsInN0YXR1cyIsInNldEhlYWRlciIsInNlbmQiXSwibWFwcGluZ3MiOiI7OztBQUNBO0FBRUEsK0RBQWUsQ0FBQ0EsR0FBRCxFQUFzQkMsR0FBdEIsS0FBK0M7QUFDNUQsUUFBTUMsS0FBSyxHQUFHQyxzREFBTSxDQUFDQyxNQUFNLENBQUNKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxFQUFYLENBQVAsQ0FBcEI7O0FBRUEsTUFBSUosS0FBSixFQUFXO0FBQ1RELE9BQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLFNBQWhCLENBQTBCLGNBQTFCLEVBQTBDLFlBQTFDO0FBRUFQLE9BQUcsQ0FBQ1EsSUFBSixDQUFTUCxLQUFUO0FBQ0QsR0FKRCxNQUlPRCxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCRSxJQUFoQixDQUFxQixFQUFyQjtBQUNSLENBUkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FtZXJhL2xhc3RpbWFnZS9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRKcGcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmVyL2NhbWVyYVwiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBnZXRKcGcoU3RyaW5nKHJlcS5xdWVyeS5pZCkpO1xuXG4gIGlmIChpbWFnZSkge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJpbWFnZS9qcGVnXCIpO1xuXG4gICAgcmVzLnNlbmQoaW1hZ2UpO1xuICB9IGVsc2UgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/camera/lastimage/[id].ts\n");

/***/ }),

/***/ "./server/camera.js":
/*!**************************!*\
  !*** ./server/camera.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst logger = __webpack_require__(/*! ../lib/logger */ \"./lib/logger.js\");\n\nconst {\n  getCameraInstance\n} = __webpack_require__(/*! ./modules/camera */ \"./server/modules/camera/index.js\");\n\nconst getConfig = __webpack_require__(/*! ../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst config = getConfig();\nconst cameraTemplate = {\n  image: null,\n  time: null,\n  busy: false,\n  lastRequest: null,\n  ir: {\n    on: null,\n    time: null,\n    image: null,\n    queued: false\n  }\n};\n\nconst initializeCameras = () => {\n  config.camera.forEach((oneCamera, index) => {\n    setupCamera(String(index), oneCamera);\n  });\n};\n\nconst setupCamera = (id, cameraConfig) => {\n  global.cameraList[id] = _objectSpread(_objectSpread({}, cameraTemplate), {}, {\n    config: cameraConfig,\n    cameraInstance: getCameraInstance(cameraConfig)\n  });\n  logger.info(`[CAMERA] Setup new camera ${id} «${cameraConfig.name}» (${cameraConfig.module})`);\n  takePhoto(id);\n};\n\nconst takePhoto = async (id, nightVision = false) => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  const cameraInstance = camera.cameraInstance;\n  camera.lastRequest = moment();\n\n  if (camera.busy) {\n    logger.warn(\"[CAMERA] Can not take picture : Camera is busy.\");\n    return false;\n  } else {\n    /*if (nightVision && !gpioRelais.setNightVision(true)) {\n      logger.warn(`Could not turn on Night Vision`);\n    }*/\n    camera.busy = true;\n    logger.info(`[CAMERA] Taking a\" + (nightVision ? \" night vision\" : \"\") + \" picture (${camera.config.name})`);\n    let takingPicture = moment();\n    cameraInstance.takePicture().then(photo => {\n      const newPicTime = new Date();\n      camera.image = photo;\n      camera.time = newPicTime;\n      camera.busy = false; // Turn off Infrared LEDs again\n\n      /*if (nightVision && !gpioRelais.setNightVision(false)) {\n        logger.warn(\"Error when turning night vision off\");\n      }*/\n      // Statistics about camera duration\n\n      let tookPicture = moment();\n      let duration = tookPicture.diff(takingPicture);\n      logger.debug(`[CAMERA] Took a ${nightVision ? \"night vision \" : \"\"}picture - ${duration} ms`); // Schedule taking the next picture\n\n      if (camera.lastRequest && camera.config.intervalSec > 0) {\n        setTimeout(() => {\n          takePhoto(id);\n        }, camera.config.intervalSec * 1000);\n      }\n    }).catch(logger.error);\n    return true;\n  }\n};\n\nconst getJpg = id => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  return camera.image;\n};\n\nmodule.exports = {\n  initializeCameras,\n  getJpg\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL2NhbWVyYS5qcz82MzhmIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJsb2dnZXIiLCJnZXRDYW1lcmFJbnN0YW5jZSIsImdldENvbmZpZyIsImNvbmZpZyIsImNhbWVyYVRlbXBsYXRlIiwiaW1hZ2UiLCJ0aW1lIiwiYnVzeSIsImxhc3RSZXF1ZXN0IiwiaXIiLCJvbiIsInF1ZXVlZCIsImluaXRpYWxpemVDYW1lcmFzIiwiY2FtZXJhIiwiZm9yRWFjaCIsIm9uZUNhbWVyYSIsImluZGV4Iiwic2V0dXBDYW1lcmEiLCJTdHJpbmciLCJpZCIsImNhbWVyYUNvbmZpZyIsImdsb2JhbCIsImNhbWVyYUxpc3QiLCJjYW1lcmFJbnN0YW5jZSIsImluZm8iLCJuYW1lIiwibW9kdWxlIiwidGFrZVBob3RvIiwibmlnaHRWaXNpb24iLCJ3YXJuIiwidGFraW5nUGljdHVyZSIsInRha2VQaWN0dXJlIiwidGhlbiIsInBob3RvIiwibmV3UGljVGltZSIsIkRhdGUiLCJ0b29rUGljdHVyZSIsImR1cmF0aW9uIiwiZGlmZiIsImRlYnVnIiwiaW50ZXJ2YWxTZWMiLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJlcnJvciIsImdldEpwZyIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsc0NBQUQsQ0FBdEI7O0FBQ0EsTUFBTTtBQUFFRTtBQUFGLElBQXdCRixtQkFBTyxDQUFDLDBEQUFELENBQXJDOztBQUNBLE1BQU1HLFNBQVMsR0FBR0gsbUJBQU8sQ0FBQyw0Q0FBRCxDQUF6Qjs7QUFFQSxNQUFNSSxNQUFNLEdBQUdELFNBQVMsRUFBeEI7QUFFQSxNQUFNRSxjQUFjLEdBQUc7QUFDckJDLE9BQUssRUFBRSxJQURjO0FBRXJCQyxNQUFJLEVBQUUsSUFGZTtBQUdyQkMs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QU0sQ0FBQzJDLEtBOUJoQjtBQWdDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBNUREOztBQThEQSxNQUFNQyxNQUFNLEdBQUl6QixFQUFELElBQVE7QUFDckIsUUFBTU4sTUFBTSxHQUFHUSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JILEVBQWxCLENBQWY7O0FBRUEsTUFBSSxDQUFDTixNQUFMLEVBQWE7QUFDWGIsVUFBTSxDQUFDNkIsSUFBUCxDQUFhLDZCQUE0QlYsRUFBRyxFQUE1QztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9OLE1BQU0sQ0FBQ1IsS0FBZDtBQUNELENBVEQ7O0FBV0FxQixNQUFNLENBQUNtQixPQUFQLEdBQWlCO0FBQUVqQyxtQkFBRjtBQUFxQmdDO0FBQXJCLENBQWpCIiwiZmlsZSI6Ii4vc2VydmVyL2NhbWVyYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5jb25zdCBsb2dnZXIgPSByZXF1aXJlKFwiLi4vbGliL2xvZ2dlclwiKTtcbmNvbnN0IHsgZ2V0Q2FtZXJhSW5zdGFuY2UgfSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvY2FtZXJhXCIpO1xuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZShcIi4uL2xpYi9nZXRDb25maWdcIik7XG5cbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuXG5jb25zdCBjYW1lcmFUZW1wbGF0ZSA9IHtcbiAgaW1hZ2U6IG51bGwsXG4gIHRpbWU6IG51bGwsXG4gIGJ1c3k6IGZhbHNlLFxuICBsYXN0UmVxdWVzdDogbnVsbCxcbiAgaXI6IHtcbiAgICBvbjogbnVsbCxcbiAgICB0aW1lOiBudWxsLFxuICAgIGltYWdlOiBudWxsLFxuICAgIHF1ZXVlZDogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBpbml0aWFsaXplQ2FtZXJhcyA9ICgpID0+IHtcbiAgY29uZmlnLmNhbWVyYS5mb3JFYWNoKChvbmVDYW1lcmEsIGluZGV4KSA9PiB7XG4gICAgc2V0dXBDYW1lcmEoU3RyaW5nKGluZGV4KSwgb25lQ2FtZXJhKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXR1cENhbWVyYSA9IChpZCwgY2FtZXJhQ29uZmlnKSA9PiB7XG4gIGdsb2JhbC5jYW1lcmFMaXN0W2lkXSA9IHtcbiAgICAuLi5jYW1lcmFUZW1wbGF0ZSxcbiAgICBjb25maWc6IGNhbWVyYUNvbmZpZyxcbiAgICBjYW1lcmFJbnN0YW5jZTogZ2V0Q2FtZXJhSW5zdGFuY2UoY2FtZXJhQ29uZmlnKSxcbiAgfTtcblxuICBsb2dnZXIuaW5mbyhcbiAgICBgW0NBTUVSQV0gU2V0dXAgbmV3IGNhbWVyYSAke2lkfSDCqyR7Y2FtZXJhQ29uZmlnLm5hbWV9wrsgKCR7Y2FtZXJhQ29uZmlnLm1vZHVsZX0pYFxuICApO1xuXG4gIHRha2VQaG90byhpZCk7XG59O1xuXG5jb25zdCB0YWtlUGhvdG8gPSBhc3luYyAoaWQsIG5pZ2h0VmlzaW9uID0gZmFsc2UpID0+IHtcbiAgY29uc3QgY2FtZXJhID0gZ2xvYmFsLmNhbWVyYUxpc3RbaWRdO1xuXG4gIGlmICghY2FtZXJhKSB7XG4gICAgbG9nZ2VyLndhcm4oYFtDQU1FUkFdIENhbWVyYSBub3QgZm91bmQgJHtpZH1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjYW1lcmFJbnN0YW5jZSA9IGNhbWVyYS5jYW1lcmFJbnN0YW5jZTtcblxuICBjYW1lcmEubGFzdFJlcXVlc3QgPSBtb21lbnQoKTtcblxuICBpZiAoY2FtZXJhLmJ1c3kpIHtcbiAgICBsb2dnZXIud2FybihcIltDQU1FUkFdIENhbiBub3QgdGFrZSBwaWN0dXJlIDogQ2FtZXJhIGlzIGJ1c3kuXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICAvKmlmIChuaWdodFZpc2lvbiAmJiAhZ3Bpb1JlbGFpcy5zZXROaWdodFZpc2lvbih0cnVlKSkge1xuICAgICAgbG9nZ2VyLndhcm4oYENvdWxkIG5vdCB0dXJuIG9uIE5pZ2h0IFZpc2lvbmApO1xuICAgIH0qL1xuXG4gICAgY2FtZXJhLmJ1c3kgPSB0cnVlO1xuICAgIGxvZ2dlci5pbmZvKFxuICAgICAgYFtDQU1FUkFdIFRha2luZyBhXCIgKyAobmlnaHRWaXNpb24gPyBcIiBuaWdodCB2aXNpb25cIiA6IFwiXCIpICsgXCIgcGljdHVyZSAoJHtjYW1lcmEuY29uZmlnLm5hbWV9KWBcbiAgICApO1xuICAgIGxldCB0YWtpbmdQaWN0dXJlID0gbW9tZW50KCk7XG5cbiAgICBjYW1lcmFJbnN0YW5jZVxuICAgICAgLnRha2VQaWN0dXJlKClcbiAgICAgIC50aGVuKChwaG90bykgPT4ge1xuICAgICAgICBjb25zdCBuZXdQaWNUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjYW1lcmEuaW1hZ2UgPSBwaG90bztcbiAgICAgICAgY2FtZXJhLnRpbWUgPSBuZXdQaWNUaW1lO1xuICAgICAgICBjYW1lcmEuYnVzeSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFR1cm4gb2ZmIEluZnJhcmVkIExFRHMgYWdhaW5cbiAgICAgICAgLyppZiAobmlnaHRWaXNpb24gJiYgIWdwaW9SZWxhaXMuc2V0TmlnaHRWaXNpb24oZmFsc2UpKSB7XG4gICAgICAgICAgbG9nZ2VyLndhcm4oXCJFcnJvciB3aGVuIHR1cm5pbmcgbmlnaHQgdmlzaW9uIG9mZlwiKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy8gU3RhdGlzdGljcyBhYm91dCBjYW1lcmEgZHVyYXRpb25cbiAgICAgICAgbGV0IHRvb2tQaWN0dXJlID0gbW9tZW50KCk7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRvb2tQaWN0dXJlLmRpZmYodGFraW5nUGljdHVyZSk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgICAgICBgW0NBTUVSQV0gVG9vayBhICR7XG4gICAgICAgICAgICBuaWdodFZpc2lvbiA/IFwibmlnaHQgdmlzaW9uIFwiIDogXCJcIlxuICAgICAgICAgIH1waWN0dXJlIC0gJHtkdXJhdGlvbn0gbXNgXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgdGFraW5nIHRoZSBuZXh0IHBpY3R1cmVcbiAgICAgICAgaWYgKGNhbWVyYS5sYXN0UmVxdWVzdCAmJiBjYW1lcmEuY29uZmlnLmludGVydmFsU2VjID4gMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGFrZVBob3RvKGlkKTtcbiAgICAgICAgICB9LCBjYW1lcmEuY29uZmlnLmludGVydmFsU2VjICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gobG9nZ2VyLmVycm9yKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBnZXRKcGcgPSAoaWQpID0+IHtcbiAgY29uc3QgY2FtZXJhID0gZ2xvYmFsLmNhbWVyYUxpc3RbaWRdO1xuXG4gIGlmICghY2FtZXJhKSB7XG4gICAgbG9nZ2VyLndhcm4oYFtDQU1FUkFdIENhbWVyYSBub3QgZm91bmQgJHtpZH1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gY2FtZXJhLmltYWdlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGluaXRpYWxpemVDYW1lcmFzLCBnZXRKcGcgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/camera.js\n");

/***/ }),

/***/ "./server/modules/camera/CameraAbstract.js":
/*!*************************************************!*\
  !*** ./server/modules/camera/CameraAbstract.js ***!
  \*************************************************/
/***/ (function(module) {

eval("class CameraAbstract {\n  constructor() {\n    // The constructor can be useful to initialize somethings\n    return null;\n  }\n\n  async takePicture() {// Take a picture and return a buffer containing the image\n  }\n\n}\n\nmodule.exports = CameraAbstract;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvY2FtZXJhL0NhbWVyYUFic3RyYWN0LmpzPzJkMzYiXSwibmFtZXMiOlsiQ2FtZXJhQWJzdHJhY3QiLCJjb25zdHJ1Y3RvciIsInRha2VQaWN0dXJlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsY0FBTixDQUFxQjtBQUNuQkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1o7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFNQyxXQUFOLEdBQW9CLENBQ2xCO0FBQ0Q7O0FBUGtCOztBQVVyQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbWVyYUFic3RyYWN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gVGhlIGNvbnN0cnVjdG9yIGNhbiBiZSB1c2VmdWwgdG8gaW5pdGlhbGl6ZSBzb21ldGhpbmdzXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBhc3luYyB0YWtlUGljdHVyZSgpIHtcbiAgICAvLyBUYWtlIGEgcGljdHVyZSBhbmQgcmV0dXJuIGEgYnVmZmVyIGNvbnRhaW5pbmcgdGhlIGltYWdlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmFBYnN0cmFjdFxuIl0sImZpbGUiOiIuL3NlcnZlci9tb2R1bGVzL2NhbWVyYS9DYW1lcmFBYnN0cmFjdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/modules/camera/CameraAbstract.js\n");

/***/ }),

/***/ "./server/modules/camera/RaspberryPiWebcam.js":
/*!****************************************************!*\
  !*** ./server/modules/camera/RaspberryPiWebcam.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst CameraAbstract = __webpack_require__(/*! ./CameraAbstract */ \"./server/modules/camera/CameraAbstract.js\");\n\nconst cameraConfig = {\n  raspistill: {\n    rotation: 180,\n    noFileSave: true,\n    encoding: \"jpg\",\n    width: 1296,\n    height: 972,\n    quality: 50\n  }\n};\n\nclass RaspberryPiWebcam extends CameraAbstract {\n  constructor() {\n    super();\n\n    _defineProperty(this, \"cam\", void 0);\n\n    const Raspistill = __webpack_require__(/*! node-raspistill */ \"node-raspistill\").Raspistill;\n\n    this.cam = new Raspistill(cameraConfig.raspistill);\n  }\n\n  async takePicture() {\n    return this.cam.takePhoto();\n  }\n\n}\n\nmodule.exports = RaspberryPiWebcam;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1Jhc3BiZXJyeVBpV2ViY2FtLmpzPzFiNWEiXSwibmFtZXMiOlsiQ2FtZXJhQWJzdHJhY3QiLCJyZXF1aXJlIiwiY2FtZXJhQ29uZmlnIiwicmFzcGlzdGlsbCIsInJvdGF0aW9uIiwibm9GaWxlU2F2ZSIsImVuY29kaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwiUmFzcGJlcnJ5UGlXZWJjYW0iLCJjb25zdHJ1Y3RvciIsIlJhc3Bpc3RpbGwiLCJjYW0iLCJ0YWtlUGljdHVyZSIsInRha2VQaG90byIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsY0FBYyxHQUFHQyxtQkFBTyxDQUFDLG1FQUFELENBQTlCOztBQUVBLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsWUFBVSxFQUFFO0FBQ1ZDLFlBQVEsRUFBRSxHQURBO0FBRVZDLGNBQVUsRUFBRSxJQUZGO0FBR1ZDLFlBQVEsRUFBRSxLQUhBO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFVBQU0sRUFBRSxHQUxFO0FBTVZDLFdBQU8sRUFBRTtBQU5DO0FBRE8sQ0FBckI7O0FBV0EsTUFBTUMsaUJBQU4sU0FBZ0NWLGNBQWhDLENBQStDO0FBRzdDVyxhQUFXLEdBQUc7QUFDWjs7QUFEWTs7QUFHWixVQUFNQyxVQUFVLEdBQUdYLHdFQUFuQjs7QUFDQSxTQUFLWSxHQUFMLEdBQVcsSUFBSUQsVUFBSixDQUFlVixZQUFZLENBQUNDLFVBQTVCLENBQVg7QUFDRDs7QUFFRCxRQUFNVyxXQUFOLEdBQW9CO0FBQ2xCLFdBQU8sS0FBS0QsR0FBTCxDQUFTRSxTQUFULEVBQVA7QUFDRDs7QUFaNEM7O0FBZS9DQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJQLGlCQUFqQiIsImZpbGUiOiIuL3NlcnZlci9tb2R1bGVzL2NhbWVyYS9SYXNwYmVycnlQaVdlYmNhbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhbWVyYUFic3RyYWN0ID0gcmVxdWlyZShcIi4vQ2FtZXJhQWJzdHJhY3RcIik7XG5cbmNvbnN0IGNhbWVyYUNvbmZpZyA9IHtcbiAgcmFzcGlzdGlsbDoge1xuICAgIHJvdGF0aW9uOiAxODAsXG4gICAgbm9GaWxlU2F2ZTogdHJ1ZSxcbiAgICBlbmNvZGluZzogXCJqcGdcIixcbiAgICB3aWR0aDogMTI5NixcbiAgICBoZWlnaHQ6IDk3MixcbiAgICBxdWFsaXR5OiA1MCxcbiAgfSxcbn07XG5cbmNsYXNzIFJhc3BiZXJyeVBpV2ViY2FtIGV4dGVuZHMgQ2FtZXJhQWJzdHJhY3Qge1xuICBjYW07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IFJhc3Bpc3RpbGwgPSByZXF1aXJlKFwibm9kZS1yYXNwaXN0aWxsXCIpLlJhc3Bpc3RpbGw7XG4gICAgdGhpcy5jYW0gPSBuZXcgUmFzcGlzdGlsbChjYW1lcmFDb25maWcucmFzcGlzdGlsbCk7XG4gIH1cblxuICBhc3luYyB0YWtlUGljdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW0udGFrZVBob3RvKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSYXNwYmVycnlQaVdlYmNhbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/modules/camera/RaspberryPiWebcam.js\n");

/***/ }),

/***/ "./server/modules/camera/UsbWebcam.js":
/*!********************************************!*\
  !*** ./server/modules/camera/UsbWebcam.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst CameraAbstract = __webpack_require__(/*! ./CameraAbstract */ \"./server/modules/camera/CameraAbstract.js\");\n\nconst {\n  exec\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\n\nclass UsbWebcam extends CameraAbstract {\n  constructor(camera) {\n    var _camera$options;\n\n    super();\n\n    _defineProperty(this, \"cameraConfig\", void 0);\n\n    if (!((_camera$options = camera.options) !== null && _camera$options !== void 0 && _camera$options.device)) return;\n    this.cameraConfig = camera;\n  }\n\n  async takePicture() {\n    const fileName = `/tmp/shot-${md5(this.cameraConfig.options.device)}.jpg`;\n    return new Promise((resolve, reject) => {\n      var _this$cameraConfig$op, _this$cameraConfig$op2, _this$cameraConfig$op3;\n\n      const resolution = (_this$cameraConfig$op = this.cameraConfig.options) !== null && _this$cameraConfig$op !== void 0 && _this$cameraConfig$op.width && (_this$cameraConfig$op2 = this.cameraConfig.options) !== null && _this$cameraConfig$op2 !== void 0 && _this$cameraConfig$op2.height ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}` : \"\";\n      const device = (_this$cameraConfig$op3 = this.cameraConfig.options) !== null && _this$cameraConfig$op3 !== void 0 && _this$cameraConfig$op3.device ? `-d ${this.cameraConfig.options.device}` : \"\";\n      const commandLine = `fswebcam ${device} ${resolution} -D 1 --no-banner --jpeg -1 ${fileName}`;\n      exec(commandLine, error => {\n        if (error) reject(error);else {\n          fs.readFile(fileName, (err, image) => {\n            if (err) reject(err);else resolve(image);\n          });\n        }\n      });\n    });\n  }\n\n}\n\nmodule.exports = UsbWebcam;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1VzYldlYmNhbS5qcz9iZmUwIl0sIm5hbWVzIjpbIkNhbWVyYUFic3RyYWN0IiwicmVxdWlyZSIsImV4ZWMiLCJmcyIsIm1kNSIsIlVzYldlYmNhbSIsImNvbnN0cnVjdG9yIiwiY2FtZXJhIiwib3B0aW9ucyIsImRldmljZSIsImNhbWVyYUNvbmZpZyIsInRha2VQaWN0dXJlIiwiZmlsZU5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbW1hbmRMaW5lIiwiZXJyb3IiLCJyZWFkRmlsZSIsImVyciIsImltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsbUVBQUQsQ0FBOUI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQVdELG1CQUFPLENBQUMsb0NBQUQsQ0FBeEI7O0FBQ0EsTUFBTUUsRUFBRSxHQUFHRixtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsTUFBTUcsR0FBRyxHQUFHSCxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUVBLE1BQU1JLFNBQU4sU0FBd0JMLGNBQXhCLENBQXVDO0FBR3JDTSxhQUFXLENBQUNDLE1BQUQsRUFBUztBQUFBOztBQUNsQjs7QUFEa0I7O0FBR2xCLFFBQUkscUJBQUNBLE1BQU0sQ0FBQ0MsT0FBUiw0Q0FBQyxnQkFBZ0JDLE1BQWpCLENBQUosRUFBNkI7QUFFN0IsU0FBS0MsWUFBTCxHQUFvQkgsTUFBcEI7QUFDRDs7QUFFRCxRQUFNSSxXQUFOLEdBQW9CO0FBQ2xCLFVBQU1DLFFBQVEsR0FBSSxhQUFZUixHQUFHLENBQUMsS0FBS00sWUFBTCxDQUFrQkYsT0FBbEIsQ0FBMEJDLE1BQTNCLENBQW1DLE1BQXBFO0FBRUEsV0FBTyxJQUFJSSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQUE7O0FBQ3RDLFlBQU1DLFVBQVUsR0FDZCw4QkFBS04sWUFBTCxDQUFrQkYsT0FBbEIsd0VBQTJCUyxLQUEzQiw4QkFBb0MsS0FBS1AsWUFBTCxDQUFrQkYsT0FBdEQsbURBQW9DLHVCQUEyQlUsTUFBL0QsR0FDSyxNQUFLLEtBQUtSLFlBQUwsQ0FBa0JGLE9BQWxCLENBQTBCUyxLQUFNLElBQUcsS0FBS1AsWUFBTCxDQUFrQkYsT0FBbEIsQ0FBMEJVLE1BQU8sRUFEOUUsR0FFSSxFQUhOO0FBSUEsWUFBTVQsTUFBTSxHQUFHLCtCQUFLQyxZQUFMLENBQWtCRixPQUFsQiwwRUFBMkJDLE1BQTNCLEdBQ1YsTUFBSyxLQUFLQyxZQUFMLENBQWtCRixPQUFsQixDQUEwQkMsTUFBTyxFQUQ1QixHQUVYLEVBRko7QUFJQSxZQUFNVSxXQUFXLEdBQUksWUFBV1YsTUFBTyxJQUFHTyxVQUFXLCtCQUE4QkosUUFBUyxFQUE1RjtBQUVBVixVQUFJLENBQUNpQixXQUFELEVBQWVDLEtBQUQsSUFBVztBQUMzQixZQUFJQSxLQUFKLEVBQVdMLE1BQU0sQ0FBQ0ssS0FBRCxDQUFOLENBQVgsS0FDSztBQUNIakIsWUFBRSxDQUFDa0IsUUFBSCxDQUFZVCxRQUFaLEVBQXNCLENBQUNVLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUNwQyxnQkFBSUQsR0FBSixFQUFTUCxNQUFNLENBQUNPLEdBQUQsQ0FBTixDQUFULEtBQ0tSLE9BQU8sQ0FBQ1MsS0FBRCxDQUFQO0FBQ04sV0FIRDtBQUlEO0FBQ0YsT0FSRyxDQUFKO0FBU0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUFuQ29DOztBQXNDdkNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLFNBQWpCIiwiZmlsZSI6Ii4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1VzYldlYmNhbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhbWVyYUFic3RyYWN0ID0gcmVxdWlyZShcIi4vQ2FtZXJhQWJzdHJhY3RcIik7XG5jb25zdCB7IGV4ZWMgfSA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBtZDUgPSByZXF1aXJlKFwibWQ1XCIpO1xuXG5jbGFzcyBVc2JXZWJjYW0gZXh0ZW5kcyBDYW1lcmFBYnN0cmFjdCB7XG4gIGNhbWVyYUNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihjYW1lcmEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKCFjYW1lcmEub3B0aW9ucz8uZGV2aWNlKSByZXR1cm47XG5cbiAgICB0aGlzLmNhbWVyYUNvbmZpZyA9IGNhbWVyYTtcbiAgfVxuXG4gIGFzeW5jIHRha2VQaWN0dXJlKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYC90bXAvc2hvdC0ke21kNSh0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLmRldmljZSl9LmpwZ2A7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVzb2x1dGlvbiA9XG4gICAgICAgIHRoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnM/LndpZHRoICYmIHRoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnM/LmhlaWdodFxuICAgICAgICAgID8gYC1yICR7dGhpcy5jYW1lcmFDb25maWcub3B0aW9ucy53aWR0aH14JHt0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLmhlaWdodH1gXG4gICAgICAgICAgOiBcIlwiO1xuICAgICAgY29uc3QgZGV2aWNlID0gdGhpcy5jYW1lcmFDb25maWcub3B0aW9ucz8uZGV2aWNlXG4gICAgICAgID8gYC1kICR7dGhpcy5jYW1lcmFDb25maWcub3B0aW9ucy5kZXZpY2V9YFxuICAgICAgICA6IFwiXCI7XG5cbiAgICAgIGNvbnN0IGNvbW1hbmRMaW5lID0gYGZzd2ViY2FtICR7ZGV2aWNlfSAke3Jlc29sdXRpb259IC1EIDEgLS1uby1iYW5uZXIgLS1qcGVnIC0xICR7ZmlsZU5hbWV9YDtcblxuICAgICAgZXhlYyhjb21tYW5kTGluZSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZnMucmVhZEZpbGUoZmlsZU5hbWUsIChlcnIsIGltYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIGVsc2UgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNiV2ViY2FtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/modules/camera/UsbWebcam.js\n");

/***/ }),

/***/ "./server/modules/camera/index.js":
/*!****************************************!*\
  !*** ./server/modules/camera/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("const RaspberryPiWebcam = __webpack_require__(/*! ./RaspberryPiWebcam */ \"./server/modules/camera/RaspberryPiWebcam.js\");\n\nconst UsbWebcam = __webpack_require__(/*! ./UsbWebcam */ \"./server/modules/camera/UsbWebcam.js\");\n\nconst getCameraInstance = camera => {\n  switch (camera.module) {\n    case \"RaspberryPiWebcam\":\n      return new RaspberryPiWebcam(camera);\n\n    case \"UsbWebcam\":\n      return new UsbWebcam(camera);\n  }\n};\n\nexports.getCameraInstance = getCameraInstance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvY2FtZXJhL2luZGV4LmpzP2EzMzEiXSwibmFtZXMiOlsiUmFzcGJlcnJ5UGlXZWJjYW0iLCJyZXF1aXJlIiwiVXNiV2ViY2FtIiwiZ2V0Q2FtZXJhSW5zdGFuY2UiLCJjYW1lcmEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxpQkFBaUIsR0FBR0MsbUJBQU8sQ0FBQyx5RUFBRCxDQUFqQzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdELG1CQUFPLENBQUMseURBQUQsQ0FBekI7O0FBRUEsTUFBTUUsaUJBQWlCLEdBQUlDLE1BQUQsSUFBWTtBQUNwQyxVQUFRQSxNQUFNLENBQUNDLE1BQWY7QUFDRSxTQUFLLG1CQUFMO0FBQ0UsYUFBTyxJQUFJTCxpQkFBSixDQUFzQkksTUFBdEIsQ0FBUDs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPLElBQUlGLFNBQUosQ0FBY0UsTUFBZCxDQUFQO0FBSko7QUFNRCxDQVBEOztBQVNBRSx5QkFBQSxHQUE0QkgsaUJBQTVCIiwiZmlsZSI6Ii4vc2VydmVyL21vZHVsZXMvY2FtZXJhL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmFzcGJlcnJ5UGlXZWJjYW0gPSByZXF1aXJlKFwiLi9SYXNwYmVycnlQaVdlYmNhbVwiKTtcbmNvbnN0IFVzYldlYmNhbSA9IHJlcXVpcmUoXCIuL1VzYldlYmNhbVwiKTtcblxuY29uc3QgZ2V0Q2FtZXJhSW5zdGFuY2UgPSAoY2FtZXJhKSA9PiB7XG4gIHN3aXRjaCAoY2FtZXJhLm1vZHVsZSkge1xuICAgIGNhc2UgXCJSYXNwYmVycnlQaVdlYmNhbVwiOlxuICAgICAgcmV0dXJuIG5ldyBSYXNwYmVycnlQaVdlYmNhbShjYW1lcmEpO1xuICAgIGNhc2UgXCJVc2JXZWJjYW1cIjpcbiAgICAgIHJldHVybiBuZXcgVXNiV2ViY2FtKGNhbWVyYSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZ2V0Q2FtZXJhSW5zdGFuY2UgPSBnZXRDYW1lcmFJbnN0YW5jZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/modules/camera/index.js\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/camera/lastimage/[id].ts"));
module.exports = __webpack_exports__;

})();