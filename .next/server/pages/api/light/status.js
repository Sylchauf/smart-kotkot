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
exports.id = "pages/api/light/status";
exports.ids = ["pages/api/light/status"];
exports.modules = {

/***/ "./constants/LIGHT_STATE.js":
/*!**********************************!*\
  !*** ./constants/LIGHT_STATE.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst LIGHT_STATE = {\n  ON: \"on\",\n  OFF: \"off\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LIGHT_STATE);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vY29uc3RhbnRzL0xJR0hUX1NUQVRFLmpzPzlmYzUiXSwibmFtZXMiOlsiTElHSFRfU1RBVEUiLCJPTiIsIk9GRiJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsR0FBRztBQUNsQkMsSUFBRSxFQUFFLElBRGM7QUFFbEJDLEtBQUcsRUFBRTtBQUZhLENBQXBCO0FBS0EsK0RBQWVGLFdBQWYiLCJmaWxlIjoiLi9jb25zdGFudHMvTElHSFRfU1RBVEUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMSUdIVF9TVEFURSA9IHtcbiAgT046IFwib25cIixcbiAgT0ZGOiBcIm9mZlwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTElHSFRfU1RBVEU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/LIGHT_STATE.js\n");

/***/ }),

/***/ "./engine/light.ts":
/*!*************************!*\
  !*** ./engine/light.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"switchLight\": function() { return /* binding */ switchLight; },\n/* harmony export */   \"lightState\": function() { return /* binding */ lightState; }\n/* harmony export */ });\n/* harmony import */ var _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/LIGHT_STATE */ \"./constants/LIGHT_STATE.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_modules_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/modules/light */ \"./server/modules/light/index.js\");\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/logger */ \"./lib/logger.js\");\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_logger__WEBPACK_IMPORTED_MODULE_3__);\n\n // @ts-ignore\n\n\n\nconst initialState = {\n  state: _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.OFF\n};\nconst filePathState = \"state/lightState.json\";\nconst lightState = fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(filePathState) ? JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePathState).toString()) : initialState;\n\nconst setLightState = (key, value) => {\n  lightState[key] = value;\n  fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(filePathState, JSON.stringify(lightState));\n};\n\nconst makeResponse = (status, message, logType = \"info\") => {\n  const response = {\n    status,\n    message\n  }; // @ts-ignore\n\n  (_lib_logger__WEBPACK_IMPORTED_MODULE_3___default())[logType](message);\n  return response;\n};\n\nconst switchLight = state => {\n  if (state !== _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.ON && state !== _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.OFF) return makeResponse(400, \"[Light] Invalid parameter (on/off)\", \"warn\");\n  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.ON && lightState.state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.ON) return makeResponse(409, \"[Light] You ask to switch on the light : it's already on\", \"warn\");\n  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.OFF && lightState.state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.OFF) return makeResponse(409, \"[Light] You ask to switch off the light : it's already off\", \"warn\");\n\n  if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.ON) {\n    // @ts-ignore\n    _server_modules_light__WEBPACK_IMPORTED_MODULE_2__.lightInstance.turnOn();\n  } else if (state === _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__.default.OFF) {\n    // @ts-ignore\n    _server_modules_light__WEBPACK_IMPORTED_MODULE_2__.lightInstance.turnOff();\n  }\n\n  setLightState(\"state\", state);\n  return makeResponse(200, `[Light] Switch the light ${state}`);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vZW5naW5lL2xpZ2h0LnRzPzk4MzQiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJMSUdIVF9TVEFURSIsIk9GRiIsImZpbGVQYXRoU3RhdGUiLCJsaWdodFN0YXRlIiwiZnMiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsInNldExpZ2h0U3RhdGUiLCJrZXkiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsIm1ha2VSZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJsb2dUeXBlIiwicmVzcG9uc2UiLCJsb2dnZXIiLCJzd2l0Y2hMaWdodCIsImxpZ2h0SW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUVDLCtEQUFlQztBQURILENBQXJCO0FBSUEsTUFBTUMsYUFBYSxHQUFHLHVCQUF0QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0Msb0RBQUEsQ0FBY0YsYUFBZCxJQUNmRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0Ysc0RBQUEsQ0FBZ0JGLGFBQWhCLEVBQStCSyxRQUEvQixFQUFYLENBRGUsR0FFZlQsWUFGSjs7QUFJQSxNQUFNVSxhQUFhLEdBQUcsQ0FBQ0MsR0FBRCxFQUFjQyxLQUFkLEtBQWdDO0FBQ3BEUCxZQUFVLENBQUNNLEdBQUQsQ0FBVixHQUFrQkMsS0FBbEI7QUFFQU4seURBQUEsQ0FBaUJGLGFBQWpCLEVBQWdDRyxJQUFJLENBQUNNLFNBQUwsQ0FBZVIsVUFBZixDQUFoQztBQUNELENBSkQ7O0FBTUEsTUFBTVMsWUFBWSxHQUFHLENBQUNDLE1BQUQsRUFBaUJDLE9BQWpCLEVBQWtDQyxPQUFPLEdBQUcsTUFBNUMsS0FBdUQ7QUFDMUUsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZILFVBRGU7QUFFZkM7QUFGZSxHQUFqQixDQUQwRSxDQU0xRTs7QUFDQUcsc0RBQU0sQ0FBQ0YsT0FBRCxDQUFOLENBQWdCRCxPQUFoQjtBQUVBLFNBQU9FLFFBQVA7QUFDRCxDQVZEOztBQVlBLE1BQU1FLFdBQVcsR0FBSW5CLEtBQUQsSUFBbUI7QUFDckMsTUFBSUEsS0FBSyxLQUFLQyw4REFBVixJQUE0QkQsS0FBSyxLQUFLQywrREFBMUMsRUFDRSxPQUFPWSxZQUFZLENBQUMsR0FBRCxFQUFNLG9DQUFOLEVBQTRDLE1BQTVDLENBQW5CO0FBRUYsTUFBSWIsS0FBSyxLQUFLQyw4REFBVixJQUE0QkcsVUFBVSxDQUFDSixLQUFYLEtBQXFCQyw4REFBckQsRUFDRSxPQUFPWSxZQUFZLENBQ2pCLEdBRGlCLEVBRWpCLDBEQUZpQixFQUdqQixNQUhpQixDQUFuQjtBQU1GLE1BQUliLEtBQUssS0FBS0MsK0RBQVYsSUFBNkJHLFVBQVUsQ0FBQ0osS0FBWCxLQUFxQkMsK0RBQXRELEVBQ0UsT0FBT1ksWUFBWSxDQUNqQixHQURpQixFQUVqQiw0REFGaUIsRUFHakIsTUFIaUIsQ0FBbkI7O0FBTUYsTUFBSWIsS0FBSyxLQUFLQyw4REFBZCxFQUE4QjtBQUM1QjtBQUNBbUIsMkVBQUE7QUFDRCxHQUhELE1BR08sSUFBSXBCLEtBQUssS0FBS0MsK0RBQWQsRUFBK0I7QUFDcEM7QUFDQW1CLDRFQUFBO0FBQ0Q7O0FBRURYLGVBQWEsQ0FBQyxPQUFELEVBQVVULEtBQVYsQ0FBYjtBQUVBLFNBQU9hLFlBQVksQ0FBQyxHQUFELEVBQU8sNEJBQTJCYixLQUFNLEVBQXhDLENBQW5CO0FBQ0QsQ0E3QkQiLCJmaWxlIjoiLi9lbmdpbmUvbGlnaHQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTElHSFRfU1RBVEUgZnJvbSBcIi4uL2NvbnN0YW50cy9MSUdIVF9TVEFURVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBsaWdodEluc3RhbmNlIH0gZnJvbSBcIi4uL3NlcnZlci9tb2R1bGVzL2xpZ2h0XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi9saWIvbG9nZ2VyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc3RhdGU6IExJR0hUX1NUQVRFLk9GRixcbn07XG5cbmNvbnN0IGZpbGVQYXRoU3RhdGUgPSBcInN0YXRlL2xpZ2h0U3RhdGUuanNvblwiO1xuY29uc3QgbGlnaHRTdGF0ZSA9IGZzLmV4aXN0c1N5bmMoZmlsZVBhdGhTdGF0ZSlcbiAgPyBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aFN0YXRlKS50b1N0cmluZygpKVxuICA6IGluaXRpYWxTdGF0ZTtcblxuY29uc3Qgc2V0TGlnaHRTdGF0ZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICBsaWdodFN0YXRlW2tleV0gPSB2YWx1ZTtcblxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoU3RhdGUsIEpTT04uc3RyaW5naWZ5KGxpZ2h0U3RhdGUpKTtcbn07XG5cbmNvbnN0IG1ha2VSZXNwb25zZSA9IChzdGF0dXM6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nLCBsb2dUeXBlID0gXCJpbmZvXCIpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgc3RhdHVzLFxuICAgIG1lc3NhZ2UsXG4gIH07XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBsb2dnZXJbbG9nVHlwZV0obWVzc2FnZSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3dpdGNoTGlnaHQgPSAoc3RhdGU6IHN0cmluZykgPT4ge1xuICBpZiAoc3RhdGUgIT09IExJR0hUX1NUQVRFLk9OICYmIHN0YXRlICE9PSBMSUdIVF9TVEFURS5PRkYpXG4gICAgcmV0dXJuIG1ha2VSZXNwb25zZSg0MDAsIFwiW0xpZ2h0XSBJbnZhbGlkIHBhcmFtZXRlciAob24vb2ZmKVwiLCBcIndhcm5cIik7XG5cbiAgaWYgKHN0YXRlID09PSBMSUdIVF9TVEFURS5PTiAmJiBsaWdodFN0YXRlLnN0YXRlID09PSBMSUdIVF9TVEFURS5PTilcbiAgICByZXR1cm4gbWFrZVJlc3BvbnNlKFxuICAgICAgNDA5LFxuICAgICAgXCJbTGlnaHRdIFlvdSBhc2sgdG8gc3dpdGNoIG9uIHRoZSBsaWdodCA6IGl0J3MgYWxyZWFkeSBvblwiLFxuICAgICAgXCJ3YXJuXCJcbiAgICApO1xuXG4gIGlmIChzdGF0ZSA9PT0gTElHSFRfU1RBVEUuT0ZGICYmIGxpZ2h0U3RhdGUuc3RhdGUgPT09IExJR0hUX1NUQVRFLk9GRilcbiAgICByZXR1cm4gbWFrZVJlc3BvbnNlKFxuICAgICAgNDA5LFxuICAgICAgXCJbTGlnaHRdIFlvdSBhc2sgdG8gc3dpdGNoIG9mZiB0aGUgbGlnaHQgOiBpdCdzIGFscmVhZHkgb2ZmXCIsXG4gICAgICBcIndhcm5cIlxuICAgICk7XG5cbiAgaWYgKHN0YXRlID09PSBMSUdIVF9TVEFURS5PTikge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBsaWdodEluc3RhbmNlLnR1cm5PbigpO1xuICB9IGVsc2UgaWYgKHN0YXRlID09PSBMSUdIVF9TVEFURS5PRkYpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbGlnaHRJbnN0YW5jZS50dXJuT2ZmKCk7XG4gIH1cblxuICBzZXRMaWdodFN0YXRlKFwic3RhdGVcIiwgc3RhdGUpO1xuXG4gIHJldHVybiBtYWtlUmVzcG9uc2UoMjAwLCBgW0xpZ2h0XSBTd2l0Y2ggdGhlIGxpZ2h0ICR7c3RhdGV9YCk7XG59O1xuXG5leHBvcnQgeyBzd2l0Y2hMaWdodCwgbGlnaHRTdGF0ZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./engine/light.ts\n");

