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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCameraHistory */ \"./hooks/useCameraHistory.ts\");\n/* harmony import */ var _hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCameraList */ \"./hooks/useCameraList.ts\");\n/* harmony import */ var _CameraDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CameraDisplay */ \"./components/CameraDisplay.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/media/sylchauf/9b62e0e5-f9b0-44df-b92c-d37c87df74d2/projects/smart-coop/components/CameraHistory.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CameraHistory = function CameraHistory() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\"),\n      cameraSelected = _useState[0],\n      setCameraSelected = _useState[1];\n\n  var cameraList = (0,_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default)();\n  var files = (0,_hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default)(cameraSelected);\n\n  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)(),\n      formatMessage = _useIntl.formatMessage;\n\n  var handleChange = function handleChange(event) {\n    setCameraSelected(event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n      fullWidth: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n        id: \"camera-list-label\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), \" \", \":\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Select, {\n        labelId: \"camera-list-label\",\n        value: cameraSelected,\n        onChange: handleChange,\n        label: formatMessage({\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }),\n        children: cameraList.map(function (camera) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n            value: camera.id,\n            children: camera.config.name\n          }, camera.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        height: \"50vh\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        showThumbs: false,\n        children: files.map(function (file) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CameraDisplay__WEBPACK_IMPORTED_MODULE_5__.default, {\n            id: cameraSelected,\n            imageId: file,\n            lastRequest: Number(file.split(\".\")[0]) * 1000\n          }, file, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CameraHistory, \"p2D1SoxamqNXWzPUcWoDo+Kfib0=\", false, function () {\n  return [_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default, react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl];\n});\n\n_c = CameraHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CameraHistory));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CameraHistory\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFIaXN0b3J5LnRzeD9jMzUxIl0sIm5hbWVzIjpbIkNhbWVyYUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImNhbWVyYVNlbGVjdGVkIiwic2V0Q2FtZXJhU2VsZWN0ZWQiLCJjYW1lcmFMaXN0IiwidXNlQ2FtZXJhTGlzdCIsImZpbGVzIiwidXNlQ2FtZXJhSGlzdG9yeSIsInVzZUludGwiLCJmb3JtYXRNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJtYXAiLCJjYW1lcmEiLCJjb25maWciLCJuYW1lIiwiaGVpZ2h0IiwiZmlsZSIsIk51bWJlciIsInNwbGl0IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBUyxHQUFULENBRGhCO0FBQUEsTUFDN0JDLGNBRDZCO0FBQUEsTUFDYkMsaUJBRGE7O0FBR3BDLE1BQU1DLFVBQVUsR0FBR0MsNkRBQWEsRUFBaEM7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGdFQUFnQixDQUFDTCxjQUFELENBQTlCOztBQUpvQyxpQkFLVk0sbURBQU8sRUFMRztBQUFBLE1BSzVCQyxhQUw0QixZQUs1QkEsYUFMNEI7O0FBT3BDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFDbkNSLHFCQUFpQixDQUFDUSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFhLGVBQVMsTUFBdEI7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFZLFVBQUUsRUFBQyxtQkFBZjtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsWUFBRSxFQUFFLHFCQUROO0FBRUUsd0JBQWMsRUFBRTtBQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUssR0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFDLG1CQURWO0FBRUUsYUFBSyxFQUFFWCxjQUZUO0FBR0UsZ0JBQVEsRUFBRVEsWUFIWjtBQUlFLGFBQUssRUFBRUQsYUFBYSxDQUFDO0FBQ25CSyxZQUFFLEVBQUUscUJBRGU7QUFFbkJDLHdCQUFjLEVBQUU7QUFGRyxTQUFELENBSnRCO0FBQUEsa0JBU0dYLFVBQVUsQ0FBQ1ksR0FBWCxDQUFlLFVBQUNDLE1BQUQ7QUFBQSw4QkFDZCw4REFBQyx1REFBRDtBQUEwQixpQkFBSyxFQUFFQSxNQUFNLENBQUNILEVBQXhDO0FBQUEsc0JBQ0dHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQztBQURqQixhQUFlRixNQUFNLENBQUNILEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMEJFO0FBQUssV0FBSyxFQUFFO0FBQUVNLGNBQU0sRUFBRTtBQUFWLE9BQVo7QUFBQSw2QkFDRSw4REFBQywrREFBRDtBQUFVLGtCQUFVLEVBQUUsS0FBdEI7QUFBQSxrQkFDR2QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0ssSUFBRDtBQUFBLDhCQUNULDhEQUFDLG1EQUFEO0FBRUUsY0FBRSxFQUFFbkIsY0FGTjtBQUdFLG1CQUFPLEVBQUVtQixJQUhYO0FBSUUsdUJBQVcsRUFBRUMsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQUQsQ0FBTixHQUE2QjtBQUo1QyxhQUNPRixJQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0FwREQ7O0dBQU1yQixhO1VBR2VLLHlELEVBQ0xFLDRELEVBQ1lDLCtDOzs7S0FMdEJSLGE7QUFzRE4sK0RBQWUsbUJBQUF3QixpREFBQSxDQUFXeEIsYUFBWCxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYW1lcmFIaXN0b3J5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBNZW51SXRlbSwgU2VsZWN0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsIHVzZUludGwgfSBmcm9tIFwicmVhY3QtaW50bFwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IHVzZUNhbWVyYUhpc3RvcnkgZnJvbSBcIi4uL2hvb2tzL3VzZUNhbWVyYUhpc3RvcnlcIjtcbmltcG9ydCB1c2VDYW1lcmFMaXN0IGZyb20gXCIuLi9ob29rcy91c2VDYW1lcmFMaXN0XCI7XG5pbXBvcnQgQ2FtZXJhRGlzcGxheSBmcm9tIFwiLi9DYW1lcmFEaXNwbGF5XCI7XG5cbmNvbnN0IENhbWVyYUhpc3Rvcnk6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY2FtZXJhU2VsZWN0ZWQsIHNldENhbWVyYVNlbGVjdGVkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCIwXCIpO1xuXG4gIGNvbnN0IGNhbWVyYUxpc3QgPSB1c2VDYW1lcmFMaXN0KCk7XG4gIGNvbnN0IGZpbGVzID0gdXNlQ2FtZXJhSGlzdG9yeShjYW1lcmFTZWxlY3RlZCk7XG4gIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSB9ID0gdXNlSW50bCgpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0Q2FtZXJhU2VsZWN0ZWQoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cbiAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJjYW1lcmEtbGlzdC1sYWJlbFwiPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICBpZD17XCJDYW1lcmEuU2VsZWN0Q2FtZXJhXCJ9XG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17XCJDaG9vc2UgdGhlIGNhbWVyYVwifVxuICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDpcbiAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbGFiZWxJZD1cImNhbWVyYS1saXN0LWxhYmVsXCJcbiAgICAgICAgICB2YWx1ZT17Y2FtZXJhU2VsZWN0ZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBsYWJlbD17Zm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogXCJDYW1lcmEuU2VsZWN0Q2FtZXJhXCIsXG4gICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJDaG9vc2UgdGhlIGNhbWVyYVwiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge2NhbWVyYUxpc3QubWFwKChjYW1lcmE6IGFueSkgPT4gKFxuICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2FtZXJhLmlkfSB2YWx1ZT17Y2FtZXJhLmlkfT5cbiAgICAgICAgICAgICAge2NhbWVyYS5jb25maWcubmFtZX1cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiNTB2aFwiIH19PlxuICAgICAgICA8Q2Fyb3VzZWwgc2hvd1RodW1icz17ZmFsc2V9PlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgPENhbWVyYURpc3BsYXlcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBpZD17Y2FtZXJhU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGltYWdlSWQ9e2ZpbGV9XG4gICAgICAgICAgICAgIGxhc3RSZXF1ZXN0PXtOdW1iZXIoZmlsZS5zcGxpdChcIi5cIilbMF0pICogMTAwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FtZXJhSGlzdG9yeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CameraHistory.tsx\n");

/***/ })

});