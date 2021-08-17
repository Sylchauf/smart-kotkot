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
exports.id = "pages/api/temperature/logs";
exports.ids = ["pages/api/temperature/logs"];
exports.modules = {

/***/ "./pages/api/temperature/logs.ts":
/*!***************************************!*\
  !*** ./pages/api/temperature/logs.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"./state/temperature.log\").toString();\n  const lines = data.split(\"\\n\").map(line => {\n    const [date, temp, hum] = line.split(\" \");\n    return {\n      date,\n      temp,\n      hum\n    };\n  });\n  res.status(200).json(lines);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC1jb29wLy4vcGFnZXMvYXBpL3RlbXBlcmF0dXJlL2xvZ3MudHM/ZGExZSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJkYXRhIiwiZnMiLCJ0b1N0cmluZyIsImxpbmVzIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiZGF0ZSIsInRlbXAiLCJodW0iLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUdBLCtEQUFlLENBQUNBLEdBQUQsRUFBc0JDLEdBQXRCLEtBQStDO0FBQzVELFFBQU1DLElBQUksR0FBR0Msc0RBQUEsQ0FBZ0IseUJBQWhCLEVBQTJDQyxRQUEzQyxFQUFiO0FBRUEsUUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxHQUFqQixDQUFzQkMsSUFBRCxJQUFVO0FBQzNDLFVBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLEdBQWIsSUFBb0JILElBQUksQ0FBQ0YsS0FBTCxDQUFXLEdBQVgsQ0FBMUI7QUFFQSxXQUFPO0FBQUVHLFVBQUY7QUFBUUMsVUFBUjtBQUFjQztBQUFkLEtBQVA7QUFDRCxHQUphLENBQWQ7QUFNQVYsS0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJSLEtBQXJCO0FBQ0QsQ0FWRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS90ZW1wZXJhdHVyZS9sb2dzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKFwiLi9zdGF0ZS90ZW1wZXJhdHVyZS5sb2dcIikudG9TdHJpbmcoKTtcblxuICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lKSA9PiB7XG4gICAgY29uc3QgW2RhdGUsIHRlbXAsIGh1bV0gPSBsaW5lLnNwbGl0KFwiIFwiKTtcblxuICAgIHJldHVybiB7IGRhdGUsIHRlbXAsIGh1bSB9O1xuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihsaW5lcyk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/temperature/logs.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/temperature/logs.ts"));
module.exports = __webpack_exports__;

})();