(function() {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 4992:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync("./state/temperature.log").toString();
  const lines = data.split("\n").map(line => {
    const [date, temp, hum] = line.split(" ");
    return {
      date,
      temp,
      hum
    };
  });
  res.status(200).json(lines);
});

/***/ }),

/***/ 5747:
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
var __webpack_exports__ = (__webpack_exec__(4992));
module.exports = __webpack_exports__;

})();