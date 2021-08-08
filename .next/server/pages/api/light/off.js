(function() {
var exports = {};
exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 5813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7414);
/* harmony import */ var _engine_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7524);


/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const result = (0,_engine_light__WEBPACK_IMPORTED_MODULE_1__/* .switchLight */ .J)(_constants_LIGHT_STATE__WEBPACK_IMPORTED_MODULE_0__/* .default.OFF */ .Z.OFF);
  res.status(result.status).json(result);
});

/***/ }),

/***/ 3129:
/***/ (function(module) {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 4854:
/***/ (function(module) {

"use strict";
module.exports = require("onoff");;

/***/ }),

/***/ 944:
/***/ (function(module) {

"use strict";
module.exports = require("winston");;

/***/ }),

/***/ 2510:
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
var __webpack_exports__ = __webpack_require__.X(0, [847,524], function() { return __webpack_exec__(5813); });
module.exports = __webpack_exports__;

})();