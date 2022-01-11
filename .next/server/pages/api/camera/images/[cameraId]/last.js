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

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst logger = __webpack_require__(/*! ./logger */ \"./lib/logger.js\");\n\nconst getConfig = () => {\n  if (fs.existsSync(\"./state/config.json\")) return JSON.parse(fs.readFileSync(\"./state/config.json\").toString());else {\n    const message = \"FATAL ERROR - NO CONFIG FILE DETECTED\";\n    logger.error(message);\n    throw new Error(message);\n  }\n};\n\nmodule.exports = getConfig;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vbGliL2dldENvbmZpZy5qcz9jNmE4Il0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsImxvZ2dlciIsImdldENvbmZpZyIsImV4aXN0c1N5bmMiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsIm1lc3NhZ2UiLCJlcnJvciIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlDQUFELENBQXRCOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLE1BQUlILEVBQUUsQ0FBQ0ksVUFBSCxDQUFjLHFCQUFkLENBQUosRUFDRSxPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sRUFBRSxDQUFDTyxZQUFILENBQWdCLHFCQUFoQixFQUF1Q0MsUUFBdkMsRUFBWCxDQUFQLENBREYsS0FFSztBQUNILFVBQU1DLE9BQU8sR0FBRyx1Q0FBaEI7QUFDQVAsVUFBTSxDQUFDUSxLQUFQLENBQWFELE9BQWI7QUFDQSxVQUFNLElBQUlFLEtBQUosQ0FBVUYsT0FBVixDQUFOO0FBQ0Q7QUFDRixDQVJEOztBQVVBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFNBQWpCIiwiZmlsZSI6Ii4vbGliL2dldENvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgbG9nZ2VyID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xuXG5jb25zdCBnZXRDb25maWcgPSAoKSA9PiB7XG4gIGlmIChmcy5leGlzdHNTeW5jKFwiLi9zdGF0ZS9jb25maWcuanNvblwiKSlcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCIuL3N0YXRlL2NvbmZpZy5qc29uXCIpLnRvU3RyaW5nKCkpO1xuICBlbHNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gXCJGQVRBTCBFUlJPUiAtIE5PIENPTkZJRyBGSUxFIERFVEVDVEVEXCI7XG4gICAgbG9nZ2VyLmVycm9yKG1lc3NhZ2UpO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRDb25maWc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/getConfig.js\n");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const winston = __webpack_require__(/*! winston */ \"winston\");\n\n__webpack_require__(/*! winston-daily-rotate-file */ \"winston-daily-rotate-file\");\n\nconst logger = winston.createLogger({\n  level: process.env.LOG_LEVEL || \"info\",\n  format: winston.format.json(),\n  transports: [new winston.transports.Console({\n    format: winston.format.simple(),\n    timestamp: true\n  })]\n});\nmodule.exports = logger;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vbGliL2xvZ2dlci5qcz80NWUzIl0sIm5hbWVzIjpbIndpbnN0b24iLCJyZXF1aXJlIiwibG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwibGV2ZWwiLCJwcm9jZXNzIiwiZW52IiwiTE9HX0xFVkVMIiwiZm9ybWF0IiwianNvbiIsInRyYW5zcG9ydHMiLCJDb25zb2xlIiwic2ltcGxlIiwidGltZXN0YW1wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUNBQSxtQkFBTyxDQUFDLDREQUFELENBQVA7O0FBRUEsTUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLFlBQVIsQ0FBcUI7QUFDbENDLE9BQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosSUFBeUIsTUFERTtBQUVsQ0MsUUFBTSxFQUFFUixPQUFPLENBQUNRLE1BQVIsQ0FBZUMsSUFBZixFQUYwQjtBQUdsQ0MsWUFBVSxFQUFFLENBQ1YsSUFBSVYsT0FBTyxDQUFDVSxVQUFSLENBQW1CQyxPQUF2QixDQUErQjtBQUM3QkgsVUFBTSxFQUFFUixPQUFPLENBQUNRLE1BQVIsQ0FBZUksTUFBZixFQURxQjtBQUU3QkMsYUFBUyxFQUFFO0FBRmtCLEdBQS9CLENBRFU7QUFIc0IsQ0FBckIsQ0FBZjtBQVdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLE1BQWpCIiwiZmlsZSI6Ii4vbGliL2xvZ2dlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpbnN0b24gPSByZXF1aXJlKFwid2luc3RvblwiKTtcbnJlcXVpcmUoXCJ3aW5zdG9uLWRhaWx5LXJvdGF0ZS1maWxlXCIpO1xuXG5jb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgXCJpbmZvXCIsXG4gIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuanNvbigpLFxuICB0cmFuc3BvcnRzOiBbXG4gICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuc2ltcGxlKCksXG4gICAgICB0aW1lc3RhbXA6IHRydWUsXG4gICAgfSksXG4gIF0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2dnZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/logger.js\n");

