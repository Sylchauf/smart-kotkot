/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useCameraHistory.ts":
/*!***********************************!*\
  !*** ./hooks/useCameraHistory.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar useCameraHistory = function useCameraHistory(cameraId) {\n  _s();\n\n  var result = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"cameraHistory\", /*#__PURE__*/(0,_media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var result;\n    return _media_sylchauf_9b62e0e5_f9b0_44df_b92c_d37c87df74d2_projects_smart_coop_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/camera/\".concat(cameraId, \"/list\"));\n\n          case 2:\n            result = _context.sent;\n            return _context.abrupt(\"return\", result.data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })));\n  return (result === null || result === void 0 ? void 0 : result.data) || [];\n};\n\n_s(useCameraHistory, \"JqpwbFFyOF6wIHaj5E6obYHTpSg=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCameraHistory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQ2FtZXJhSGlzdG9yeS50cz9mMDkyIl0sIm5hbWVzIjpbInVzZUNhbWVyYUhpc3RvcnkiLCJjYW1lcmFJZCIsInJlc3VsdCIsInVzZVF1ZXJ5IiwiYXhpb3MiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFFBQUQsRUFBc0I7QUFBQTs7QUFDN0MsTUFBTUMsTUFBTSxHQUFHQyxxREFBUSxDQUFDLGVBQUQsdVlBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2xCQyxnREFBQSx1QkFBeUJILFFBQXpCLFdBRGtCOztBQUFBO0FBQ2pDQyxrQkFEaUM7QUFBQSw2Q0FHaENBLE1BQU0sQ0FBQ0csSUFIeUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbEIsR0FBdkI7QUFNQSxTQUFPLENBQUFILE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRyxJQUFSLEtBQWdCLEVBQXZCO0FBQ0QsQ0FSRDs7R0FBTUwsZ0I7VUFDV0csaUQ7OztBQVNqQiwrREFBZUgsZ0JBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VDYW1lcmFIaXN0b3J5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuY29uc3QgdXNlQ2FtZXJhSGlzdG9yeSA9IChjYW1lcmFJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHVzZVF1ZXJ5KFwiY2FtZXJhSGlzdG9yeVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NhbWVyYS8ke2NhbWVyYUlkfS9saXN0YCk7XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ/LmRhdGEgfHwgW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VDYW1lcmFIaXN0b3J5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useCameraHistory.ts\n");

/***/ })

});