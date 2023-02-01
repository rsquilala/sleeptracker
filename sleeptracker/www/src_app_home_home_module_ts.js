"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sleep.service */ 2517);






let HomePage = class HomePage {
    constructor(sleepService, alertController) {
        this.sleepService = sleepService;
        this.alertController = alertController;
    }
    ngOnInit() { }
    /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
    get allOvernightData() {
        return _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__.SleepService.AllOvernightData;
    }
    remove(sleepData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete this entry?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirm',
                        role: 'delete'
                    }
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            if (role == 'delete')
                this.sleepService.removeOvernightData(sleepData);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__.SleepService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  text-align: center;\n  font-size: large;\n}\n\nion-text {\n  font-size: medium;\n}\n\nion-grid {\n  text-align: center;\n  justify-content: center;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\nion-item {\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n\n.item-fill-space {\n  width: 100%;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n#item-option {\n  --color: white;\n  padding-right: 10px;\n}\n\n#item-option ion-icon {\n  color: white;\n}\n\n#below-recommended {\n  --background: goldenrod;\n  --color: white;\n}\n\n#below-recommended ion-icon {\n  color: white;\n}\n\n#above-recommended {\n  --background: green;\n  --color: white;\n}\n\n#above-recommended ion-icon {\n  color: white;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU5GJTIwMTMzXFxBNFxcc2xlZXB0cmFja2VyXFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSx1QkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FEVUE7RUFDQyxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNSRDs7QURXQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtBQ1JEOztBRFdBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNWRDs7QURhQTtFQUNDLHFCQUFBO0FDVkQiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5pb24tdGV4dCB7XHJcblx0Zm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcblx0LS1wYWRkaW5nLWJvdHRvbTogMDtcclxuXHQtLXBhZGRpbmctdG9wOiAwO1xyXG5cdC0tcGFkZGluZy1lbmQ6IDA7XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XHJcblx0LS1pbm5lci1wYWRkaW5nLXRvcDogMDtcclxuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG5cdC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxufVxyXG5cclxuLml0ZW0tZmlsbC1zcGFjZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJnLXRyYW5zcGFyZW50IHtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2l0ZW0tb3B0aW9uIHtcclxuXHQtLWNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4jaXRlbS1vcHRpb24gaW9uLWljb24ge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JlbG93LXJlY29tbWVuZGVkIHtcclxuXHQtLWJhY2tncm91bmQ6IGdvbGRlbnJvZDtcclxuXHQtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2JlbG93LXJlY29tbWVuZGVkIGlvbi1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNhYm92ZS1yZWNvbW1lbmRlZCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuXHQtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Fib3ZlLXJlY29tbWVuZGVkIGlvbi1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vICNkdXJhdGlvbiB7XHJcbi8vICAgZm9udC1zaXplOiBtZWRpdW07XHJcbi8vIH1cclxuXHJcbi8vICNkYXRlIHtcclxuLy8gXHRmb250LXNpemU6IHNtYWxsO1xyXG4vLyB9XHJcblxyXG4jY29udGFpbmVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG5cdGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59IiwiaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5pb24tZ3JpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbn1cblxuLml0ZW0tZmlsbC1zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI2l0ZW0tb3B0aW9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbiNpdGVtLW9wdGlvbiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2JlbG93LXJlY29tbWVuZGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4jYmVsb3ctcmVjb21tZW5kZWQgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNhYm92ZS1yZWNvbW1lbmRlZCB7XG4gIC0tYmFja2dyb3VuZDogZ3JlZW47XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4jYWJvdmUtcmVjb21tZW5kZWQgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Sleep Data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- View recorded overnight sleep data -->\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Your Sleep Data</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Take a look at your recorded overnight sleep data\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list class=\"bg-transparent\">\n    <ion-item-sliding *ngFor=\"let sleep_data of allOvernightData\">\n      <ion-item color=\"none\" lines=\"none\">\n        <ion-card class=\"item-fill-space\">\n          <ion-card-content>\n            <ion-grid >\n              <ion-row>\n                <ion-col>\n                  <ion-chip id=\"below-recommended\" *ngIf=\"sleep_data.elapsed / (1000*60*60) < 8\">\n                    <ion-icon name=\"time\"></ion-icon>\n                    <ion-text>{{sleep_data.summaryString()}}</ion-text>\n                  </ion-chip>\n                  <ion-chip id=\"above-recommended\" *ngIf=\"sleep_data.elapsed / (1000*60*60) >= 8\">\n                    <ion-icon name=\"time\"></ion-icon>\n                    <ion-text>{{sleep_data.summaryString()}}</ion-text>\n                  </ion-chip>\n                </ion-col>\n              </ion-row>\n      \n              <ion-row>\n                <ion-col>\n                  <ion-text id=\"date\">{{sleep_data.dateString()}}</ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n\n      <ion-item-options>\n        <ion-item-option id=\"item-option\" (click)=\"remove(sleep_data)\" class=\"bg-transparent\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map