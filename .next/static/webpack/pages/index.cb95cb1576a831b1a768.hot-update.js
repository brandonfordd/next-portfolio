"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Projects/index.js":
/*!*********************************!*\
  !*** ./pages/Projects/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Projects; }
/* harmony export */ });
/* harmony import */ var C_Users_15714_Documents_code_personal_next_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "./node_modules/@iconify/react/dist/iconify.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/Carousel.module.css */ "./styles/Carousel.module.css");
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\15714\\Documents\\code\\personal\\next-portfolio\\pages\\Projects\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_15714_Documents_code_personal_next_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // images and gifs imports
// import {assignments} from '../../data/assignments.json';
// import {projects} from '../../data/projects.json';


 // Import css files



 // https://react-slick.neostack.com/docs/api
// slider settings

var settingsProjects = {
  accessibility: true,
  dots: true,
  infinite: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  dotsClass: 'slick-dots',
  speed: 400,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [{
    breakpoint: 960,
    settings: {
      slidesToShow: 1
    }
  }]
};
var settingsAssignments = {
  accessibility: true,
  dots: true,
  infinite: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  dotsClass: 'slick-dots',
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [{
    breakpoint: 1380,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 980,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 750,
    settings: {
      slidesToShow: 1
    }
  }]
};
function Projects() {
  var _this = this;

  var assignments = __webpack_require__(/*! ../../data/assignments.json */ "./data/assignments.json");

  var projects = __webpack_require__(/*! ../../data/projects.json */ "./data/projects.json");

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container work-body",
    id: "work",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {
      className: "mt-5 carsousel-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "assignmentsTitleWrapper mb-5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "projectsTitle",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
              className: "fas fa-angle-double-right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 43
            }, this), " Projects"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settingsProjects), {}, {
          children: projects && projects.map(function (projects) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
              lg: "3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardProjects),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "embed-responsive",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "card-img-top main-img-height",
                    src: projects.img,
                    alt: projects.name,
                    layout: "responsive",
                    width: 6,
                    height: 3.5
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Body, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ins", {
                      children: projects.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "card-text",
                    children: projects.disc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Footer, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "text-center mt-auto",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: projects.github,
                      className: "btn p-btn-color btn-lg custom-length-ps",
                      role: "button",
                      "aria-pressed": "true",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                        children: "GitHub "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 172
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        className: "fab fa-github-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 186
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: projects.link,
                      className: "btn btn-secondary btn-lg custom-length-ss",
                      role: "button",
                      "aria-pressed": "true",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                        className: "iconify",
                        icon: "simple-icons:heroku",
                        "data-inline": "false"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 172
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {
      className: "mt-5 carsousel-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "assignmentsTitleWrapper mb-5",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            className: "assignmentsTitle",
            id: "assignments",
            children: ["Assignments ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
              className: "fas fa-angle-double-left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 75
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settingsAssignments), {}, {
          children: assignments && assignments.map(function (assignments) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
              lg: "3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardAssignments),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "embed-responsive",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    className: "card-img-top main-img-height",
                    src: assignments.img,
                    alt: assignments.name,
                    layout: "responsive",
                    width: 6,
                    height: 3.5
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Body, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ins", {
                      children: assignments.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 27
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Footer, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "text-center mt-auto",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: assignments.github,
                      className: "btn p-btn-color btn-lg custom-length-ps",
                      role: "button",
                      "aria-pressed": "true",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                        children: "GitHub "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 175
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        className: "fab fa-github-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 189
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: assignments.link,
                      className: "btn btn-secondary btn-lg custom-length-ss",
                      role: "button",
                      "aria-pressed": "true",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                        className: "iconify",
                        icon: "simple-icons:heroku",
                        "data-inline": "false"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 175
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}
_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I5NWNiMTU3NmE4MzFiMWE3NjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBSUE7QUFDQTs7QUFFQSxJQUFNUSxnQkFBZ0IsR0FBRztBQUN2QkMsRUFBQUEsYUFBYSxFQUFFLElBRFE7QUFFdkJDLEVBQUFBLElBQUksRUFBRSxJQUZpQjtBQUd2QkMsRUFBQUEsUUFBUSxFQUFFLElBSGE7QUFJdkJDLEVBQUFBLE1BQU0sRUFBRSxJQUplO0FBS3ZCQyxFQUFBQSxVQUFVLEVBQUUsSUFMVztBQU12QkMsRUFBQUEsYUFBYSxFQUFFLEtBTlE7QUFPdkJDLEVBQUFBLFNBQVMsRUFBRSxZQVBZO0FBUXZCQyxFQUFBQSxLQUFLLEVBQUUsR0FSZ0I7QUFTdkJDLEVBQUFBLFlBQVksRUFBQyxDQVRVO0FBVXZCQyxFQUFBQSxjQUFjLEVBQUUsQ0FWTztBQVd2QkMsRUFBQUEsWUFBWSxFQUFFLENBWFM7QUFZdkJDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0VDLElBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLElBQUFBLFFBQVEsRUFBRTtBQUNOTCxNQUFBQSxZQUFZLEVBQUU7QUFEUjtBQUZaLEdBRFE7QUFaVyxDQUF6QjtBQXNCQSxJQUFNTSxtQkFBbUIsR0FBRztBQUN4QmQsRUFBQUEsYUFBYSxFQUFFLElBRFM7QUFFeEJDLEVBQUFBLElBQUksRUFBRSxJQUZrQjtBQUd4QkMsRUFBQUEsUUFBUSxFQUFFLElBSGM7QUFJeEJDLEVBQUFBLE1BQU0sRUFBRSxJQUpnQjtBQUt4QkMsRUFBQUEsVUFBVSxFQUFFLElBTFk7QUFNeEJDLEVBQUFBLGFBQWEsRUFBRSxLQU5TO0FBT3hCQyxFQUFBQSxTQUFTLEVBQUUsWUFQYTtBQVF4QkMsRUFBQUEsS0FBSyxFQUFFLEdBUmlC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QUFsSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFHLDRCQUFNLEVBQUMsUUFBVjtBQUFtQix5QkFBRyxFQUFDLFlBQXZCO0FBQW9DLDBCQUFJLEVBQUVYLFdBQVcsQ0FBQ1ksSUFBdEQ7QUFBNEQsK0JBQVMsRUFBQywyQ0FBdEU7QUFBa0gsMEJBQUksRUFBQyxRQUF2SDtBQUFnSSxzQ0FBYSxNQUE3STtBQUFBLDZDQUFvSiw4REFBQyxnREFBRDtBQUFNLGlDQUFTLEVBQUMsU0FBaEI7QUFBMEIsNEJBQUksRUFBQyxxQkFBL0I7QUFBcUQsdUNBQVk7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWhCO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENGLGVBZ0VFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFzRUQ7S0EzRXVCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qcm9qZWN0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcclxuLy8gaW1hZ2VzIGFuZCBnaWZzIGltcG9ydHNcclxuLy8gaW1wb3J0IHthc3NpZ25tZW50c30gZnJvbSAnLi4vLi4vZGF0YS9hc3NpZ25tZW50cy5qc29uJztcclxuLy8gaW1wb3J0IHtwcm9qZWN0c30gZnJvbSAnLi4vLi4vZGF0YS9wcm9qZWN0cy5qc29uJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDb2wsIENhcmQgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG4vLyBJbXBvcnQgY3NzIGZpbGVzXHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Nhcm91c2VsLm1vZHVsZS5jc3MnO1xyXG5cclxuLy8gaHR0cHM6Ly9yZWFjdC1zbGljay5uZW9zdGFjay5jb20vZG9jcy9hcGlcclxuLy8gc2xpZGVyIHNldHRpbmdzXHJcblxyXG5jb25zdCBzZXR0aW5nc1Byb2plY3RzID0ge1xyXG4gIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgZG90czogdHJ1ZSxcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBhcnJvd3M6IHRydWUsXHJcbiAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICBjZW50ZXJQYWRkaW5nOiAnMHB4JyxcclxuICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcclxuICBzcGVlZDogNDAwLFxyXG4gIHNsaWRlc1RvU2hvdzoyLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGluaXRpYWxTbGlkZTogMSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5NjAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIF1cclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzQXNzaWdubWVudHMgPSB7XHJcbiAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXHJcbiAgICBzcGVlZDogNDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OjQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGluaXRpYWxTbGlkZTogMSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk4MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cclxuICBsZXQgYXNzaWdubWVudHMgPSByZXF1aXJlKCcuLi8uLi9kYXRhL2Fzc2lnbm1lbnRzLmpzb24nKVxyXG4gIGxldCBwcm9qZWN0cyA9IHJlcXVpcmUoJy4uLy4uL2RhdGEvcHJvamVjdHMuanNvbicpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdvcmstYm9keVwiIGlkPVwid29ya1wiPlxyXG4gICAgICBcclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01IGNhcnNvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NpZ25tZW50c1RpdGxlV3JhcHBlciBtYi01XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT4gUHJvamVjdHM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc1Byb2plY3RzfT5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdHMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkUHJvamVjdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3AgbWFpbi1pbWctaGVpZ2h0XCIgc3JjPXtwcm9qZWN0cy5pbWd9IGFsdD17cHJvamVjdHMubmFtZX0gbGF5b3V0PVwicmVzcG9uc2l2ZVwiIHdpZHRoPXs2fSBoZWlnaHQ9ezMuNX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPSB7c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48aW5zPntwcm9qZWN0cy50aXRsZX08L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9qZWN0cy5kaXNjfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuRm9vdGVyIGNsYXNzTmFtZT0ge3N0eWxlcy5mb290ZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e3Byb2plY3RzLmdpdGh1Yn0gY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj17cHJvamVjdHMubGlua30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXQtNSBjYXJzb3VzZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPENvbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzaWdubWVudHNUaXRsZVdyYXBwZXIgbWItNVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYXNzaWdubWVudHNUaXRsZVwiIGlkPVwiYXNzaWdubWVudHNcIj5Bc3NpZ25tZW50cyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWxlZnRcIj48L2k+PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3NBc3NpZ25tZW50c30+XHJcbiAgICAgICAgICAgICAge2Fzc2lnbm1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICBhc3NpZ25tZW50cy5tYXAoKGFzc2lnbm1lbnRzKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEFzc2lnbm1lbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz17YXNzaWdubWVudHMuaW1nfSBhbHQ9e2Fzc2lnbm1lbnRzLm5hbWV9IGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0ge3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGlucz57YXNzaWdubWVudHMudGl0bGV9PC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuRm9vdGVyIGNsYXNzTmFtZT0ge3N0eWxlcy5mb290ZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e2Fzc2lnbm1lbnRzLmdpdGh1Yn0gY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj17YXNzaWdubWVudHMubGlua30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPGhyPjwvaHI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkljb24iLCJDb250YWluZXIiLCJDb2wiLCJDYXJkIiwiU2xpZGVyIiwic3R5bGVzIiwic2V0dGluZ3NQcm9qZWN0cyIsImFjY2Vzc2liaWxpdHkiLCJkb3RzIiwiaW5maW5pdGUiLCJhcnJvd3MiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImRvdHNDbGFzcyIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2V0dGluZ3NBc3NpZ25tZW50cyIsIlByb2plY3RzIiwiYXNzaWdubWVudHMiLCJyZXF1aXJlIiwicHJvamVjdHMiLCJtYXAiLCJjYXJkUHJvamVjdHMiLCJpbWciLCJuYW1lIiwiYm9keSIsInRpdGxlIiwiZGlzYyIsImZvb3RlciIsImdpdGh1YiIsImxpbmsiLCJjYXJkQXNzaWdubWVudHMiXSwic291cmNlUm9vdCI6IiJ9