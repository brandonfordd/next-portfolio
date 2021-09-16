"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Navigation.js":
/*!*****************************!*\
  !*** ./pages/Navigation.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/esm/DropdownButton.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Navigation.js",
    _s = $RefreshSig$();





 // Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Navigation(_ref) {
  _s();

  var currentPage = _ref.currentPage,
      handlePageChange = _ref.handlePageChange;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      showNavs = _useState[0],
      setShowNavs = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
    expand: "lg",
    className: "navbar sticky-top navbar-expand-lg p-background-color ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {
      className: "navbar-brand p-font-color nav-brand-custom swing linear-wipe",
      href: "/",
      children: " Brandon Ford's Portfolio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {
      className: "navbar-toggler navbarBtn custom-toggler",
      "aria-controls": "basic-navbar-nav"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {
        className: "ml-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#about",
            onClick: function onClick() {
              return handlePageChange('About');
            } // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            ,
            className: currentPage === 'About' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#projects",
            onClick: function onClick() {
              return handlePageChange('Projects');
            } // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Projects' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#contact",
            onClick: function onClick() {
              return handlePageChange('Contact');
            } // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            ,
            className: currentPage === 'Contact' ? 'nav-link p-font-color m-lc active' : 'nav-link p-font-color m-lc',
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__.default, {
            title: "Resume",
            id: "resume-dropdown",
            "class": "dropdown-menu-align",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Item, {
              href: "#resume",
              onClick: function onClick() {
                return handlePageChange('Resume');
              },
              children: "View Resume"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_4__.default.Item, {
              eventKey: "resume-d",
              children: "Download Resume"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, this);
}

_s(Navigation, "VTNY/MGS7NYQaAJ5oOm9zaa3604=");

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTNjNmFiOTU4YTIxZWUzODVhYmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0NBRUE7QUFDQTs7QUFDQSxTQUFTWSxVQUFULE9BQXVEO0FBQUE7O0FBQUEsTUFBakNDLFdBQWlDLFFBQWpDQSxXQUFpQztBQUFBLE1BQXBCQyxnQkFBb0IsUUFBcEJBLGdCQUFvQjs7QUFBQSxrQkFFckJiLCtDQUFRLENBQUMsSUFBRCxDQUZhO0FBQUEsTUFFOUNjLFFBRjhDO0FBQUEsTUFFcENDLFdBRm9DOztBQUlyRCxzQkFDSSw4REFBQyxtREFBRDtBQUFRLFVBQU0sRUFBQyxJQUFmO0FBQW9CLGFBQVMsRUFBQyx3REFBOUI7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUNFLGVBQVMsRUFBQyw4REFEWjtBQUVFLFVBQUksRUFBQyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSw4REFBQywwREFBRDtBQUFlLGVBQVMsRUFBQyx5Q0FBekI7QUFBbUUsdUJBQWM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsNERBQUQ7QUFBaUIsUUFBRSxFQUFDLGtCQUFwQjtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUYsZ0JBQWdCLENBQUMsT0FBRCxDQUF0QjtBQUFBLGFBRlgsQ0FHRTtBQUNBO0FBSkY7QUFLRSxxQkFBUyxFQUFFRCxXQUFXLEtBQUssT0FBaEIsR0FBMEIsbUNBQTFCLEdBQWdFLDRCQUw3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyxXQURQO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNQyxnQkFBZ0IsQ0FBQyxVQUFELENBQXRCO0FBQUEsYUFGWCxDQUdFO0FBSEY7QUFJRSxxQkFBUyxFQUFFRCxXQUFXLEtBQUssVUFBaEIsR0FBNkIsbUNBQTdCLEdBQW1FLDRCQUpoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkYsZUFzQkU7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsZ0JBQWdCLENBQUMsU0FBRCxDQUF0QjtBQUFBLGFBRlgsQ0FHRTtBQUhGO0FBSUUscUJBQVMsRUFBRUQsV0FBVyxLQUFLLFNBQWhCLEdBQTRCLG1DQUE1QixHQUFrRSw0QkFKL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQWdDRTtBQUFJLG1CQUFTLEVBQUMsVUFBZDtBQUFBLGlDQUNFLDhEQUFDLG1FQUFEO0FBQ0UsaUJBQUssRUFBQyxRQURSO0FBRUUsY0FBRSxFQUFDLGlCQUZMO0FBR0UscUJBQU0scUJBSFI7QUFBQSxvQ0FLRSw4REFBQyxrRUFBRDtBQUNFLGtCQUFJLEVBQUMsU0FEUDtBQUVFLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsZ0JBQWdCLENBQUMsUUFBRCxDQUF0QjtBQUFBLGVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsZUFZRSw4REFBQyxrRUFBRDtBQUFlLHNCQUFRLEVBQUMsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOEREOztHQWxFUUY7O0tBQUFBO0FBb0VULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL05hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xyXG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duQnV0dG9uJztcclxuXHJcblxyXG5pbXBvcnQgeyBOYXZiYXIsTmF2LE5hdkRyb3Bkb3duLEZvcm0sRm9ybUNvbnRyb2wsQnV0dG9uLE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuLy8gSGVyZSB3ZSBhcmUgdXNpbmcgb2JqZWN0IGRlc3RydWN0dXJpbmcgYXNzaWdubWVudCB0byBwbHVjayBvZmYgb3VyIHZhcmlhYmxlcyBmcm9tIHRoZSBwcm9wcyBvYmplY3RcclxuLy8gV2UgYXNzaWduIHRoZW0gdG8gdGhlaXIgb3duIHZhcmlhYmxlIG5hbWVzXHJcbmZ1bmN0aW9uIE5hdmlnYXRpb24oeyBjdXJyZW50UGFnZSwgaGFuZGxlUGFnZUNoYW5nZSB9KSB7XHJcblxyXG4gIGNvbnN0IFtzaG93TmF2cywgc2V0U2hvd05hdnNdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJuYXZiYXIgc3RpY2t5LXRvcCBuYXZiYXItZXhwYW5kLWxnIHAtYmFja2dyb3VuZC1jb2xvciBcIj4gXHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBwLWZvbnQtY29sb3IgbmF2LWJyYW5kLWN1c3RvbSBzd2luZyBsaW5lYXItd2lwZVwiIFxyXG4gICAgICAgICAgaHJlZj1cIi9cIj4gQnJhbmRvbiBGb3JkJmFwb3M7cyBQb3J0Zm9saW9cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXJCdG4gY3VzdG9tLXRvZ2dsZXJcIiBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNhYm91dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKCdBYm91dCcpfVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGNvbmRpdGlvbmFsICh0ZXJuYXJ5KSBvcGVyYXRvciB0aGF0IGNoZWNrcyB0byBzZWUgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyBcIkhvbWVcIlxyXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgaXMsIHdlIHNldCB0aGUgY3VycmVudCBwYWdlIHRvICduYXYtbGluay1hY3RpdmUnLCBvdGhlcndpc2Ugd2Ugc2V0IGl0IHRvICduYXYtbGluaydcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3VycmVudFBhZ2UgPT09ICdBYm91dCcgPyAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMgYWN0aXZlJyA6ICduYXYtbGluayBwLWZvbnQtY29sb3IgbS1sYyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI3Byb2plY3RzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoJ1Byb2plY3RzJyl9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGN1cnJlbnRQYWdlIGlzIGBBYm91dGAsIGFuZCBpZiBzbyB3ZSB1c2UgdGhlIGFjdGl2ZSBsaW5rIGNsYXNzIGZyb20gYm9vdHN0cmFwLiBPdGhlcndpc2UsIHdlIHNldCBpdCB0byBhIG5vcm1hbCBuYXYtbGlua1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjdXJyZW50UGFnZSA9PT0gJ1Byb2plY3RzJyA/ICduYXYtbGluayBwLWZvbnQtY29sb3IgbS1sYyBhY3RpdmUnIDogJ25hdi1saW5rIHAtZm9udC1jb2xvciBtLWxjJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjY29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKCdDb250YWN0Jyl9XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGN1cnJlbnRQYWdlIGlzIGBCbG9nYCwgYW5kIGlmIHNvIHdlIHVzZSB0aGUgYWN0aXZlIGxpbmsgY2xhc3MgZnJvbSBib290c3RyYXAuIE90aGVyd2lzZSwgd2Ugc2V0IGl0IHRvIGEgbm9ybWFsIG5hdi1saW5rXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N1cnJlbnRQYWdlID09PSAnQ29udGFjdCcgPyAnbmF2LWxpbmsgcC1mb250LWNvbG9yIG0tbGMgYWN0aXZlJyA6ICduYXYtbGluayBwLWZvbnQtY29sb3IgbS1sYyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInJlc3VtZS1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUtYWxpZ25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIFxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3Jlc3VtZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDaGFuZ2UoJ1Jlc3VtZScpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBSZXN1bWVcclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBldmVudEtleT1cInJlc3VtZS1kXCI+RG93bmxvYWQgUmVzdW1lPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiRHJvcGRvd25CdXR0b24iLCJOYXZiYXIiLCJOYXYiLCJOYXZEcm9wZG93biIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkJ1dHRvbiIsIk5hdkl0ZW0iLCJMaW5rIiwiTmF2aWdhdGlvbiIsImN1cnJlbnRQYWdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsInNob3dOYXZzIiwic2V0U2hvd05hdnMiXSwic291cmNlUm9vdCI6IiJ9