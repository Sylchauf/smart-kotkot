(function() {
var exports = {};
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 6538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _engine_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7524);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  // @ts-ignore
  const allCronJobs = global.cronJobs;
  const nextAutomation = allCronJobs.map(oneCron => {
    return {
      action: oneCron.action,
      nextDate: oneCron.nextDates().toDate()
    };
  }).filter(i => ["light_on", "light_off"].includes(i.action)).sort((a, b) => {
    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(a.nextDate).isBefore(moment__WEBPACK_IMPORTED_MODULE_0___default()(b.nextDate))) return -1;
    if (moment__WEBPACK_IMPORTED_MODULE_0___default()(a.nextDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_0___default()(b.nextDate))) return 1;
    return 0;
  });
  res.status(200).json(_objectSpread(_objectSpread({}, _engine_light__WEBPACK_IMPORTED_MODULE_1__/* .lightState */ .N), {}, {
    nextAutomation
  }));
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

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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
var __webpack_exports__ = __webpack_require__.X(0, [847,524], function() { return __webpack_exec__(6538); });
module.exports = __webpack_exports__;

})();