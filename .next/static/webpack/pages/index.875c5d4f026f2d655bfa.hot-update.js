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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      className: "projectsTitle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: "fas fa-angle-double-right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }, this), " Projects"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), projects && projects.map(function (projects) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "card customCard",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          className: "card-img-top main-img-height",
          src: projects.img,
          alt: projects.name,
          layout: "responsive",
          width: 6,
          height: 3.5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "card-body main-card-body d-flex flex-column",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "card-title ",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ins", {
              children: projects.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "card-text h5",
            children: projects.disc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "card-footer",
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
                lineNumber: 109,
                columnNumber: 162
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fab fa-github-square"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 176
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
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
                lineNumber: 110,
                columnNumber: 162
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {
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
              lineNumber: 121,
              columnNumber: 43
            }, this), " Projects"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settingsProjects), {}, {
          children: projects && projects.map(function (projects) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
              lg: "3",
              className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().albumCard),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardCarousel),
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
                    lineNumber: 129,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Body, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ins", {
                      children: projects.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "card-text",
                    children: projects.disc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Footer, {
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
                        lineNumber: 137,
                        columnNumber: 172
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        className: "fab fa-github-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 186
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
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
                        lineNumber: 138,
                        columnNumber: 172
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
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
              lineNumber: 153,
              columnNumber: 75
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settingsAssignments), {}, {
          children: assignments && assignments.map(function (assignments) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Col, {
              lg: "3",
              className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().albumCard),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card, {
                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().cardCarousel),
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
                    lineNumber: 161,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Body, {
                  className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ins", {
                      children: assignments.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 31
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 27
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "card-text",
                    children: assignments.disc
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 27
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Card.Footer, {
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
                        lineNumber: 169,
                        columnNumber: 175
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        className: "fab fa-github-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 169,
                        columnNumber: 189
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
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
                        lineNumber: 170,
                        columnNumber: 175
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 19
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc1YzVkNGYwMjZmMmQ2NTViZmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBSUE7QUFDQTs7QUFFQSxJQUFNUSxnQkFBZ0IsR0FBRztBQUN2QkMsRUFBQUEsYUFBYSxFQUFFLElBRFE7QUFFdkJDLEVBQUFBLElBQUksRUFBRSxJQUZpQjtBQUd2QkMsRUFBQUEsUUFBUSxFQUFFLElBSGE7QUFJdkJDLEVBQUFBLE1BQU0sRUFBRSxJQUplO0FBS3ZCQyxFQUFBQSxVQUFVLEVBQUUsSUFMVztBQU12QkMsRUFBQUEsYUFBYSxFQUFFLEtBTlE7QUFPdkJDLEVBQUFBLFNBQVMsRUFBRSxZQVBZO0FBUXZCQyxFQUFBQSxLQUFLLEVBQUUsR0FSZ0I7QUFTdkJDLEVBQUFBLFlBQVksRUFBQyxDQVRVO0FBVXZCQyxFQUFBQSxjQUFjLEVBQUUsQ0FWTztBQVd2QkMsRUFBQUEsWUFBWSxFQUFFLENBWFM7QUFZdkJDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0lDLElBQUFBLFVBQVUsRUFBRSxJQURoQjtBQUVJQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkwsTUFBQUEsWUFBWSxFQUFFO0FBRFI7QUFGZCxHQURRLEVBT1I7QUFDRUksSUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsSUFBQUEsUUFBUSxFQUFFO0FBQ05MLE1BQUFBLFlBQVksRUFBRTtBQURSO0FBRlosR0FQUSxFQWFSO0FBQ0VJLElBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLElBQUFBLFFBQVEsRUFBRTtBQUNOTCxNQUFBQSxZQUFZLEVBQUU7QUFEUjtBQUZaLEdBYlE7QUFaVyxDQUF6QjtBQWtDQSxJQUFNTSxtQkFBbUIsR0FBRztBQUN4QmQsRUFBQUEsYUFBYSxFQUFFLElBRFM7QUFFeEJDLEVBQUFBLElB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LCtCQUFTLEVBQUMsMkNBQXRFO0FBQWtILDBCQUFJLEVBQUMsUUFBdkg7QUFBZ0ksc0NBQWEsTUFBN0k7QUFBQSw2Q0FBb0osOERBQUMsZ0RBQUQ7QUFBTSxpQ0FBUyxFQUFDLFNBQWhCO0FBQTBCLDRCQUFJLEVBQUMscUJBQS9CO0FBQXFELHVDQUFZO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFoQjtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZERixlQXNGRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBNEZEO0tBakd1QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJvamVjdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XHJcbi8vIGltYWdlcyBhbmQgZ2lmcyBpbXBvcnRzXHJcbi8vIGltcG9ydCB7YXNzaWdubWVudHN9IGZyb20gJy4uLy4uL2RhdGEvYXNzaWdubWVudHMuanNvbic7XHJcbi8vIGltcG9ydCB7cHJvamVjdHN9IGZyb20gJy4uLy4uL2RhdGEvcHJvamVjdHMuanNvbic7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29sLCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuLy8gSW1wb3J0IGNzcyBmaWxlc1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9DYXJvdXNlbC5tb2R1bGUuY3NzJztcclxuXHJcbi8vIGh0dHBzOi8vcmVhY3Qtc2xpY2submVvc3RhY2suY29tL2RvY3MvYXBpXHJcbi8vIHNsaWRlciBzZXR0aW5nc1xyXG5cclxuY29uc3Qgc2V0dGluZ3NQcm9qZWN0cyA9IHtcclxuICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgYXJyb3dzOiB0cnVlLFxyXG4gIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXHJcbiAgc3BlZWQ6IDQwMCxcclxuICBzbGlkZXNUb1Nob3c6NCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBpbml0aWFsU2xpZGU6IDEsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMzgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5ODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc1MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3NBc3NpZ25tZW50cyA9IHtcclxuICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcclxuICAgIHNwZWVkOiA0MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6NCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAxLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM4MCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcblxyXG4gIGxldCBhc3NpZ25tZW50cyA9IHJlcXVpcmUoJy4uLy4uL2RhdGEvYXNzaWdubWVudHMuanNvbicpXHJcbiAgbGV0IHByb2plY3RzID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9wcm9qZWN0cy5qc29uJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgd29yay1ib2R5XCIgaWQ9XCJ3b3JrXCI+XHJcblxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwicHJvamVjdHNUaXRsZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+IFByb2plY3RzPC9oMT5cclxuICAgICAgXHJcbiAgICAgIHtwcm9qZWN0cyAmJlxyXG4gICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3RzKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY3VzdG9tQ2FyZFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz17cHJvamVjdHMuaW1nfSBhbHQ9e3Byb2plY3RzLm5hbWV9IGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+ICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG1haW4tY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPjxpbnM+e3Byb2plY3RzLnRpdGxlfTwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGg1XCI+e3Byb2plY3RzLmRpc2N9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e3Byb2plY3RzLmdpdGh1Yn0gY2xhc3NOYW1lPVwiYnRuIHAtYnRuLWNvbG9yIGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXBzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48Yj5HaXRIdWIgPC9iPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXtwcm9qZWN0cy5saW5rfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PEljb24gY2xhc3NOYW1lPVwiaWNvbmlmeVwiIGljb249XCJzaW1wbGUtaWNvbnM6aGVyb2t1XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiLz48L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTUgY2Fyc291c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2lnbm1lbnRzVGl0bGVXcmFwcGVyIG1iLTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2plY3RzVGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiBQcm9qZWN0czwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzUHJvamVjdHN9PlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cyAmJlxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIGNsYXNzTmFtZT17c3R5bGVzLmFsYnVtQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENhcm91c2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz17cHJvamVjdHMuaW1nfSBhbHQ9e3Byb2plY3RzLm5hbWV9IGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0ge3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGlucz57cHJvamVjdHMudGl0bGV9PC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cHJvamVjdHMuZGlzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3RlciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXtwcm9qZWN0cy5naXRodWJ9IGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e3Byb2plY3RzLmxpbmt9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48SWNvbiBjbGFzc05hbWU9XCJpY29uaWZ5XCIgaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm10LTUgY2Fyc291c2VsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2lnbm1lbnRzVGl0bGVXcmFwcGVyIG1iLTVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFzc2lnbm1lbnRzVGl0bGVcIiBpZD1cImFzc2lnbm1lbnRzXCI+QXNzaWdubWVudHMgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0XCI+PC9pPjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzQXNzaWdubWVudHN9PlxyXG4gICAgICAgICAgICAgIHthc3NpZ25tZW50cyAmJlxyXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMubWFwKChhc3NpZ25tZW50cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiM1wiIGNsYXNzTmFtZT17c3R5bGVzLmFsYnVtQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENhcm91c2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wIG1haW4taW1nLWhlaWdodFwiIHNyYz17YXNzaWdubWVudHMuaW1nfSBhbHQ9e2Fzc2lnbm1lbnRzLm5hbWV9IGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17Nn0gaGVpZ2h0PXszLjV9IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IGNsYXNzTmFtZT0ge3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGlucz57YXNzaWdubWVudHMudGl0bGV9PC9pbnM+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57YXNzaWdubWVudHMuZGlzY308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3RlciA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXthc3NpZ25tZW50cy5naXRodWJ9IGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e2Fzc2lnbm1lbnRzLmxpbmt9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48SWNvbiBjbGFzc05hbWU9XCJpY29uaWZ5XCIgaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxocj48L2hyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJJY29uIiwiQ29udGFpbmVyIiwiQ29sIiwiQ2FyZCIsIlNsaWRlciIsInN0eWxlcyIsInNldHRpbmdzUHJvamVjdHMiLCJhY2Nlc3NpYmlsaXR5IiwiZG90cyIsImluZmluaXRlIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzQ2xhc3MiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNldHRpbmdzQXNzaWdubWVudHMiLCJQcm9qZWN0cyIsImFzc2lnbm1lbnRzIiwicmVxdWlyZSIsInByb2plY3RzIiwibWFwIiwiaW1nIiwibmFtZSIsInRpdGxlIiwiZGlzYyIsImdpdGh1YiIsImxpbmsiLCJhbGJ1bUNhcmQiLCJjYXJkQ2Fyb3VzZWwiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==