"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PortfolioContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ "./pages/Projects/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./pages/Navigation.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ "./pages/About/index.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contact */ "./pages/Contact/index.js");
/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Resume */ "./pages/Resume/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\index.js",
    _s = $RefreshSig$();










function PortfolioContainer() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('About'),
      currentPage = _useState[0],
      setCurrentPage = _useState[1]; // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.


  var renderPage = function renderPage() {
    if (currentPage === 'About') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_About__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 14
      }, _this);
    }

    if (currentPage === 'Contact') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contact__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 14
      }, _this);
    }

    if (currentPage === 'Projects') {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }, _this);
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Resume__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }, _this);
  };

  var handlePageChange = function handlePageChange(page) {
    return setCurrentPage(page);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "main",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "display",
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().display),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        currentPage: currentPage,
        handlePageChange: handlePageChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
        "class": (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().headerImg),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
          className: "img-fluid",
          src: "/assets/images/forest_main.jpg",
          alt: "forest",
          layout: "responsive",
          width: 2000,
          height: 500
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), renderPage(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(PortfolioContainer, "3gPMOXGJOEUgl1xJgjHQ6eGM7Kc=");

_c = PortfolioContainer;

var _c;

$RefreshReg$(_c, "PortfolioContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTY2NTlhM2FiYTMxNjdhNGIxOWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTVSxrQkFBVCxHQUE4QjtBQUFBOztBQUFBOztBQUFBLGtCQUNMVCwrQ0FBUSxDQUFDLE9BQUQsQ0FESDtBQUFBLE1BQ3BDVSxXQURvQztBQUFBLE1BQ3ZCQyxjQUR1QixpQkFHM0M7OztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSUYsV0FBVyxLQUFLLE9BQXBCLEVBQTZCO0FBQzNCLDBCQUFPLDhEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNEOztBQUNELFFBQUlBLFdBQVcsS0FBSyxTQUFwQixFQUErQjtBQUM3QiwwQkFBTyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDs7QUFDRCxRQUFJQSxXQUFXLEtBQUssVUFBcEIsRUFBZ0M7QUFDOUIsMEJBQU8sOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0Q7O0FBQ0Qsd0JBQU8sOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FYRDs7QUFhQSxNQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQ7QUFBQSxXQUFVSCxjQUFjLENBQUNHLElBQUQsQ0FBeEI7QUFBQSxHQUF6Qjs7QUFFQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsMkJBQ0U7QUFBSyxRQUFFLEVBQUMsU0FBUjtBQUFrQixlQUFTLEVBQUVQLHdFQUE3QjtBQUFBLDhCQUVFLDhEQUFDLGdEQUFEO0FBQVksbUJBQVcsRUFBRUcsV0FBekI7QUFBc0Msd0JBQWdCLEVBQUVHO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLFNBQUQ7QUFBVyxpQkFBT04sMEVBQWxCO0FBQUEsK0JBQ0EsOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFDLFdBQWpCO0FBQTZCLGFBQUcsRUFBQyxnQ0FBakM7QUFBa0UsYUFBRyxFQUFDLFFBQXRFO0FBQStFLGdCQUFNLEVBQUMsWUFBdEY7QUFBbUcsZUFBSyxFQUFFLElBQTFHO0FBQWdILGdCQUFNLEVBQUU7QUFBeEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQU9HSyxVQUFVLEVBUGIsZUFRRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBbEN1Qkg7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vUHJvamVjdHMnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnO1xyXG5pbXBvcnQgUmVzdW1lIGZyb20gJy4vUmVzdW1lJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpb0NvbnRhaW5lcigpIHtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKCdBYm91dCcpO1xyXG5cclxuICAvLyBUaGlzIG1ldGhvZCBpcyBjaGVja2luZyB0byBzZWUgd2hhdCB0aGUgdmFsdWUgb2YgYGN1cnJlbnRQYWdlYCBpcy4gRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBjdXJyZW50UGFnZSwgd2UgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIGNvbXBvbmVudCB0byByZW5kZXIuXHJcbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gJ0Fib3V0Jykge1xyXG4gICAgICByZXR1cm4gPEFib3V0IC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgcmV0dXJuIDxDb250YWN0IC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSAnUHJvamVjdHMnKSB7XHJcbiAgICAgIHJldHVybiA8UHJvamVjdHMgLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFJlc3VtZSAvPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cIm1haW5cIj5cclxuICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIiBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fT5cclxuICAgICAgICB7LyogV2UgYXJlIHBhc3NpbmcgdGhlIGN1cnJlbnRQYWdlIGZyb20gc3RhdGUgYW5kIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgaXQgKi99XHJcbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBoYW5kbGVQYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3M9e3N0eWxlcy5oZWFkZXJJbWd9PlxyXG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9mb3Jlc3RfbWFpbi5qcGdcIiBhbHQ9XCJmb3Jlc3RcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezIwMDB9IGhlaWdodD17NTAwfSAvPiBcclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICB7LyogSGVyZSB3ZSBhcmUgY2FsbGluZyB0aGUgcmVuZGVyUGFnZSBtZXRob2Qgd2hpY2ggd2lsbCByZXR1cm4gYSBjb21wb25lbnQgICovfVxyXG4gICAgICAgIHtyZW5kZXJQYWdlKCl9XHJcbiAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByb2plY3RzIiwiTmF2aWdhdGlvbiIsIkZvb3RlciIsIkFib3V0IiwiQ29udGFjdCIsIlJlc3VtZSIsInN0eWxlcyIsIkltYWdlIiwiUG9ydGZvbGlvQ29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInJlbmRlclBhZ2UiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImRpc3BsYXkiLCJoZWFkZXJJbWciXSwic291cmNlUm9vdCI6IiJ9