/***/ }),

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

/***/ "./pages/api/light/status.ts":
/*!***********************************!*\
  !*** ./pages/api/light/status.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _engine_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../engine/light */ \"./engine/light.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  // @ts-ignore\n  const allCronJobs = global.cronJobs;\n  const nextAutomation = allCronJobs.map(oneCron => {\n    return {\n      action: oneCron.action,\n      nextDate: oneCron.nextDates().toDate()\n    };\n  }).filter(i => [\"light_on\", \"light_off\"].includes(i.action)).sort((a, b) => {\n    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(a.nextDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()(b.nextDate))) return -1;\n    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(a.nextDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_0___default()(b.nextDate))) return 1;\n    return 0;\n  });\n  res.status(200).json(_objectSpread(_objectSpread({}, _engine_light__WEBPACK_IMPORTED_MODULE_1__.lightState), {}, {\n    nextAutomation\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2xpZ2h0L3N0YXR1cy50cz85ZmY3Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsImFsbENyb25Kb2JzIiwiZ2xvYmFsIiwiY3JvbkpvYnMiLCJuZXh0QXV0b21hdGlvbiIsIm1hcCIsIm9uZUNyb24iLCJhY3Rpb24iLCJuZXh0RGF0ZSIsIm5leHREYXRlcyIsInRvRGF0ZSIsImZpbHRlciIsImkiLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsIm1vbWVudCIsImlzQmVmb3JlIiwiaXNBZnRlciIsInN0YXR1cyIsImpzb24iLCJsaWdodFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLCtEQUFlLENBQUNBLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzVEO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFFBQTNCO0FBRUEsUUFBTUMsY0FBYyxHQUFHSCxXQUFXLENBQy9CSSxHQURvQixDQUNmQyxPQUFELElBQWtCO0FBQ3JCLFdBQU87QUFDTEMsWUFBTSxFQUFFRCxPQUFPLENBQUNDLE1BRFg7QUFFTEMsY0FBUSxFQUFFRixPQUFPLENBQUNHLFNBQVIsR0FBb0JDLE1BQXBCO0FBRkwsS0FBUDtBQUlELEdBTm9CLEVBT3BCQyxNQVBvQixDQU9aQyxDQUFELElBQVksQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQkMsUUFBMUIsQ0FBbUNELENBQUMsQ0FBQ0wsTUFBckMsQ0FQQyxFQVFwQk8sSUFSb0IsQ0FRZixDQUFDQyxDQUFELEVBQVNDLENBQVQsS0FBb0I7QUFDeEIsUUFBSUMsNkNBQU0sQ0FBQ0YsQ0FBQyxDQUFDUCxRQUFILENBQU4sQ0FBbUJVLFFBQW5CLENBQTRCRCw2Q0FBTSxDQUFDRCxDQUFDLENBQUNSLFFBQUgsQ0FBbEMsQ0FBSixFQUFxRCxPQUFPLENBQUMsQ0FBUjtBQUNyRCxRQUFJUyw2Q0FBTSxDQUFDRixDQUFDLENBQUNQLFFBQUgsQ0FBTixDQUFtQlcsT0FBbkIsQ0FBMkJGLDZDQUFNLENBQUNELENBQUMsQ0FBQ1IsUUFBSCxDQUFqQyxDQUFKLEVBQW9ELE9BQU8sQ0FBUDtBQUNwRCxXQUFPLENBQVA7QUFDRCxHQVpvQixDQUF2QjtBQWNBUixLQUFHLENBQUNvQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsaUNBQTBCQyxxREFBMUI7QUFBc0NsQjtBQUF0QztBQUNELENBbkJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xpZ2h0L3N0YXR1cy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBsaWdodFN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2VuZ2luZS9saWdodFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBhbGxDcm9uSm9icyA9IGdsb2JhbC5jcm9uSm9icztcblxuICBjb25zdCBuZXh0QXV0b21hdGlvbiA9IGFsbENyb25Kb2JzXG4gICAgLm1hcCgob25lQ3JvbjogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpb246IG9uZUNyb24uYWN0aW9uLFxuICAgICAgICBuZXh0RGF0ZTogb25lQ3Jvbi5uZXh0RGF0ZXMoKS50b0RhdGUoKSxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuZmlsdGVyKChpOiBhbnkpID0+IFtcImxpZ2h0X29uXCIsIFwibGlnaHRfb2ZmXCJdLmluY2x1ZGVzKGkuYWN0aW9uKSlcbiAgICAuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGlmIChtb21lbnQoYS5uZXh0RGF0ZSkuaXNCZWZvcmUobW9tZW50KGIubmV4dERhdGUpKSkgcmV0dXJuIC0xO1xuICAgICAgaWYgKG1vbWVudChhLm5leHREYXRlKS5pc0FmdGVyKG1vbWVudChiLm5leHREYXRlKSkpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5saWdodFN0YXRlLCBuZXh0QXV0b21hdGlvbiB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/light/status.ts\n");

