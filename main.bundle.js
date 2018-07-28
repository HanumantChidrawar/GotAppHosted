webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all/all.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 2%;\r\n    border: solid;\r\n}\r\n.card{\r\n    text-align: center;\r\n}\r\n.charactersElement{\r\n    border-color: blue;\r\n}\r\n.housesElement{\r\n    border-color: green;\r\n}\r\n.booksElement{\r\n    border-color: red;\r\n}\r\n.charactersElement fa{\r\n    color: blue;\r\n}\r\n.housesElement fa{\r\n    color: green;\r\n}\r\n.booksElement fa{\r\n    color: red;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }\r\n"

/***/ }),

/***/ "./src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is all Component view-->\n\n<section class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"alert alert-warning clo-12\" role=\"alert\">\n            Here the Characters who don't have any name are displayed with \"NONE\" as name and they come first in alphabetical order.\n          </div>\n    </div>\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-6\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n        </div>\n        <div class=\"form-group col-md-6\">\n          <button type=\"button\" class=\"btn btn-block btn-outline-info\" (click)=\"changeOrder()\" name=\"button\">\n            Change Sort Order\n          </button>\n        </div>\n      </form>\n\n  <div class=\"row\" *ngIf=\"allData.length > 0\">\n    <div class=\"col-md-4\" *ngFor=\"let singleElement of allData | orderBy: sortOrder | filterBy: filterName\">\n      <div class=\"card booksElement\" *ngIf=\"singleElement.isbn\">\n        <fa class=\"card-img-top\" name=\"book\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleElement.name || defaultValue}}</h5>\n          <a routerLink=\"/book/{{singleElement.url.split('/').pop()}}\" class=\"btn btn-danger\">See Details</a>\n        </div>\n      </div>\n\n      <div class=\"card housesElement\" *ngIf=\"singleElement.region\">\n        <fa class=\"card-img-top\" name=\"university\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleElement.name || defaultValue}}</h5>\n          <a routerLink=\"/house/{{singleElement.url.split('/').pop()}}\" class=\"btn btn-success\">See Details</a>\n        </div>\n      </div>\n\n      <div class=\"card charactersElement\" *ngIf=\"singleElement.gender\">\n        <fa class=\"card-img-top\" name=\"user\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleElement.name || defaultValue}}</h5>\n          <a routerLink=\"/character/{{singleElement.url.split('/').pop()}}\" class=\"btn btn-primary\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <!-- This is for Go to Top Button-->\n    <go-top-button [animate]=\"true\"\n    [speed]=\"50\"\n    [acceleration]=\"50\"\n    [scrollDistance]=\"300\"\n    [styles]=\"{\n       'border-radius': '25%',\n       'color': 'grey',\n       'background-color': 'black',\n       'border': '5px solid',\n       'line-height': '20px'\n    }\">\n    <fa name=\"arrow-up\"></fa>\n  </go-top-button>\n  </div>\n</section>>"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_service__ = __webpack_require__("./src/app/got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing the service

var AllComponent = /** @class */ (function () {
    function AllComponent(myService) {
        this.myService = myService;
        this.allData = [];
        this.allBooks = [];
        this.defaultValue = "None";
        this.sortOrder = false;
        this.filterName = { name: '' };
    }
    AllComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var temp = this_1.myService.myGet(0, i).subscribe(function (data) {
                temp = data;
                _this.allData = _this.allData.concat(temp);
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (var i = 0; i < 9; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            var temp = this_2.myService.myGet(2, i).subscribe(function (data) {
                temp = data;
                _this.allData = _this.allData.concat(temp);
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        };
        var this_2 = this;
        for (var i = 0; i < 44; i++) {
            _loop_2(i);
        }
        this.allBooks = this.myService.myGet(1, 1).subscribe(//Fetching all the Books of Game of Thrones
        function (//Fetching all the Books of Game of Thrones
            data) {
            _this.allBooks = data;
            _this.allData = _this.allData.concat(_this.allBooks);
        }, function (error) {
            console.log("Some Error Occured");
            console.log(error.errorMessage);
        });
    };
    AllComponent.prototype.changeOrder = function () {
        this.sortOrder = !this.sortOrder;
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            template: __webpack_require__("./src/app/all/all.component.html"),
            styles: [__webpack_require__("./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color:black;\r\n}\r\nul li a{\r\n    color: white;\r\n}\r\nul li a:hover{\r\n    color: white;\r\n    opacity: 0.5;\r\n}\r\nul li a:focus{\r\n    color: white;\r\n    opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\">\n  <a class=\"navbar-brand topnav\" href=\"/\">\n    <img src=\"assets/logo.png\" style=\"width: 150px;max-width: 100%; height: 50px; margin-bottom: 0px;\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" style=\"background-color: white\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n    <ul class=\"navbar-nav nav navbar-right\">\n      \n      <li>\n        <a [routerLink]='[\"/all\"]' class=\" nav-link \">\n          <img src=\"assets/all.png\" style=\"width: 20px;max-width: 100%; height: 20px; margin-bottom: 0px; padding-right:1px\" />All</a>\n      </li>\n      <li>\n        <a [routerLink]='[\"/books\"]' class=\" nav-link\">\n          <img src=\"assets/books.png\" style=\"width: 20px;max-width: 100%; height: 20px; margin-bottom: 0px; padding-right:1px\" />Books</a>\n      </li>\n      <li>\n        <a [routerLink]='[\"/characters\"]' class=\" nav-link\">\n          <img src=\"assets/people.png\" style=\"width: 20px;max-width: 100%; height:20px; margin-bottom: 0px; padding-right:1px\" />Characters</a>\n      </li>\n      <li>\n        <a [routerLink]='[\"houses\"]' class=\" nav-link\">\n          <img src=\"assets/houses.png\" style=\"width: 20px;max-width: 100%; height: 20px; margin-bottom: 0px; padding-right:1px\" />Houses</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_books_component__ = __webpack_require__("./src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__characters_characters_component__ = __webpack_require__("./src/app/characters/characters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__houses_houses_component__ = __webpack_require__("./src/app/houses/houses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__house_house_component__ = __webpack_require__("./src/app/house/house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__character_character_component__ = __webpack_require__("./src/app/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_go_top_button__ = __webpack_require__("./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__order_by_pipe__ = __webpack_require__("./src/app/order-by.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_filter_pipe__ = __webpack_require__("./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//To use ngModel importing the required files.

//importing location service for back button functionality.

//router module used for setting up the application level routes.









//importing the fontawesome module




//import statement for Go to Top button


//import for custom pipe

//import files for filter pipe

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__all_all_component__["a" /* AllComponent */],
                __WEBPACK_IMPORTED_MODULE_8__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_9__characters_characters_component__["a" /* CharactersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__houses_houses_component__["a" /* HousesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_15__house_house_component__["a" /* HouseComponent */],
                __WEBPACK_IMPORTED_MODULE_16__character_character_component__["a" /* CharacterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__order_by_pipe__["a" /* OrderByPipe */] //declaring pipe in imports array for accessing through out the application.
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_17_ng2_go_top_button__["a" /* GoTopButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
                    { path: 'all', component: __WEBPACK_IMPORTED_MODULE_7__all_all_component__["a" /* AllComponent */] },
                    { path: 'houses', component: __WEBPACK_IMPORTED_MODULE_10__houses_houses_component__["a" /* HousesComponent */] },
                    { path: 'house/:houseId', component: __WEBPACK_IMPORTED_MODULE_15__house_house_component__["a" /* HouseComponent */] },
                    { path: 'characters', component: __WEBPACK_IMPORTED_MODULE_9__characters_characters_component__["a" /* CharactersComponent */] },
                    { path: 'character/:characterId', component: __WEBPACK_IMPORTED_MODULE_16__character_character_component__["a" /* CharacterComponent */] },
                    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_8__books_books_component__["a" /* BooksComponent */] },
                    { path: 'book/:bookId', component: __WEBPACK_IMPORTED_MODULE_14__book_book_component__["a" /* BookComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-outline-warning:hover{\r\n    color: white;\r\n}\r\n.btn-outline-warning{\r\n    margin-top: 2%;\r\n}\r\nfa{\r\n    color: red;\r\n}\r\n.text-color{\r\n    font-size: 1.2em;\r\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" style=\"margin: 5%\">\n\n  <div class=\"row\">\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n      <div style=\"text-align: center\">\n        <fa class=\"card-img-top\" name=\"book\" size=\"2x\"></fa>\n        <h2>{{singleBook.name || defaultValue}}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"row\" >-->\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"card-body\">\n        <h3 style=\"color: Black\">Publisher:</h3>\n        <p class=\"text-color\">{{singleBook.publisher || defaultValue}}</p>\n        <div *ngFor=\"let author of singleBook.authors\">\n          <h3 class=\"card-subtitle mb-2 \"> Author:</h3>\n          <p class=\"text-color\">{{author || defaultValue}}</p>\n        </div>\n        <h3>Country:</h3>\n        <p class=\"text-color\">{{singleBook.country || defaultValue}}</p>\n        <h3>Pages:</h3>\n        <p class=\"text-color\">{{singleBook.numberOfPages || defaultValue}}</p>\n        <h3>ISBN:</h3>\n        <p class=\"text-color\">{{singleBook.isbn || defaultValue}}</p>\n        <h3>Media Type:</h3>\n        <p class=\"text-color\">{{singleBook.mediaType || defaultValue}}</p>\n        <h3>Released:</h3>\n        <p class=\"text-color\">{{((singleBook.released) | date: 'medium' )|| defaultValue}}</p>\n      </div>\n    </div>\n\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n        <h3>Characters & POV's</h3>\n      <!-- use of accordion for best effect-->\n      <div class=\"card-body\" id=\"accordion\">\n        <div class=\"card\">\n          <div class=\"card-header bg-success\" id=\"headingOne\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-success btn-block\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Characters\n              </button>\n            </h5>\n          </div>\n\n          <!-- Division displaying Characters in book -->\n          <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n              <div *ngFor=\"let singleCharacter of singleBook.characters\">\n                <div class=\"card\">\n                  <div class=\"row\">\n                    <div class=\"card-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <a routerLink=\"/character/{{singleCharacter.split('/').pop()}}\">\n                        <p style=\"text-align: center; color: black\">Character {{singleCharacter.split('/').pop()}}</p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Second item in Accordion -->\n        <div class=\"card\">\n          <div class=\"card-header bg-danger\" id=\"headingTwo\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-danger btn-block collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\n                aria-controls=\"collapseOne\">\n                POV Characters\n              </button>\n            </h5>\n          </div>\n\n          <!-- Division displaying POV Characters of book -->\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n              <div *ngFor=\"let singleCharacter of singleBook.povCharacters\">\n                <div class=\"card\">\n                  <div class=\"row\">\n                    <div class=\"card-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <a routerLink=\"/character/{{singleCharacter.split('/').pop()}}\">\n                        <p style=\"text-align: center; color: black\">POV Character {{singleCharacter.split('/').pop()}}</p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <button class=\"btn btn-block btn-outline-warning offset-4 col-4\" (click)=\"goBack()\">Go Back</button> \n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing files for redirecting from one component to other



var BookComponent = /** @class */ (function () {
    function BookComponent(_route, router, myservice, location) {
        this._route = _route;
        this.router = router;
        this.myservice = myservice;
        this.location = location;
        this.defaultValue = "None";
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        var bookId = this._route.snapshot.paramMap.get('bookId');
        this.singleBook = this.myservice.getSingle(1, bookId).subscribe(function (data) {
            _this.singleBook = data;
        }, function (error) {
            console.log("Some Error Occured");
            console.log(error.errorMessage);
        });
    };
    //goBack Method
    BookComponent.prototype.goBack = function () {
        this.location.back();
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 2%;\r\n    border: solid;\r\n    border-color: red;\r\n    text-align: center;\r\n}\r\nfa{\r\n    color: red;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }\r\n"

/***/ }),

/***/ "./src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is Books Component view-->\n\n<section class=\"container-fluid\">\n\n  <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n    <div class=\"form-group  col-md-6\">\n      <input type=\"text\" class=\"form-control btn-outline-danger\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n    </div>\n    <div class=\"form-group col-md-6\">\n      <button type=\"button\" class=\"btn btn-block btn-outline-danger\" (click)=\"changeOrder()\"  name=\"button\">\n        Change Sort Order\n      </button>\n    </div>\n  </form>\n\n\n  <div class=\"row\" *ngIf=\"allBooks.length > 0\">\n    <div class=\"col-md-4\" *ngFor=\"let singleBook of allBooks | orderBy: sortOrder| filterBy: filterName\">\n      <div class=\"card\">\n        <fa class=\"card-img-top\" name=\"book\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleBook.name || defaultValue}}</h5>\n          <a routerLink=\"/book/{{singleBook.url.split('/').pop()}}\" class=\"btn btn-danger\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_service__ = __webpack_require__("./src/app/got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing the service

var BooksComponent = /** @class */ (function () {
    function BooksComponent(myService) {
        this.myService = myService;
        this.defaultValue = "None";
        this.sortOrder = false;
        this.filterName = { name: '' };
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allBooks = this.myService.myGet(1, 1).subscribe(function (data) {
            _this.allBooks = data;
        }, function (error) {
            console.log("Some Error Occured");
            console.log(error.errorMessage);
        });
    };
    BooksComponent.prototype.changeOrder = function () {
        this.sortOrder = !this.sortOrder;
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-books',
            template: __webpack_require__("./src/app/books/books.component.html"),
            styles: [__webpack_require__("./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-outline-primary:hover{\r\n    color: white;\r\n}\r\n.btn-outline-primary{\r\n    margin-top: 2%;\r\n}\r\nfa{\r\n    color: blue;\r\n}\r\n.text-color{\r\n    font-size: 1.2em;\r\n}"

/***/ }),

/***/ "./src/app/character/character.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This single character view -->\n\n<section class=\"container\" style=\"margin: 5%\">\n\n  <div class=\"row\">\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\n      <div style=\"text-align: center\">\n        <fa class=\"card-img-top\" name=\"user\" size=\"2x\"></fa>\n        <h2>{{singleCharacter.name || defaultValue}}</h2>\n      </div>\n    </div>\n\n    <!-- <div class=\"row\" >-->\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\" *ngIf=\"singleCharacter.playedBy\">Played by:</h3>\n        <p class=\"text-color\" *ngIf=\"singleCharacter.playedBy\">{{singleCharacter.playedBy[0] || defaultValue}}<br></p>\n        <h3 class=\"card-subtitle mb-2\"> Aliases:</h3>\n        <span *ngFor=\"let alias of singleCharacter.aliases\" class=\"text-color\">\n          {{alias || defaultValue}}\n        </span><br><br>\n        <h3 class=\"card-subtitle mb-2\"> Title:</h3>\n        <span *ngFor=\"let title of singleCharacter.titles\" class=\"text-color\">\n          {{title || defaultValue}}\n        </span><br><br>\n        <h3>Culture: </h3>\n        <p class=\"text-color\">{{singleCharacter.culture || defaultValue}}</p>\n        <h3>Gender: </h3>\n        <p class=\"text-color\">{{singleCharacter.gender || defaultValue}}</p>\n        <h3>Born: </h3>\n        <p class=\"text-color\">{{singleCharacter.born || defaultValue}}</p>\n        <h3>Died: </h3>\n        <p class=\"text-color\">{{singleCharacter.died || defaultValue}}</p>\n      </div>\n    </div>\n\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"card-body\">\n        <h3 class=\"card-subtitle mb-2 \" *ngIf=\"singleCharacter.allegiances\">Allegiances:</h3>\n        <span *ngFor=\"let allegiance of singleCharacter.allegiances\">\n          <a class=\"btn btn-success\" routerLink=\"/house/{{allegiance.split('/').pop()}}\">\n            House {{allegiance.split('/').pop() || defaultValue}}\n          </a>\n        </span><br><br>\n        <h3 class=\"card-subtitle mb-2\">Books:</h3>\n        <span *ngFor=\"let book of singleCharacter.books\">\n          <a class=\"btn btn-danger\" routerLink=\"/book/{{book.split('/').pop()}}\" style=\"margin: 1%\">\n            Book {{book.split('/').pop() || defaultValue}}\n          </a>\n        </span><br><br>\n        <div>\n          <h3>Father: </h3>\n          <p *ngIf=\"singleCharacter.father\">\n            <a class=\"btn btn-primary\" routerLink=\"/character/{{singleCharacter.father.split('/').pop()}}\">Character {{singleCharacter.father.split('/').pop()}}</a>\n          </p>\n          <p class=\"text-color\" *ngIf=\"!singleCharacter.father\">{{defaultValue}}</p>\n          <h3>Mother: </h3>\n          <p *ngIf=\"singleCharacter.mother\">\n            <a class=\"btn btn-primary\" routerLink=\"/character/{{singleCharacter.mother.split('/').pop()}}\">Character {{singleCharacter.mother.split('/').pop() }}</a>\n          </p>\n          <p class=\"text-color\" *ngIf=\"!singleCharacter.mother\">{{defaultValue}}</p>\n          <h3>Spouse: </h3>\n          <p *ngIf=\"singleCharacter.spouse\">\n            <a class=\"btn btn-primary\" routerLink=\"/character/{{singleCharacter.spouse.split('/').pop()}}\">Character {{singleCharacter.spouse.split('/').pop()}}</a>\n          </p>\n          <p class=\"text-color\" *ngIf=\"!singleCharacter.spouse\">{{defaultValue}}</p>\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"singleCharacter.tvSeries || singleCharacter.povBooks\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Seasons and POV Books</h2>\n        <h3 *ngIf=\"singleCharacter.tvSeries\">Season: </h3>\n        <span class=\"text-color\" *ngFor=\"let season of singleCharacter.tvSeries\">\n          Season {{season || defaultValue}}\n        </span><br><br>\n        <h3 class=\"card-subtitle mb-2\" *ngIf=\"singleCharacter.povBooks\"> POV Book: </h3>\n        <span *ngFor=\"let povBook of singleCharacter.povBooks\">\n          <a class=\"btn btn-danger\" routerLink=\"/book/{{povBook.split(' / ').pop()}}\">\n            POV Book {{povBook.split('/').pop() || defaultValue}}\n          </a>\n        </span>\n      </div>\n\n    </div>\n    <button class=\"btn btn-block btn-outline-primary offset-4 col-4\" (click)=\"goBack()\">Go Back</button>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing files for redirecting from one component to other



var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(_route, router, myservice, location) {
        this._route = _route;
        this.router = router;
        this.myservice = myservice;
        this.location = location;
        this.defaultValue = "None";
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function () {
            var characterId = _this._route.snapshot.paramMap.get('characterId');
            _this.singleCharacter = _this.myservice.getSingle(2, characterId).subscribe(function (data) {
                _this.singleCharacter = data;
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        });
    };
    //goBack Method
    CharacterComponent.prototype.goBack = function () {
        this.location.back();
    };
    CharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-character',
            template: __webpack_require__("./src/app/character/character.component.html"),
            styles: [__webpack_require__("./src/app/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/characters/characters.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 2%;\r\n    border: solid;\r\n    border-color: blue;\r\n    text-align: center;\r\n}\r\nfa{\r\n    color: blue;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }\r\n\r\n"

/***/ }),

/***/ "./src/app/characters/characters.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is Houses Component view-->\n\n<section class=\"container-fluid\">\n\n  <div class=\"row\">\n      <div class=\"alert alert-warning clo-12\" role=\"alert\">\n          Here the Characters who don't have any name are displayed with \"NONE\" as name and they come first in alphabetical order.\n        </div>\n  </div>\n\n  <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n    <div class=\"form-group  col-md-6\">\n      <input type=\"text\" class=\"form-control btn-outline-primary\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n    </div>\n    <div class=\"form-group col-md-6\">\n      <button class=\"btn btn-block btn-outline-primary\" (click)=\"changeOrder()\"  name=\"button\">\n        Change Sort Order\n      </button>\n    </div>\n  </form>\n\n  <div class=\"row\" *ngIf=\"allCharacters.length > 0\">\n    <div class=\"col-md-4\" *ngFor=\"let singleCharacter of allCharacters | orderBy: sortOrder |filterBy: filterName\">\n      <div class=\"card\">\n        <fa class=\"card-img-top\" name=\"user\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleCharacter.name || defaultValue}}</h5>\n          <a routerLink=\"/character/{{singleCharacter.url.split('/').pop()}}\" class=\"btn btn-primary\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <!-- This is for Go to Top Button-->\n    <go-top-button [animate]=\"true\"\n    [speed]=\"50\"\n    [acceleration]=\"50\"\n    [scrollDistance]=\"300\"\n    [styles]=\"{\n       'border-radius': '25%',\n       'color': 'grey',\n       'background-color': 'black',\n       'border': '5px solid',\n       'line-height': '20px'\n    }\">\n    <fa name=\"arrow-up\"></fa>\n  </go-top-button>\n  \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_service__ = __webpack_require__("./src/app/got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing the service

var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(myService) {
        this.myService = myService;
        this.allCharacters = [];
        this.defaultValue = "None";
        this.filterName = { name: '' };
        this.sortOrder = false;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var temp = this_1.myService.myGet(2, i).subscribe(function (data) {
                temp = data;
                _this.allCharacters = _this.allCharacters.concat(temp);
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (var i = 1; i < 45; i++) {
            _loop_1(i);
        }
    };
    CharactersComponent.prototype.changeOrder = function () {
        this.sortOrder = !this.sortOrder;
    };
    CharactersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-characters',
            template: __webpack_require__("./src/app/characters/characters.component.html"),
            styles: [__webpack_require__("./src/app/characters/characters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/got.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Importing the required files for http services.



var GotService = /** @class */ (function () {
    function GotService(_http) {
        this._http = _http;
        this.baseUrl = ["https://www.anapioficeandfire.com/api/houses?page=", "https://www.anapioficeandfire.com/api/books?page=", "https://www.anapioficeandfire.com/api/characters?page="];
        this.singleUrl = ["https://www.anapioficeandfire.com/api/houses/", "https://www.anapioficeandfire.com/api/books/", "https://www.anapioficeandfire.com/api/characters/"];
    }
    GotService.prototype.myGet = function (url, pageNo) {
        var data = this._http.get(this.baseUrl[url] + pageNo + "&pageSize=50");
        return data;
    };
    GotService.prototype.getSingle = function (url, id) {
        var data = this._http.get(this.singleUrl[url] + id);
        return data;
    };
    GotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GotService);
    return GotService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".types{\r\n    text-align: center;\r\n  }\r\n\r\n  .types a{\r\n      text-decoration: none;\r\n      color: black;\r\n  }\r\n\r\n  .grow:hover { -webkit-transform: scale(1.25); transform: scale(1.25);}\r\n\r\n  .img-size{\r\n\r\n    height: 150px;\r\n    width: 150px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Basic view of Game of thrones App -->\n<section class=\"container\" style=\"margin: 5%; padding: 5%; float: right \">\n\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/all\"]'>\n        <img src=\"assets/all.png\" class=\"grow\" />\n        <h3>All</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/houses\"]'>\n        <img src=\"assets/houses.png\" class=\"grow\" />\n        <h3>Houses</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/characters\"]'>\n        <img src=\"assets/people.png\" class=\"grow\" />\n        <h3>Characters</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/books\"]'>\n        <img src=\"assets/books.png\" class=\"grow\" />\n        <h3>Books</h3>\n      </a>\n    </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 types\">\n      <h3>Important Houses Of Game of Thrones</h3>\n      <br>\n      <br>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/378\"]'>\n        <img src=\"assets/targereyan.jpeg\" class=\"grow img-size\" />\n        <h3>Targereyan</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/229\"]'>\n        <img src=\"assets/lannister.jpeg\" class=\"grow img-size\" />\n        <h3>Lannister</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/362\"]'>\n        <img src=\"assets/stark.jpeg\" class=\"grow img-size\" />\n        <h3>Stark</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/16\"]'>\n        <img src=\"assets/baratheon.png\" class=\"grow img-size\" />\n        <h3>Baratheon</h3>\n      </a>\n      <br>\n      <br>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/398\"]'>\n        <img src=\"assets/tyrell.png\" class=\"grow img-size\" />\n        <h3>Tyrell</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/169\"]'>\n        <img src=\"assets/greyjoy.jpeg\" class=\"grow img-size\" />\n        <h3>GreyJoy</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/7\"]'>\n        <img src=\"assets/arryn.png\" class=\"grow img-size\" />\n        <h3>Arryn</h3>\n      </a>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 types\">\n      <a [routerLink]='[\"/house/11\"]'>\n        <img src=\"assets/baelish.jpeg\" class=\"grow img-size\" />\n        <h3>Baelish</h3>\n      </a>\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house/house.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-outline-success:hover{\r\n    color: white;\r\n}\r\n.btn-outline-success{\r\n    margin-top: 2%;\r\n}\r\nfa{\r\n    color: green;\r\n}\r\n.text-color{\r\n    font-size: 1.2em;\r\n}"

/***/ }),

/***/ "./src/app/house/house.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This is single house view.-->\n\n<section class=\"container\" style=\"margin: 5%\" *ngIf=\"singleHouse\">\n\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"text-align: center;color:black\">\n      <fa class=\"card-img-top\" name=\"university\" size=\"2x\"></fa>\n      <h2>{{singleHouse.name || defaultValue}}</h2>\n    </div>\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">Region:</h3>\n        <p class=\"text-color\">{{singleHouse.region || defaultValue}}</p>\n        <h3 class=\"card-subtitle mb-2\">Coat Of Arms:</h3>\n        <p class=\"text-color\">{{singleHouse.coatOfArms || defaultValue}}</p>\n        <h3>Words:</h3>\n        <p class=\"text-color\">{{singleHouse.words || defaultValue}}</p>\n        <h3 *ngIf=\"singleHouse.titles\">Titles:</h3>\n        <p class=\"text-color\">\n          <span class=\"card-text\" *ngFor=\"let title of singleHouse.titles\"> {{title || defaultValue}}</span>\n        </p>\n        <h3>Seats:</h3>\n        <p class=\"text-color\">\n          <span class=\"card-text\" *ngFor=\"let seat of singleHouse.seats\"> {{seat || defaultValue}}</span>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\" *ngIf=\"singleHouse.currentLord !== ''\">Current Lord:</h3>\n        <p *ngIf=\"singleHouse.currentLord !== ''\">\n          <a class=\"btn btn-primary\" routerLink=\"/character/{{singleHouse.currentLord.split('/').pop()}}\">\n            Character {{singleHouse.currentLord.split('/').pop()}}\n          </a>\n        </p>\n        <h3 class=\"card-subtitle\">Over Lord:</h3>\n        <p>\n          <a class=\"btn btn-success\" routerLink=\"/house/{{singleHouse.overlord.split('/').pop()}}\">\n            House {{singleHouse.overlord.split('/').pop()}}\n          </a>\n        </p>\n        <h3>Heir:</h3>\n        <p>\n          <a class=\"btn btn-primary\" routerLink=\"/character/{{singleHouse.heir.split('/').pop()}}\">Character {{ singleHouse.heir.split('/').pop() || defaultValue}}</a>\n        </p>\n        <h3>Founded:</h3>\n        <p class=\"text-color\">{{singleHouse.founded || defaultValue}}</p>\n        <h3>Founder:</h3>\n        <p>\n          <a class=\"btn btn-primary\" routerLink=\"/character/{{singleHouse.founder.split('/').pop()}}\">Character {{singleHouse.founder.split('/').pop() || defaultValue}}</a>\n        </p>\n      </div>\n    </div>\n\n    <div class=\"card col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h3 *ngIf=\"singleHouse.swornMembers.length || singleHouse.cadetBranches.length\">Sworn Members & Cadet Branches</h3>\n      \n      <!-- use of accordion for best effect-->\n      <div class=\"card-body\" id=\"accordion\" *ngIf=\"singleHouse.swornMembers.length || singleHouse.cadetBranches.length\">\n        <div class=\"card\">\n          <div class=\"card-header bg-success\" id=\"headingOne\" *ngIf=\"singleHouse.swornMembers.length\" >\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-success btn-block\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Sworn Members\n              </button>\n            </h5>\n          </div>\n\n          <!-- Division displaying Sworn Members -->\n          <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n            <div class=\"card-body\" *ngIf=\"singleHouse.swornMembers.length\">\n              <div *ngFor=\"let swornMember of singleHouse.swornMembers\">\n                <div class=\"card\">\n                  <div class=\"row\">\n                    <div class=\"card-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <a routerLink=\"/character/{{swornMember.split('/').pop()}}\">\n                        <p style=\"text-align: center; color: black\">Character {{swornMember.split('/').pop() || defaultValue }}</p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Second item in Accordion -->\n        <div class=\"card\">\n          <div class=\"card-header bg-warning\" id=\"headingTwo\" *ngIf=\"singleHouse.cadetBranches.length\">\n            <h5 class=\"mb-0\">\n              <button class=\"btn btn-warning btn-block collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\n                aria-controls=\"collapseOne\">\n                Cadet Branches\n              </button>\n            </h5>\n          </div>\n\n          <!-- Division displaying Cadet Branches -->\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n            <div class=\"card-body\" *ngIf=\"singleHouse.cadetBranches.length\">\n              <div *ngFor=\"let cadetBranch of singleHouse.cadetBranches\">\n                <div class=\"card\">\n                  <div class=\"row\">\n                    <div class=\"card-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                      <a routerLink=\"/character/{{cadetBranch.split('/').pop()}}\">\n                        <p style=\"text-align: center; color: black\">POV Character {{cadetBranch.split('/').pop() || defaultValue}}</p>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <h3>Ancestral Weapons:</h3>\n      <p class=\"text-color\">\n        <span *ngFor=\"let weapon of singleHouse.ancestralWeapons\">\n          {{weapon || defaultValue}}\n        </span>\n      </p>\n      <h3>Died Out:</h3>\n      <p class=\"text-color\">{{singleHouse.diedOut || defaultValue}}</p>\n    </div>\n\n    <button class=\"btn btn-block btn-outline-success offset-4 col-4\" (click)=\"goBack()\">Go Back</button>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing files for redirecting from one component to other



var HouseComponent = /** @class */ (function () {
    function HouseComponent(_route, router, myservice, location) {
        this._route = _route;
        this.router = router;
        this.myservice = myservice;
        this.location = location;
        this.defaultValue = "None";
    }
    HouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function () {
            var houseId = _this._route.snapshot.paramMap.get('houseId');
            _this.singleHouse = _this.myservice.getSingle(0, houseId).subscribe(function (data) {
                _this.singleHouse = data;
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        });
    };
    //goBack Method
    HouseComponent.prototype.goBack = function () {
        this.location.back();
    };
    HouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house',
            template: __webpack_require__("./src/app/house/house.component.html"),
            styles: [__webpack_require__("./src/app/house/house.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/houses/houses.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n    margin-bottom: 2%;\r\n    border: solid;\r\n    border-color: green;\r\n    text-align: center;\r\n}\r\nfa{\r\n    color: green;\r\n}\r\n.card:hover { -webkit-box-shadow: 4px 4px rgba(0, 0, 0, .5); box-shadow: 4px 4px rgba(0, 0, 0, .5); }\r\n"

/***/ }),

/***/ "./src/app/houses/houses.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- This is Houses Component view-->\n\n<section class=\"container-fluid\">\n\n\n\n  <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n    <div class=\"form-group  col-md-6\">\n      <input type=\"text\" class=\"form-control btn-outline-success\" name=\"filterName\" [(ngModel)]=\"filterName.name\" placeholder=\"Search by Name\" />\n    </div>\n    <div class=\"form-group col-md-6\">\n      <button class=\"btn btn-block btn-outline-success\" (click)=\"changeOrder()\"  name=\"button\">\n        Change Sort Order\n      </button>\n    </div>\n  </form>\n\n  <!--    <button class=\"col-sm-4 btn btn-primary\" (click)=\"changeOrder()\">Change Order</button>-->\n\n  <div class=\"row\" *ngIf=\"allHouses.length > 0\">\n    <div class=\"col-md-4\" *ngFor=\"let singleHouse of allHouses | orderBy:sortOrder | filterBy: filterName\">\n      <div class=\"card\">\n        <fa class=\"card-img-top\" name=\"university\" size=\"5x\"></fa>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{singleHouse.name || defaultValue}}</h5>\n          <a routerLink=\"/house/{{singleHouse.url.split('/').pop()}}\" class=\"btn btn-success\">See Details</a>\n        </div>\n      </div>\n    </div>\n\n    <!-- This is for Go to Top Button-->\n    <go-top-button [animate]=\"true\"\n    [speed]=\"50\"\n    [acceleration]=\"50\"\n    [scrollDistance]=\"300\"\n    [styles]=\"{\n       'border-radius': '25%',\n       'color': 'grey',\n       'background-color': 'black',\n       'border': '5px solid',\n       'line-height': '20px'\n    }\">\n    <fa name=\"arrow-up\"></fa>\n  </go-top-button>\n  </div>\n</section>>"

/***/ }),

/***/ "./src/app/houses/houses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HousesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_service__ = __webpack_require__("./src/app/got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing the service

var HousesComponent = /** @class */ (function () {
    function HousesComponent(myService) {
        this.myService = myService;
        this.allHouses = [];
        this.defaultValue = "None";
        this.sortOrder = false;
        this.filterName = { name: '' };
    }
    HousesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var temp = this_1.myService.myGet(0, i).subscribe(function (data) {
                temp = data;
                // console.log(data);
                _this.allHouses = _this.allHouses.concat(temp);
                //console.log(this.allHouses);
            }, function (error) {
                console.log("Some Error Occured");
                console.log(error.errorMessage);
            });
        };
        var this_1 = this;
        for (var i = 1; i < 10; i++) {
            _loop_1(i);
        }
    };
    HousesComponent.prototype.changeOrder = function () {
        this.sortOrder = !this.sortOrder;
    };
    HousesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-houses',
            template: __webpack_require__("./src/app/houses/houses.component.html"),
            styles: [__webpack_require__("./src/app/houses/houses.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */]])
    ], HousesComponent);
    return HousesComponent;
}());



/***/ }),

/***/ "./src/app/order-by.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//importing the required interface for defining the custom pipes

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, orderType) {
        value.sort(function (a, b) {
            var temp1 = a.name;
            var temp2 = b.name;
            if (temp1 == undefined && temp2 == undefined)
                return 0; //cheching for undefined values.
            if (temp1 == undefined && temp2 != undefined)
                return orderType ? 1 : -1;
            if (temp1 != undefined && temp2 == undefined)
                return orderType ? -1 : 1;
            if (temp1 == temp2)
                return 0; //equality check
            //checking for the lesser or greater value and arranging accordingly.
            return orderType ? (temp1.toString().toLowerCase() > temp2.toString().toLowerCase() ? -1 : 1) : (temp2.toString().toLowerCase() > temp1.toString().toLowerCase() ? -1 : 1);
        });
        return value; //finally returning the sorted array to the view for display.
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map