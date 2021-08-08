(function() {
var exports = {};
exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 2206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3415);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.status(200).json(_objectSpread(_objectSpread({}, _engine_door__WEBPACK_IMPORTED_MODULE_0__/* .doorState */ .Yi), _engine_door__WEBPACK_IMPORTED_MODULE_0__/* .status */ .i7));
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
var __webpack_exports__ = __webpack_require__.X(0, [415], function() { return __webpack_exec__(2206); });
module.exports = __webpack_exports__;

})();