/***/ }),

/***/ "./server/modules/light/GCERelay.js":
/*!******************************************!*\
  !*** ./server/modules/light/GCERelay.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst {\n  exec\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nconst LightAbstract = __webpack_require__(/*! ./LightAbstract */ \"./server/modules/light/LightAbstract.js\");\n\nconst getConfig = __webpack_require__(/*! ../../../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst config = getConfig();\n\nclass GCERelay extends LightAbstract {\n  constructor() {\n    var _config$light$options;\n\n    super();\n\n    _defineProperty(this, \"device\", void 0);\n\n    this.device = ((_config$light$options = config.light.options) === null || _config$light$options === void 0 ? void 0 : _config$light$options.device) || \"/dev/ttyUSB0\";\n  }\n\n  async turnOn() {\n    exec(`echo RLY${config.light.options.pin}${config.light.options.activateWhen ? \"1\" : \"0\"} > ${this.device}`);\n  }\n\n  async turnOff() {\n    exec(`echo RLY${config.light.options.pin}${!config.light.options.activateWhen ? \"1\" : \"0\"} > ${this.device}`);\n  }\n\n}\n\nmodule.exports = GCERelay;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvbGlnaHQvR0NFUmVsYXkuanM/NmU4MSJdLCJuYW1lcyI6WyJleGVjIiwicmVxdWlyZSIsIkxpZ2h0QWJzdHJhY3QiLCJnZXRDb25maWciLCJjb25maWciLCJHQ0VSZWxheSIsImNvbnN0cnVjdG9yIiwiZGV2aWNlIiwibGlnaHQiLCJvcHRpb25zIiwidHVybk9uIiwicGluIiwiYWN0aXZhdGVXaGVuIiwidHVybk9mZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTTtBQUFFQTtBQUFGLElBQVdDLG1CQUFPLENBQUMsb0NBQUQsQ0FBeEI7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHRCxtQkFBTyxDQUFDLGdFQUFELENBQTdCOztBQUNBLE1BQU1FLFNBQVMsR0FBR0YsbUJBQU8sQ0FBQyxrREFBRCxDQUF6Qjs7QUFDQSxNQUFNRyxNQUFNLEdBQUdELFNBQVMsRUFBeEI7O0FBRUEsTUFBTUUsUUFBTixTQUF1QkgsYUFBdkIsQ0FBcUM7QUFHbkNJLGFBQVcsR0FBRztBQUFBOztBQUNaOztBQURZOztBQUdaLFNBQUtDLE1BQUwsR0FBYywwQkFBQUgsTUFBTSxDQUFDSSxLQUFQLENBQWFDLE9BQWIsZ0ZBQXNCRixNQUF0QixLQUFnQyxjQUE5QztBQUNEOztBQUVELFFBQU1HLE1BQU4sR0FBZTtBQUNiVixRQUFJLENBQ0QsV0FBVUksTUFBTSxDQUFDSSxLQUFQLENBQWFDLE9BQWIsQ0FBcUJFLEdBQUksR0FDbENQLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxPQUFiLENBQXFCRyxZQUFyQixHQUFvQyxHQUFwQyxHQUEwQyxHQUMzQyxNQUFLLEtBQUtMLE1BQU8sRUFIaEIsQ0FBSjtBQUtEOztBQUVELFFBQU1NLE9BQU4sR0FBZ0I7QUFDZGIsUUFBSSxDQUNELFdBQVVJLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxPQUFiLENBQXFCRSxHQUFJLEdBQ2xDLENBQUNQLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxPQUFiLENBQXFCRyxZQUF0QixHQUFxQyxHQUFyQyxHQUEyQyxHQUM1QyxNQUFLLEtBQUtMLE1BQU8sRUFIaEIsQ0FBSjtBQUtEOztBQXZCa0M7O0FBMEJyQ08sTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixRQUFqQiIsImZpbGUiOiIuL3NlcnZlci9tb2R1bGVzL2xpZ2h0L0dDRVJlbGF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBleGVjIH0gPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcbmNvbnN0IExpZ2h0QWJzdHJhY3QgPSByZXF1aXJlKFwiLi9MaWdodEFic3RyYWN0XCIpO1xuY29uc3QgZ2V0Q29uZmlnID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYi9nZXRDb25maWdcIik7XG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcblxuY2xhc3MgR0NFUmVsYXkgZXh0ZW5kcyBMaWdodEFic3RyYWN0IHtcbiAgZGV2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRldmljZSA9IGNvbmZpZy5saWdodC5vcHRpb25zPy5kZXZpY2UgfHwgXCIvZGV2L3R0eVVTQjBcIjtcbiAgfVxuXG4gIGFzeW5jIHR1cm5PbigpIHtcbiAgICBleGVjKFxuICAgICAgYGVjaG8gUkxZJHtjb25maWcubGlnaHQub3B0aW9ucy5waW59JHtcbiAgICAgICAgY29uZmlnLmxpZ2h0Lm9wdGlvbnMuYWN0aXZhdGVXaGVuID8gXCIxXCIgOiBcIjBcIlxuICAgICAgfSA+ICR7dGhpcy5kZXZpY2V9YFxuICAgICk7XG4gIH1cblxuICBhc3luYyB0dXJuT2ZmKCkge1xuICAgIGV4ZWMoXG4gICAgICBgZWNobyBSTFkke2NvbmZpZy5saWdodC5vcHRpb25zLnBpbn0ke1xuICAgICAgICAhY29uZmlnLmxpZ2h0Lm9wdGlvbnMuYWN0aXZhdGVXaGVuID8gXCIxXCIgOiBcIjBcIlxuICAgICAgfSA+ICR7dGhpcy5kZXZpY2V9YFxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHQ0VSZWxheTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/modules/light/GCERelay.js\n");

