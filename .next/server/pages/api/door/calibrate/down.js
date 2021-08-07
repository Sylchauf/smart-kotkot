(function() {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 5545:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3415);

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const result = (0,_engine_door__WEBPACK_IMPORTED_MODULE_0__/* .correctBottom */ .Gv)();
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [415], function() { return __webpack_exec__(5545); });
module.exports = __webpack_exports__;

})();