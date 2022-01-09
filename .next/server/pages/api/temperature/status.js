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
exports.id = "pages/api/temperature/status";
exports.ids = ["pages/api/temperature/status"];
exports.modules = {

/***/ "./pages/api/temperature/status.ts":
/*!*****************************************!*\
  !*** ./pages/api/temperature/status.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var read_last_lines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! read-last-lines */ \"read-last-lines\");\n/* harmony import */ var read_last_lines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(read_last_lines__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const lastLine = await read_last_lines__WEBPACK_IMPORTED_MODULE_0___default().read(\"./state/temperature.log\", 1);\n  const [date, actualTemp, actualHum] = String(lastLine).split(\" \");\n  res.status(200).json({\n    date,\n    actualTemp,\n    actualHum\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL3RlbXBlcmF0dXJlL3N0YXR1cy50cz8xNjZmIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsImxhc3RMaW5lIiwicmVhZExhc3RMaW5lcyIsImRhdGUiLCJhY3R1YWxUZW1wIiwiYWN0dWFsSHVtIiwiU3RyaW5nIiwic3BsaXQiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUVBLCtEQUFlLE9BQU9BLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLFFBQU1DLFFBQVEsR0FBRyxNQUFNQywyREFBQSxDQUFtQix5QkFBbkIsRUFBOEMsQ0FBOUMsQ0FBdkI7QUFFQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsVUFBUCxFQUFtQkMsU0FBbkIsSUFBZ0NDLE1BQU0sQ0FBQ0wsUUFBRCxDQUFOLENBQWlCTSxLQUFqQixDQUF1QixHQUF2QixDQUF0QztBQUVBUCxLQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNuQk4sUUFEbUI7QUFFbkJDLGNBRm1CO0FBR25CQztBQUhtQixHQUFyQjtBQUtELENBVkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdGVtcGVyYXR1cmUvc3RhdHVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcmVhZExhc3RMaW5lcyBmcm9tIFwicmVhZC1sYXN0LWxpbmVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBsYXN0TGluZSA9IGF3YWl0IHJlYWRMYXN0TGluZXMucmVhZChcIi4vc3RhdGUvdGVtcGVyYXR1cmUubG9nXCIsIDEpO1xuXG4gIGNvbnN0IFtkYXRlLCBhY3R1YWxUZW1wLCBhY3R1YWxIdW1dID0gU3RyaW5nKGxhc3RMaW5lKS5zcGxpdChcIiBcIik7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGRhdGUsXG4gICAgYWN0dWFsVGVtcCxcbiAgICBhY3R1YWxIdW0sXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/temperature/status.ts\n");

/***/ }),

/***/ "read-last-lines":
/*!**********************************!*\
  !*** external "read-last-lines" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("read-last-lines");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/temperature/status.ts"));
module.exports = __webpack_exports__;

})();