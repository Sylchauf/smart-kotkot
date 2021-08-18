(function() {
var exports = {};
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 6420:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  // @ts-ignore
  const camera = global.cameraList[String(req.query.cameraId)];
  const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(camera.config.save.path);
  if (files) res.status(200).json(files);else res.status(404).send("");
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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6420));
module.exports = __webpack_exports__;

})();