/***/ }),

/***/ "./server/modules/light/GPIO.js":
/*!**************************************!*\
  !*** ./server/modules/light/GPIO.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst MotorAbstract = __webpack_require__(/*! ./LightAbstract */ \"./server/modules/light/LightAbstract.js\");\n\nconst getConfig = __webpack_require__(/*! ../../../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst config = getConfig();\n\nclass GPIO extends MotorAbstract {\n  constructor() {\n    super();\n\n    _defineProperty(this, \"gpio\", void 0);\n\n    _defineProperty(this, \"pin\", void 0);\n\n    this.gpio = __webpack_require__(/*! onoff */ \"onoff\").Gpio;\n    this.pin = new Gpio(config.light.options.pin, \"high\");\n  }\n\n  async turnOn() {\n    this.pin.writeSync(config.door.options.activateWhen ? \"1\" : \"0\");\n  }\n\n  async turnOff() {\n    this.pin.writeSync(!config.door.options.activateWhen ? \"1\" : \"0\");\n  }\n\n}\n\nmodule.exports = GPIO;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvbGlnaHQvR1BJTy5qcz84N2ZmIl0sIm5hbWVzIjpbIk1vdG9yQWJzdHJhY3QiLCJyZXF1aXJlIiwiZ2V0Q29uZmlnIiwiY29uZmlnIiwiR1BJTyIsImNvbnN0cnVjdG9yIiwiZ3BpbyIsInBpbiIsIkdwaW8iLCJsaWdodCIsIm9wdGlvbnMiLCJ0dXJuT24iLCJ3cml0ZVN5bmMiLCJkb29yIiwiYWN0aXZhdGVXaGVuIiwidHVybk9mZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLGdFQUFELENBQTdCOztBQUNBLE1BQU1DLFNBQVMsR0FBR0QsbUJBQU8sQ0FBQyxrREFBRCxDQUF6Qjs7QUFDQSxNQUFNRSxNQUFNLEdBQUdELFNBQVMsRUFBeEI7O0FBRUEsTUFBTUUsSUFBTixTQUFtQkosYUFBbkIsQ0FBaUM7QUFJL0JLLGFBQVcsR0FBRztBQUNaOztBQURZOztBQUFBOztBQUdaLFNBQUtDLElBQUwsR0FBWUwsOENBQVo7QUFDQSxTQUFLTSxHQUFMLEdBQVcsSUFBSUMsSUFBSixDQUFTTCxNQUFNLENBQUNNLEtBQVAsQ0FBYUMsT0FBYixDQUFxQkgsR0FBOUIsRUFBbUMsTUFBbkMsQ0FBWDtBQUNEOztBQUVELFFBQU1JLE1BQU4sR0FBZTtBQUNiLFNBQUtKLEdBQUwsQ0FBU0ssU0FBVCxDQUFtQlQsTUFBTSxDQUFDVSxJQUFQLENBQVlILE9BQVosQ0FBb0JJLFlBQXBCLEdBQW1DLEdBQW5DLEdBQXlDLEdBQTVEO0FBQ0Q7O0FBRUQsUUFBTUMsT0FBTixHQUFnQjtBQUNkLFNBQUtSLEdBQUwsQ0FBU0ssU0FBVCxDQUFtQixDQUFDVCxNQUFNLENBQUNVLElBQVAsQ0FBWUgsT0FBWixDQUFvQkksWUFBckIsR0FBb0MsR0FBcEMsR0FBMEMsR0FBN0Q7QUFDRDs7QUFqQjhCOztBQW9CakNFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsSUFBakIiLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kdWxlcy9saWdodC9HUElPLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW90b3JBYnN0cmFjdCA9IHJlcXVpcmUoXCIuL0xpZ2h0QWJzdHJhY3RcIik7XG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL2dldENvbmZpZ1wiKTtcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xuXG5jbGFzcyBHUElPIGV4dGVuZHMgTW90b3JBYnN0cmFjdCB7XG4gIGdwaW87XG4gIHBpbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5ncGlvID0gcmVxdWlyZShcIm9ub2ZmXCIpLkdwaW87XG4gICAgdGhpcy5waW4gPSBuZXcgR3Bpbyhjb25maWcubGlnaHQub3B0aW9ucy5waW4sIFwiaGlnaFwiKTtcbiAgfVxuXG4gIGFzeW5jIHR1cm5PbigpIHtcbiAgICB0aGlzLnBpbi53cml0ZVN5bmMoY29uZmlnLmRvb3Iub3B0aW9ucy5hY3RpdmF0ZVdoZW4gPyBcIjFcIiA6IFwiMFwiKTtcbiAgfVxuXG4gIGFzeW5jIHR1cm5PZmYoKSB7XG4gICAgdGhpcy5waW4ud3JpdGVTeW5jKCFjb25maWcuZG9vci5vcHRpb25zLmFjdGl2YXRlV2hlbiA/IFwiMVwiIDogXCIwXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR1BJTztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server/modules/light/GPIO.js\n");

