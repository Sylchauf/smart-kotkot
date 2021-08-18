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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCameraHistory */ \"./hooks/useCameraHistory.ts\");\n/* harmony import */ var _hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCameraList */ \"./hooks/useCameraList.ts\");\n/* harmony import */ var _CameraDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CameraDisplay */ \"./components/CameraDisplay.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/media/sylchauf/9b62e0e5-f9b0-44df-b92c-d37c87df74d2/projects/smart-coop/components/CameraHistory.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CameraHistory = function CameraHistory() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\"),\n      cameraSelected = _useState[0],\n      setCameraSelected = _useState[1];\n\n  var cameraList = (0,_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default)();\n  var files = (0,_hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default)(cameraSelected);\n\n  var _useIntl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)(),\n      formatMessage = _useIntl.formatMessage;\n\n  var handleChange = function handleChange(event) {\n    setCameraSelected(event.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {\n      fullWidth: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {\n        id: \"camera-list-label\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_6__.FormattedMessage, {\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), \" \", \":\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Select, {\n        labelId: \"camera-list-label\",\n        value: cameraSelected,\n        onChange: handleChange,\n        label: formatMessage({\n          id: \"Camera.SelectCamera\",\n          defaultMessage: \"Choose the camera\"\n        }),\n        children: cameraList.map(function (camera) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {\n            value: camera.id,\n            children: camera.config.name\n          }, camera.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n      showThumbs: false,\n      children: files.map(function (file) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CameraDisplay__WEBPACK_IMPORTED_MODULE_5__.default, {\n          id: cameraSelected,\n          imageId: file,\n          lastRequest: Number(file.split(\".\")[0]) * 1000\n        }, file, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CameraHistory, \"p2D1SoxamqNXWzPUcWoDo+Kfib0=\", false, function () {\n  return [_hooks_useCameraList__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useCameraHistory__WEBPACK_IMPORTED_MODULE_3__.default, react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl];\n});\n\n_c = CameraHistory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CameraHistory));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CameraHistory\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYW1lcmFIaXN0b3J5LnRzeD9jMzUxIl0sIm5hbWVzIjpbIkNhbWVyYUhpc3RvcnkiLCJ1c2VTdGF0ZSIsImNhbWVyYVNlbGVjdGVkIiwic2V0Q2FtZXJhU2VsZWN0ZWQiLCJjYW1lcmFMaXN0IiwidXNlQ2FtZXJhTGlzdCIsImZpbGVzIiwidXNlQ2FtZXJhSGlzdG9yeSIsInVzZUludGwiLCJmb3JtYXRNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJtYXAiLCJjYW1lcmEiLCJjb25maWciLCJuYW1lIiwiZmlsZSIsIk51bWJlciIsInNwbGl0IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXVCLEdBQUcsU0FBMUJBLGFBQTBCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBUyxHQUFULENBRGhCO0FBQUEsTUFDN0JDLGNBRDZCO0FBQUEsTUFDYkMsaUJBRGE7O0FBR3BDLE1BQU1DLFVBQVUsR0FBR0MsNkRBQWEsRUFBaEM7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGdFQUFnQixDQUFDTCxjQUFELENBQTlCOztBQUpvQyxpQkFLVk0sbURBQU8sRUFMRztBQUFBLE1BSzVCQyxhQUw0QixZQUs1QkEsYUFMNEI7O0FBT3BDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFDbkNSLHFCQUFpQixDQUFDUSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywwREFBRDtBQUFhLGVBQVMsTUFBdEI7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFZLFVBQUUsRUFBQyxtQkFBZjtBQUFBLGdDQUNFLDhEQUFDLHdEQUFEO0FBQ0UsWUFBRSxFQUFFLHFCQUROO0FBRUUsd0JBQWMsRUFBRTtBQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUssR0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVFFLDhEQUFDLHFEQUFEO0FBQ0UsZUFBTyxFQUFDLG1CQURWO0FBRUUsYUFBSyxFQUFFWCxjQUZUO0FBR0UsZ0JBQVEsRUFBRVEsWUFIWjtBQUlFLGFBQUssRUFBRUQsYUFBYSxDQUFDO0FBQ25CSyxZQUFFLEVBQUUscUJBRGU7QUFFbkJDLHdCQUFjLEVBQUU7QUFGRyxTQUFELENBSnRCO0FBQUEsa0JBU0dYLFVBQVUsQ0FBQ1ksR0FBWCxDQUFlLFVBQUNDLE1BQUQ7QUFBQSw4QkFDZCw4REFBQyx1REFBRDtBQUEwQixpQkFBSyxFQUFFQSxNQUFNLENBQUNILEVBQXhDO0FBQUEsc0JBQ0dHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQztBQURqQixhQUFlRixNQUFNLENBQUNILEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMEJFLDhEQUFDLCtEQUFEO0FBQVUsZ0JBQVUsRUFBRSxLQUF0QjtBQUFBLGdCQUNHUixLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFDSSxJQUFEO0FBQUEsNEJBQ1QsOERBQUMsbURBQUQ7QUFFRSxZQUFFLEVBQUVsQixjQUZOO0FBR0UsaUJBQU8sRUFBRWtCLElBSFg7QUFJRSxxQkFBVyxFQUFFQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBRCxDQUFOLEdBQTZCO0FBSjVDLFdBQ09GLElBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUNELENBbEREOztHQUFNcEIsYTtVQUdlSyx5RCxFQUNMRSw0RCxFQUNZQywrQzs7O0tBTHRCUixhO0FBb0ROLCtEQUFlLG1CQUFBdUIsaURBQUEsQ0FBV3ZCLGFBQVgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FtZXJhSGlzdG9yeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgTWVudUl0ZW0sIFNlbGVjdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlLCB1c2VJbnRsIH0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbmltcG9ydCB1c2VDYW1lcmFIaXN0b3J5IGZyb20gXCIuLi9ob29rcy91c2VDYW1lcmFIaXN0b3J5XCI7XG5pbXBvcnQgdXNlQ2FtZXJhTGlzdCBmcm9tIFwiLi4vaG9va3MvdXNlQ2FtZXJhTGlzdFwiO1xuaW1wb3J0IENhbWVyYURpc3BsYXkgZnJvbSBcIi4vQ2FtZXJhRGlzcGxheVwiO1xuXG5jb25zdCBDYW1lcmFIaXN0b3J5OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NhbWVyYVNlbGVjdGVkLCBzZXRDYW1lcmFTZWxlY3RlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiMFwiKTtcblxuICBjb25zdCBjYW1lcmFMaXN0ID0gdXNlQ2FtZXJhTGlzdCgpO1xuICBjb25zdCBmaWxlcyA9IHVzZUNhbWVyYUhpc3RvcnkoY2FtZXJhU2VsZWN0ZWQpO1xuICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UgfSA9IHVzZUludGwoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHNldENhbWVyYVNlbGVjdGVkKGV2ZW50LnRhcmdldC52YWx1ZSBhcyBzdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XG4gICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY2FtZXJhLWxpc3QtbGFiZWxcIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgaWQ9e1wiQ2FtZXJhLlNlbGVjdENhbWVyYVwifVxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e1wiQ2hvb3NlIHRoZSBjYW1lcmFcIn1cbiAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICA6XG4gICAgICAgIDwvSW5wdXRMYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIGxhYmVsSWQ9XCJjYW1lcmEtbGlzdC1sYWJlbFwiXG4gICAgICAgICAgdmFsdWU9e2NhbWVyYVNlbGVjdGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgbGFiZWw9e2Zvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IFwiQ2FtZXJhLlNlbGVjdENhbWVyYVwiLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiQ2hvb3NlIHRoZSBjYW1lcmFcIixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjYW1lcmFMaXN0Lm1hcCgoY2FtZXJhOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2NhbWVyYS5pZH0gdmFsdWU9e2NhbWVyYS5pZH0+XG4gICAgICAgICAgICAgIHtjYW1lcmEuY29uZmlnLm5hbWV9XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG5cbiAgICAgIDxDYXJvdXNlbCBzaG93VGh1bWJzPXtmYWxzZX0+XG4gICAgICAgIHtmaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxDYW1lcmFEaXNwbGF5XG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBpZD17Y2FtZXJhU2VsZWN0ZWR9XG4gICAgICAgICAgICBpbWFnZUlkPXtmaWxlfVxuICAgICAgICAgICAgbGFzdFJlcXVlc3Q9e051bWJlcihmaWxlLnNwbGl0KFwiLlwiKVswXSkgKiAxMDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FtZXJhSGlzdG9yeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CameraHistory.tsx\n");

/***/ })

});