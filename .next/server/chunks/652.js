exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 4002:
/***/ ((module) => {

// Exports
module.exports = {
	"cardProjects": "Carousel_cardProjects__ptWg1",
	"animated-border": "Carousel_animated-border__9t7PB",
	"cardAssignments": "Carousel_cardAssignments__bME8X",
	"body": "Carousel_body__SYz5_",
	"footer": "Carousel_footer__156fh"
};


/***/ }),

/***/ 5652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4002);
/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_3__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// images and gifs imports
// import {assignments} from '../../data/assignments.json';
// import {projects} from '../../data/projects.json';


// Import css files



// https://react-slick.neostack.com/docs/api
// slider settings
const settingsProjects = {
    accessibility: true,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    dotsClass: "slick-dots",
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const settingsAssignments = {
    accessibility: true,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    dotsClass: "slick-dots",
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
function Projects() {
    let assignments = __webpack_require__(4590);
    let projects = __webpack_require__(1584);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container work-body",
        id: "work",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                className: "px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "assignmentsTitleWrapper mb-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "projectsTitle",
                                children: "Projects"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), {
                            ...settingsProjects,
                            children: projects && projects.map((projects)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    lg: "3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
                                        className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardProjects),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "embed-responsive",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "card-img-top main-img-height",
                                                    src: projects.img,
                                                    alt: projects.name,
                                                    layout: "responsive",
                                                    width: 6,
                                                    height: 3.5
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {
                                                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                            children: projects.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "card-text",
                                                        children: projects.disc
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Footer, {
                                                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center mt-auto",
                                                    children: [
                                                        projects.link ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: projects.github,
                                                            className: "btn p-btn-color btn-lg custom-length-ps",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: "GitHub "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fab fa-github-square"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: projects.github,
                                                            className: "btn p-btn-color btn-lg custom-length-pp",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: "GitHub "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fab fa-github-square"
                                                                })
                                                            ]
                                                        }),
                                                        projects.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: projects.link,
                                                            className: "btn btn-secondary btn-lg custom-length-ss",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-external-link-alt"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, projects.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "hrProjects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                className: "px-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "assignmentsTitleWrapper mb-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "assignmentsTitle",
                                id: "assignments",
                                children: "Assignments"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), {
                            ...settingsAssignments,
                            children: assignments && assignments.map((assignments)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    lg: "3",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {
                                        className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().cardAssignments),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "embed-responsive",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    className: "card-img-top main-img-height",
                                                    src: assignments.img,
                                                    alt: assignments.name,
                                                    layout: "responsive",
                                                    width: 6,
                                                    height: 3.5
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {
                                                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                        children: assignments.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Footer, {
                                                className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-center mt-auto",
                                                    children: [
                                                        assignments.link ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: assignments.github,
                                                            className: "btn p-btn-color btn-lg custom-length-ps",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: "GitHub "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fab fa-github-square"
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: assignments.github,
                                                            className: "btn p-btn-color btn-lg custom-length-pp",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    children: "GitHub "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fab fa-github-square"
                                                                })
                                                            ]
                                                        }),
                                                        assignments.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            href: assignments.link,
                                                            className: "btn btn-secondary btn-lg custom-length-ss",
                                                            role: "button",
                                                            "aria-pressed": "true",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "fas fa-external-link-alt"
                                                            })
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, assignments.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "hrAssignments"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4590:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"1","name":"mern","title":"M.E.R.N","disc":"Full stack application following the M.E.R.N diagram. Below are the links for the GitHub repository and Vercel webpage!","github":"https://github.com/brandonfordd/mern-book-search","link":"Full stack web application utilizing the mern work stack. Below is the link to the Github and Heroku page","img":"/assets/gifs/mern.gif"},{"id":"2","name":"pwa","title":"Progressive Web App","disc":"Full stack web application to track your spending&apos;s on the fly by utilizing webpack to run offline. Below is the link to the Github and Heroku page","github":"https://github.com/brandonfordd/progressive-web-app","link":"https://calm-crag-38234.herokuapp.com/","img":"/assets/gifs/pwa.gif"},{"id":"3","name":"mdb_workout","title":"Workout Tracker","disc":"Full stack web application to track workouts, utilizing MongoDB for the backend. Below is the link to the Github and Heroku page","github":"https://github.com/brandonfordd/mvc_techblog","link":"https://infinite-sands-02853.herokuapp.com/","img":"/assets/gifs/mdb_workout.gif"},{"id":"4","name":"regextutorial","title":"Regex Tutorial","disc":"This is a tutorial describing how the regex for matching a URL works. Below is the repository for the Gist on Github!","github":"https://gist.github.com/brandonfordd/2fc4ca41dec6a856e25334ac65ba7dac","link":"","img":"/assets/images/regex-url.png"},{"id":"5","name":"mvctech","title":"MVC Techblog","disc":"Building a full stack website for tech bloggers to post, update, and delete blogs! Below is the link to the Github and Heroku page","github":"https://github.com/brandonfordd/mvc_techblog","link":"https://immense-lake-51774.herokuapp.com/","img":"/assets/images/mvctech.png"},{"id":"6","name":"mysqltracker","title":"Employee Tracker","disc":"Using MySql we were task with designing a database for sorting and tracking employee! Below is the Github for more information","github":"https://github.com/brandonfordd/sql_employee_tracker","link":"","img":"/assets/gifs/sql_gif.gif"},{"id":"7","name":"ecommercebackend","title":"E-Commerce Backend","disc":"Using MySql we were task with building the back end for an e-commerce site using Express.js and Sequelize. Below is the GitHub repository for more information!","github":"https://github.com/brandonfordd/e_commerce_backend","link":"","img":"/assets/gifs/categories.gif"},{"id":"8","name":"notetaker","title":"Express Note Taker","disc":"This is a Express Note taking application deployed on Heroku to show backend server development! Below are the links for the GitHub and Heroku!","github":"https://github.com/brandonfordd/notetaker","link":"https://intense-retreat-13384.herokuapp.com/","img":"/assets/gifs/notetaker_ppreview.gif"},{"id":"9","name":"readme_generator","title":"Readme Generator","disc":"Using node.js and Javascript you can generate custom readme files for any work flow. Below are the links for the GitHub repository for more information!","github":"https://github.com/brandonfordd/readme_generator","link":"","img":"/assets/gifs/readme_preview.gif"},{"id":"10","name":"teamcard_generator","title":"Team Profile Generator","disc":"Using node.js and Javascript you can generate custom Team Profile html file to fit any work flow. Below are the links for the GitHub repository for more information!","github":"https://github.com/brandonfordd/teamcard_generator","link":"","img":"/assets/gifs/team_profile.gif"},{"id":"11","name":"weather_app","title":"Weather Dashboard","disc":"This is a weather dashboard made with OpenWeather Api! Below are the links for the GitHub repository and webpage","github":"https://github.com/brandonfordd/weather_app","link":"https://brandonfordd.github.io/weather_app/","img":"/assets/images/screenshot-weatherapp.png"},{"id":"12","name":"password_generator","title":"Password Generator","disc":"This is a password generator made with javascript! Below are the links for the GitHub repository and webpage","github":"https://github.com/brandonfordd/password_generator","link":"https://brandonfordd.github.io/password_generator/","img":"/assets/images/screenshot-passgen.png"},{"id":"13","name":"javascript_quiz","title":"Javascript Quiz","disc":"This is a Javascript Quiz using only javascript! Below are the links for the GitHub repository and webpage","github":"https://github.com/brandonfordd/javascript_quiz","link":"https://brandonfordd.github.io/javascript_quiz/","img":"/assets/images/screenshot-javaquiz.png"},{"id":"14","name":"day_planner","title":"Day Planner","disc":"This is a day planner using Javascript and moment.js! Below are the links for the GitHub repository and webpage","github":"https://github.com/brandonfordd/day_planner","link":"https://brandonfordd.github.io/day_planner/","img":"/assets/images/screenshot-dayplanner.png"},{"id":"15","name":"horiseon_website","title":"Horison Site Refractment","disc":"This assignment was to refract a pre-made site called Horison! Below are the links for the GitHub repository and webpage!","github":"https://github.com/brandonfordd/horiseon_refactor","link":"https://brandonfordd.github.io/horiseon_refactor/","img":"/assets/images/horiseon_site.png"}]');

/***/ }),

/***/ 1584:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"pandorasbox","title":"Pandoras Box","disc":"Full stack application following the M.E.R.N diagram to retrieve and display data. Below are the links for the GitHub repository and Vercel webpage!","github":"https://github.com/AustinJoo97/Pandoras-Box","link":"","img":"/assets/images/pandorabox_screenshot.png"},{"name":"moivenightdoneright","title":"Movie Night.. Done Right","disc":"Full Stack application using html, css, and javascript to make a movie catalog! Below are the links for the GitHub repository and Heroku webpage!","github":"https://github.com/AustinJoo97/MovieNightDoneRight","link":"https://austinjoo97.github.io/MovieNightDoneRight/","img":"/assets/images/moivenight_screenshot.png"},{"name":"patienttracker","title":"MVC Patient Tracker","disc":"Full stack application following MVC paradigm for creating, updating, sorting and deleting patient records. Below are the links for the GitHub repository and Heroku webpage!","github":"https://github.com/Captain63/patient-records-tracker","link":"https://patient-records-tracker.herokuapp.com","img":"/assets/gifs/patienttrackergif.gif"}]');

/***/ })

};
;