/***/ }),

/***/ "./server/modules/light/LightAbstract.js":
/*!***********************************************!*\
  !*** ./server/modules/light/LightAbstract.js ***!
  \***********************************************/
/***/ (function(module) {

eval("class LightAbstract {\n  constructor() {\n    // The constructor can be useful to initialize somethings\n    return null;\n  }\n\n  async turnOn() {// Move the Motor to the up\n  }\n\n  async turnOff() {// Move the Motor to the down\n  }\n\n}\n\nmodule.exports = LightAbstract;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvbGlnaHQvTGlnaHRBYnN0cmFjdC5qcz83NjNmIl0sIm5hbWVzIjpbIkxpZ2h0QWJzdHJhY3QiLCJjb25zdHJ1Y3RvciIsInR1cm5PbiIsInR1cm5PZmYiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxhQUFOLENBQW9CO0FBQ2xCQyxFQUFBQSxXQUFXLEdBQUc7QUFDWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUNELFFBQU1DLE1BQU4sR0FBZSxDQUNiO0FBQ0Q7O0FBQ0QsUUFBTUMsT0FBTixHQUFnQixDQUNkO0FBQ0Q7O0FBVmlCOztBQWFwQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExpZ2h0QWJzdHJhY3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBUaGUgY29uc3RydWN0b3IgY2FuIGJlIHVzZWZ1bCB0byBpbml0aWFsaXplIHNvbWV0aGluZ3NcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyB0dXJuT24oKSB7XG4gICAgLy8gTW92ZSB0aGUgTW90b3IgdG8gdGhlIHVwXG4gIH1cbiAgYXN5bmMgdHVybk9mZigpIHtcbiAgICAvLyBNb3ZlIHRoZSBNb3RvciB0byB0aGUgZG93blxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGlnaHRBYnN0cmFjdDtcbiJdLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kdWxlcy9saWdodC9MaWdodEFic3RyYWN0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/modules/light/LightAbstract.js\n");

/***/ }),

