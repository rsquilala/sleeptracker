"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sleepiness_sleepiness_module_ts"],{

/***/ 3454:
/*!*********************************************************!*\
  !*** ./src/app/sleepiness/sleepiness-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessPageRoutingModule": () => (/* binding */ SleepinessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sleepiness_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness.page */ 2904);




const routes = [
    {
        path: '',
        component: _sleepiness_page__WEBPACK_IMPORTED_MODULE_0__.SleepinessPage
    }
];
let SleepinessPageRoutingModule = class SleepinessPageRoutingModule {
};
SleepinessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SleepinessPageRoutingModule);



/***/ }),

/***/ 6189:
/*!*************************************************!*\
  !*** ./src/app/sleepiness/sleepiness.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessPageModule": () => (/* binding */ SleepinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sleepiness_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness-routing.module */ 3454);
/* harmony import */ var _sleepiness_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleepiness.page */ 2904);







let SleepinessPageModule = class SleepinessPageModule {
};
SleepinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sleepiness_routing_module__WEBPACK_IMPORTED_MODULE_0__.SleepinessPageRoutingModule
        ],
        declarations: [_sleepiness_page__WEBPACK_IMPORTED_MODULE_1__.SleepinessPage]
    })
], SleepinessPageModule);



/***/ }),

/***/ 2904:
/*!***********************************************!*\
  !*** ./src/app/sleepiness/sleepiness.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessPage": () => (/* binding */ SleepinessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sleepiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness.page.html?ngResource */ 6693);
/* harmony import */ var _sleepiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleepiness.page.scss?ngResource */ 4066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/stanford-sleepiness-data */ 743);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/sleep.service */ 2517);