/***/ }),

/***/ "./pages/api/camera/images/[cameraId]/last.ts":
/*!****************************************************!*\
  !*** ./pages/api/camera/images/[cameraId]/last.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../server/camera */ \"./server/camera.js\");\n/* harmony import */ var _server_camera__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_server_camera__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const image = (0,_server_camera__WEBPACK_IMPORTED_MODULE_0__.getJpg)(String(req.query.cameraId));\n\n  if (image) {\n    res.status(200).setHeader(\"Content-Type\", \"image/jpeg\");\n    res.send(image);\n  } else res.status(404).send(\"\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9pbWFnZXMvW2NhbWVyYUlkXS9sYXN0LnRzPzQxMDYiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiaW1hZ2UiLCJnZXRKcGciLCJTdHJpbmciLCJxdWVyeSIsImNhbWVyYUlkIiwic3RhdHVzIiwic2V0SGVhZGVyIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxRQUFNQyxLQUFLLEdBQUdDLHNEQUFNLENBQUNDLE1BQU0sQ0FBQ0osR0FBRyxDQUFDSyxLQUFKLENBQVVDLFFBQVgsQ0FBUCxDQUFwQjs7QUFFQSxNQUFJSixLQUFKLEVBQVc7QUFDVEQsT0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsU0FBaEIsQ0FBMEIsY0FBMUIsRUFBMEMsWUFBMUM7QUFFQVAsT0FBRyxDQUFDUSxJQUFKLENBQVNQLEtBQVQ7QUFDRCxHQUpELE1BSU9ELEdBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JFLElBQWhCLENBQXFCLEVBQXJCO0FBQ1IsQ0FSRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jYW1lcmEvaW1hZ2VzL1tjYW1lcmFJZF0vbGFzdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0SnBnIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NlcnZlci9jYW1lcmFcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGltYWdlID0gZ2V0SnBnKFN0cmluZyhyZXEucXVlcnkuY2FtZXJhSWQpKTtcblxuICBpZiAoaW1hZ2UpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiaW1hZ2UvanBlZ1wiKTtcblxuICAgIHJlcy5zZW5kKGltYWdlKTtcbiAgfSBlbHNlIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiXCIpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/camera/images/[cameraId]/last.ts\n");

/***/ }),

