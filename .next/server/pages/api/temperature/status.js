(function() {
var exports = {};
exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 3070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ temperature_status; }
});

;// CONCATENATED MODULE: external "read-last-lines"
var external_read_last_lines_namespaceObject = require("read-last-lines");;
var external_read_last_lines_default = /*#__PURE__*/__webpack_require__.n(external_read_last_lines_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/temperature/status.ts

/* harmony default export */ var temperature_status = (async (req, res) => {
  const lastLine = await external_read_last_lines_default().read("./state/temperature.log", 1);
  const [date, actualTemp, actualHum] = String(lastLine).split(" ");
  res.status(200).json({
    date,
    actualTemp,
    actualHum
  });
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3070));
module.exports = __webpack_exports__;

})();