/***/ "./server/modules/light/index.js":
/*!***************************************!*\
  !*** ./server/modules/light/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("let lightInstance;\n\nconst GCERelay = __webpack_require__(/*! ./GCERelay */ \"./server/modules/light/GCERelay.js\");\n\nconst GPIO = __webpack_require__(/*! ./GPIO */ \"./server/modules/light/GPIO.js\");\n\nconst getConfig = __webpack_require__(/*! ../../../lib/getConfig */ \"./lib/getConfig.js\");\n\nconst config = getConfig();\n\nswitch (config.light.module) {\n  case \"GCERelay\":\n    lightInstance = new GCERelay();\n    break;\n\n  case \"GPIO\":\n    lightInstance = new GPIO();\n    break;\n}\n\nexports.lightInstance = lightInstance;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vc2VydmVyL21vZHVsZXMvbGlnaHQvaW5kZXguanM/MGVkOCJdLCJuYW1lcyI6WyJsaWdodEluc3RhbmNlIiwiR0NFUmVsYXkiLCJyZXF1aXJlIiwiR1BJTyIsImdldENvbmZpZyIsImNvbmZpZyIsImxpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsYUFBSjs7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBeEI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLDhDQUFELENBQXBCOztBQUNBLE1BQU1FLFNBQVMsR0FBR0YsbUJBQU8sQ0FBQyxrREFBRCxDQUF6Qjs7QUFFQSxNQUFNRyxNQUFNLEdBQUdELFNBQVMsRUFBeEI7O0FBRUEsUUFBUUMsTUFBTSxDQUFDQyxLQUFQLENBQWFDLE1BQXJCO0FBQ0UsT0FBSyxVQUFMO0FBQ0VQLGlCQUFhLEdBQUcsSUFBSUMsUUFBSixFQUFoQjtBQUNBOztBQUNGLE9BQUssTUFBTDtBQUNFRCxpQkFBYSxHQUFHLElBQUlHLElBQUosRUFBaEI7QUFDQTtBQU5KOztBQVNBSyxxQkFBQSxHQUF3QlIsYUFBeEIiLCJmaWxlIjoiLi9zZXJ2ZXIvbW9kdWxlcy9saWdodC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsaWdodEluc3RhbmNlO1xuXG5jb25zdCBHQ0VSZWxheSA9IHJlcXVpcmUoXCIuL0dDRVJlbGF5XCIpO1xuY29uc3QgR1BJTyA9IHJlcXVpcmUoXCIuL0dQSU9cIik7XG5jb25zdCBnZXRDb25maWcgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGliL2dldENvbmZpZ1wiKTtcblxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKCk7XG5cbnN3aXRjaCAoY29uZmlnLmxpZ2h0Lm1vZHVsZSkge1xuICBjYXNlIFwiR0NFUmVsYXlcIjpcbiAgICBsaWdodEluc3RhbmNlID0gbmV3IEdDRVJlbGF5KCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgXCJHUElPXCI6XG4gICAgbGlnaHRJbnN0YW5jZSA9IG5ldyBHUElPKCk7XG4gICAgYnJlYWs7XG59XG5cbmV4cG9ydHMubGlnaHRJbnN0YW5jZSA9IGxpZ2h0SW5zdGFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./server/modules/light/index.js\n");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "onoff":
/*!************************!*\
  !*** external "onoff" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("onoff");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/light/status.ts"));
module.exports = __webpack_exports__;

})();