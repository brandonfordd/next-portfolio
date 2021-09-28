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
              className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_9___default().assignmentsCard),
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
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
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
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
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
                        lineNumber: 168,
                        columnNumber: 175
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        className: "fab fa-github-square"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 168,
                        columnNumber: 189
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
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
                        lineNumber: 169,
                        columnNumber: 175
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
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
      lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWJlNjJmMjk4Nzc4NGRlNDk4OTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBSUE7QUFDQTs7QUFFQSxJQUFNUSxnQkFBZ0IsR0FBRztBQUN2QkMsRUFBQUEsYUFBYSxFQUFFLElBRFE7QUFFdkJDLEVBQUFBLElBQUksRUFBRSxJQUZpQjtBQUd2QkMsRUFBQUEsUUFBUSxFQUFFLElBSGE7QUFJdkJDLEVBQUFBLE1BQU0sRUFBRSxJQUplO0FBS3ZCQyxFQUFBQSxVQUFVLEVBQUUsSUFMVztBQU12QkMsRUFBQUEsYUFBYSxFQUFFLEtBTlE7QUFPdkJDLEVBQUFBLFNBQVMsRUFBRSxZQVBZO0FBUXZCQyxFQUFBQSxLQUFLLEVBQUUsR0FSZ0I7QUFTdkJDLEVBQUFBLFlBQVksRUFBQyxDQVRVO0FBVXZCQyxFQUFBQSxjQUFjLEVBQUUsQ0FWTztBQVd2QkMsRUFBQUEsWUFBWSxFQUFFLENBWFM7QUFZdkJDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0lDLElBQUFBLFVBQVUsRUFBRSxJQURoQjtBQUVJQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkwsTUFBQUEsWUFBWSxFQUFFO0FBRFI7QUFGZCxHQURRLEVBT1I7QUFDRUksSUFBQUEsVUFBVSxFQUFFLEdBRGQ7QUFFRUMsSUFBQUEsUUFBUSxFQUFFO0FBQ05MLE1BQUFBLFlBQVksRUFBRTtBQURSO0FBRlosR0FQUSxFQWFSO0FBQ0VJLElBQUFBLFVBQVUsRUFBRSxHQURkO0FBRUVDLElBQUFBLFFBQVEsRUFBRTtBQUNOTCxNQUFBQSxZQUFZLEVBQUU7QUFEUjtBQUZaLEdBYlE7QUFaVyxDQUF6QjtBQWtDQSxJQUFNTSxtQkFBbUIsR0FBRztBQUN4QmQsRUFBQUEsYUFBYSxFQUFFLElBRFM7QUFFeEJDLEVBQUFBLElB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QUEsNkNBQW9KLDhEQUFDLGdEQUFEO0FBQU0saUNBQVMsRUFBQyxTQUFoQjtBQUEwQiw0QkFBSSxFQUFDLHFCQUEvQjtBQUFxRCx1Q0FBWTtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBaEI7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2REYsZUFxRkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQTJGRDtLQWhHdUJWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1Byb2plY3RzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xyXG4vLyBpbWFnZXMgYW5kIGdpZnMgaW1wb3J0c1xyXG4vLyBpbXBvcnQge2Fzc2lnbm1lbnRzfSBmcm9tICcuLi8uLi9kYXRhL2Fzc2lnbm1lbnRzLmpzb24nO1xyXG4vLyBpbXBvcnQge3Byb2plY3RzfSBmcm9tICcuLi8uLi9kYXRhL3Byb2plY3RzLmpzb24nO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbCwgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbi8vIEltcG9ydCBjc3MgZmlsZXNcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQ2Fyb3VzZWwubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBodHRwczovL3JlYWN0LXNsaWNrLm5lb3N0YWNrLmNvbS9kb2NzL2FwaVxyXG4vLyBzbGlkZXIgc2V0dGluZ3NcclxuXHJcbmNvbnN0IHNldHRpbmdzUHJvamVjdHMgPSB7XHJcbiAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIGFycm93czogdHJ1ZSxcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxyXG4gIHNwZWVkOiA0MDAsXHJcbiAgc2xpZGVzVG9TaG93OjIsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgaW5pdGlhbFNsaWRlOiAxLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogMTM4MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NTAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIF1cclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzQXNzaWdubWVudHMgPSB7XHJcbiAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXHJcbiAgICBzcGVlZDogNDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OjQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGluaXRpYWxTbGlkZTogMSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDk4MCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG5cclxuICBsZXQgYXNzaWdubWVudHMgPSByZXF1aXJlKCcuLi8uLi9kYXRhL2Fzc2lnbm1lbnRzLmpzb24nKVxyXG4gIGxldCBwcm9qZWN0cyA9IHJlcXVpcmUoJy4uLy4uL2RhdGEvcHJvamVjdHMuanNvbicpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHdvcmstYm9keVwiIGlkPVwid29ya1wiPlxyXG5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInByb2plY3RzVGl0bGVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPiBQcm9qZWN0czwvaDE+XHJcbiAgICAgIFxyXG4gICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0cykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGN1c3RvbUNhcmRcIj5cclxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9e3Byb2plY3RzLmltZ30gYWx0PXtwcm9qZWN0cy5uYW1lfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBtYWluLWNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj48aW5zPntwcm9qZWN0cy50aXRsZX08L2lucz48L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dCBoNVwiPntwcm9qZWN0cy5kaXNjfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXtwcm9qZWN0cy5naXRodWJ9IGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj17cHJvamVjdHMubGlua30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGN1c3RvbS1sZW5ndGgtc3NcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxJY29uIGNsYXNzTmFtZT1cImljb25pZnlcIiBpY29uPVwic2ltcGxlLWljb25zOmhlcm9rdVwiIGRhdGEtaW5saW5lPVwiZmFsc2VcIi8+PC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01IGNhcnNvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NpZ25tZW50c1RpdGxlV3JhcHBlciBtYi01XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwcm9qZWN0c1RpdGxlXCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT4gUHJvamVjdHM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc1Byb2plY3RzfT5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdHMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBjbGFzc05hbWU9e3N0eWxlcy5hc3NpZ25tZW50c0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDYXJvdXNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9e3Byb2plY3RzLmltZ30gYWx0PXtwcm9qZWN0cy5uYW1lfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9IHtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbnM+e3Byb2plY3RzLnRpdGxlfTwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb2plY3RzLmRpc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Gb290ZXIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj17cHJvamVjdHMuZ2l0aHVifSBjbGFzc05hbWU9XCJidG4gcC1idG4tY29sb3IgYnRuLWxnIGN1c3RvbS1sZW5ndGgtcHNcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiPjxiPkdpdEh1YiA8L2I+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1Yi1zcXVhcmVcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXtwcm9qZWN0cy5saW5rfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbGcgY3VzdG9tLWxlbmd0aC1zc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PEljb24gY2xhc3NOYW1lPVwiaWNvbmlmeVwiIGljb249XCJzaW1wbGUtaWNvbnM6aGVyb2t1XCIgZGF0YS1pbmxpbmU9XCJmYWxzZVwiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtdC01IGNhcnNvdXNlbC1jb250YWluZXJcIj5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NpZ25tZW50c1RpdGxlV3JhcHBlciBtYi01XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhc3NpZ25tZW50c1RpdGxlXCIgaWQ9XCJhc3NpZ25tZW50c1wiPkFzc2lnbm1lbnRzIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3VibGUtbGVmdFwiPjwvaT48L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc0Fzc2lnbm1lbnRzfT5cclxuICAgICAgICAgICAgICB7YXNzaWdubWVudHMgJiZcclxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnRzLm1hcCgoYXNzaWdubWVudHMpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjNcIiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bUNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDYXJvdXNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBtYWluLWltZy1oZWlnaHRcIiBzcmM9e2Fzc2lnbm1lbnRzLmltZ30gYWx0PXthc3NpZ25tZW50cy5uYW1lfSBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezZ9IGhlaWdodD17My41fSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keSBjbGFzc05hbWU9IHtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxpbnM+e2Fzc2lnbm1lbnRzLnRpdGxlfTwvaW5zPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3RlciBjbGFzc05hbWU9IHtzdHlsZXMuZm9vdGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPXthc3NpZ25tZW50cy5naXRodWJ9IGNsYXNzTmFtZT1cImJ0biBwLWJ0bi1jb2xvciBidG4tbGcgY3VzdG9tLWxlbmd0aC1wc1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLXByZXNzZWQ9XCJ0cnVlXCI+PGI+R2l0SHViIDwvYj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9e2Fzc2lnbm1lbnRzLmxpbmt9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1sZyBjdXN0b20tbGVuZ3RoLXNzXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtcHJlc3NlZD1cInRydWVcIj48SWNvbiBjbGFzc05hbWU9XCJpY29uaWZ5XCIgaWNvbj1cInNpbXBsZS1pY29uczpoZXJva3VcIiBkYXRhLWlubGluZT1cImZhbHNlXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxocj48L2hyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJJY29uIiwiQ29udGFpbmVyIiwiQ29sIiwiQ2FyZCIsIlNsaWRlciIsInN0eWxlcyIsInNldHRpbmdzUHJvamVjdHMiLCJhY2Nlc3NpYmlsaXR5IiwiZG90cyIsImluZmluaXRlIiwiYXJyb3dzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJkb3RzQ2xhc3MiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNldHRpbmdzQXNzaWdubWVudHMiLCJQcm9qZWN0cyIsImFzc2lnbm1lbnRzIiwicmVxdWlyZSIsInByb2plY3RzIiwibWFwIiwiaW1nIiwibmFtZSIsInRpdGxlIiwiZGlzYyIsImdpdGh1YiIsImxpbmsiLCJhc3NpZ25tZW50c0NhcmQiLCJjYXJkQ2Fyb3VzZWwiLCJib2R5IiwiYWxidW1DYXJkIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==