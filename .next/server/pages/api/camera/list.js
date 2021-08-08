(function() {
var exports = {};
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 8396:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  // @ts-ignore
  const allCams = global.cameraList;
  const cameras = Object.keys(allCams).map(key => {
    const oneCamera = allCams[key];
    return {
      id: key,
      config: oneCamera.config,
      lastRequest: oneCamera.lastRequest.toISOString()
    };
  });
  res.status(200).json(cameras);
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8396));
module.exports = __webpack_exports__;

})();