/***/ "./server/camera.js":
/*!**************************!*\
  !*** ./server/camera.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst moment = __webpack_require__(/*! moment */ \"moment\");\n\nconst logger = __webpack_require__(/*! ../lib/logger */ \"./lib/logger.js\");\n\nconst {\n  getCameraInstance\n} = __webpack_require__(/*! ./modules/camera */ \"./server/modules/camera/index.js\");\n\nconst getConfig = __webpack_require__(/*! ../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst config = getConfig();\nconst cameraTemplate = {\n  image: null,\n  time: null,\n  busy: false,\n  lastRequest: null,\n  ir: {\n    on: null,\n    time: null,\n    image: null,\n    queued: false\n  }\n};\n\nconst initializeCameras = () => {\n  config.camera.forEach((oneCamera, index) => {\n    setupCamera(String(index), oneCamera);\n  });\n};\n\nconst setupCamera = (id, cameraConfig) => {\n  global.cameraList[id] = _objectSpread(_objectSpread({}, cameraTemplate), {}, {\n    config: cameraConfig,\n    cameraInstance: getCameraInstance(cameraConfig)\n  });\n  logger.info(`[CAMERA] Setup new camera ${id} «${cameraConfig.name}» (${cameraConfig.module})`);\n  takePhoto(id);\n};\n\nconst takePhoto = async (id, manualTake = false) => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  const cameraInstance = camera.cameraInstance;\n  camera.lastRequest = moment();\n\n  if (camera.busy) {\n    logger.warn(\"[CAMERA] Can not take picture : Camera is busy.\");\n    return false;\n  } else {\n    camera.busy = true;\n    logger.info(`[CAMERA] Taking a picture (${id} - ${camera.config.name})`);\n    let takingPicture = moment();\n    return cameraInstance.takePicture().then(photo => {\n      var _camera$config$save;\n\n      const newPicTime = moment().format(\"X\");\n\n      if ((_camera$config$save = camera.config.save) !== null && _camera$config$save !== void 0 && _camera$config$save.path) {\n        fs.mkdirSync(camera.config.save.path, {\n          recursive: true\n        });\n        fs.writeFileSync(path.join(camera.config.save.path, `${newPicTime}.jpg`), photo);\n      }\n\n      camera.image = photo;\n      camera.time = newPicTime;\n      camera.busy = false; // Statistics about camera duration\n\n      let tookPicture = moment();\n      let duration = tookPicture.diff(takingPicture);\n      logger.debug(`[CAMERA] Took a picture - ${duration} ms`); // Schedule taking the next picture\n\n      if (camera.lastRequest && camera.config.intervalSec > 0 && !manualTake) {\n        setTimeout(() => {\n          takePhoto(id);\n        }, camera.config.intervalSec * 1000);\n      }\n\n      return true;\n    }).catch(logger.error);\n  }\n};\n\nconst getJpg = id => {\n  const camera = global.cameraList[id];\n\n  if (!camera) {\n    logger.warn(`[CAMERA] Camera not found ${id}`);\n    return false;\n  }\n\n  return camera.image;\n};\n\nmodule.exports = {\n  initializeCameras,\n  getJpg,\n  takePhoto\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL2NhbWVyYS5qcz82MzhmIl0sIm5hbWVzIjpbIm1vbWVudCIsInJlcXVpcmUiLCJsb2dnZXIiLCJnZXRDYW1lcmFJbnN0YW5jZSIsImdldENvbmZpZyIsInBhdGgiLCJmcyIsImNvbmZpZyIsImNhbWVyYVRlbXBsYXRlIiwiaW1hZ2UiLCJ0aW1lIiwiYnVzeSIsImxhc3RSZXF1ZXN0IiwiaXIiLCJvbiIsInF1ZXVlZCIsImluaXRpYWxpemVDYW1lcmFzIiwiY2FtZXJhIiwiZm9yRWFjaCIsIm9uZUNhbWVyYSIsImluZGV4Iiwic2V0dXBDYW1lcmEiLCJTdHJpbmciLCJpZCIsImNhbWVyYUNvbmZpZyIsImdsb2JhbCIsImNhbWVyYUxpc3QiLCJjYW1lcmFJbnN0YW5jZSIsImluZm8iLCJuYW1lIiwibW9kdWxlIiwidGFrZVBob3RvIiwibWFudWFsVGFrZSIsIndhcm4iLCJ0YWtpbmdQaWN0dXJlIiwidGFrZVBpY3R1cmUiLCJ0aGVuIiwicGhvdG8iLCJuZXdQaWNUaW1lIiwiZm9ybWF0Iiwic2F2ZSIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsIndyaXRlRmlsZVN5bmMiLCJqb2luIiwidG9va1BpY3R1cmUiLCJkdXJhdGlvbiIsImRpZmYiLCJkZWJ1ZyIsImludGVydmFsU2VjIiwic2V0VGltZW91dCIsImNhdGNoIiwiZXJyb3IiLCJnZXRKcGciLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHNDQUFELENBQXRCOztBQUNBLE1BQU07QUFBRUU7QUFBRixJQUF3QkYsbUJBQU8sQ0FBQywwREFBRCxDQUFyQzs7QUFDQSxNQUFNRyxTQUFTLEdBQUdILG1CQUFPLENBQUMsNENBQUQsQ0FBekI7O0FBQ0EsTUFBTUksSUFBSSxHQUFHSixtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLE1BQU1LLEVBQUUsR0FBR0wsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUVBLE1BQU1NLE1BQU0sR0FBR0gsU0FBUyxFQUF4QjtBQUVBLE1BQU1JLGNBQWMsR0FBRztBQUNyQkMsT0FBSyxFQUFFLElBRGM7QUFFckJDLE1BQUksRUFBRSxJQUZlO0FBR3JCQyxNQUFJLEVBQUUsS0FIZTtBQUlyQkMsYUFBVyxFQUFFLElBSlE7QUFLckJDLElBQUUsRUFBRTtBQUNGQyxNQUFFLEVBQUUsSUFERjtBQUVGSixRQUFJLEVBQUUsSUFGSjtBQUdGRCxTQUFLLEVBQUUsSUFITDtBQUlGTSxVQUFNLEVBQUU7QUFKTjtBQUxpQixDQUF2Qjs7QUFhQSxNQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCVCxRQUFNLENBQUNVLE1BQVAsQ0FBY0MsT0FBZCxDQUFzQixDQUFDQyxTQUFELEVBQVlDLEtBQVosS0FBc0I7QUFDMUNDLGVBQVcsQ0FBQ0MsTUFBTSxDQUFDRixLQUFELENBQVAsRUFBZ0JELFNBQWhCLENBQVg7QUFDRCxHQUZEO0FBR0QsQ0FKRDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQ0UsRUFBRCxFQUFLQyxZQUFMLEtBQXNCO0FBQ3hDQyxRQUFNLENBQUNDLFVBQVAsQ0FBa0JILEVBQWxCLG9DQUNLZixjQURMO0FBRUVELFVBQU0sRUFBRWlCLFlBRlY7QUFHRUcsa0JBQWMsRUFBRXhCLGlCQUFpQixDQUFDcUIsWUFBRDtBQUhuQztBQU1BdEIsUUFBTSxDQUFDMEIsSUFBUCxDQUNHLDZCQUE0QkwsRUFBRyxLQUFJQyxZQUFZLENBQUNLLElBQUssTUFBS0wsWUFBWSxDQUFDTSxNQUFPLEdBRGpGO0FBSUFDLFdBQVMsQ0FBQ1IsRUFBRCxDQUFUO0FBQ0QsQ0FaRDs7QUFjQSxNQUFNUSxTQUFTLEdBQUcsT0FBT1IsRUFBUCxFQUFXUyxVQUFVLEdBQUcsS0FBeEIsS0FBa0M7QUFDbEQsUUFBTWYsTUFBTSxHQUFHUSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JILEVBQWxCLENBQWY7O0FBRUEsTUFBSSxDQUFDTixNQUFMLEVBQWE7QUFDWGYsVUFBTSxDQUFDK0IsSUFBUCxDQUFhLDZCQUE0QlYsRUFBRyxFQUE1QztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFFBQU1JLGNBQWMsR0FBR1YsTUFBTSxDQUFDVSxjQUE5QjtBQUVBVixRQUFNLENBQUNMLFdBQVAsR0FBcUJaLE1BQU0sRUFBM0I7O0FBRUEsTUFBSWlCLE1BQU0sQ0FBQ04sSUFBWCxFQUFpQjtBQUNmVCxVQUFNLENBQUMrQixJQUFQLENBQVksaURBQVo7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQUhELE1BR087QUFDTGhCLFVBQU0sQ0FBQ04sSUFBUCxHQUFjLElBQWQ7QUFDQVQsVUFBTSxDQUFDMEIsSUFBUCxDQUFhLDhCQUE2QkwsRUFBRyxNQUFLTixNQUFNLENBQUNWLE1BQVAsQ0FBY3NCLElBQUssR0FBckU7QUFDQSxRQUFJSyxhQUFhLEdBQUdsQyxNQUFNLEVBQTFCO0FBRUEsV0FBTzJCLGNBQWMsQ0FDbEJRLFdBREksR0FFSkMsSUFGSSxDQUVFQyxLQUFELElBQVc7QUFBQTs7QUFDZixZQUFNQyxVQUFVLEdBQUd0QyxNQUFNLEdBQUd1QyxNQUFULENBQWdCLEdBQWhCLENBQW5COztBQUVBLGlDQUFJdEIsTUFBTSxDQUFDVixNQUFQLENBQWNpQyxJQUFsQixnREFBSSxvQkFBb0JuQyxJQUF4QixFQUE4QjtBQUM1QkMsVUFBRSxDQUFDbUMsU0FBSCxDQUFheEIsTUFBTSxDQUFDVixNQUFQLENBQWNpQyxJQUFkLENBQW1CbkMsSUFBaEMsRUFBc0M7QUFDcENxQyxtQkFBUyxFQUFFO0FBRHlCLFNBQXRDO0FBSUFwQyxVQUFFLENBQUNxQyxhQUFILENBQ0V0QyxJQUFJLENBQUN1QyxJQUFMLENBQVUzQixNQUFNLENBQUNWLE1BQVAsQ0FBY2lDLElBQWQsQ0FBbUJuQyxJQUE3QixFQUFvQyxHQUFFaUMsVUFBVyxNQUFqRCxDQURGLEVBRUVELEtBRkY7QUFJRDs7QUFFRHBCLFlBQU0sQ0FBQ1IsS0FBUCxHQUFlNEIsS0FBZjtBQUNBcEIsWUFBTSxDQUFDUCxJQUFQLEdBQWM0QixVQUFkO0FBQ0FyQixZQUFNLENBQUNOLElBQVAsR0FBYyxLQUFkLENBaEJlLENBa0JmOztBQUNBLFVBQUlrQyxXQUFXLEdBQUc3QyxNQUFNLEVBQXhCO0FBQ0EsVUFBSThDLFFBQVEsR0FBR0QsV0FBVyxDQUFDRSxJQUFaLENBQWlCYixhQUFqQixDQUFmO0FBQ0FoQyxZQUFNLENBQUM4QyxLQUFQLENBQWMsNkJBQTRCRixRQUFTLEtBQW5ELEVBckJlLENBdUJmOztBQUNBLFVBQ0U3QixNQUFNLENBQUNMLFdBQVAsSUFDQUssTUFBTSxDQUFDVixNQUFQLENBQWMwQyxXQUFkLEdBQTRCLENBRDVCLElBRUEsQ0FBQ2pCLFVBSEgsRUFJRTtBQUNBa0Isa0JBQVUsQ0FBQyxNQUFNO0FBQ2ZuQixtQkFBUyxDQUFDUixFQUFELENBQVQ7QUFDRCxTQUZTLEVBRVBOLE1BQU0sQ0FBQ1YsTUFBUCxDQUFjMEMsV0FBZCxHQUE0QixJQUZyQixDQUFWO0FBR0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0QsS0FyQ0ksRUFzQ0pFLEtBdENJLENBc0NFakQsTUFBTSxDQUFDa0QsS0F0Q1QsQ0FBUDtBQXVDRDtBQUNGLENBNUREOztBQThEQSxNQUFNQyxNQUFNLEdBQUk5QixFQUFELElBQVE7QUFDckIsUUFBTU4sTUFBTSxHQUFHUSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JILEVBQWxCLENBQWY7O0FBRUEsTUFBSSxDQUFDTixNQUFMLEVBQWE7QUFDWGYsVUFBTSxDQUFDK0IsSUFBUCxDQUFhLDZCQUE0QlYsRUFBRyxFQUE1QztBQUNBLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9OLE1BQU0sQ0FBQ1IsS0FBZDtBQUNELENBVEQ7O0FBV0FxQixNQUFNLENBQUN3QixPQUFQLEdBQWlCO0FBQUV0QyxtQkFBRjtBQUFxQnFDLFFBQXJCO0FBQTZCdEI7QUFBN0IsQ0FBakIiLCJmaWxlIjoiLi9zZXJ2ZXIvY2FtZXJhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmNvbnN0IGxvZ2dlciA9IHJlcXVpcmUoXCIuLi9saWIvbG9nZ2VyXCIpO1xuY29uc3QgeyBnZXRDYW1lcmFJbnN0YW5jZSB9ID0gcmVxdWlyZShcIi4vbW9kdWxlcy9jYW1lcmFcIik7XG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKFwiLi4vbGliL2dldENvbmZpZ1wiKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcblxuY29uc3QgY2FtZXJhVGVtcGxhdGUgPSB7XG4gIGltYWdlOiBudWxsLFxuICB0aW1lOiBudWxsLFxuICBidXN5OiBmYWxzZSxcbiAgbGFzdFJlcXVlc3Q6IG51bGwsXG4gIGlyOiB7XG4gICAgb246IG51bGwsXG4gICAgdGltZTogbnVsbCxcbiAgICBpbWFnZTogbnVsbCxcbiAgICBxdWV1ZWQ6IGZhbHNlLFxuICB9LFxufTtcblxuY29uc3QgaW5pdGlhbGl6ZUNhbWVyYXMgPSAoKSA9PiB7XG4gIGNvbmZpZy5jYW1lcmEuZm9yRWFjaCgob25lQ2FtZXJhLCBpbmRleCkgPT4ge1xuICAgIHNldHVwQ2FtZXJhKFN0cmluZyhpbmRleCksIG9uZUNhbWVyYSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0dXBDYW1lcmEgPSAoaWQsIGNhbWVyYUNvbmZpZykgPT4ge1xuICBnbG9iYWwuY2FtZXJhTGlzdFtpZF0gPSB7XG4gICAgLi4uY2FtZXJhVGVtcGxhdGUsXG4gICAgY29uZmlnOiBjYW1lcmFDb25maWcsXG4gICAgY2FtZXJhSW5zdGFuY2U6IGdldENhbWVyYUluc3RhbmNlKGNhbWVyYUNvbmZpZyksXG4gIH07XG5cbiAgbG9nZ2VyLmluZm8oXG4gICAgYFtDQU1FUkFdIFNldHVwIG5ldyBjYW1lcmEgJHtpZH0gwqske2NhbWVyYUNvbmZpZy5uYW1lfcK7ICgke2NhbWVyYUNvbmZpZy5tb2R1bGV9KWBcbiAgKTtcblxuICB0YWtlUGhvdG8oaWQpO1xufTtcblxuY29uc3QgdGFrZVBob3RvID0gYXN5bmMgKGlkLCBtYW51YWxUYWtlID0gZmFsc2UpID0+IHtcbiAgY29uc3QgY2FtZXJhID0gZ2xvYmFsLmNhbWVyYUxpc3RbaWRdO1xuXG4gIGlmICghY2FtZXJhKSB7XG4gICAgbG9nZ2VyLndhcm4oYFtDQU1FUkFdIENhbWVyYSBub3QgZm91bmQgJHtpZH1gKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjYW1lcmFJbnN0YW5jZSA9IGNhbWVyYS5jYW1lcmFJbnN0YW5jZTtcblxuICBjYW1lcmEubGFzdFJlcXVlc3QgPSBtb21lbnQoKTtcblxuICBpZiAoY2FtZXJhLmJ1c3kpIHtcbiAgICBsb2dnZXIud2FybihcIltDQU1FUkFdIENhbiBub3QgdGFrZSBwaWN0dXJlIDogQ2FtZXJhIGlzIGJ1c3kuXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBjYW1lcmEuYnVzeSA9IHRydWU7XG4gICAgbG9nZ2VyLmluZm8oYFtDQU1FUkFdIFRha2luZyBhIHBpY3R1cmUgKCR7aWR9IC0gJHtjYW1lcmEuY29uZmlnLm5hbWV9KWApO1xuICAgIGxldCB0YWtpbmdQaWN0dXJlID0gbW9tZW50KCk7XG5cbiAgICByZXR1cm4gY2FtZXJhSW5zdGFuY2VcbiAgICAgIC50YWtlUGljdHVyZSgpXG4gICAgICAudGhlbigocGhvdG8pID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGljVGltZSA9IG1vbWVudCgpLmZvcm1hdChcIlhcIik7XG5cbiAgICAgICAgaWYgKGNhbWVyYS5jb25maWcuc2F2ZT8ucGF0aCkge1xuICAgICAgICAgIGZzLm1rZGlyU3luYyhjYW1lcmEuY29uZmlnLnNhdmUucGF0aCwge1xuICAgICAgICAgICAgcmVjdXJzaXZlOiB0cnVlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgICAgICAgIHBhdGguam9pbihjYW1lcmEuY29uZmlnLnNhdmUucGF0aCwgYCR7bmV3UGljVGltZX0uanBnYCksXG4gICAgICAgICAgICBwaG90b1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjYW1lcmEuaW1hZ2UgPSBwaG90bztcbiAgICAgICAgY2FtZXJhLnRpbWUgPSBuZXdQaWNUaW1lO1xuICAgICAgICBjYW1lcmEuYnVzeSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFN0YXRpc3RpY3MgYWJvdXQgY2FtZXJhIGR1cmF0aW9uXG4gICAgICAgIGxldCB0b29rUGljdHVyZSA9IG1vbWVudCgpO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB0b29rUGljdHVyZS5kaWZmKHRha2luZ1BpY3R1cmUpO1xuICAgICAgICBsb2dnZXIuZGVidWcoYFtDQU1FUkFdIFRvb2sgYSBwaWN0dXJlIC0gJHtkdXJhdGlvbn0gbXNgKTtcblxuICAgICAgICAvLyBTY2hlZHVsZSB0YWtpbmcgdGhlIG5leHQgcGljdHVyZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgY2FtZXJhLmxhc3RSZXF1ZXN0ICYmXG4gICAgICAgICAgY2FtZXJhLmNvbmZpZy5pbnRlcnZhbFNlYyA+IDAgJiZcbiAgICAgICAgICAhbWFudWFsVGFrZVxuICAgICAgICApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRha2VQaG90byhpZCk7XG4gICAgICAgICAgfSwgY2FtZXJhLmNvbmZpZy5pbnRlcnZhbFNlYyAqIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGxvZ2dlci5lcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGdldEpwZyA9IChpZCkgPT4ge1xuICBjb25zdCBjYW1lcmEgPSBnbG9iYWwuY2FtZXJhTGlzdFtpZF07XG5cbiAgaWYgKCFjYW1lcmEpIHtcbiAgICBsb2dnZXIud2FybihgW0NBTUVSQV0gQ2FtZXJhIG5vdCBmb3VuZCAke2lkfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYW1lcmEuaW1hZ2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaW5pdGlhbGl6ZUNhbWVyYXMsIGdldEpwZywgdGFrZVBob3RvIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/camera.js\n");

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

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst CameraAbstract = __webpack_require__(/*! ./CameraAbstract */ \"./server/modules/camera/CameraAbstract.js\");\n\nconst {\n  exec\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst md5 = __webpack_require__(/*! md5 */ \"md5\");\n\nclass UsbWebcam extends CameraAbstract {\n  constructor(camera) {\n    var _camera$options;\n\n    super();\n\n    _defineProperty(this, \"cameraConfig\", void 0);\n\n    if (!((_camera$options = camera.options) !== null && _camera$options !== void 0 && _camera$options.device)) return;\n    this.cameraConfig = camera;\n  }\n\n  async takePicture() {\n    const fileName = `/tmp/shot-${md5(this.cameraConfig.options.device)}.jpg`;\n    return new Promise((resolve, reject) => {\n      var _this$cameraConfig$op, _this$cameraConfig$op2, _this$cameraConfig$op3;\n\n      const resolution = (_this$cameraConfig$op = this.cameraConfig.options) !== null && _this$cameraConfig$op !== void 0 && _this$cameraConfig$op.width && (_this$cameraConfig$op2 = this.cameraConfig.options) !== null && _this$cameraConfig$op2 !== void 0 && _this$cameraConfig$op2.height ? `-r ${this.cameraConfig.options.width}x${this.cameraConfig.options.height}` : \"\";\n      const device = (_this$cameraConfig$op3 = this.cameraConfig.options) !== null && _this$cameraConfig$op3 !== void 0 && _this$cameraConfig$op3.device ? `-d ${this.cameraConfig.options.device}` : \"\";\n      const commandLine = `fswebcam ${device} ${resolution} -S 20 --no-banner --jpeg -1 ${fileName}`;\n      exec(commandLine, error => {\n        if (error) reject(error);else {\n          fs.readFile(fileName, (err, image) => {\n            if (err) reject(err);else resolve(image);\n          });\n        }\n      });\n    });\n  }\n\n}\n\nmodule.exports = UsbWebcam;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1VzYldlYmNhbS5qcz9iZmUwIl0sIm5hbWVzIjpbIkNhbWVyYUFic3RyYWN0IiwicmVxdWlyZSIsImV4ZWMiLCJmcyIsIm1kNSIsIlVzYldlYmNhbSIsImNvbnN0cnVjdG9yIiwiY2FtZXJhIiwib3B0aW9ucyIsImRldmljZSIsImNhbWVyYUNvbmZpZyIsInRha2VQaWN0dXJlIiwiZmlsZU5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc29sdXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNvbW1hbmRMaW5lIiwiZXJyb3IiLCJyZWFkRmlsZSIsImVyciIsImltYWdlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsbUVBQUQsQ0FBOUI7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQVdELG1CQUFPLENBQUMsb0NBQUQsQ0FBeEI7O0FBQ0EsTUFBTUUsRUFBRSxHQUFHRixtQkFBTyxDQUFDLGNBQUQsQ0FBbEI7O0FBQ0EsTUFBTUcsR0FBRyxHQUFHSCxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUVBLE1BQU1JLFNBQU4sU0FBd0JMLGNBQXhCLENBQXVDO0FBR3JDTSxhQUFXLENBQUNDLE1BQUQsRUFBUztBQUFBOztBQUNsQjs7QUFEa0I7O0FBR2xCLFFBQUkscUJBQUNBLE1BQU0sQ0FBQ0MsT0FBUiw0Q0FBQyxnQkFBZ0JDLE1BQWpCLENBQUosRUFBNkI7QUFFN0IsU0FBS0MsWUFBTCxHQUFvQkgsTUFBcEI7QUFDRDs7QUFFRCxRQUFNSSxXQUFOLEdBQW9CO0FBQ2xCLFVBQU1DLFFBQVEsR0FBSSxhQUFZUixHQUFHLENBQUMsS0FBS00sWUFBTCxDQUFrQkYsT0FBbEIsQ0FBMEJDLE1BQTNCLENBQW1DLE1BQXBFO0FBRUEsV0FBTyxJQUFJSSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQUE7O0FBQ3RDLFlBQU1DLFVBQVUsR0FDZCw4QkFBS04sWUFBTCxDQUFrQkYsT0FBbEIsd0VBQTJCUyxLQUEzQiw4QkFBb0MsS0FBS1AsWUFBTCxDQUFrQkYsT0FBdEQsbURBQW9DLHVCQUEyQlUsTUFBL0QsR0FDSyxNQUFLLEtBQUtSLFlBQUwsQ0FBa0JGLE9BQWxCLENBQTBCUyxLQUFNLElBQUcsS0FBS1AsWUFBTCxDQUFrQkYsT0FBbEIsQ0FBMEJVLE1BQU8sRUFEOUUsR0FFSSxFQUhOO0FBSUEsWUFBTVQsTUFBTSxHQUFHLCtCQUFLQyxZQUFMLENBQWtCRixPQUFsQiwwRUFBMkJDLE1BQTNCLEdBQ1YsTUFBSyxLQUFLQyxZQUFMLENBQWtCRixPQUFsQixDQUEwQkMsTUFBTyxFQUQ1QixHQUVYLEVBRko7QUFJQSxZQUFNVSxXQUFXLEdBQUksWUFBV1YsTUFBTyxJQUFHTyxVQUFXLGdDQUErQkosUUFBUyxFQUE3RjtBQUVBVixVQUFJLENBQUNpQixXQUFELEVBQWVDLEtBQUQsSUFBVztBQUMzQixZQUFJQSxLQUFKLEVBQVdMLE1BQU0sQ0FBQ0ssS0FBRCxDQUFOLENBQVgsS0FDSztBQUNIakIsWUFBRSxDQUFDa0IsUUFBSCxDQUFZVCxRQUFaLEVBQXNCLENBQUNVLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUNwQyxnQkFBSUQsR0FBSixFQUFTUCxNQUFNLENBQUNPLEdBQUQsQ0FBTixDQUFULEtBQ0tSLE9BQU8sQ0FBQ1MsS0FBRCxDQUFQO0FBQ04sV0FIRDtBQUlEO0FBQ0YsT0FSRyxDQUFKO0FBU0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUFuQ29DOztBQXNDdkNDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBCLFNBQWpCIiwiZmlsZSI6Ii4vc2VydmVyL21vZHVsZXMvY2FtZXJhL1VzYldlYmNhbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhbWVyYUFic3RyYWN0ID0gcmVxdWlyZShcIi4vQ2FtZXJhQWJzdHJhY3RcIik7XG5jb25zdCB7IGV4ZWMgfSA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBtZDUgPSByZXF1aXJlKFwibWQ1XCIpO1xuXG5jbGFzcyBVc2JXZWJjYW0gZXh0ZW5kcyBDYW1lcmFBYnN0cmFjdCB7XG4gIGNhbWVyYUNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihjYW1lcmEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKCFjYW1lcmEub3B0aW9ucz8uZGV2aWNlKSByZXR1cm47XG5cbiAgICB0aGlzLmNhbWVyYUNvbmZpZyA9IGNhbWVyYTtcbiAgfVxuXG4gIGFzeW5jIHRha2VQaWN0dXJlKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYC90bXAvc2hvdC0ke21kNSh0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLmRldmljZSl9LmpwZ2A7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVzb2x1dGlvbiA9XG4gICAgICAgIHRoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnM/LndpZHRoICYmIHRoaXMuY2FtZXJhQ29uZmlnLm9wdGlvbnM/LmhlaWdodFxuICAgICAgICAgID8gYC1yICR7dGhpcy5jYW1lcmFDb25maWcub3B0aW9ucy53aWR0aH14JHt0aGlzLmNhbWVyYUNvbmZpZy5vcHRpb25zLmhlaWdodH1gXG4gICAgICAgICAgOiBcIlwiO1xuICAgICAgY29uc3QgZGV2aWNlID0gdGhpcy5jYW1lcmFDb25maWcub3B0aW9ucz8uZGV2aWNlXG4gICAgICAgID8gYC1kICR7dGhpcy5jYW1lcmFDb25maWcub3B0aW9ucy5kZXZpY2V9YFxuICAgICAgICA6IFwiXCI7XG5cbiAgICAgIGNvbnN0IGNvbW1hbmRMaW5lID0gYGZzd2ViY2FtICR7ZGV2aWNlfSAke3Jlc29sdXRpb259IC1TIDIwIC0tbm8tYmFubmVyIC0tanBlZyAtMSAke2ZpbGVOYW1lfWA7XG5cbiAgICAgIGV4ZWMoY29tbWFuZExpbmUsIChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHJlamVjdChlcnJvcik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZzLnJlYWRGaWxlKGZpbGVOYW1lLCAoZXJyLCBpbWFnZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICBlbHNlIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzYldlYmNhbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/modules/camera/UsbWebcam.js\n");

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