(function() {
var exports = {};
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 5742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3415);
/* harmony import */ var _constants_DOOR_DIRECTION__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4814);


/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const result = (0,_engine_door__WEBPACK_IMPORTED_MODULE_0__/* .moveDoor */ .LW)(_constants_DOOR_DIRECTION__WEBPACK_IMPORTED_MODULE_1__/* .default.UP */ .Z.UP);
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
var __webpack_exports__ = __webpack_require__.X(0, [415], function() { return __webpack_exec__(5742); });
module.exports = __webpack_exports__;

})();