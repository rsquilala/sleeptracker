"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-bar_tab-bar_module_ts"],{

/***/ 8705:
/*!***************************************************!*\
  !*** ./src/app/tab-bar/tab-bar-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPageRoutingModule": () => (/* binding */ TabBarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_bar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar.page */ 8002);




const routes = [
    {
        path: 'app',
        component: _tab_bar_page__WEBPACK_IMPORTED_MODULE_0__.TabBarPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sleep_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'sleep-timer',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sleep_service_ts"), __webpack_require__.e("src_app_sleep-timer_sleep-timer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../sleep-timer/sleep-timer.module */ 9066)).then(m => m.SleepTimerPageModule)
                    }
                ]
            },
            {
                path: 'sleepiness',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_sleep_service_ts"), __webpack_require__.e("src_app_sleepiness_sleepiness_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../sleepiness/sleepiness.module */ 6189)).then(m => m.SleepinessPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/sleep-timer',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/app/sleep-timer',
        pathMatch: 'full'
    }
];
let TabBarPageRoutingModule = class TabBarPageRoutingModule {
};
TabBarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabBarPageRoutingModule);



/***/ }),

/***/ 2361:
/*!*******************************************!*\
  !*** ./src/app/tab-bar/tab-bar.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPageModule": () => (/* binding */ TabBarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_bar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar-routing.module */ 8705);
/* harmony import */ var _tab_bar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-bar.page */ 8002);







let TabBarPageModule = class TabBarPageModule {
};
TabBarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_bar_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabBarPageRoutingModule
        ],
        declarations: [_tab_bar_page__WEBPACK_IMPORTED_MODULE_1__.TabBarPage]
    })
], TabBarPageModule);



/***/ }),

/***/ 8002:
/*!*****************************************!*\
  !*** ./src/app/tab-bar/tab-bar.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBarPage": () => (/* binding */ TabBarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_bar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar.page.html?ngResource */ 5772);
/* harmony import */ var _tab_bar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-bar.page.scss?ngResource */ 5049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabBarPage = class TabBarPage {
    constructor() { }
    ngOnInit() {
    }
};
TabBarPage.ctorParameters = () => [];
TabBarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab-bar',
        template: _tab_bar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_bar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabBarPage);



/***/ }),

/***/ 5049:
/*!******************************************************!*\
  !*** ./src/app/tab-bar/tab-bar.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItYmFyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5772:
/*!******************************************************!*\
  !*** ./src/app/tab-bar/tab-bar.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<!-- Bottom navigation bar -->\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-label>Sleep Data</ion-label>\n      <ion-icon name=\"person-circle\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"sleep-timer\">\n      <ion-label>Sleep Timer</ion-label>\n      <ion-icon name=\"bed\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"sleepiness\">\n      <ion-label>Sleepiness</ion-label>\n      <ion-icon name=\"speedometer\"></ion-icon>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-bar_tab-bar_module_ts.js.map