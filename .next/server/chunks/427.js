"use strict";
exports.id = 427;
exports.ids = [427,931];
exports.modules = {

/***/ 6763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-anonymous-default-export */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    CHANGE: "CHANGE",
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
});


/***/ }),

/***/ 4497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8833);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new flux__WEBPACK_IMPORTED_MODULE_0__.Dispatcher());


/***/ }),

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1239);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4497);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6763);



let _store = {
    menuVisible: false
};
class Store extends events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    constructor(){
        super();
        this.registerToActions = this.registerToActions.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        _dispatcher__WEBPACK_IMPORTED_MODULE_1__["default"].register(this.registerToActions.bind(this));
    }
    registerToActions({ actionType , payload  }) {
        switch(actionType){
            case _constants__WEBPACK_IMPORTED_MODULE_2__["default"].TOGGLE_SIDEBAR:
                this.toggleSidebar();
                break;
            default:
        }
    }
    toggleSidebar() {
        _store.menuVisible = !_store.menuVisible;
        this.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE);
    }
    getMenuState() {
        return _store.menuVisible;
    }
    getSidebarItems() {
        return _store.navItems;
    }
    addChangeListener(callback) {
        this.on(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(_constants__WEBPACK_IMPORTED_MODULE_2__["default"].CHANGE, callback);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Store());


/***/ })

};
;