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

module.exports = "<app-heading></app-heading>\n<router-outlet></router-outlet>"

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
        this.title = 'bagong-project';
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
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./heading/heading.component */ "./src/app/heading/heading.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__["HeroesComponent"],
                _heading_heading_component__WEBPACK_IMPORTED_MODULE_10__["HeadingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__["HeroesComponent"] },
                    { path: 'hello-world', component: _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-wrapper{\n    font-family:'Courier New', Courier, monospace;\n    font-size: 14px;\n    background-color: antiquewhite;\n    padding: 5px;\n    border: solid;\n    border-color:gray;\n    border-radius: 30px;\n    width: 25%;\n    margin-bottom: 10px;\n}\n\n.label{\n    font-weight: bold;\n}\n\n.logo{\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZS13cmFwcGVye1xuICAgIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjpncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2dve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee-wrapper\" [ngStyle]=\"!employee.fresh ? {'background-color': 'aqua'} : null\">\n  <img class=\"logo\" src=\"https://www.electronicscience.com/assets/img/escience-logo.png\" alt=\"alternatetext\">\n  <p><span class=\"label\">Name:</span> {{ employee.name }} </p>\n  <p><span class=\"label\">Gender:</span> {{ employee.gender }} </p>\n  <p><span class=\"label\">Title:</span> {{ employee.title }} </p>\n  <p><span class=\"label\">Tenure:</span> {{ employee.tenure }} </p>\n  <p><span class=\"label\">Salary:</span> {{ employee.salary }} </p>\n</div>\n\n<!-- \nisBgColor ? \n{ color: blue } : { color: red }\n\n -->"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.employee);
    };
    EmployeeComponent.prototype.ngOnChanges = function () {
        console.log("Employee Updated");
        console.log(this.employee);
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        console.log("Employee Deleted");
        console.log(this.employee);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeeComponent.prototype, "employee", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/heading/heading.component.css":
/*!***********************************************!*\
  !*** ./src/app/heading/heading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRpbmcvaGVhZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/heading/heading.component.html":
/*!************************************************!*\
  !*** ./src/app/heading/heading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a class=\"button\" routerLink=\"/hello-world\"> Hello World</a>\n  <a class=\"button\" routerLink=\"/heroes\"> Heroes</a>\n</nav>"

/***/ }),

