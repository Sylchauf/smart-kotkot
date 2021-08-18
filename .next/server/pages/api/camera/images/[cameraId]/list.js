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
exports.id = "pages/api/camera/images/[cameraId]/list";
exports.ids = ["pages/api/camera/images/[cameraId]/list"];
exports.modules = {

/***/ "./pages/api/camera/images/[cameraId]/list.ts":
/*!****************************************************!*\
  !*** ./pages/api/camera/images/[cameraId]/list.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const camera = global.cameraList[String(req.query.cameraId)];\n  const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(camera.config.save.path);\n  if (files) res.status(200).json(files);else res.status(404).send(\"\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL2NhbWVyYS9pbWFnZXMvW2NhbWVyYUlkXS9saXN0LnRzP2JjMTUiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiY2FtZXJhIiwiZ2xvYmFsIiwiY2FtZXJhTGlzdCIsIlN0cmluZyIsInF1ZXJ5IiwiY2FtZXJhSWQiLCJmaWxlcyIsImZzIiwiY29uZmlnIiwic2F2ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFHQSwrREFBZSxDQUFDQSxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxRQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsTUFBTSxDQUFDTCxHQUFHLENBQUNNLEtBQUosQ0FBVUMsUUFBWCxDQUF4QixDQUFmO0FBRUEsUUFBTUMsS0FBSyxHQUFHQyxxREFBQSxDQUFlUCxNQUFNLENBQUNRLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsSUFBbEMsQ0FBZDtBQUVBLE1BQUlKLEtBQUosRUFBV1AsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJOLEtBQXJCLEVBQVgsS0FDS1AsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkUsSUFBaEIsQ0FBcUIsRUFBckI7QUFDTixDQVBEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhbWVyYS9pbWFnZXMvW2NhbWVyYUlkXS9saXN0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBjYW1lcmEgPSBnbG9iYWwuY2FtZXJhTGlzdFtTdHJpbmcocmVxLnF1ZXJ5LmNhbWVyYUlkKV07XG5cbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhjYW1lcmEuY29uZmlnLnNhdmUucGF0aCk7XG5cbiAgaWYgKGZpbGVzKSByZXMuc3RhdHVzKDIwMCkuanNvbihmaWxlcyk7XG4gIGVsc2UgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/camera/images/[cameraId]/list.ts\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/camera/images/[cameraId]/list.ts"));
module.exports = __webpack_exports__;

})();