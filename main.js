(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'triodesk';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_add_data_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-add/data-add.component */ "./src/app/data-add/data-add.component.ts");
/* harmony import */ var _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-data/list-data.component */ "./src/app/list-data/list-data.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _data_add_data_add_component__WEBPACK_IMPORTED_MODULE_6__["DataAddComponent"],
                _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_7__["ListDataComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'list-data' },
                    { path: 'data-add', component: _data_add_data_add_component__WEBPACK_IMPORTED_MODULE_6__["DataAddComponent"] },
                    { path: 'list-data', component: _list_data_list_data_component__WEBPACK_IMPORTED_MODULE_7__["ListDataComponent"] },
                    { path: 'view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"] }
                ])
            ],
            providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_10__["DataserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-add/data-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/data-add/data-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    text-transform: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1hZGQvZGF0YS1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtYWRkL2RhdGEtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/data-add/data-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/data-add/data-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-info\">\n  <div class=\"row\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n\n    <h2>TRIODESK DATABASE</h2>\n  </div>\n  <div class=\"col-lg-12 col-md-12 col-sm-12 bg-light\">\n\n    <br>\n    <form name=\"triodata\" #triodata=\"ngForm\" class=\"was-validated\" (ngSubmit)=add(triodata.value)>\n        <div class=\"form-group\">\n           <b><label for=\"uname\">Name:</label></b> \n            <input type=\"text\" class=\"form-control\"  placeholder=\"Enter name\" name=\"uname\" required #uname=\"ngModel\" ngModel>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n          </div>\n          <div class=\"form-group\">\n           <b> <label for=\"email\">Email:</label></b>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Enter Email\" name=\"email\" required  #email=\"ngModel\" ngModel>\n            <div class=\"valid-feedback\">Valid.</div>\n            <div class=\"invalid-feedback\">Please fill out this field.</div>\n          </div>\n\n          <div class=\"form-group\">\n              <b><label for=\"aadhar\">Aadhar No:</label></b>\n              <input type=\"aadhar\" class=\"form-control\"  placeholder=\"Enter Aadharno\" name=\"aadharno\" required  #aadharno=\"ngModel\" ngModel>\n              <div class=\"valid-feedback\">Valid.</div>\n              <div class=\"invalid-feedback\">Please fill out this field.</div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <b><label for=\"Degree\">Degree:</label></b>\n                <input type=\"degree\" class=\"form-control\"  placeholder=\"Enter Degree\" name=\"degree\" required  #degree=\"ngModel\" ngModel>\n                <div class=\"valid-feedback\">Valid.</div>\n                <div class=\"invalid-feedback\">Please fill out this field.</div>\n              </div>\n\n\n              <div class=\"form-group\">\n                 <b> <label for=\"DOJ\">Date Of Joining:</label></b>\n                  <input type=\"doj\" class=\"form-control\"  placeholder=\"Enter Date Of Joining\" name=\"doj\" required  #doj=\"ngModel\" ngModel>\n                  <div class=\"valid-feedback\">Valid.</div>\n                  <div class=\"invalid-feedback\">Please fill out this field.</div>\n                </div>\n          <div class=\"form-group form-check\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\" required> I agree on blabla.\n              <div class=\"valid-feedback\">Valid.</div>\n              <div class=\"invalid-feedback\">Check this checkbox to continue.</div>\n            </label>\n          </div>\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n           <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n          </div>\n        </form>\n      </div>\n      \n\n\n\n\n    \n\n\n  </div>\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/data-add/data-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/data-add/data-add.component.ts ***!
  \************************************************/
/*! exports provided: DataAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAddComponent", function() { return DataAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DataAddComponent = /** @class */ (function () {
    function DataAddComponent(dataservice, routing) {
        this.dataservice = dataservice;
        this.routing = routing;
    }
    DataAddComponent.prototype.ngOnInit = function () {
    };
    DataAddComponent.prototype.add = function (data) {
        var _this = this;
        this.dataservice.adddata(data).then(function (data) {
            _this.data1 = data;
            _this.routing.navigate(['/list-data']);
        });
        console.log(data);
    };
    DataAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-add',
            template: __webpack_require__(/*! ./data-add.component.html */ "./src/app/data-add/data-add.component.html"),
            styles: [__webpack_require__(/*! ./data-add.component.css */ "./src/app/data-add/data-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DataAddComponent);
    return DataAddComponent;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_4__);





var DataserviceService = /** @class */ (function () {
    function DataserviceService(http) {
        this.http = http;
    }
    DataserviceService.prototype.adddata = function (value) {
        return this.http.post('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata', value).toPromise()
            .then(function (data) {
            Object(q__WEBPACK_IMPORTED_MODULE_4__["resolve"])(data);
        });
    };
    DataserviceService.prototype.getData = function () {
        var _this = this;
        return this.http.get('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.getData1 = data; }));
    };
    DataserviceService.prototype.del = function (value) {
        var _this = this;
        return this.http.delete('https://5c8205572d2ad30014be5098.mockapi.io/api/v1/triodeskdata/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return _this.getData1 = data; }));
    };
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/list-data/list-data.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-data/list-data.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin: 0;\r\n    padding: 0px;\r\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n\r\n\r\ntd{\r\n    color:white;\r\n}\r\n\r\n\r\n\r\n.container{\r\n    overflow-x: auto;\r\n}\r\n\r\n\r\n\r\n#con1{\r\n    border:2px solid black;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1kYXRhL2xpc3QtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixvR0FBb0c7QUFDeEc7Ozs7QUFJQTtJQUNJLFdBQVc7QUFDZjs7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBQ0E7SUFDSSxzQkFBc0I7O0FBRTFCIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1kYXRhL2xpc3QtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxudGR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4jY29uMXtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-data/list-data.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-data/list-data.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"con1\" class=\"container bg-danger\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mb-2\">\n      <h2>DATA LIST</h2>\n      <br>\n      <a routerLink=\"/data-add\"><button type=\"button\" class=\"btn btn-primary\" > ADD</button></a>\n      \n    </div>\n  </div>\n\n      <div class=\"container\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-5\">\n      <table class=\"table table-dark\" border=\"4\">\n        <thead>\n         <tr> \n          <th>NAME</th>\n          <th>EMAIL</th>\n          <th>AADHAR NO</th>\n          <th>DEGREE</th>\n          <th>D.O.J</th>\n          <th>DELETE</th>\n          <th>VIEW</th>\n         </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let list of bind\">\n            <td>{{list.uname}}</td>\n            <td>{{list.email}}</td>\n            <td>{{list.aadharno}}</td>\n            <td>{{list.degree}}</td>\n            <td>{{list.doj}}</td>\n           <td> <i class=\"fas fa-trash\"(click)=\"del(list)\"></i></td>\n          <td><a routerLink='/view/{{list.id}}'><i class=\"fas fa-eye\"></i></a></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/list-data/list-data.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-data/list-data.component.ts ***!
  \**************************************************/
/*! exports provided: ListDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataComponent", function() { return ListDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListDataComponent = /** @class */ (function () {
    function ListDataComponent(dataservice, routing) {
        this.dataservice = dataservice;
        this.routing = routing;
    }
    ListDataComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ListDataComponent.prototype.get = function () {
        var _this = this;
        this.dataservice.getData().subscribe(function (res) {
            _this.bind = res;
            console.log(res);
        });
    };
    ListDataComponent.prototype.del = function (value) {
        var _this = this;
        this.dataservice.del(value.id).subscribe(function (res) {
            var data = res;
            _this.get();
        });
        this.erase = value;
        console.log(value.id);
    };
    ListDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-data',
            template: __webpack_require__(/*! ./list-data.component.html */ "./src/app/list-data/list-data.component.html"),
            styles: [__webpack_require__(/*! ./list-data.component.css */ "./src/app/list-data/list-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListDataComponent);
    return ListDataComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text{\r\n    text-align: \".\" start;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBcIi5cIiBzdGFydDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 text-center\">\n        <div class=\"card\" style=\"width:400px\">\n            <img class=\"card-img-top\" src=\"assets/img/img_avatar1.png\" alt=\"Card image\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{result.name}}</h4>\n             \n              <p class=\"card-text\">\n               <b>  MAILID:</b> {{result.email}}<br>\n               <b> AADHAR:</b> {{result.aadhar}}<br>\n               <b> DEGREE:</b> {{result.deg}}<br>\n               <b> D.O.J.:</b> {{result.doj}}\n               </p>\n               <br>\n              <a routerLink=\"/list-data\"><button type=\"button\" class=\"btn btn-primary\">GO TO LIST</button></a>\n              \n            </div>\n          </div>\n  \n        \n          \n    \n      \n    </div>\n  </div>\n  </div>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewComponent = /** @class */ (function () {
    function ViewComponent(routing, service) {
        this.routing = routing;
        this.service = service;
        this.result = {
            name: '',
            email: '',
            aadhar: '',
            deg: '',
            doj: '',
        };
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routing.snapshot.params['id'];
        console.log(this.id);
        this.service.getData().subscribe(function (res) {
            _this.bind = res;
            for (var i = 0; i < _this.bind.length; i++) {
                if (_this.id === _this.bind[i].id) {
                    _this.result.name = _this.bind[i].uname;
                    _this.result.email = _this.bind[i].email;
                    _this.result.aadhar = _this.bind[i].aadharno;
                    _this.result.deg = _this.bind[i].degree;
                    _this.result.doj = _this.bind[i].doj;
                }
            }
        });
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\triodesk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map