let SleepinessPage = class SleepinessPage {
    constructor(sleepService, alertController) {
        this.sleepService = sleepService;
        this.alertController = alertController;
        this.loggedValue = 1;
    }
    ngOnInit() { }
    pinFormatter(value) {
        return `${value}`;
    }
    confirm() {
        var data = new _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_2__.StanfordSleepinessData(this.loggedValue);
        this.sleepService.logSleepinessData(data);
        this.modal.dismiss();
    }
    remove(sleepData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                this.sleepService.removeSleepinessData(sleepData);
        });
    }
    presentInfo(loggedValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Sleepiness: ${loggedValue}`,
                message: _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_2__.StanfordSleepinessData.ScaleValues[loggedValue],
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    get allSleepinessData() {
        return _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__.SleepService.AllSleepinessData;
    }
};
SleepinessPage.ctorParameters = () => [
    { type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_3__.SleepService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
SleepinessPage.propDecorators = {
    loggedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonModal,] }]
};
SleepinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sleepiness',
        template: _sleepiness_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sleepiness_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleepinessPage);



/***/ }),

/***/ 4066:
/*!************************************************************!*\
  !*** ./src/app/sleepiness/sleepiness.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-title {\n  text-align: center;\n  font-size: large;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\nion-text {\n  font-size: medium;\n}\n\nion-item {\n  --padding-bottom: 0;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.item-fill-space {\n  width: 100%;\n}\n\n#item-option {\n  --color: white;\n  padding-right: 10px;\n}\n\n#item-option ion-icon {\n  color: white;\n}\n\n#low-sleepiness {\n  --background: green;\n  --color: white;\n}\n\n#low-sleepiness ion-icon {\n  color: white;\n}\n\n#med-sleepiness {\n  --background: goldenrod;\n  --color: white;\n}\n\n#med-sleepiness ion-icon {\n  color: white;\n}\n\n#high-sleepiness {\n  --background: darkred;\n  --color: white;\n}\n\n#high-sleepiness ion-icon {\n  color: white;\n}\n\n#open-new-entry-modal {\n  --background: cornflowerblue;\n  --background-hover: cornflowerblue;\n  --color: white;\n}\n\n#confirm {\n  padding-right: 10px;\n  padding-left: 10px;\n  --background: green;\n  --background-hover: green;\n  --color: white;\n}\n\n#confirm ion-icon {\n  color: white;\n}\n\nion-grid {\n  text-align: center;\n  justify-content: center;\n}\n\nion-row {\n  text-align: center;\n}\n\nion-col {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\nion-col p {\n  vertical-align: middle;\n}\n\nion-card-content strong {\n  font-size: 12px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsZWVwaW5lc3MucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSU5GJTIwMTMzXFxBNFxcc2xlZXB0cmFja2VyXFxzcmNcXGFwcFxcc2xlZXBpbmVzc1xcc2xlZXBpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsaUJBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURFQTtFQUNDLHVCQUFBO0FDQ0Q7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0MsdUJBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURFQTtFQUNDLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRDs7QURNQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7QUNIRDs7QURNQTtFQUNDLGtCQUFBO0FDSEQ7O0FETUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSEQ7O0FETUE7RUFDQyxzQkFBQTtBQ0hEOztBRE9BO0VBQ0MsZUFBQTtBQ0pEOztBRE9BO0VBQ0Msa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDTEQ7O0FEUUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7QUNMRDs7QURRQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDUEQ7O0FEVUE7RUFDQyxxQkFBQTtBQ1BEIiwiZmlsZSI6InNsZWVwaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuXHRmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG5cdC0tcGFkZGluZy1ib3R0b206IDA7XHJcblx0LS1wYWRkaW5nLXRvcDogMDtcclxuXHQtLXBhZGRpbmctZW5kOiAwO1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHQtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xyXG5cdC0taW5uZXItcGFkZGluZy10b3A6IDA7XHJcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHQtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbn1cclxuXHJcbi5iZy10cmFuc3BhcmVudCB7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWZpbGwtc3BhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNpdGVtLW9wdGlvbiB7XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcblx0cGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuI2l0ZW0tb3B0aW9uIGlvbi1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNsb3ctc2xlZXBpbmVzcyB7XHJcblx0LS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuXHQtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2xvdy1zbGVlcGluZXNzIGlvbi1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtZWQtc2xlZXBpbmVzcyB7XHJcblx0LS1iYWNrZ3JvdW5kOiBnb2xkZW5yb2Q7XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNtZWQtc2xlZXBpbmVzcyBpb24taWNvbiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaGlnaC1zbGVlcGluZXNzIHtcclxuXHQtLWJhY2tncm91bmQ6IGRhcmtyZWQ7XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNoaWdoLXNsZWVwaW5lc3MgaW9uLWljb24ge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI29wZW4tbmV3LWVudHJ5LW1vZGFsIHtcclxuXHQtLWJhY2tncm91bmQ6IGNvcm5mbG93ZXJibHVlO1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlcjogY29ybmZsb3dlcmJsdWU7XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjb25maXJtIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHQtLWJhY2tncm91bmQ6IGdyZWVuO1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlcjogZ3JlZW47XHJcblx0LS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNjb25maXJtIGlvbi1pY29uIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vICNkYXRlIHtcclxuLy8gXHRmb250LXNpemU6IHh4LXNtYWxsO1xyXG4vLyB9XHJcblxyXG5pb24tZ3JpZCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb2wgcCB7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHQvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCBzdHJvbmcge1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHR0b3A6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuXHRjb2xvcjogIzhjOGM4YztcclxuXHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0tZmlsbC1zcGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaXRlbS1vcHRpb24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuI2l0ZW0tb3B0aW9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbG93LXNsZWVwaW5lc3Mge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2xvdy1zbGVlcGluZXNzIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbWVkLXNsZWVwaW5lc3Mge1xuICAtLWJhY2tncm91bmQ6IGdvbGRlbnJvZDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiNtZWQtc2xlZXBpbmVzcyBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2hpZ2gtc2xlZXBpbmVzcyB7XG4gIC0tYmFja2dyb3VuZDogZGFya3JlZDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiNoaWdoLXNsZWVwaW5lc3MgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNvcGVuLW5ldy1lbnRyeS1tb2RhbCB7XG4gIC0tYmFja2dyb3VuZDogY29ybmZsb3dlcmJsdWU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogY29ybmZsb3dlcmJsdWU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4jY29uZmlybSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBncmVlbjtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbiNjb25maXJtIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tZ3JpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29sIHAge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 6693:
/*!************************************************************!*\
  !*** ./src/app/sleepiness/sleepiness.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sleepiness</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Log sleepiness throughout the day -->\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Your Sleepiness Data</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Take a look at your recorded sleepiness scale data throughout the day\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list class=\"bg-transparent\">\n    <ion-item-sliding *ngFor=\"let sleepiness_data of allSleepinessData\">\n      <ion-item color=\"none\" lines=\"none\">\n        <ion-card class=\"item-fill-space\">\n          <ion-card-content>\n            <ion-grid [fixed]=\"true\">\n              <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                <ion-col size=\"auto\">\n                  <ion-chip *ngIf=\"sleepiness_data.loggedValue >= 6\" id=\"high-sleepiness\" (click)=\"presentInfo(sleepiness_data.loggedValue)\">\n                    <ion-icon name=\"battery-dead\"></ion-icon>\n                    <ion-text>{{sleepiness_data.loggedValue}}</ion-text>\n                  </ion-chip>\n                  <ion-chip *ngIf=\"sleepiness_data.loggedValue >= 3 && sleepiness_data.loggedValue <= 5\" id=\"med-sleepiness\" (click)=\"presentInfo(sleepiness_data.loggedValue)\">\n                    <ion-icon name=\"battery-half\"></ion-icon>\n                    <ion-text>{{sleepiness_data.loggedValue}}</ion-text>\n                  </ion-chip>\n                  <ion-chip *ngIf=\"sleepiness_data.loggedValue <= 2\" id=\"low-sleepiness\" (click)=\"presentInfo(sleepiness_data.loggedValue)\">\n                    <ion-icon name=\"battery-full\"></ion-icon>\n                    <ion-text>{{sleepiness_data.loggedValue}}</ion-text>\n                  </ion-chip>\n                </ion-col>\n                \n                <ion-col size=\"auto\">\n                  <ion-text id=\"date\"><p>{{sleepiness_data.dateString()}}</p></ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-item>\n\n      <ion-item-options>\n        <ion-item-option id=\"item-option\" (click)=\"remove(sleepiness_data)\" class=\"bg-transparent\">\n          <ion-icon slot=\"icon-only\" color=\"primary\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button id=\"open-new-entry-modal\" expand=\"block\">\n      <ion-icon name=\"add\" color=\"white\"></ion-icon>\n    </ion-fab-button>    \n  </ion-fab>\n\n  <ion-modal trigger=\"open-new-entry-modal\" [initialBreakpoint]=\"0.7\" [breakpoints]=\"[0, 0.7]\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-button id=\"confirm\" (click)=\"confirm()\" slot=\"end\">\n            <ion-icon name=\"checkmark\"></ion-icon>\n          </ion-button>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-card class=\"ion-text-center ion-padding\">\n          <ion-card-header>\n            <ion-card-title>How sleepy are you right now?</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n\n        <ion-range [(ngModel)]=\"loggedValue\" [ticks]=\"true\" [snaps]=\"true\" [min]=\"1\" [max]=\"7\" [pin]=\"true\" [pinFormatter]=\"pinFormatter\">\n          <ion-icon name=\"sunny\" slot=\"start\"></ion-icon>\n          <ion-icon name=\"moon\" slot=\"end\"></ion-icon>\n        </ion-range>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sleepiness_sleepiness_module_ts.js.map