/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CameraHistory.tsx":
/*!**************************************!*\
  !*** ./components/CameraHistory.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _hooks_useCameraList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useCameraList */ \"./hooks/useCameraList.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/media/sylchauf/9b62e0e5-f9b0-44df-b92c-d37c87df74d2/projects/smart-coop/components/CameraHistory.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CameraHistory = function CameraHistory() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      cameraSelected = _useState[0],\n      setCameraSelected = _useState[1];\n\n  var cameraList = (0,_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n  var handleChange = function handleChange(event) {\n    setCameraSelected(event.target.value);\n  };\n\n  console.log('cameraList:', cameraList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n      fullWidth: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {\n        id: \"camera-list-label\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), \" \", \":\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {\n        labelId: \"camera-list-label\",\n        value: cameraSelected,\n        onChange: handleChange,\n        children: cameraList.map(function (camera) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n            value: camera.id,\n            children: camera.config.name\n          }, camera.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CameraHistory, \"6FPYxkv3/XXNAH5KLsvDSUUXGOs=\", false, function () {\n  return [_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_2__.default];\n});\n\n_c = CameraHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraHistory);\n\nvar _c;\n\n$RefreshReg$(_c, \"CameraHistory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFIaXN0b3J5LnRzeD9jMzUxIl0sIm5hbWVzIjpbIkNhbWVyYUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImNhbWVyYVNlbGVjdGVkIiwic2V0Q2FtZXJhU2VsZWN0ZWQiLCJjYW1lcmFMaXN0IiwidXNlQ2FtZXJhTGlzdCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY2FtZXJhIiwiaWQiLCJjb25maWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLEVBRGhCO0FBQUEsTUFDN0JDLGNBRDZCO0FBQUEsTUFDYkMsaUJBRGE7O0FBR3BDLE1BQU1DLFVBQVUsR0FBR0MsNkRBQWEsRUFBaEM7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNuQ0oscUJBQWlCLENBQUNJLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWpCO0FBQ0QsR0FGRDs7QUFJRUMsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlAsVUFBM0I7QUFFRixzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDBEQUFEO0FBQWEsZUFBUyxNQUF0QjtBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQVksVUFBRSxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFDRSxZQUFFLEVBQUUscUJBRE47QUFFRSx3QkFBYyxFQUFFO0FBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJSyxHQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUsOERBQUMscURBQUQ7QUFDRSxlQUFPLEVBQUMsbUJBRFY7QUFFRSxhQUFLLEVBQUVGLGNBRlQ7QUFHRSxnQkFBUSxFQUFFSSxZQUhaO0FBQUEsa0JBS0dGLFVBQVUsQ0FBQ1EsR0FBWCxDQUFlLFVBQUNDLE1BQUQ7QUFBQSw4QkFDZCw4REFBQyx1REFBRDtBQUEwQixpQkFBSyxFQUFFQSxNQUFNLENBQUNDLEVBQXhDO0FBQUEsc0JBQ0dELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQztBQURqQixhQUFlSCxNQUFNLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQW5DRDs7R0FBTWQsYTtVQUdlSyx5RDs7O0tBSGZMLGE7QUFxQ04sK0RBQWVBLGFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbWVyYUhpc3RvcnkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgdXNlQ2FtZXJhTGlzdCBmcm9tIFwiLi4vaG9va3MvdXNlQ2FtZXJhTGlzdFwiO1xuXG5jb25zdCBDYW1lcmFIaXN0b3J5OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NhbWVyYVNlbGVjdGVkLCBzZXRDYW1lcmFTZWxlY3RlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgY2FtZXJhTGlzdCA9IHVzZUNhbWVyYUxpc3QoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldENhbWVyYVNlbGVjdGVkKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xuICB9O1xuXG4gICAgY29uc29sZS5sb2coJ2NhbWVyYUxpc3Q6JywgY2FtZXJhTGlzdCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYW1lcmEtbGlzdC1sYWJlbFwiPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICBpZD17XCJDYW1lcmEuU2VsZWN0Q2FtZXJhXCJ9XG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17XCJDaG9vc2UgdGhlIGNhbWVyYVwifVxuICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDpcbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cImNhbWVyYS1saXN0LWxhYmVsXCJcbiAgICAgICAgICB2YWx1ZT17Y2FtZXJhU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjYW1lcmFMaXN0Lm1hcCgoY2FtZXJhOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NhbWVyYS5pZH0gdmFsdWU9e2NhbWVyYS5pZH0+XG4gICAgICAgICAgICAgIHtjYW1lcmEuY29uZmlnLm5hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFIaXN0b3J5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CameraHistory.tsx\n");

/***/ })

});