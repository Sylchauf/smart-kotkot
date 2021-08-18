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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCameraHistory */ \"./hooks/useCameraHistory.ts\");\n/* harmony import */ var _hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCameraList */ \"./hooks/useCameraList.ts\");\n/* harmony import */ var _CameraDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CameraDisplay */ \"./components/CameraDisplay.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/media/sylchauf/9b62e0e5-f9b0-44df-b92c-d37c87df74d2/projects/smart-coop/components/CameraHistory.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CameraHistory = function CameraHistory() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\"),\n      cameraSelected = _useState[0],\n      setCameraSelected = _useState[1];\n\n  var cameraList = (0,_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default)();\n  var files = (0,_hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default)(cameraSelected);\n\n  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)(),\n      formatMessage = _useIntl.formatMessage;\n\n  var handleChange = function handleChange(event) {\n    setCameraSelected(event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n      fullWidth: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n        id: \"camera-list-label\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), \" \", \":\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Select, {\n        labelId: \"camera-list-label\",\n        value: cameraSelected,\n        onChange: handleChange,\n        label: formatMessage({\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }),\n        children: cameraList.filter(function (camera) {\n          return !!camera.config.save.path;\n        }).map(function (camera) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n            value: camera.id,\n            children: camera.config.name\n          }, camera.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        width: \"69vw\",\n        margin: \"0 auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n        showThumbs: false,\n        children: files.map(function (file) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CameraDisplay__WEBPACK_IMPORTED_MODULE_5__.default, {\n            id: cameraSelected,\n            imageId: file,\n            lastRequest: Number(file.split(\".\")[0]) * 1000\n          }, file, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CameraHistory, \"p2D1SoxamqNXWzPUcWoDo+Kfib0=\", false, function () {\n  return [_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default, react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl];\n});\n\n_c = CameraHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CameraHistory));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CameraHistory\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFIaXN0b3J5LnRzeD9jMzUxIl0sIm5hbWVzIjpbIkNhbWVyYUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImNhbWVyYVNlbGVjdGVkIiwic2V0Q2FtZXJhU2VsZWN0ZWQiLCJjYW1lcmFMaXN0IiwidXNlQ2FtZXJhTGlzdCIsImZpbGVzIiwidXNlQ2FtZXJhSGlzdG9yeSIsInVzZUludGwiLCJmb3JtYXRNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJmaWx0ZXIiLCJjYW1lcmEiLCJjb25maWciLCJzYXZlIiwicGF0aCIsIm1hcCIsIm5hbWUiLCJ3aWR0aCIsIm1hcmdpbiIsImZpbGUiLCJOdW1iZXIiLCJzcGxpdCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUF1QixHQUFHLFNBQTFCQSxhQUEwQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQVMsR0FBVCxDQURoQjtBQUFBLE1BQzdCQyxjQUQ2QjtBQUFBLE1BQ2JDLGlCQURhOztBQUdwQyxNQUFNQyxVQUFVLEdBQUdDLDZEQUFhLEVBQWhDO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxnRUFBZ0IsQ0FBQ0wsY0FBRCxDQUE5Qjs7QUFKb0MsaUJBS1ZNLG1EQUFPLEVBTEc7QUFBQSxNQUs1QkMsYUFMNEIsWUFLNUJBLGFBTDRCOztBQU9wQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQWdCO0FBQ25DUixxQkFBaUIsQ0FBQ1EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBakI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMERBQUQ7QUFBYSxlQUFTLE1BQXRCO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBWSxVQUFFLEVBQUMsbUJBQWY7QUFBQSxnQ0FDRSw4REFBQyx3REFBRDtBQUNFLFlBQUUsRUFBRSxxQkFETjtBQUVFLHdCQUFjLEVBQUU7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlLLEdBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBQyxtQkFEVjtBQUVFLGFBQUssRUFBRVgsY0FGVDtBQUdFLGdCQUFRLEVBQUVRLFlBSFo7QUFJRSxhQUFLLEVBQUVELGFBQWEsQ0FBQztBQUNuQkssWUFBRSxFQUFFLHFCQURlO0FBRW5CQyx3QkFBYyxFQUFFO0FBRkcsU0FBRCxDQUp0QjtBQUFBLGtCQVNHWCxVQUFVLENBQ1JZLE1BREYsQ0FDUyxVQUFDQyxNQUFEO0FBQUEsaUJBQWlCLENBQUMsQ0FBQ0EsTUFBTSxDQUFDQyxNQUFQLENBQWNDLElBQWQsQ0FBbUJDLElBQXRDO0FBQUEsU0FEVCxFQUVFQyxHQUZGLENBRU0sVUFBQ0osTUFBRDtBQUFBLDhCQUNILDhEQUFDLHVEQUFEO0FBQTBCLGlCQUFLLEVBQUVBLE1BQU0sQ0FBQ0gsRUFBeEM7QUFBQSxzQkFDR0csTUFBTSxDQUFDQyxNQUFQLENBQWNJO0FBRGpCLGFBQWVMLE1BQU0sQ0FBQ0gsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERztBQUFBLFNBRk47QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUE0QkU7QUFBSyxXQUFLLEVBQUU7QUFBRVMsYUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGNBQU0sRUFBRTtBQUF6QixPQUFaO0FBQUEsNkJBQ0UsOERBQUMsK0RBQUQ7QUFBVSxrQkFBVSxFQUFFLEtBQXRCO0FBQUEsa0JBQ0dsQixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDSSxJQUFEO0FBQUEsOEJBQ1QsOERBQUMsbURBQUQ7QUFFRSxjQUFFLEVBQUV2QixjQUZOO0FBR0UsbUJBQU8sRUFBRXVCLElBSFg7QUFJRSx1QkFBVyxFQUFFQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBRCxDQUFOLEdBQTZCO0FBSjVDLGFBQ09GLElBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQXRERDs7R0FBTXpCLGE7VUFHZUsseUQsRUFDTEUsNEQsRUFDWUMsK0M7OztLQUx0QlIsYTtBQXdETiwrREFBZSxtQkFBQTRCLGlEQUFBLENBQVc1QixhQUFYLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbWVyYUhpc3RvcnkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIE1lbnVJdGVtLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSwgdXNlSW50bCB9IGZyb20gXCJyZWFjdC1pbnRsXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG5pbXBvcnQgdXNlQ2FtZXJhSGlzdG9yeSBmcm9tIFwiLi4vaG9va3MvdXNlQ2FtZXJhSGlzdG9yeVwiO1xuaW1wb3J0IHVzZUNhbWVyYUxpc3QgZnJvbSBcIi4uL2hvb2tzL3VzZUNhbWVyYUxpc3RcIjtcbmltcG9ydCBDYW1lcmFEaXNwbGF5IGZyb20gXCIuL0NhbWVyYURpc3BsYXlcIjtcblxuY29uc3QgQ2FtZXJhSGlzdG9yeTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYW1lcmFTZWxlY3RlZCwgc2V0Q2FtZXJhU2VsZWN0ZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIjBcIik7XG5cbiAgY29uc3QgY2FtZXJhTGlzdCA9IHVzZUNhbWVyYUxpc3QoKTtcbiAgY29uc3QgZmlsZXMgPSB1c2VDYW1lcmFIaXN0b3J5KGNhbWVyYVNlbGVjdGVkKTtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRDYW1lcmFTZWxlY3RlZChldmVudC50YXJnZXQudmFsdWUgYXMgc3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxuICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImNhbWVyYS1saXN0LWxhYmVsXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgIGlkPXtcIkNhbWVyYS5TZWxlY3RDYW1lcmFcIn1cbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXtcIkNob29zZSB0aGUgY2FtZXJhXCJ9XG4gICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgOlxuICAgICAgICA8L0lucHV0TGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBsYWJlbElkPVwiY2FtZXJhLWxpc3QtbGFiZWxcIlxuICAgICAgICAgIHZhbHVlPXtjYW1lcmFTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGxhYmVsPXtmb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBcIkNhbWVyYS5TZWxlY3RDYW1lcmFcIixcbiAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcIkNob29zZSB0aGUgY2FtZXJhXCIsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2FtZXJhTGlzdFxuICAgICAgICAgICAgLmZpbHRlcigoY2FtZXJhOiBhbnkpID0+ICEhY2FtZXJhLmNvbmZpZy5zYXZlLnBhdGgpXG4gICAgICAgICAgICAubWFwKChjYW1lcmE6IGFueSkgPT4gKFxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjYW1lcmEuaWR9IHZhbHVlPXtjYW1lcmEuaWR9PlxuICAgICAgICAgICAgICAgIHtjYW1lcmEuY29uZmlnLm5hbWV9XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjY5dndcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICA8Q2Fyb3VzZWwgc2hvd1RodW1icz17ZmFsc2V9PlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgPENhbWVyYURpc3BsYXlcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBpZD17Y2FtZXJhU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGltYWdlSWQ9e2ZpbGV9XG4gICAgICAgICAgICAgIGxhc3RSZXF1ZXN0PXtOdW1iZXIoZmlsZS5zcGxpdChcIi5cIilbMF0pICogMTAwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FtZXJhSGlzdG9yeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CameraHistory.tsx\n");

/***/ })

});