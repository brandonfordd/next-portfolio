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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
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
    className: "overflow-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "display",
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().display),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
        currentPage: currentPage,
        handlePageChange: handlePageChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), renderPage(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWZhMjM2ZGU5ZGJhZTg4OWEwYzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNTLGtCQUFULEdBQThCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xSLCtDQUFRLENBQUMsT0FBRCxDQURIO0FBQUEsTUFDcENTLFdBRG9DO0FBQUEsTUFDdkJDLGNBRHVCLGlCQUczQzs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJRixXQUFXLEtBQUssT0FBcEIsRUFBNkI7QUFDM0IsMEJBQU8sOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsV0FBVyxLQUFLLFNBQXBCLEVBQStCO0FBQzdCLDBCQUFPLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNEOztBQUNELFFBQUlBLFdBQVcsS0FBSyxVQUFwQixFQUFnQztBQUM5QiwwQkFBTyw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDs7QUFDRCx3QkFBTyw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQVhEOztBQWFBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRDtBQUFBLFdBQVVILGNBQWMsQ0FBQ0csSUFBRCxDQUF4QjtBQUFBLEdBQXpCOztBQUVBLHNCQUNFO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxhQUFTLEVBQUMsZUFBekI7QUFBQSwyQkFDRTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQWtCLGVBQVMsRUFBRU4sd0VBQTdCO0FBQUEsOEJBRUUsOERBQUMsZ0RBQUQ7QUFBWSxtQkFBVyxFQUFFRSxXQUF6QjtBQUFzQyx3QkFBZ0IsRUFBRUc7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBSUdELFVBQVUsRUFKYixlQUtFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0EvQnVCSDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9Qcm9qZWN0cyc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XHJcbmltcG9ydCBSZXN1bWUgZnJvbSAnLi9SZXN1bWUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoJ0Fib3V0Jyk7XHJcblxyXG4gIC8vIFRoaXMgbWV0aG9kIGlzIGNoZWNraW5nIHRvIHNlZSB3aGF0IHRoZSB2YWx1ZSBvZiBgY3VycmVudFBhZ2VgIGlzLiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGN1cnJlbnRQYWdlLCB3ZSByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgY29tcG9uZW50IHRvIHJlbmRlci5cclxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQYWdlID09PSAnQWJvdXQnKSB7XHJcbiAgICAgIHJldHVybiA8QWJvdXQgLz47XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09ICdDb250YWN0Jykge1xyXG4gICAgICByZXR1cm4gPENvbnRhY3QgLz47XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09ICdQcm9qZWN0cycpIHtcclxuICAgICAgcmV0dXJuIDxQcm9qZWN0cyAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiA8UmVzdW1lIC8+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4gc2V0Q3VycmVudFBhZ2UocGFnZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgPGRpdiBpZD1cImRpc3BsYXlcIiBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fT5cclxuICAgICAgICB7LyogV2UgYXJlIHBhc3NpbmcgdGhlIGN1cnJlbnRQYWdlIGZyb20gc3RhdGUgYW5kIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgaXQgKi99XHJcbiAgICAgICAgPE5hdmlnYXRpb24gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBoYW5kbGVQYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfSAvPlxyXG4gICAgICAgIHsvKiBIZXJlIHdlIGFyZSBjYWxsaW5nIHRoZSByZW5kZXJQYWdlIG1ldGhvZCB3aGljaCB3aWxsIHJldHVybiBhIGNvbXBvbmVudCAgKi99XHJcbiAgICAgICAge3JlbmRlclBhZ2UoKX1cclxuICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvamVjdHMiLCJOYXZpZ2F0aW9uIiwiRm9vdGVyIiwiQWJvdXQiLCJDb250YWN0IiwiUmVzdW1lIiwic3R5bGVzIiwiUG9ydGZvbGlvQ29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInJlbmRlclBhZ2UiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9