"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Contact/index.js":
/*!********************************!*\
  !*** ./pages/Contact/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Contact\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      subject = _useState3[0],
      setSubject = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      submitted = _useState5[0],
      setSubmitted = _useState5[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log('Sending');
    var data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      console.log('Response received');

      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "contact",
    className: "contact container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "section-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "Like to reach out? Contact me from the form below and watch out for an email!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        "data-aos": "fade-in",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-lg-5 d-flex align-items-stretch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col-12 d-flex align-items-stretch",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            action: "forms/contact.php",
            method: "post",
            className: "php-email-form",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "name",
                  children: "Name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "form-control",
                  id: "name",
                  onChange: function onChange(e) {
                    setName(e.target.value);
                  },
                  name: "name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-5",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "exampleInputEmail1",
                  children: "Email address"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "email",
                  className: "form-control",
                  id: "email",
                  onChange: function onChange(e) {
                    setEmail(e.target.value);
                  },
                  name: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  htmlFor: "name",
                  children: "Subject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                  type: "text",
                  className: "form-control",
                  id: "subject",
                  onChange: function onChange(e) {
                    setSubject(e.target.value);
                  },
                  name: "subject"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                htmlFor: "message",
                children: "Message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                className: "form-control",
                rows: "5",
                id: "message",
                onChange: function onChange(e) {
                  setMessage(e.target.value);
                },
                name: "message"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 9
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "submit",
              className: "btn p-btn-color custom-length",
              onClick: function onClick(e) {
                handleSubmit(e);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 1
  }, this);
}

_s(Home, "rz2AhOncq+atZOgmuGwSUouZLuI=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTY3ODgyYjdiZGEyODM4ZjNmZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVMTCwrQ0FBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXRCTSxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFHSFAsK0NBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd0QlEsS0FIc0I7QUFBQSxNQUdmQyxRQUhlOztBQUFBLG1CQUlDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FKVDtBQUFBLE1BSXRCVSxPQUpzQjtBQUFBLE1BSWJDLFVBSmE7O0FBQUEsbUJBS0NYLCtDQUFRLENBQUMsRUFBRCxDQUxUO0FBQUEsTUFLdEJZLE9BTHNCO0FBQUEsTUFLYkMsVUFMYTs7QUFBQSxtQkFNS2IsK0NBQVEsQ0FBQyxLQUFELENBTmI7QUFBQSxNQU10QmMsU0FOc0I7QUFBQSxNQU1YQyxZQU5XOztBQVM3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsUUFBSUMsSUFBSSxHQUFHO0FBQ1RmLE1BQUFBLElBQUksRUFBSkEsSUFEUztBQUVURSxNQUFBQSxLQUFLLEVBQUxBLEtBRlM7QUFHVEUsTUFBQUEsT0FBTyxFQUFQQSxPQUhTO0FBSVRFLE1BQUFBLE9BQU8sRUFBUEE7QUFKUyxLQUFYO0FBTUZVLElBQUFBLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQ2xCQyxNQUFBQSxNQUFNLEVBQUUsTUFEVTtBQUVsQkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1Asa0JBQVUsbUNBREg7QUFFUCx3QkFBZ0I7QUFGVCxPQUZTO0FBTWxC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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHsgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcnKVxuICAgIGxldCBkYXRhID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgc3ViamVjdCxcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSByZWNlaXZlZCcpXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBzdWNjZWVkZWQhJylcbiAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpXG4gICAgICAgIHNldE5hbWUoJycpXG4gICAgICAgIHNldEVtYWlsKCcnKVxuICAgICAgICBzZXRTdWJqZWN0KCcnKVxuICAgICAgICBzZXRNZXNzYWdlKCcnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiY29udGFjdCBjb250YWluZXJcIj5cbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICA8cD5MaWtlIHRvIHJlYWNoIG91dD8gQ29udGFjdCBtZSBmcm9tIHRoZSBmb3JtIGJlbG93IGFuZCB3YXRjaCBvdXQgZm9yIGFuIGVtYWlsIVxuICAgIDwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgZGF0YS1hb3M9XCJmYWRlLWluXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBkLWZsZXggYWxpZ24taXRlbXMtc3RyZXRjaFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGQtZmxleCBhbGlnbi1pdGVtcy1zdHJldGNoXCI+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJmb3Jtcy9jb250YWN0LnBocFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJwaHAtZW1haWwtZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIiAgb25DaGFuZ2U9eyhlKT0+e3NldE5hbWUoZS50YXJnZXQudmFsdWUpfX0gbmFtZT0nbmFtZScgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdlbWFpbCcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJzdWJqZWN0XCIgIG9uQ2hhbmdlPXsoZSk9PntzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX19IG5hbWU9J3N1YmplY3QnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjVcIiBpZD1cIm1lc3NhZ2VcIiBvbkNoYW5nZT17KGUpPT57c2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9fSBuYW1lPSdtZXNzYWdlJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGN1c3RvbS1sZW5ndGhcIiBvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fS8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3NlY3Rpb24+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGb3JtIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiSG9tZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==