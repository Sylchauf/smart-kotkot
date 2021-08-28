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
exports.id = "pages/api/camera/list";
exports.ids = ["pages/api/camera/list"];
exports.modules = {

/***/ "./pages/api/camera/list.ts":
/*!**********************************!*\
  !*** ./pages/api/camera/list.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  // @ts-ignore\n  const allCams = global.cameraList;\n  const cameras = Object.keys(allCams).map(key => {\n    const oneCamera = allCams[key];\n    return {\n      id: key,\n      config: oneCamera.config,\n      lastRequest: oneCamera.lastRequest.toISOString()\n    };\n  });\n  res.status(200).json(cameras);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9saXN0LnRzPzE3NDAiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiYWxsQ2FtcyIsImdsb2JhbCIsImNhbWVyYUxpc3QiLCJjYW1lcmFzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsIm9uZUNhbWVyYSIsImlkIiwiY29uZmlnIiwibGFzdFJlcXVlc3QiLCJ0b0lTT1N0cmluZyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RDtBQUNBLFFBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxVQUF2QjtBQUVBLFFBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLE9BQVosRUFBcUJNLEdBQXJCLENBQTBCQyxHQUFELElBQVM7QUFDaEQsVUFBTUMsU0FBUyxHQUFHUixPQUFPLENBQUNPLEdBQUQsQ0FBekI7QUFFQSxXQUFPO0FBQ0xFLFFBQUUsRUFBRUYsR0FEQztBQUVMRyxZQUFNLEVBQUVGLFNBQVMsQ0FBQ0UsTUFGYjtBQUdMQyxpQkFBVyxFQUFFSCxTQUFTLENBQUNHLFdBQVYsQ0FBc0JDLFdBQXRCO0FBSFIsS0FBUDtBQUtELEdBUmUsQ0FBaEI7QUFTQWIsS0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJYLE9BQXJCO0FBQ0QsQ0FkRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jYW1lcmEvbGlzdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBhbGxDYW1zID0gZ2xvYmFsLmNhbWVyYUxpc3Q7XG5cbiAgY29uc3QgY2FtZXJhcyA9IE9iamVjdC5rZXlzKGFsbENhbXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3Qgb25lQ2FtZXJhID0gYWxsQ2Ftc1trZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBrZXksXG4gICAgICBjb25maWc6IG9uZUNhbWVyYS5jb25maWcsXG4gICAgICBsYXN0UmVxdWVzdDogb25lQ2FtZXJhLmxhc3RSZXF1ZXN0LnRvSVNPU3RyaW5nKCksXG4gICAgfTtcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhbWVyYXMpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/camera/list.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/camera/list.ts"));
module.exports = __webpack_exports__;

})();