/***/ "./src/app/heading/heading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/heading/heading.component.ts ***!
  \**********************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadingComponent = /** @class */ (function () {
    function HeadingComponent() {
    }
    HeadingComponent.prototype.ngOnInit = function () {
    };
    HeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heading',
            template: __webpack_require__(/*! ./heading.component.html */ "./src/app/heading/heading.component.html"),
            styles: [__webpack_require__(/*! ./heading.component.css */ "./src/app/heading/heading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadingComponent);
    return HeadingComponent;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hello-world{\n    color: red;\n}\n\n.size-20 {\n    font-size: 20px;\n}\n\n.size-30 {\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVsbG8td29ybGQvaGVsbG8td29ybGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaGVsbG8td29ybGQvaGVsbG8td29ybGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxsby13b3JsZHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4uc2l6ZS0yMCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2l6ZS0zMCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/*!********************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"false\">\n<p [ngStyle]=\"{'color': 'blue'}\">\n  hello-world works!\n</p>\n\n<p [ngClass]=\"className\"> {{ isBig }} </p>\n<button (mouseenter)=\"switchSize('size-30')\">{{ isBig ? 'Display Small' : 'Display Big' }}</button>\n\n<br>\n\n<p *ngIf=\"isDisplayed\"> I'm Displayed</p>\n<button (click)=\"switchDisplay()\">{{ isDisplayed ? 'Hide me' : 'Show me'}}</button>\n\n<br>\n\n<input [(ngModel)]=\"message\"/>\n<p class=\"hello-world\"> {{ message }}</p>\n\n<br>\n\n<input [(ngModel)]=\"alertMessage\"/>\n<button (click)=\"displayAlert(alertMessage)\">Display Alert</button>\n\n<br>\n</div>\n\n<p>Name: </p>\n<input [(ngModel)]=\"name\"/>\n\n<p>Title: </p>\n<input [(ngModel)]=\"title\"/>\n\n<p>Gender: </p>\n<input [(ngModel)]=\"gender\"/>\n\n<p>Tenure: </p>\n<input [(ngModel)]=\"tenure\"/>\n\n<p>Salary: </p>\n<input [(ngModel)]=\"salary\"/>\n\n<p>Display: </p>\n<select [(ngModel)]=\"display\">\n<option default [ngValue]=\"true\">True</option>  \n<option [ngValue]=\"false\">False</option>  \n</select>\n\n<button (click)=\"addEmployee(name, title, gender, tenure, salary, display)\"> Add Employee </button>\n\n<div *ngFor=\"let employee of employees; let i = index;\">\n  <app-employee *ngIf=\"employee.display\" [employee]=\"employee\"></app-employee>\n  <button (click)=\"updateEmployee(i, name, title, gender, tenure, salary, display)\">Update</button>\n  <button (click)=\"deleteEmployee(i)\">Delete</button>\n</div>"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/employee/employee.service */ "./src/app/services/employee/employee.service.ts");



var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent(employeeService) {
        this.employeeService = employeeService;
        this.message = 'Hello Hello World';
        this.color = 'red';
        this.isBig = true;
        this.isDisplayed = true;
        this.alertMessage = '';
        this.content = '';
        this.className = '';
        this.name = '';
        this.gender = '';
        this.title = '';
        this.tenure = 0;
        this.salary = 0;
        this.display = true;
        this.employees = [];
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
        // This runs when the component has been CREATED
        this.fetchEmployees();
    };
    HelloWorldComponent.prototype.switchSize = function (className) {
        this.isBig = !this.isBig;
        this.className = className;
    };
    HelloWorldComponent.prototype.switchDisplay = function () {
        this.isDisplayed = !this.isDisplayed;
    };
    HelloWorldComponent.prototype.displayAlert = function (message) {
        alert(message);
    };
    HelloWorldComponent.prototype.clearEmployeeInputs = function () {
        this.name = '';
        this.title = '';
        this.gender = '';
        this.tenure = 0;
        this.salary = 0;
    };
    HelloWorldComponent.prototype.fetchEmployees = function () {
        this.employees = this.employeeService.getEmployees();
    };
    HelloWorldComponent.prototype.addEmployee = function (name, title, gender, tenure, salary, display) {
        this.employeeService.addEmployee(name, title, gender, tenure, salary, display);
        this.clearEmployeeInputs();
        this.display = true;
        console.log(this.employees);
    };
    HelloWorldComponent.prototype.updateEmployee = function (index, name, title, gender, tenure, salary, display) {
        this.employeeService.updateEmployee(index, name, title, gender, tenure, salary, display);
        this.clearEmployeeInputs();
        this.display = true;
    };
    HelloWorldComponent.prototype.deleteEmployee = function (index) {
        this.employeeService.deleteEmployee(index);
    };
    HelloWorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world/hello-world.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  heroes works!\n</p>\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/services/employee/employee.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/employee/employee.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = [
            {
                'name': 'Aggy',
                'title': 'Dev',
                'gender': 'M',
                'tenure': 0,
                'salary': 15000,
                'display': true,
                'fresh': true
            }
        ];
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.employees;
    };
    EmployeeService.prototype.addEmployee = function (name, title, gender, tenure, salary, display) {
        var employee = {
            name: name,
            gender: gender,
            title: title,
            tenure: tenure,
            salary: salary,
            display: display,
            fresh: true
        };
        this.employees.push(employee);
    };
    EmployeeService.prototype.deleteEmployee = function (index) {
        var employee = this.employees[index];
        this.employees.splice(index, 1);
        alert("Deleted " + employee.name);
    };
    EmployeeService.prototype.updateEmployee = function (index, name, title, gender, tenure, salary, display) {
        var employee = {
            name: name,
            gender: gender,
            title: title,
            tenure: tenure,
            salary: salary,
            display: display,
            fresh: false
        };
        this.employees[index] = employee;
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeService);
    return EmployeeService;
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

module.exports = __webpack_require__(/*! /Users/angelogarcia/angular_training_june/bagong-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map