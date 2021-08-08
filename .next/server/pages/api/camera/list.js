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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const allCams = global.cameraList;\n  const cameras = Object.keys(allCams).map(key => {\n    const oneCamera = allCams[key];\n    return {\n      id: key,\n      config: oneCamera.config,\n      lastRequest: oneCamera.lastRequest.toISOString()\n    };\n  });\n  res.status(200).json(cameras);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9saXN0LnRzPzE3NDAiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiYWxsQ2FtcyIsImdsb2JhbCIsImNhbWVyYUxpc3QiLCJjYW1lcmFzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsIm9uZUNhbWVyYSIsImlkIiwiY29uZmlnIiwibGFzdFJlcXVlc3QiLCJ0b0lTT1N0cmluZyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7QUFFQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxRQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBdkI7QUFFQSxRQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxPQUFaLEVBQXFCTSxHQUFyQixDQUEwQkMsR0FBRCxJQUFTO0FBQ2hELFVBQU1DLFNBQVMsR0FBR1IsT0FBTyxDQUFDTyxHQUFELENBQXpCO0FBRUEsV0FBTztBQUNMRSxRQUFFLEVBQUVGLEdBREM7QUFFTEcsWUFBTSxFQUFFRixTQUFTLENBQUNFLE1BRmI7QUFHTEMsaUJBQVcsRUFBRUgsU0FBUyxDQUFDRyxXQUFWLENBQXNCQyxXQUF0QjtBQUhSLEtBQVA7QUFLRCxHQVJlLENBQWhCO0FBU0FiLEtBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCWCxPQUFyQjtBQUNELENBYkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2FtZXJhL2xpc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGFsbENhbXMgPSBnbG9iYWwuY2FtZXJhTGlzdDtcblxuICBjb25zdCBjYW1lcmFzID0gT2JqZWN0LmtleXMoYWxsQ2FtcykubWFwKChrZXkpID0+IHtcbiAgICBjb25zdCBvbmVDYW1lcmEgPSBhbGxDYW1zW2tleV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGtleSxcbiAgICAgIGNvbmZpZzogb25lQ2FtZXJhLmNvbmZpZyxcbiAgICAgIGxhc3RSZXF1ZXN0OiBvbmVDYW1lcmEubGFzdFJlcXVlc3QudG9JU09TdHJpbmcoKSxcbiAgICB9O1xuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oY2FtZXJhcyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/camera/list.ts\n");

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