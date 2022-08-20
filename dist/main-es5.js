function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation */
    "./src/app/animation.ts");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.hasAppear = false;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAppear",
        value: function onAppear() {
          console.log("has appeared");
          this.hasAppear = true;
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 10,
      vars: 1,
      consts: [["id", "about-container", 1, "container", "about"], [1, "about-me-info"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ABOUT ME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I am a PhD student from ONERA. I am working with Complex-Valued Neural Networks for Radar Applications. Half my scholarship is payed by the DGA (Direction G\xE9n\xE9rale de l'Armement).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I have a degree in Electronics Engineering from ITBA, one of the most prestigious engineering schools in my country.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I also have the pleasure of studying at Ecole Polytechnique, one of the best Grandes Ecole's in France and working in Cisco Systems, one of America's biggest multinational technology enterprise based in Silicon Valley.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);
        }
      },
      styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    color: #ffffff;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-weight: 100;\r\n}\r\n\r\n#about-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.about-me-info[_ngcontent-%COMP%] {\r\n    max-width: 900px;\r\n    background-color: #45a29e;\r\n    box-shadow: 0 0 1.2rem rgba(102,252,241,.5);\r\n    padding: 50px;\r\n    position: relative;\r\n    \r\n    left: 50%;\r\n    right: 50%;\r\n    transform: translateX(-50%);\r\n    z-index: 1;\r\n}\r\n\r\n.about-me-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: min(1.3rem, 4vw);\r\n    text-align: justify;\r\n    color: #ffffff;\r\n}\r\n\r\n.about-me-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2), .about-me-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDJEQUEyRDtJQUMzRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuI2Fib3V0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWJvdXQtbWUtaW5mbyB7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxLjJyZW0gcmdiYSgxMDIsMjUyLDI0MSwuNSk7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyp0b3A6IC03MHB4OyovXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmFib3V0LW1lLWluZm8gcCB7XHJcbiAgICBmb250LXNpemU6IG1pbigxLjNyZW0sIDR2dyk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5hYm91dC1tZS1pbmZvIHA6bnRoLWNoaWxkKDIpLFxyXG4uYWJvdXQtbWUtaW5mbyBwOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"],
      data: {
        animation: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css'],
          animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animation.ts":
  /*!******************************!*\
    !*** ./src/app/animation.ts ***!
    \******************************/

  /*! exports provided: Animations */

  /***/
  function srcAppAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Animations", function () {
      return Animations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var Animations = {
      Triggers: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('EnterFromLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 500ms ease-in')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('EnterFromRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 500ms ease-in')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("zoom", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.3)',
        transformOrigin: 'left bottom',
        opacity: '0'
      })),, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("2000ms cubic-bezier(0.25,1,.25,1)"))])]
    };
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/timeline"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggler').on("click", function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggleClass("open");
            jquery__WEBPACK_IMPORTED_MODULE_1__('.top-nav').toggleClass('open');
          });
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          jquery__WEBPACK_IMPORTED_MODULE_1__('.menu-toggler').toggleClass("open");
          jquery__WEBPACK_IMPORTED_MODULE_1__('.top-nav').toggleClass('open');
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          jquery__WEBPACK_IMPORTED_MODULE_1__("html, body").animate({
            scrollTop: 0
          }, "slow");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 25,
      vars: 4,
      consts: [[1, "menu-toggler"], [1, "bar", "half", "start"], [1, "bar"], [1, "bar", "half", "end"], [1, "top-nav"], [1, "nav-list"], [1, "nav-link", 3, "routerLink", "click"], [1, "container"], [1, "copyright"], [1, "far", "fa-copyright"], [1, "fab", "fa-angular"], ["id", "up", 1, "up"], [1, "fas", "fa-chevron-up", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_8_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() {
            return ctx.closeNav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Timeline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ": 2020 J. Agustin BARRACHINA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ": Powered by Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_23_listener() {
            return ctx.scrollToTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #ffffff\r\n}\r\n\r\n\r\n\r\n.top-nav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: fixed;\r\n    top: -100vh;\r\n    z-index: 50;\r\n    background-color: #0B0C10;\r\n    border-bottom-right-radius: 100%;\r\n    border-bottom-left-radius: 100%;\r\n    transition: all 650ms cubic-bezier(1, 0, 0, 1);\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.nav-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    margin: 0 2rem;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]{\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 5rem;\r\n    padding: 1rem;\r\n    font-weight: 100;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\r\n    background: #b1b1b1;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.top-nav.open[_ngcontent-%COMP%] {\r\n    top: 0;\r\n    border-radius: initial;\r\n}\r\n\r\n.menu-toggler[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: min(5rem, 10vw);\r\n    right: min(5rem, 10vw);\r\n    width: min(5rem, 10vw);\r\n    height: min(4rem, 8vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n    z-index: 1500;\r\n    transition: transform 650ms ease-out;\r\n}\r\n\r\n.menu-toggler.open[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.bar[_ngcontent-%COMP%] {\r\n    background: #c5c6c7;\r\n    width: 100%;\r\n    height: 4px;\r\n    border-radius: .8rem;\r\n}\r\n\r\n.bar.half[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n.bar.start[_ngcontent-%COMP%]{\r\n    transform-origin: right;\r\n    transition: transform 650ms cubic-bezier(0.54, 0.81, 0.57, 0.57);\r\n}\r\n\r\n.open[_ngcontent-%COMP%]   .bar.start[_ngcontent-%COMP%] {\r\n    transform: rotate(-450deg) translateX(.8rem);\r\n}\r\n\r\n.bar.end[_ngcontent-%COMP%]{\r\n    align-self: flex-end;\r\n    transform-origin: left;\r\n    transition: transform 650ms cubic-bezier(0.54, 0.81, 0.57, 0.57);\r\n}\r\n\r\n.open[_ngcontent-%COMP%]   .bar.end[_ngcontent-%COMP%] {\r\n    transform: rotate(-450deg) translateX(-.8rem);\r\n}\r\n\r\n\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    min-height: 150px;\r\n    text-align: center;\r\n    background-color: #0b0c10;\r\n    padding: 2rem 0;\r\n    position: relative;\r\n    bottom: 0;\r\n}\r\n\r\n.up[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 5rem;\r\n    height: 5rem;\r\n    background-color: #0b0c10;\r\n    bottom: 1rem;\r\n    right: 5rem;\r\n    border-radius: 100%;\r\n    display: flex;\r\n    -webkit-animation: pulse 2s infinite;\r\n            animation: pulse 2s infinite;\r\n}\r\n\r\n.up[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #b1b1b1 ;\r\n    font-size: 2rem;\r\n    margin: auto;\r\n}\r\n\r\n.up[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #66fcf1;\r\n    transition: all .5s;\r\n\t\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.99);\r\n    }\r\n    70% {\r\n        box-shadow: 0 0 0 2rem rgba(0, 0, 0, 0);\r\n    }\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.99);\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.99);\r\n    }\r\n    70% {\r\n        box-shadow: 0 0 0 2rem rgba(0, 0, 0, 0);\r\n    }\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.99);\r\n    }\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #45a29e;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .up[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        right: 0;\r\n        margin-top: 50px;\r\n\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBQ0E7OztHQUdHOztBQUVIO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJEQUEyRDtJQUMzRCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLE1BQU07SUFDTixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsZ0VBQWdFO0FBQ3BFOztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBLFNBQVM7O0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7O3FDQUdvQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztBQUNKOztBQVZBO0lBQ0k7UUFDSSx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksdUNBQXVDO0lBQzNDO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLGdCQUFnQjs7SUFFcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLypoZWlnaHQ6IDEwMHZoOyovXHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmZcclxufVxyXG4vKiBcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMjllO1xyXG59ICovXHJcblxyXG4udG9wLW5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEwMHZoO1xyXG4gICAgei1pbmRleDogNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIwQzEwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDY1MG1zIGN1YmljLWJlemllcigxLCAwLCAwLCAxKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIsXHJcbi5uYXYtbGluazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjFiMWIxO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50b3AtbmF2Lm9wZW4ge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IG1pbig1cmVtLCAxMHZ3KTtcclxuICAgIHJpZ2h0OiBtaW4oNXJlbSwgMTB2dyk7XHJcbiAgICB3aWR0aDogbWluKDVyZW0sIDEwdncpO1xyXG4gICAgaGVpZ2h0OiBtaW4oNHJlbSwgOHZ3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTUwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2NTBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlci5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2M1YzZjNztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuOHJlbTtcclxufVxyXG5cclxuLmJhci5oYWxmIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5iYXIuc3RhcnR7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA2NTBtcyBjdWJpYy1iZXppZXIoMC41NCwgMC44MSwgMC41NywgMC41Nyk7XHJcbn1cclxuXHJcbi5vcGVuIC5iYXIuc3RhcnQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1MGRlZykgdHJhbnNsYXRlWCguOHJlbSk7XHJcbn1cclxuXHJcbi5iYXIuZW5ke1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDY1MG1zIGN1YmljLWJlemllcigwLjU0LCAwLjgxLCAwLjU3LCAwLjU3KTtcclxufVxyXG5cclxuLm9wZW4gLmJhci5lbmQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1MGRlZykgdHJhbnNsYXRlWCgtLjhyZW0pO1xyXG59XHJcblxyXG4vKmZvb3RlciovXHJcbmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGMxMDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnVwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGMxMDtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIHJpZ2h0OiA1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG4udXAgaSB7XHJcbiAgICBjb2xvcjogI2IxYjFiMSA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi51cDpob3ZlciBpIHtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuXHQvKmFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZTtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZTtcclxuXHQtbW96LWFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZTtcclxuXHQtby1hbmltYXRpb246IGJvdW5jZSAuM3MgaW5maW5pdGU7ICovXHJcbn1cclxuXHJcbi5jb3B5cmlnaHQgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuOTkpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycmVtIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC45OSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQgcCB7XHJcbiAgICBjb2xvcjogIzQ1YTI5ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnVwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _languages_languages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./languages/languages.component */
    "./src/app/languages/languages.component.ts");
    /* harmony import */


    var _languages_human_human_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./languages/human/human.component */
    "./src/app/languages/human/human.component.ts");
    /* harmony import */


    var _languages_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./languages/computer/computer.component */
    "./src/app/languages/computer/computer.component.ts");
    /* harmony import */


    var _languages_web_web_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./languages/web/web.component */
    "./src/app/languages/web/web.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/timeline/timeline.component.ts");
    /* harmony import */


    var _me_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./me/me.component */
    "./src/app/me/me.component.ts");
    /* harmony import */


    var _timeline_logo_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./timeline/logo-pipe */
    "./src/app/timeline/logo-pipe.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _appear__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./appear */
    "./src/app/appear.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
      }, {
        path: 'timeline',
        component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"]
      }, {
        path: 'timeline/:id',
        component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"]
      }, {
        path: 'computer',
        component: _languages_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__["ComputerComponent"]
      }, {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }], {
        scrollPositionRestoration: 'enabled'
      }) //, { enableTracing: true }
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _languages_languages_component__WEBPACK_IMPORTED_MODULE_10__["LanguagesComponent"], _languages_human_human_component__WEBPACK_IMPORTED_MODULE_11__["HumanComponent"], _languages_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__["ComputerComponent"], _languages_web_web_component__WEBPACK_IMPORTED_MODULE_13__["WebComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"], _me_me_component__WEBPACK_IMPORTED_MODULE_15__["MeComponent"], _timeline_logo_pipe__WEBPACK_IMPORTED_MODULE_16__["LogoPipe"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_18__["ResumeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _appear__WEBPACK_IMPORTED_MODULE_20__["AppearDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _languages_languages_component__WEBPACK_IMPORTED_MODULE_10__["LanguagesComponent"], _languages_human_human_component__WEBPACK_IMPORTED_MODULE_11__["HumanComponent"], _languages_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__["ComputerComponent"], _languages_web_web_component__WEBPACK_IMPORTED_MODULE_13__["WebComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"], _me_me_component__WEBPACK_IMPORTED_MODULE_15__["MeComponent"], _timeline_logo_pipe__WEBPACK_IMPORTED_MODULE_16__["LogoPipe"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_18__["ResumeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _appear__WEBPACK_IMPORTED_MODULE_20__["AppearDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
            path: '',
            component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
          }, {
            path: 'timeline',
            component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"]
          }, {
            path: 'timeline/:id',
            component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"]
          }, {
            path: 'computer',
            component: _languages_computer_computer_component__WEBPACK_IMPORTED_MODULE_12__["ComputerComponent"]
          }, {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
          }], {
            scrollPositionRestoration: 'enabled'
          }) //, { enableTracing: true }
          ],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/appear.ts":
  /*!***************************!*\
    !*** ./src/app/appear.ts ***!
    \***************************/

  /*! exports provided: AppearDirective */

  /***/
  function srcAppAppearTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppearDirective", function () {
      return AppearDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppearDirective = /*#__PURE__*/function () {
      function AppearDirective(element) {
        _classCallCheck(this, AppearDirective);

        this.element = element;
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AppearDirective, [{
        key: "saveDimensions",
        value: function saveDimensions() {
          this.elementPos = this.getOffsetTop(this.element.nativeElement);
          this.elementHeight = this.element.nativeElement.offsetHeight;
          this.windowHeight = window.innerHeight;
        }
      }, {
        key: "saveScrollPos",
        value: function saveScrollPos() {
          this.scrollPos = window.scrollY;
        }
      }, {
        key: "getOffsetTop",
        value: function getOffsetTop(element) {
          var offsetTop = element.offsetTop || 0;

          if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
          }

          return offsetTop;
        }
      }, {
        key: "checkVisibility",
        value: function checkVisibility() {
          if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions();

            if (this.isVisible()) {
              this.unsubscribe();
              this.appear.emit();
            }
          }
        }
      }, {
        key: "isVisible",
        value: function isVisible() {
          return this.scrollPos >= this.elementPos || this.scrollPos + this.windowHeight >= this.elementPos + this.elementHeight;
        }
      }, {
        key: "subscribe",
        value: function subscribe() {
          var _this = this;

          this.subscriptionScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null)).subscribe(function () {
            _this.saveScrollPos();

            _this.checkVisibility();
          });
          this.subscriptionResize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null)).subscribe(function () {
            _this.saveDimensions();

            _this.checkVisibility();
          });
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe();
          }

          if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.subscribe();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe();
        }
      }]);

      return AppearDirective;
    }();

    AppearDirective.ɵfac = function AppearDirective_Factory(t) {
      return new (t || AppearDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    AppearDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AppearDirective,
      selectors: [["", "appear", ""]],
      outputs: {
        appear: "appear"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppearDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appear]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        appear: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 12,
      vars: 0,
      consts: [[1, "container"], [1, "fa", "fa-map-marker"], [1, "far", "fa-envelope"], [1, "fas", "fa-phone"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Paris, France");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " JoseAgustin.Barra@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " +33 07 66 10 78 33");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #66fcf1;\r\n    font-size: 1.5rem;\r\n    margin-bottom: .5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _me_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../me/me.component */
    "./src/app/me/me.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _languages_languages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../languages/languages.component */
    "./src/app/languages/languages.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "assets/images/backgrounds/Burning.webm", "type", "video/webm"], ["src", "assets/images/backgrounds/Burning.mp4", "type", "video/mp4"], ["id", "home", 1, "container"], ["id", "about", 1, "container"], ["id", "languages", 1, "container"], ["id", "resume", 1, "container"], ["id", "contact", 1, "container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-me", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-languages", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-resume", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contact", 7);
        }
      },
      directives: [_me_me_component__WEBPACK_IMPORTED_MODULE_1__["MeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _languages_languages_component__WEBPACK_IMPORTED_MODULE_3__["LanguagesComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\r\n    \r\n    display: flex;\r\n    flex: 0 0 100%;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n#myVideo[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: -100;\r\n  }\r\n\r\n\r\n\r\n#home[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tflex: 0 0 100%;\r\n\t\r\n    \r\n\tpadding: 0 100px 0 100px;\r\n\talign-items: center;\r\n\tflex-direction: row;\r\n\tjustify-content: space-evenly;\r\n    width: 100%;\r\n    height: calc(100vh);\r\n}\r\n\r\n#contact[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    \r\n    flex: 0 0 100%;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#about[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    height: calc(100vh);\r\n}\r\n\r\n#languages[_ngcontent-%COMP%], #resume[_ngcontent-%COMP%], #about[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n#resume[_ngcontent-%COMP%], #about[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    color: #34495e;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-weight: 100;\r\n    \r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFFRjs7R0FFRzs7QUFFSDtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsY0FBYztDQUNkLCtCQUErQjtJQUM1QiwwREFBMEQ7Q0FDN0Qsd0JBQXdCO0NBQ3hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsNkJBQTZCO0lBQzFCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiwwREFBMEQ7SUFDMUQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgLyogc2Nyb2xsLXNuYXAtdHlwZTogeSBwcm94aW1pdHk7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4vKiAuY29udGFpbmVyIHtcclxuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBjZW50ZXI7XHJcbn0gKi9cclxuXHJcbiNob21le1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXg6IDAgMCAxMDAlO1xyXG5cdC8qIGJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyYzM1MzEsICMxMTY0NjYpOyAqL1xyXG5cdHBhZGRpbmc6IDAgMTAwcHggMCAxMDBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbn0gXHJcblxyXG4jY29udGFjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7ICovXHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2Fib3V0IHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyYzM1MzEsICMxMTY0NjYpOyAqL1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxufVxyXG5cclxuI2xhbmd1YWdlcywgI3Jlc3VtZSwgI2Fib3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiAjcmVzdW1lLCAjbGFuZ3VhZ2VzIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxMTY0NjYsICNEMUU4RTIpO1xyXG59ICovXHJcblxyXG4jcmVzdW1lLCAjYWJvdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgY29sb3I6ICMzNDQ5NWU7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/languages/computer/computer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/languages/computer/computer.component.ts ***!
    \**********************************************************/

  /*! exports provided: ComputerComponent */

  /***/
  function srcAppLanguagesComputerComputerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComputerComponent", function () {
      return ComputerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ComputerComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.skillBarAnimate("python");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.skillBarAnimate("matlab");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.skillBarAnimate("cpp");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_46_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.skillBarAnimate("java");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.skillBarAnimate("asm");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ComputerComponent_div_4_Template_div_mouseenter_69_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.skillBarAnimate("vhdl");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Projects:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Complex-Valued Neural Networks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "; ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lip Sync");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Projects: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Steganography");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Projects:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Forbidden Desert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "; ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Resistor Calculator");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "; ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Parallel Image Filtering");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Projects: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Analog Filter Design");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "; ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Compilator");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Projects:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "CYUSB3KIT with SP605");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ComputerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Python");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Matlab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Java");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "C/C++");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Assembly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "VHDL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } //import 'src/app/languages/computer/script.js';


    var ComputerComponent = /*#__PURE__*/function () {
      function ComputerComponent() {
        _classCallCheck(this, ComputerComponent);

        this.url = "assets/js/velocity.js";
      }

      _createClass(ComputerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // console.log(screen.width);
          // Checks if screen size is less than 700 pixels
          var checkScreenSize = function checkScreenSize() {
            return document.body.offsetWidth < 700;
          }; // Create observable from window resize event throttled so only fires every 500ms


          var screenSizeChanged = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(checkScreenSize));
          this.isScreenSmall = screenSizeChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(checkScreenSize()));
          this.subscription = this.isScreenSmall.subscribe(function (data) {
            _this2.mobile = data;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadAnimations();
        }
      }, {
        key: "loadAnimations",
        value: function loadAnimations() {
          var _this3 = this;

          //console.log("Load animations");
          if (!this.mobile) {
            this.loadAPI = new Promise(function (resolve) {
              _this3.loadScript();
            });
          } else {
            this.animateMobileSkillBar();
          }
        }
      }, {
        key: "animateMobileSkillBar",
        value: function animateMobileSkillBar() {
          //$( document ).ready(function() {
          $(".skillbars").each(function () {
            var percent = $(this).attr('data-pr');
            var getPerAsNum = parseInt(percent.split("%")[0], 10);
            var skillLevel;

            if (getPerAsNum < 50) {
              skillLevel = "Basic";
            } else if (getPerAsNum < 70) {
              skillLevel = "Standard";
            } else if (getPerAsNum < 90) {
              skillLevel = "Advanced";
            } else if (getPerAsNum <= 100) {
              skillLevel = "Expert";
            }

            $(".skill-text", this).html(skillLevel + " | " + percent);
            $(".skill-skill", this).css({
              width: '0px'
            });
            $(".skill-skill", this).animate({
              width: percent
            }, 1500);
          }); //});
        }
      }, {
        key: "loadScript",
        value: function loadScript() {
          //console.log("load script");
          var node = document.createElement("script");
          node.src = this.url;
          node.type = "text/javascript";
          node.async = true;
          node.charset = "utf-8";
          document.getElementsByTagName("head")[0].appendChild(node);
        }
      }, {
        key: "skillBarAnimate",
        value: function skillBarAnimate(skill) {
          var percent = $("div.skill-skill-" + skill).attr('data-pr');
          var getPerAsNum = parseInt(percent.split("%")[0], 10);
          var skillLevel;

          if (getPerAsNum < 50) {
            skillLevel = "Basic";
          } else if (getPerAsNum < 70) {
            skillLevel = "Standard";
          } else if (getPerAsNum < 90) {
            skillLevel = "Advanced";
          } else if (getPerAsNum <= 100) {
            skillLevel = "Expert";
          } //var skillHtml = "<div><p style='display: none; margin-bottom: 3rem;'>" + skillLevel + " | " + percent + "</p></div>";


          $(".skill-text").html(skillLevel + " | " + percent);
          $(".skill-skill-" + skill).css({
            width: '0px'
          });
          $("div.skill-skill-" + skill).animate({
            width: percent
          }, 1500);
        }
      }]);

      return ComputerComponent;
    }();

    ComputerComponent.ɵfac = function ComputerComponent_Factory(t) {
      return new (t || ComputerComponent)();
    };

    ComputerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComputerComponent,
      selectors: [["app-computer"]],
      decls: 6,
      vars: 2,
      consts: [["href", "https://fonts.googleapis.com/css?family=Oswald:400,700,300", "rel", "stylesheet", "type", "text/css"], [1, "intro"], ["class", "intro-block", 4, "ngIf"], ["class", "mobile-view", "style", "width: 70vw;", 4, "ngIf"], [1, "intro-block"], [1, "centerfold-wrap"], [1, "grids-container"], [1, "hex-master-wrap"], [1, "grid-1"], ["data-title", "PYTHON", "data-content", "python-desc", "data-color", "#4B8BBE", 1, "hex-wrap", "python"], [1, "hex-init", 3, "mouseenter"], [1, "hex-borders"], [1, "border-1"], [1, "border-2"], [1, "border-3"], [1, "label"], ["src", "assets/images/logos/programming/python.svg", "alt", "python logo"], [1, "hexagon"], [1, "hex-inner-1"], [1, "hex-inner-2"], ["data-title", "MATLAB", "data-content", "matlab-desc", "data-color", "#E34C26", 1, "hex-wrap", "matlab"], ["src", "assets/images/logos/programming/matlab.png", "alt", "matlab logo"], [1, "grid-2"], ["data-title", "C/C++", "data-content", "cpp-desc", "data-color", "#5E97D0", 1, "hex-wrap", "cpp"], ["src", "assets/images/logos/programming/c.svg", "alt", "c logo"], [1, "hex-wrap", "none"], ["src", "assets/images/logos/code-solid.svg", "alt", "code icon"], ["data-title", "JAVA", "data-content", "java-desc", "data-color", "#E34C26", 1, "hex-wrap", "java"], ["src", "assets/images/logos/programming/java.svg", "alt", "java logo"], [1, "grid-3"], ["data-title", "ASM", "data-content", "asm-desc", "data-color", "#044F88", 1, "hex-wrap", "asm"], ["src", "assets/images/logos/programming/asm.png", "alt", "assenbly logo"], ["data-title", "VHDL", "data-content", "vhdl-desc", "data-color", "#c5c6c7", 1, "hex-wrap", "vhdl"], ["src", "assets/images/logos/programming/vhdl.png", "alt", "vhdl logo"], [1, "code-display"], [1, "code-description"], [1, "python-desc"], [1, "code-title"], [1, "skillbg", 2, "display", "none", "height", "10px", "background-color", "#BFBFBF"], ["data-pr", "95%", 1, "skill-skill-python", 2, "background-color", "#45a29e", "height", "10px"], [1, "skill-text"], ["href", "https://github.com/NEGU93/cvnn"], ["href", "https://github.com/NEGU93/LipSync"], [1, "code-icon"], [1, "matlab-desc"], ["data-pr", "80%", 1, "skill-skill-matlab", 2, "background-color", "#45a29e", "height", "10px"], ["href", "https://github.com/NEGU93/Steganography"], [1, "cpp-desc"], ["data-pr", "95%", 1, "skill-skill-cpp", 2, "background-color", "#45a29e", "height", "10px"], ["href", "https://github.com/NEGU93/ForbiddenDesert"], ["href", "https://www.youtube.com/watch?v=30qZcaUGGkQ"], ["href", "https://github.com/NEGU93/Parallel-Image-FIltering"], [1, "java-desc"], ["data-pr", "70%", 1, "skill-skill-java", 2, "background-color", "#45a29e", "height", "10px"], ["href", "https://github.com/nahuelaguilar93/TP_MATLAB"], ["href", "https://github.com/NEGU93/Compilation"], [1, "asm-desc"], ["data-pr", "75%", 1, "skill-skill-asm", 2, "background-color", "#45a29e", "height", "10px"], [1, "vhdl-desc"], ["data-pr", "65%", 1, "skill-skill-vhdl", 2, "background-color", "#45a29e", "height", "10px"], ["href", "https://github.com/NEGU93/CYUSB3KIT-003_with_SP605_xilinx"], [1, "hoverblock"], [1, "mobile-view", 2, "width", "70vw"], ["data-color", "#45a29e", "data-pr", "95%", "data-cap", "Python", "data-height", "10px", 1, "skillbars"], [2, "margin-bottom", ".2em", "margin-top", "1rem", "color", "#45a29e", "font-family", "'Helvetica Neue', Helvetica, Arial, sans-serif", "font-weight", "100"], [1, "skill-skill", 2, "background-color", "#45a29e", "height", "10px"], ["data-color", "#45a29e", "data-pr", "80%", "data-cap", "Matlab", "data-height", "10px", 1, "skillbars"], ["data-color", "#45a29e", "data-pr", "70%", "data-cap", "Java", "data-height", "10px", 1, "skillbars"], ["data-color", "#45a29e", "data-pr", "95%", "data-cap", "Cpp", "data-height", "10px", 1, "skillbars"], ["data-color", "#45a29e", "data-pr", "75%", "data-cap", "asm", "data-height", "10px", 1, "skillbars"], ["data-color", "#45a29e", "data-pr", "70%", "data-cap", "vhdl", "data-height", "10px", 1, "skillbars"]],
      template: function ComputerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComputerComponent_div_4_Template, 155, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComputerComponent_div_5_Template, 31, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".intro-block[_ngcontent-%COMP%] {\r\nposition: relative;\r\ndisplay: flex;\r\nalign-items: center;\r\nheight: 100%;\r\n\r\n}\r\n.hex-bg-big-text[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nz-index: -1;\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n.centerfold-wrap[_ngcontent-%COMP%] {\r\nposition: relative;\r\ndisplay: flex;\r\nflex-direction: row;\r\nflex-wrap: wrap;\r\njustify-content: center;\r\nalign-items: center;\r\nflex: 1;\r\n}\r\n.hoverblock[_ngcontent-%COMP%] {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n.hover-notify[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nbottom: -80px;\r\nleft: 0;\r\nwidth: 100%;\r\ntext-align: center;\r\nfont-size: 50px;\r\n}\r\n.code-display[_ngcontent-%COMP%] {\r\nposition: relative;\r\ncolor: #f6f6f6;\r\nwidth: 600px;\r\nheight: 260px;\r\n}\r\n.code-display[_ngcontent-%COMP%]::before {\r\n  \r\n  position: absolute;\r\n  top: -70px;\r\n  left: 0;\r\n  font-size: 3.0rem;\r\n  color: #c5c6c7;\r\n}\r\n.code-display[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\ncolor: #c5c6c7;\r\n}\r\n.code-description[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 100%;\r\ncolor: #c5c6c7;\r\n}\r\ndiv[class$=\"-desc\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.code-description[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\npadding: 0px 40px;\r\nfont-size: 26px;\r\nborder-left: 2px solid #DDDDDD;\r\n}\r\n.desc-active[_ngcontent-%COMP%] {\r\ndisplay: block;\r\n\r\nposition: relative;\r\n}\r\n.desc-active[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\ndisplay: block;\r\nmargin: 0;\r\n}\r\n.desc-active[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\ndisplay: inline-block;\r\n\r\nwidth: 125px;\r\n}\r\np.code-title[_ngcontent-%COMP%] {\r\nposition: relative;\r\nfont-size: 6rem;\r\n}\r\n.desc-active[_ngcontent-%COMP%]::after {\r\nposition: absolute;\r\nheight: 100%;\r\nwidth: 100%;\r\ntop: 0;\r\nleft: 0;\r\ncontent: \"\";\r\nopacity: .2;\r\nz-index: -1;\r\n}\r\n.python-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/python.svg);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\n.matlab-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/matlab.png);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\n.cpp-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/c.svg);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\n.java-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/java.svg);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\n.asm-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/asm.png);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\n.vhdl-desc.desc-active[_ngcontent-%COMP%]::after {\r\nbackground: url(https://negu93.github.io/agustinbarrachina/assets/images/logos/programming/vhdl.png);\r\nbackground-repeat: no-repeat;\r\nbackground-size: contain;\r\nbackground-position: right center;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: #45a29e;\r\n}\r\n.hex-master-wrap[_ngcontent-%COMP%] {\r\nposition: relative;\r\n\r\nmin-width: 665px;\r\nheight: 460px;\r\n}\r\n.border-1[_ngcontent-%COMP%], .border-2[_ngcontent-%COMP%], .border-3[_ngcontent-%COMP%] {\r\nposition: absolute;\r\nwidth: 100%;\r\nheight: 88px;\r\ntop: 46px;\r\nleft: 0;\r\nborder-left: 3px solid;\r\nborder-right: 3px solid;\r\nborder-radius: 8px;\r\nz-index: 2;\r\nborder-color: #45a29e;\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\n}\r\n.border-2[_ngcontent-%COMP%] {\r\ntransform: rotate(60deg);\r\n}\r\n.border-3[_ngcontent-%COMP%] {\r\ntransform: rotate(120deg);\r\n}\r\n.border-3[_ngcontent-%COMP%]::before {\r\n  display: none;\r\n  position: absolute;\r\n  content: \"\";\r\n  bottom: 10%;\r\n  left: 42px;\r\n  width: 50%;\r\n  height: 83%;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border-top: 1px solid;\r\n  border-bottom: 1px solid;\r\n  border-color: white;\r\n  border-radius: 50%;\r\n  visibility: visible;\r\n  z-index: -1;\r\n}\r\n.intro-block[_ngcontent-%COMP%]   .grid-1[_ngcontent-%COMP%], .intro-block[_ngcontent-%COMP%]   .grid-2[_ngcontent-%COMP%], .intro-block[_ngcontent-%COMP%]   .grid-3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 75%;\r\n  margin: 0 auto;\r\n  margin-bottom: -50px;\r\n}\r\n.intro-block[_ngcontent-%COMP%]   .grid-3[_ngcontent-%COMP%] {\r\n  margin-bottom: -50px;\r\n}\r\n.intro-block[_ngcontent-%COMP%]   .grid-2[_ngcontent-%COMP%], .intro-block[_ngcontent-%COMP%]   .grid-3[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n}\r\n.hex-wrap[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 150px;\r\n  height: 190px;\r\n  margin: 0 1em 0 0;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  border: 0px solid;\r\n}\r\n\r\n.hex-wrap[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 58px;\r\n  color: #c5c6c7;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 3;\r\n}\r\n.hex-wrap[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .hex-wrap[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.hexagon[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: 150px;\r\n  margin: 15px 0 0 -75px;\r\n  overflow: hidden;\r\n  visibility: hidden;\r\n  transform: rotate(90deg);\r\n  cursor: pointer;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.hex-inner-1[_ngcontent-%COMP%] {\r\noverflow: hidden;\r\nwidth: 100%;\r\nheight: 100%;\r\n-webkit-backface-visibility: hidden;\r\nbackface-visibility: hidden;\r\ntransform: rotate(-60deg);\r\n}\r\n.hex-inner-2[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  visibility: visible;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  transform: rotate(-60deg);\r\n  overflow: hidden;\r\n}\r\n.hex-inner-2[_ngcontent-%COMP%]::before, .hex-inner-2[_ngcontent-%COMP%]::after {\r\nposition: absolute;\r\nbackground-repeat: no-repeat;\r\nbackground-position: 50%;\r\nbackground-size: contain;\r\ntop: 0;\r\nleft: 0;\r\nheight: 110%;\r\nwidth: 110%;\r\ncontent: \"\";\r\ntransform: rotate(30deg);\r\n}\r\n\r\n.hex-init[_ngcontent-%COMP%] {\r\nposition: absolute;\r\ntop: 46px;\r\nleft: 0px;\r\nheight: 46%;\r\nwidth: 100%;\r\nz-index: 9;\r\ntransform: rotate(-60deg);\r\ncursor: pointer;\r\n}\r\n.hex-init[_ngcontent-%COMP%]::after {\r\nwidth: 100%;\r\nheight: 100%;\r\ndisplay: block;\r\nposition: absolute;\r\ntop: 0;\r\nbottom: 0;\r\nleft: 0;\r\nright: 0;\r\nmargin: auto;\r\ncontent: \"\";\r\ntransform: rotate(-60deg);\r\n}\r\n.hex-init[_ngcontent-%COMP%]::before {\r\nwidth: 100%;\r\nheight: 100%;\r\ndisplay: block;\r\nposition: absolute;\r\ntop: 0;\r\nbottom: 0;\r\nleft: 0;\r\nright: 0;\r\nmargin: auto;\r\ncontent: \"\";\r\ntransform: rotate(60deg);\r\n}\r\n.skill-skill[_ngcontent-%COMP%] {\r\n  min-width: 1px;\r\n  max-width: 100%;\r\n  width: 0;\r\n}\r\n.skillbar[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  float: left;\r\n  margin-right: 1em;\r\n  color: white;\r\n}\r\n.skillbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  text-align: left;\r\n  color: #45a29e;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: 100;\r\n}\r\n.skillbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  color: #c5c6c7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL2NvbXB1dGVyL2NvbXB1dGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2dJQUVnSTtBQUNoSTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWiwwREFBMEQ7QUFDMUQ7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLFdBQVc7QUFDWDtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLE9BQU87QUFDUCxXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLE9BQU87QUFDUCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxZQUFZO0FBQ1osYUFBYTtBQUNiO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixjQUFjO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZiw4QkFBOEI7QUFDOUI7QUFFQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCO0FBRUE7QUFDQSxjQUFjO0FBQ2QsU0FBUztBQUNUO0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixXQUFXO0FBQ1gsTUFBTTtBQUNOLE9BQU87QUFDUCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUVBO0FBQ0Esc0dBQXNHO0FBQ3RHLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxzR0FBc0c7QUFDdEcsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixpQ0FBaUM7QUFDakM7QUFFQTtBQUNBLGlHQUFpRztBQUNqRyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLGlDQUFpQztBQUNqQztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxtR0FBbUc7QUFDbkcsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixpQ0FBaUM7QUFDakM7QUFFQTtBQUNBLG9HQUFvRztBQUNwRyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLGlDQUFpQztBQUNqQztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYjtBQUVBOzs7QUFHQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7QUFDWixTQUFTO0FBQ1QsT0FBTztBQUNQLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixxQkFBcUI7QUFDckIsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQjtBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsY0FBYztFQUNkLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjtBQUVBOztFQUVFO0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUtsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsWUFBWTtBQUNaLG1DQUFtQztBQUNuQywyQkFBMkI7QUFLM0IseUJBQXlCO0FBQ3pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBSzNCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixNQUFNO0FBQ04sT0FBTztBQUNQLFlBQVk7QUFDWixXQUFXO0FBQ1gsV0FBVztBQUVYLHdCQUF3QjtBQUN4QjtBQUVBOztrRkFFa0Y7QUFDbEY7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNULFNBQVM7QUFDVCxXQUFXO0FBQ1gsV0FBVztBQUNYLFVBQVU7QUFDVix5QkFBeUI7QUFDekIsZUFBZTtBQUNmO0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLFNBQVM7QUFDVCxPQUFPO0FBQ1AsUUFBUTtBQUNSLFlBQVk7QUFDWixXQUFXO0FBQ1gseUJBQXlCO0FBQ3pCO0FBRUE7QUFDQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsTUFBTTtBQUNOLFNBQVM7QUFDVCxPQUFPO0FBQ1AsUUFBUTtBQUNSLFlBQVk7QUFDWixXQUFXO0FBQ1gsd0JBQXdCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7QUFDVjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwyREFBMkQ7RUFDM0QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Q0FjQyIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlcy9jb21wdXRlci9jb21wdXRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGV4YWdvbiBJbnRybyBCbG9ja3NcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5pbnRyby1ibG9jayB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuaGVpZ2h0OiAxMDAlO1xyXG4vKmJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNjRweCAwcHggcmdiYSg1MCw1MCw1MCwwLjc1KTsqL1xyXG59XHJcblxyXG4uaGV4LWJnLWJpZy10ZXh0IHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG56LWluZGV4OiAtMTtcclxuaGVpZ2h0OiAxMDAlO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcmZvbGQtd3JhcCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxuZmxleC13cmFwOiB3cmFwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuZmxleDogMTtcclxufVxyXG5cclxuLmhvdmVyYmxvY2sge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhvdmVyLW5vdGlmeSB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYm90dG9tOiAtODBweDtcclxubGVmdDogMDtcclxud2lkdGg6IDEwMCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG4uY29kZS1kaXNwbGF5IHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5jb2xvcjogI2Y2ZjZmNjtcclxud2lkdGg6IDYwMHB4O1xyXG5oZWlnaHQ6IDI2MHB4O1xyXG59XHJcblxyXG4uY29kZS1kaXNwbGF5OjpiZWZvcmUge1xyXG4gIC8qY29udGVudDogXCJFeHBlcnRpc2VcIjsqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC03MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgZm9udC1zaXplOiAzLjByZW07XHJcbiAgY29sb3I6ICNjNWM2Yzc7XHJcbn1cclxuXHJcbi5jb2RlLWRpc3BsYXkgaDEge1xyXG5jb2xvcjogI2M1YzZjNztcclxufVxyXG5cclxuLmNvZGUtZGVzY3JpcHRpb24ge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5jb2xvcjogI2M1YzZjNztcclxufVxyXG5cclxuZGl2W2NsYXNzJD1cIi1kZXNjXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29kZS1kZXNjcmlwdGlvbiA+IGRpdiB7XHJcbnBhZGRpbmc6IDBweCA0MHB4O1xyXG5mb250LXNpemU6IDI2cHg7XHJcbmJvcmRlci1sZWZ0OiAycHggc29saWQgI0RERERERDtcclxufVxyXG5cclxuLmRlc2MtYWN0aXZlIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbi8qaGVpZ2h0OiAxMDAlOyovXHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRlc2MtYWN0aXZlID4gcCB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5tYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kZXNjLWFjdGl2ZSA+IHAgPiBzcGFuIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxud2lkdGg6IDEyNXB4O1xyXG59XHJcblxyXG5wLmNvZGUtdGl0bGUge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmZvbnQtc2l6ZTogNnJlbTtcclxufVxyXG5cclxuLmRlc2MtYWN0aXZlOjphZnRlciB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuaGVpZ2h0OiAxMDAlO1xyXG53aWR0aDogMTAwJTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG5jb250ZW50OiBcIlwiO1xyXG5vcGFjaXR5OiAuMjtcclxuei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5weXRob24tZGVzYy5kZXNjLWFjdGl2ZTo6YWZ0ZXIge1xyXG5iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9uZWd1OTMuZ2l0aHViLmlvL2FndXN0aW5iYXJyYWNoaW5hL2Fzc2V0cy9pbWFnZXMvbG9nb3MvcHJvZ3JhbW1pbmcvcHl0aG9uLnN2Zyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG59XHJcblxyXG4ubWF0bGFiLWRlc2MuZGVzYy1hY3RpdmU6OmFmdGVyIHtcclxuYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbmVndTkzLmdpdGh1Yi5pby9hZ3VzdGluYmFycmFjaGluYS9hc3NldHMvaW1hZ2VzL2xvZ29zL3Byb2dyYW1taW5nL21hdGxhYi5wbmcpO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbmJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuLmNwcC1kZXNjLmRlc2MtYWN0aXZlOjphZnRlciB7XHJcbmJhY2tncm91bmQ6IHVybChodHRwczovL25lZ3U5My5naXRodWIuaW8vYWd1c3RpbmJhcnJhY2hpbmEvYXNzZXRzL2ltYWdlcy9sb2dvcy9wcm9ncmFtbWluZy9jLnN2Zyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG59XHJcblxyXG4uamF2YS1kZXNjLmRlc2MtYWN0aXZlOjphZnRlciB7XHJcbmJhY2tncm91bmQ6IHVybChodHRwczovL25lZ3U5My5naXRodWIuaW8vYWd1c3RpbmJhcnJhY2hpbmEvYXNzZXRzL2ltYWdlcy9sb2dvcy9wcm9ncmFtbWluZy9qYXZhLnN2Zyk7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG59XHJcblxyXG4uYXNtLWRlc2MuZGVzYy1hY3RpdmU6OmFmdGVyIHtcclxuYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbmVndTkzLmdpdGh1Yi5pby9hZ3VzdGluYmFycmFjaGluYS9hc3NldHMvaW1hZ2VzL2xvZ29zL3Byb2dyYW1taW5nL2FzbS5wbmcpO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbmJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuLnZoZGwtZGVzYy5kZXNjLWFjdGl2ZTo6YWZ0ZXIge1xyXG5iYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9uZWd1OTMuZ2l0aHViLmlvL2FndXN0aW5iYXJyYWNoaW5hL2Fzc2V0cy9pbWFnZXMvbG9nb3MvcHJvZ3JhbW1pbmcvdmhkbC5wbmcpO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbmJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNDVhMjllO1xyXG59XHJcblxyXG4uaGV4LW1hc3Rlci13cmFwIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG4vKiB3aWR0aDogNTAlOyAqL1xyXG5taW4td2lkdGg6IDY2NXB4O1xyXG5oZWlnaHQ6IDQ2MHB4O1xyXG59XHJcblxyXG4uYm9yZGVyLTEsXHJcbi5ib3JkZXItMixcclxuLmJvcmRlci0zIHtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA4OHB4O1xyXG50b3A6IDQ2cHg7XHJcbmxlZnQ6IDA7XHJcbmJvcmRlci1sZWZ0OiAzcHggc29saWQ7XHJcbmJvcmRlci1yaWdodDogM3B4IHNvbGlkO1xyXG5ib3JkZXItcmFkaXVzOiA4cHg7XHJcbnotaW5kZXg6IDI7XHJcbmJvcmRlci1jb2xvcjogIzQ1YTI5ZTtcclxuLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbmJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmJvcmRlci0yIHtcclxudHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG4uYm9yZGVyLTMge1xyXG50cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG59XHJcblxyXG4uYm9yZGVyLTM6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3R0b206IDEwJTtcclxuICBsZWZ0OiA0MnB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA4MyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5pbnRyby1ibG9jayAuZ3JpZC0xLFxyXG4uaW50cm8tYmxvY2sgLmdyaWQtMixcclxuLmludHJvLWJsb2NrIC5ncmlkLTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG59XHJcblxyXG4uaW50cm8tYmxvY2sgLmdyaWQtMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XHJcbn1cclxuXHJcbi5pbnRyby1ibG9jayAuZ3JpZC0yLFxyXG4uaW50cm8tYmxvY2sgLmdyaWQtMyB7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi5oZXgtd3JhcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE5MHB4O1xyXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDBweCBzb2xpZDtcclxufVxyXG5cclxuLyouaGV4LXdyYXA6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufSovXHJcblxyXG4uaGV4LXdyYXAgLmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU4cHg7XHJcbiAgY29sb3I6ICNjNWM2Yzc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5oZXgtd3JhcCAubGFiZWwgc3ZnLCAuaGV4LXdyYXAgLmxhYmVsIGltZyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmhleGFnb24ge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMTVweCAwIDAgLTc1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uaGV4LWlubmVyLTEge1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG4td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbi1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxuLW1zLXRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbi1vLXRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbn1cclxuXHJcbi5oZXgtaW5uZXItMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaGV4LWlubmVyLTI6OmJlZm9yZSwgLmhleC1pbm5lci0yOjphZnRlciB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxuaGVpZ2h0OiAxMTAlO1xyXG53aWR0aDogMTEwJTtcclxuY29udGVudDogXCJcIjtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbnRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXggSG92ZXIgQXJlYVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4uaGV4LWluaXQge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNDZweDtcclxubGVmdDogMHB4O1xyXG5oZWlnaHQ6IDQ2JTtcclxud2lkdGg6IDEwMCU7XHJcbnotaW5kZXg6IDk7XHJcbnRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhleC1pbml0OjphZnRlciB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxuYm90dG9tOiAwO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMDtcclxubWFyZ2luOiBhdXRvO1xyXG5jb250ZW50OiBcIlwiO1xyXG50cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG59XHJcblxyXG4uaGV4LWluaXQ6OmJlZm9yZSB7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxuYm90dG9tOiAwO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMDtcclxubWFyZ2luOiBhdXRvO1xyXG5jb250ZW50OiBcIlwiO1xyXG50cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbn1cclxuXHJcbi5za2lsbC1za2lsbCB7XHJcbiAgbWluLXdpZHRoOiAxcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4uc2tpbGxiYXIge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNraWxsYmFyIGgxIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzQ1YTI5ZTtcclxuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5za2lsbGJhciBwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogI2M1YzZjNztcclxufVxyXG4vKi5tb2JpbGUtdmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5tb2JpbGUtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLmludHJvLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiovXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComputerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-computer',
          templateUrl: './computer.component.html',
          styleUrls: ['./computer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/languages/human/human.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/languages/human/human.component.ts ***!
    \****************************************************/

  /*! exports provided: HumanComponent */

  /***/
  function srcAppLanguagesHumanHumanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HumanComponent", function () {
      return HumanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);

    var HumanComponent = /*#__PURE__*/function () {
      function HumanComponent() {
        _classCallCheck(this, HumanComponent);
      }

      _createClass(HumanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_1__(".skillbars").each(function (idNr) {
            var color = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('data-color'),
                percent = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('data-pr'),
                caption = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('data-cap'),
                heightBar = jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('data-height'),
                //widthBar = $(this).attr('data-width'),
            skillLevel = "";
            var getPerAsNum;

            if (!heightBar) {
              heightBar = "5px";
            }
            /*if (!widthBar) {
              widthBar = "300px";
            }*/


            getPerAsNum = percent.split("%");

            if (getPerAsNum[0] == 25 || getPerAsNum[0] < 15) {
              skillLevel = "A1";
            } else if (getPerAsNum[0] <= 55) {
              skillLevel = "A2";
            } else if (getPerAsNum[0] <= 65) {
              skillLevel = "B1";
            } else if (getPerAsNum[0] <= 75) {
              skillLevel = "B2";
            } else if (getPerAsNum[0] <= 85) {
              skillLevel = "C1";
            } else if (getPerAsNum[0] <= 95) {
              skillLevel = "C2";
            } else {
              skillLevel = "native";
            }

            var text = "";
            var para = this.querySelector("p");

            if (para) {
              console.log(this.querySelector("p"));
              text = para.innerHTML;
              para.parentNode.removeChild(para);
            }

            var skillHtml = "<div class='skillbar'>" + "<h1 style='display: none; margin-bottom: .2em; margin-top: 2rem; color: #45a29e; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 100;'>" + caption + "</h1>" + "<div class='skillbg' style='display: none; width: 50vw; min-width: 250px; height: " + heightBar + "; background-color: #c5c6c7;'>" + "<div class='skill-skill-" + idNr + "' style='background-color: " + color + "; height: " + heightBar + ";' />" + "</div>" + "<p style='display: none; margin-bottom: 3rem; color: #c5c6c7'>" + skillLevel + " | " + text + "</p>" + "</div>";
            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_1__(".skill-skill-" + idNr).css({
                width: '0px'
              });
              jquery__WEBPACK_IMPORTED_MODULE_1__(".skillbar h1").fadeIn(500, function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".skillbg").fadeIn(500, function () {
                  jquery__WEBPACK_IMPORTED_MODULE_1__(".skillbar p").fadeIn(500, function () {
                    jquery__WEBPACK_IMPORTED_MODULE_1__("div.skill-skill-" + idNr).animate({
                      width: percent
                    }, 1500);
                  });
                });
              });
            }, 100);
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).prepend(skillHtml);
          });
        }
      }, {
        key: "openPdf",
        value: function openPdf(e, path, redirect) {
          // stop the browser from going to the href
          e = e || window.event; // for IE

          e.preventDefault(); // launch a new window with your PDF

          window.open(path, 'somename'); // redirect current page to new location

          window.location = redirect;
        }
      }]);

      return HumanComponent;
    }();

    HumanComponent.ɵfac = function HumanComponent_Factory(t) {
      return new (t || HumanComponent)();
    };

    HumanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HumanComponent,
      selectors: [["app-human"]],
      decls: 16,
      vars: 0,
      consts: [[1, "language-view", 2, "height", "auto", "max-width", "70vw"], ["data-color", "#45a29e", "data-pr", "85%", "data-cap", "English", "data-height", "10px", 1, "skillbars"], ["href", "assets/pdf/idiomas/toiec.pdf", "onclick", "openPdf(event, 'assets/pdf/idiomas/toiec.pdf', 'newpage.html');"], ["data-color", "#45a29e", "data-pr", "100%", "data-cap", "Spanish", "data-height", "10px", 1, "skillbars"], ["data-color", "#45a29e", "data-pr", "75%", "data-cap", "French", "data-height", "10px", 1, "skillbars"], ["href", "assets/pdf/idiomas/delf.pdf", "onclick", "openPdf(event, 'assets/pdf/idiomas/delf.pdf', 'newpage.html');"], ["href", "assets/pdf/idiomas/tcf.pdf", "onclick", "openPdf(event, 'assets/pdf/idiomas/tcf.pdf', 'newpage.html');"]],
      template: function HumanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CAE C1 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TOIEC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ": Score 940/990");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DELF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " A2 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TCF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " B2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #66fcf1;\r\n}\r\n\r\n.skill-skill[_ngcontent-%COMP%] {\r\n  min-width: 1px;\r\n  max-width: 100%;\r\n  width: 0;\r\n}\r\n\r\n.skillbar[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  float: left;\r\n  margin-right: 1em;\r\n  color: white;\r\n}\r\n\r\n.skillbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  text-align: left;\r\n  color: #66fcf1;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.skillbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  color: #c5c6c7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL2h1bWFuL2h1bWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDJEQUEyRDtFQUMzRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlcy9odW1hbi9odW1hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmNmMTtcclxufVxyXG5cclxuLnNraWxsLXNraWxsIHtcclxuICBtaW4td2lkdGg6IDFweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5za2lsbGJhciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2tpbGxiYXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjNjZmY2YxO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnNraWxsYmFyIHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNjNWM2Yzc7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HumanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-human',
          templateUrl: './human.component.html',
          styleUrls: ['./human.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/languages/languages.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/languages/languages.component.ts ***!
    \**************************************************/

  /*! exports provided: LanguagesComponent */

  /***/
  function srcAppLanguagesLanguagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function () {
      return LanguagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _human_human_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./human/human.component */
    "./src/app/languages/human/human.component.ts");
    /* harmony import */


    var _computer_computer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./computer/computer.component */
    "./src/app/languages/computer/computer.component.ts");
    /* harmony import */


    var _web_web_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./web/web.component */
    "./src/app/languages/web/web.component.ts");

    function LanguagesComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-human");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LanguagesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-computer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LanguagesComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-web");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var LanguagesComponent = /*#__PURE__*/function () {
      function LanguagesComponent() {
        _classCallCheck(this, LanguagesComponent);

        this.currentCategory = 'computer';
      }

      _createClass(LanguagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCategory",
        value: function setCategory(cat) {
          this.currentCategory = cat;
        }
      }]);

      return LanguagesComponent;
    }();

    LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) {
      return new (t || LanguagesComponent)();
    };

    LanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LanguagesComponent,
      selectors: [["app-languages"]],
      decls: 12,
      vars: 12,
      consts: [[1, "language-category"], ["id", "human", 3, "ngClass", "click"], ["id", "computer", 3, "ngClass", "click"], ["id", "web", 3, "ngClass", "click"], ["class", "category-human", 4, "ngIf"], ["class", "category-computer", 4, "ngIf"], ["class", "category-app", 4, "ngIf"], [1, "category-human"], [1, "category-computer"], [1, "category-app"]],
      template: function LanguagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LANGUAGES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_3_listener() {
            return ctx.setCategory("human");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Human ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_5_listener() {
            return ctx.setCategory("computer");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Computer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguagesComponent_Template_button_click_7_listener() {
            return ctx.setCategory("web");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Web Development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LanguagesComponent_div_9_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LanguagesComponent_div_10_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LanguagesComponent_div_11_Template, 2, 0, "div", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.currentCategory === "human"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentCategory === "computer"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currentCategory === "web"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentCategory === "human");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentCategory === "computer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentCategory === "web");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _human_human_component__WEBPACK_IMPORTED_MODULE_2__["HumanComponent"], _computer_computer_component__WEBPACK_IMPORTED_MODULE_3__["ComputerComponent"], _web_web_component__WEBPACK_IMPORTED_MODULE_4__["WebComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    color: #ffffff;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-weight: 100;\r\n    \r\n}\r\n\r\n.language-category[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    min-width: 100%;\r\n    flex-wrap: wrap;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.language-category[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    text-transform: capitalize;\r\n    border: 3px solid #66fcf1;\r\n    padding: 15px 30px;\r\n    border-radius: 50px;\r\n    color: #66fcf1;\r\n    font-size: 1.1rem;\r\n    letter-spacing: 1px;\r\n    background-color: transparent;\r\n    outline: none;\r\n    cursor: pointer;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.language-category[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{\r\n    \r\n    color: #1f2833;\r\n    background-color: #66fcf1;\r\n    \r\n}\r\n\r\ndiv[class^='category-'][_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    min-height: 70vh;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCOztvQkFFZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYW5ndWFnZXMvbGFuZ3VhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIC8qdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY2F0ZWdvcnkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jYXRlZ29yeSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNjZmY2YxO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNhdGVnb3J5IGJ1dHRvbi5hY3RpdmV7XHJcbiAgICAvKiBUaGlzIHNob3VsZCBiZSBzZWxlY3RlZCBhY3R1YWxseSAqL1xyXG4gICAgY29sb3I6ICMxZjI4MzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZmY2YxO1xyXG4gICAgLyp0cmFuc2l0aW9uOiAuNXM7Ki9cclxufVxyXG5cclxuZGl2W2NsYXNzXj0nY2F0ZWdvcnktJ10ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgICAvKmRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgICBncmlkLWdhcDogMjBweDsqL1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-languages',
          templateUrl: './languages.component.html',
          styleUrls: ['./languages.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/languages/web/web.component.ts":
  /*!************************************************!*\
    !*** ./src/app/languages/web/web.component.ts ***!
    \************************************************/

  /*! exports provided: WebComponent */

  /***/
  function srcAppLanguagesWebWebComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebComponent", function () {
      return WebComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WebComponent = /*#__PURE__*/function () {
      function WebComponent() {
        _classCallCheck(this, WebComponent);
      }

      _createClass(WebComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebComponent;
    }();

    WebComponent.ɵfac = function WebComponent_Factory(t) {
      return new (t || WebComponent)();
    };

    WebComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WebComponent,
      selectors: [["app-web"]],
      decls: 42,
      vars: 0,
      consts: [[1, "grid"], [1, "top"], [1, "grid--item"], [1, "img", 2, "background-image", "url(assets/images/logos/programming/hexagon/js.png)"], [1, "container"], [1, "desc"], [1, "img", 2, "background-image", "url(assets/images/logos/programming/typescript.png)"], [1, "img", 2, "background-image", "url(assets/images/logos/programming/hexagon/angular.png)"], [1, "bottom"], [1, "img", 2, "background-image", "url(assets/images/logos/programming/hexagon/CSS3.png)"], [1, "img", 2, "background-image", "url(assets/images/logos/programming/hexagon/HTML5.png)"], [1, "logos-images"], ["src", "assets/images/logos/programming/angular.svg", "alt", "angular logo"], ["src", "assets/images/logos/programming/js.png", "alt", "js logo"], ["src", "assets/images/logos/programming/html.png", "alt", "html logo"], ["src", "assets/images/logos/programming/css.png", "alt", "css logo"], ["src", "assets/images/logos/programming/typescript.png", "alt", "ts logo"]],
      template: function WebComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CSS3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " HTML5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(https://fonts.googleapis.com/css?family=Arapey:400italic);\r\nbody[_ngcontent-%COMP%] {\r\n  -webkit-font-smoothing: antialiased;\r\n  \r\n}\r\n.top[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    width: 800px;\r\n}\r\n.bottom[_ngcontent-%COMP%] {\r\n    margin-left: 80px;\r\n    width: 800px;\r\n}\r\n.logos-images[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n@media only screen and (max-width: 800px) {\r\n  .grid[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .logos-images[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n  }\r\n  .logos-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 50vw !important;\r\n    height: auto !important;\r\n    margin-bottom: 1rem;\r\n  }\r\n}\r\n.grid--item[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-right: 5px;\r\n  margin-left: 5px;\r\n  width: calc(20% - 10px);\r\n  float: left;\r\n  transition: all 0.5s;\r\n  overflow: hidden;\r\n  -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n  -webkit-shape-outside: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n}\r\n.grid--item[_ngcontent-%COMP%]:before {\r\n  display: block;\r\n  padding-top: 112.5%;\r\n  content: '';\r\n}\r\n.grid--item[_ngcontent-%COMP%]:nth-child(1), .grid--item[_ngcontent-%COMP%]:nth-child(2) {\r\n  margin-top: 0;\r\n}\r\n.grid--item[_ngcontent-%COMP%]:nth-child(7n - 1), .grid--item[_ngcontent-%COMP%]:nth-child(1) {\r\n  margin-left: 185px;\r\n}\r\n.img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n}\r\n.img[_ngcontent-%COMP%]:before, .img[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  content: '';\r\n  opacity: 0;\r\n  transition: opacity 0.5s;\r\n}\r\n.img[_ngcontent-%COMP%]:before {\r\n  background: rgba(128, 0, 128, 0.25);\r\n}\r\n.img[_ngcontent-%COMP%]:after {\r\n  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 100%;\r\n  opacity: 0;\r\n  text-align: center;\r\n  color: white;\r\n  will-change: transform;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform: translate(-50%, -50%) scale(0.9);\r\n  transition: all 0.5s;\r\n  shape-outside: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n  font-family: 'Arapey';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  margin-top: 90px;\r\n  text-align: center;\r\n  font-size: 56px;\r\n  color: #242424;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\nh2[_ngcontent-%COMP%]:before, h2[_ngcontent-%COMP%]:after {\r\n  display: inline-block;\r\n  margin: 0 0.5em;\r\n  width: 0.75em;\r\n  height: 0.03em;\r\n  background: turquoise;\r\n  content: '';\r\n  vertical-align: middle;\r\n  transition: all 0.3s;\r\n}\r\n.desc[_ngcontent-%COMP%] {\r\n  margin: 1em 0 0;\r\n  font-family: 'ATC Overlook';\r\n  letter-spacing: 0.1em;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: turquoise;\r\n}\r\n.grid--item[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]:before, .grid--item[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]:after, .grid--item[_ngcontent-%COMP%]:hover   .container[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n}\r\n.grid--item[_ngcontent-%COMP%]:hover   .container[_ngcontent-%COMP%] {\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL3dlYi93ZWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUFBcUU7QUFDckU7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDZFQUE2RTtFQUM3RSxxRUFBcUU7RUFDckUsaUZBQWlGO0FBQ25GO0FBR0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsNkVBQTZFO0VBQzdFLHFFQUFxRTtBQUN2RTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxpRkFBaUY7QUFDbkY7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiwyQ0FBMkM7RUFDM0Msb0JBQW9CO0VBRXBCLHlFQUF5RTtBQUMzRTtBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7OztFQUdFLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvbGFuZ3VhZ2VzL3dlYi93ZWIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmFwZXk6NDAwaXRhbGljKTtcclxuYm9keSB7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLyptaW4td2lkdGg6IDgwMHB4OyovXHJcbn1cclxuXHJcbi50b3Age1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5sb2dvcy1pbWFnZXMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubG9nb3MtaW1hZ2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAubG9nb3MtaW1hZ2VzIGltZyB7XHJcbiAgICB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmdyaWQtLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdpZHRoOiBjYWxjKDIwJSAtIDEwcHgpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI1JSk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNSUpO1xyXG4gIC13ZWJraXQtc2hhcGUtb3V0c2lkZTogcG9seWdvbig1MCUgMCwgMTAwJSAyNSUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMjUlKTtcclxufVxyXG5cclxuXHJcbi5ncmlkLS1pdGVtOmJlZm9yZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDExMi41JTtcclxuICBjb250ZW50OiAnJztcclxufVxyXG4uZ3JpZC0taXRlbTpudGgtY2hpbGQoMSksIC5ncmlkLS1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4uZ3JpZC0taXRlbTpudGgtY2hpbGQoN24gLSAxKSwgLmdyaWQtLWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICBtYXJnaW4tbGVmdDogMTg1cHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI1JSk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNSUpO1xyXG59XHJcbi5pbWc6YmVmb3JlLCAuaW1nOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG59XHJcbi5pbWc6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMCwgMTI4LCAwLjI1KTtcclxufVxyXG4uaW1nOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjUpLCB0cmFuc3BhcmVudCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLXdlYmtpdC1zaGFwZS1vdXRzaWRlOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNSUpO1xyXG4gIHNoYXBlLW91dHNpZGU6IHBvbHlnb24oNTAlIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI1JSk7XHJcbn1cclxuXHJcbmgxLFxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmFwZXknO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGNvbG9yOiAjMjQyNDI0O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbmgyOmJlZm9yZSwgaDI6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMC41ZW07XHJcbiAgd2lkdGg6IDAuNzVlbTtcclxuICBoZWlnaHQ6IDAuMDNlbTtcclxuICBiYWNrZ3JvdW5kOiB0dXJxdW9pc2U7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIG1hcmdpbjogMWVtIDAgMDtcclxuICBmb250LWZhbWlseTogJ0FUQyBPdmVybG9vayc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHR1cnF1b2lzZTtcclxufVxyXG5cclxuLmdyaWQtLWl0ZW06aG92ZXIgLmltZzpiZWZvcmUsXHJcbi5ncmlkLS1pdGVtOmhvdmVyIC5pbWc6YWZ0ZXIsXHJcbi5ncmlkLS1pdGVtOmhvdmVyIC5jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmdyaWQtLWl0ZW06aG92ZXIgLmNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-web',
          templateUrl: './web.component.html',
          styleUrls: ['./web.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/me/me.component.ts":
  /*!************************************!*\
    !*** ./src/app/me/me.component.ts ***!
    \************************************/

  /*! exports provided: MeComponent */

  /***/
  function srcAppMeMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeComponent", function () {
      return MeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation */
    "./src/app/animation.ts");

    var MeComponent = /*#__PURE__*/function () {
      function MeComponent() {
        _classCallCheck(this, MeComponent);
      }

      _createClass(MeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeComponent;
    }();

    MeComponent.ɵfac = function MeComponent_Factory(t) {
      return new (t || MeComponent)();
    };

    MeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MeComponent,
      selectors: [["app-me"]],
      decls: 56,
      vars: 2,
      consts: [[1, "intro"], [1, "m-left"], [1, "name"], [1, "social-media"], ["href", "https://www.instagram.com/agustinbarrachina/", 1, "icon-button", "instagram"], [1, "fab", "fa-instagram"], ["href", "https://twitter.com/AgusBarrachina", 1, "icon-button", "twitter"], [1, "fab", "fa-twitter"], ["href", "https://www.facebook.com/joseagustin.barra/", 1, "icon-button", "facebook"], [1, "fab", "fa-facebook-f"], ["href", "https://www.linkedin.com/in/jose-agustin-barrachina/", 1, "icon-button", "linkedin"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/NEGU93", 1, "icon-button", "github"], [1, "fab", "fa-github"], ["href", "https://stackoverflow.com/users/5931672/agustin-barrachina", 1, "icon-button", "stackoverflow"], [1, "fab", "fa-stack-overflow"], ["href", "https://orcid.org/0000-0002-2139-514X", 1, "icon-button", "orcid"], [1, "fab", "fa-orcid"], [1, "profile-image"], ["src", "assets/images/profile-image.png", "alt", "Jose Agustin BARRACHINA"]],
      template: function MeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ",");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "t");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Machine Learning | Signal Processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@EnterFromLeft", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@EnterFromRight", undefined);
        }
      },
      styles: ["html[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%] {\r\n    transition: transform .2s; \r\n    \r\n}\r\n\r\n.intro[_ngcontent-%COMP%] {\r\n    margin-top: min(120px, 15vw);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.intro[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tcolor: #ffffff;\r\n\tletter-spacing: 3px;\r\n    word-spacing: 10px;\r\n    font-size: min(2.5vw, .8rem);\r\n\tmargin-bottom: 2rem;\r\n\tfont-weight: 100;\r\n}\r\n\r\n.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    font-size: min(8vw, 3rem);\r\n    cursor: context-menu;\r\n}\r\n\r\n@media only screen and (min-width: 900px) {\r\n    .profile-image[_ngcontent-%COMP%]:hover {\r\n        transform: scale(1.5); \r\n    }\r\n}\r\n\r\n\r\n\r\n.intro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]:hover, span.name[_ngcontent-%COMP%]:hover {\r\n    color: #48CFAD;\r\n\ttransition: all .5s;\r\n\tanimation: bounce .3s infinite;\r\n\t-webkit-animation: bounce .3s infinite;\r\n\t-moz-animation: bounce .3s infinite;\r\n\t-o-animation: bounce .3s infinite; \r\n}\r\n\r\nspan.name[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.icon-button[_ngcontent-%COMP%] {\r\n\tbackground-color: white;\r\n\tborder-radius: 2.6rem;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tfont-size: 1.3rem;\r\n\theight: 2.6rem;\r\n\tline-height: 2.6rem;\r\n\tmargin: 2px 5px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\twidth: 2.6rem;\r\n}\r\n\r\n\r\n\r\n.icon-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tborder-radius: 0;\r\n\tdisplay: block;\r\n\theight: 0;\r\n\tleft: 50%;\r\n\tmargin: 0;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\ttransition: all 0.3s;\r\n\twidth: 0;\r\n}\r\n\r\n.icon-button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n\twidth: 2.6rem;\r\n\theight: 2.6rem;\r\n\tborder-radius: 2.6rem;\r\n\tmargin: -1.3rem;\r\n}\r\n\r\n\r\n\r\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tbackground: none;\r\n\theight: 2.6rem;\r\n\tleft: 0;\r\n\tline-height: 2.6rem;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\ttransition: all 0.3s;\r\n\twidth: 2.6rem;\r\n    z-index: 10;\r\n}\r\n\r\ni[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n}\r\n\r\n.fa-facebook-f[_ngcontent-%COMP%] {\r\n    color: #3b5998;\r\n}\r\n\r\n.facebook[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tbackground-color: #3b5998;\r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n    color: #00acee;\r\n}\r\n\r\n.twitter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tbackground-color: #00acee;\r\n}\r\n\r\n.fa-linkedin-in[_ngcontent-%COMP%] {\r\n    color: #0072b1;\r\n}\r\n\r\n.linkedin[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: #0072b1;\r\n}\r\n\r\n.fa-github[_ngcontent-%COMP%] {\r\n    color: #171515;\r\n}\r\n\r\n.github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: #171515;\r\n}\r\n\r\n.fa-stack-overflow[_ngcontent-%COMP%] {\r\n    color: #F47F24;\r\n}\r\n\r\n.stackoverflow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: #F47F24;\r\n}\r\n\r\n.fa-orcid[_ngcontent-%COMP%] {\r\n    color: #A5CD36;\r\n}\r\n\r\n.orcid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: #A5CD36;\r\n}\r\n\r\n.fa-instagram[_ngcontent-%COMP%] {\r\n    color: #fd5949;\r\n}\r\n\r\n.instagram[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    background-color: #fd5949;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%,  \r\n    100% {\r\n       -webkit-transform: translateY(0);\r\n    } \r\n    50% {\r\n        -webkit-transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%,  \r\n    100% {\r\n        transform: translateY(0);\r\n    }\r\n    50% {\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]  {\r\n  width: min(300px, 65vw);\r\n\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWUvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLGNBQWM7SUFDekMsaURBQWlEO0FBQ3JEOztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7Q0FDL0IsbUJBQW1CO0NBQ25CLGdCQUFnQjtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUIsRUFBRSxxRkFBcUY7SUFDaEg7QUFDSjs7QUFHQSxlQUFlOztBQUNmO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLGNBQWM7Q0FDakIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixzQ0FBc0M7Q0FDdEMsbUNBQW1DO0NBQ25DLGlDQUFpQztBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUEsZUFBZTs7QUFDZixZQUFZOztBQUNaO0NBQ0MsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtJQUN0QixzQkFBc0I7U0FFakIsaUJBQWlCO0NBQ3pCLGFBQWE7QUFDZDs7QUFFQSxXQUFXOztBQUNYO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsU0FBUztDQUNULFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUlBLG9CQUFvQjtDQUM1QixRQUFRO0FBQ1Q7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBLFVBQVU7O0FBQ1Y7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLE9BQU87Q0FDUCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07Q0FJRSxvQkFBb0I7Q0FDNUIsYUFBYTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7O09BRUcsZ0NBQWdDO0lBQ25DO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEM7QUFDSjs7QUFtQkE7SUFDSTs7UUFFSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0VBQ0UsdUJBQXVCOztFQUV2QixxQkFBcUI7RUFDckI7Ozs7OENBSTRDO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvbWUvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDEuMnJlbSByZ2JhKDEwMiwyNTIsMjQxLC41KTsgKi9cclxufVxyXG4uaW50cm8ge1xyXG4gICAgbWFyZ2luLXRvcDogbWluKDEyMHB4LCAxNXZ3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW50cm8gaDQge1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IG1pbigyLjV2dywgLjhyZW0pO1xyXG5cdG1hcmdpbi1ib3R0b206IDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG4gIFxyXG4uaW50cm8gaDEge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IG1pbig4dncsIDNyZW0pO1xyXG4gICAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgIC5wcm9maWxlLWltYWdlOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKkxldHRlcnMgU3BhbiovXHJcbi5pbnRybyBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuc3Bhbjpob3Zlcixcclxuc3Bhbi5uYW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDhDRkFEO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblx0YW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlO1xyXG5cdC1tb3otYW5pbWF0aW9uOiBib3VuY2UgLjNzIGluZmluaXRlO1xyXG5cdC1vLWFuaW1hdGlvbjogYm91bmNlIC4zcyBpbmZpbml0ZTsgXHJcbn1cclxuXHJcbnNwYW4ubmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4vKlNvY2lhbCBNZWRpYSovXHJcbi8qIFdyYXBwZXIgKi9cclxuLmljb24tYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAyLjZyZW07XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmb250LXNpemU6IDEuM3JlbTtcclxuXHRoZWlnaHQ6IDIuNnJlbTtcclxuXHRsaW5lLWhlaWdodDogMi42cmVtO1xyXG5cdG1hcmdpbjogMnB4IDVweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0d2lkdGg6IDIuNnJlbTtcclxufVxyXG5cclxuLyogQ2lyY2xlICovXHJcbi5pY29uLWJ1dHRvbiBzcGFuIHtcclxuXHRib3JkZXItcmFkaXVzOiAwO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogMDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0ICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdHdpZHRoOiAwO1xyXG59XHJcbi5pY29uLWJ1dHRvbjpob3ZlciBzcGFuIHtcclxuXHR3aWR0aDogMi42cmVtO1xyXG5cdGhlaWdodDogMi42cmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcclxuXHRtYXJnaW46IC0xLjNyZW07XHJcbn1cclxuXHJcbi8qIEljb25zICovXHJcbi5pY29uLWJ1dHRvbiBpIHtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdGhlaWdodDogMi42cmVtO1xyXG5cdGxlZnQ6IDA7XHJcblx0bGluZS1oZWlnaHQ6IDIuNnJlbTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHQgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0d2lkdGg6IDIuNnJlbTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5pOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZmEtZmFjZWJvb2stZiB7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxufVxyXG4uZmFjZWJvb2sgc3BhbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuLmZhLXR3aXR0ZXIge1xyXG4gICAgY29sb3I6ICMwMGFjZWU7XHJcbn1cclxuLnR3aXR0ZXIgc3BhbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZTtcclxufVxyXG5cclxuLmZhLWxpbmtlZGluLWluIHtcclxuICAgIGNvbG9yOiAjMDA3MmIxO1xyXG59XHJcbi5saW5rZWRpbiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcyYjE7XHJcbn1cclxuXHJcbi5mYS1naXRodWIge1xyXG4gICAgY29sb3I6ICMxNzE1MTU7XHJcbn1cclxuLmdpdGh1YiBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE1MTU7XHJcbn1cclxuXHJcbi5mYS1zdGFjay1vdmVyZmxvdyB7XHJcbiAgICBjb2xvcjogI0Y0N0YyNDtcclxufVxyXG4uc3RhY2tvdmVyZmxvdyBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDdGMjQ7XHJcbn1cclxuXHJcbi5mYS1vcmNpZCB7XHJcbiAgICBjb2xvcjogI0E1Q0QzNjtcclxufVxyXG4ub3JjaWQgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVDRDM2O1xyXG59XHJcblxyXG4uZmEtaW5zdGFncmFtIHtcclxuICAgIGNvbG9yOiAjZmQ1OTQ5O1xyXG59XHJcbi5pbnN0YWdyYW0gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ1OTQ5O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIDAlLCAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfSBcclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUsIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBib3VuY2Uge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICAgIDAlLCAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlIGltZyAge1xyXG4gIHdpZHRoOiBtaW4oMzAwcHgsIDY1dncpO1xyXG5cclxuICAvKm1hcmdpbi1sZWZ0OiA1MHB4OyovXHJcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICByaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgMTAwcHgpKTsqL1xyXG59Il19 */"],
      data: {
        animation: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-me',
          templateUrl: './me.component.html',
          styleUrls: ['./me.component.css'],
          animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/timeline", "experience"];
    };

    var _c1 = function _c1() {
      return ["/timeline", "education"];
    };

    var _c2 = function _c2() {
      return ["/timeline", "competition"];
    };

    var _c3 = function _c3() {
      return ["/timeline", "teaching"];
    };

    var _c4 = function _c4() {
      return ["/timeline", "course"];
    };

    var _c5 = function _c5() {
      return ["/timeline", "publication"];
    };

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 62,
      vars: 12,
      consts: [[1, "container"], [1, "cv-download"], [1, "language"], ["id", "download-cv", 1, "button"], ["href", "assets/pdf/cv/french.pdf"], ["id", "down-arrow"], [1, "fas", "fa-cloud-download-alt", "fa-lg"], ["href", "assets/pdf/cv/english.pdf"], ["href", "assets/pdf/cv/spanish.pdf"], [1, "resume-buttons"], [1, "full-link"], ["id", "experience", 3, "routerLink"], [1, "fas", "fa-briefcase", "fa-lg"], ["id", "education", 3, "routerLink"], [1, "fas", "fa-user-graduate", "fa-lg"], ["id", "competitions", 3, "routerLink"], [1, "fas", "fa-trophy", "fa-lg"], ["id", "teaching", 3, "routerLink"], [1, "fas", "fa-chalkboard-teacher", "fa-lg"], ["id", "courses", 3, "routerLink"], [1, "fas", "fa-certificate", "fa-lg"], ["id", "publications", 3, "routerLink"], [1, "fas", "fa-book", "fa-lg"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RESUM\xC9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download French Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last update: April 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Download English Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last update: January 2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Download Spanish Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last update: April 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Teachings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Publications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["h1[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    color: #ffffff;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-weight: 100;\r\n    \r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    color: #66fcf1;\r\n    font-weight: 100;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 50px 0;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.full-link[_ngcontent-%COMP%] {\r\n    width: min(200px, 40vw);\r\n    margin: 5vw 5vw 5vw 0;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    \r\n    text-transform: capitalize;\r\n    border: 3px solid #66fcf1;\r\n    padding: 15px 30px;\r\n    border-radius: 50px;\r\n    color: #66fcf1;\r\n    font-size: 1.1rem;\r\n    letter-spacing: 1px;\r\n    background-color: transparent;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    top: 100px;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n    top: 0;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    top: -100px;\r\n}\r\n\r\n.resume-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #45a29c;\r\n    transition: .5s;\r\n}\r\n\r\n.cv-download[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.language[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-right: 2.5%;\r\n    margin-left: 2.5%;\r\n    margin-bottom: 3%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.cv-download[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #c5c6c7;\r\n}\r\n\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    margin-top: 3rem;\r\n    display: inline-flex;\r\n    height: 40px;\r\n    width: 150px;\r\n    border: 2px solid #66fcf1;\r\n    margin: 20px 20px 20px 20px;\r\n    color: #66fcf1;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    font-size: .8em;\r\n    letter-spacing: 1.5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #66fcf1;\r\n    text-decoration: none;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    left: 0;\r\n    transition: all .35s ease-Out;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n#down-arrow[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #66fcf1;\r\n    left: -200px;\r\n    position: absolute;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all .35s ease-Out;\r\n    bottom: 0;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #1f2833;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]:hover   #down-arrow[_ngcontent-%COMP%] {\r\n    left: 0;\r\n}\r\n\r\n#download-cv[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    left: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE1BQU07QUFDVjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBSUEsa0JBQWtCOztBQUNsQjtJQUNJLGdCQUFnQjtJQUVoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFFYixtQkFBbUI7SUFFbkIsdUJBQXVCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFFUCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFFVixhQUFhO0lBRUwsbUJBQW1CO0lBRW5CLHVCQUF1QjtJQUUvQiw2QkFBNkI7SUFDN0IsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuLnJlc3VtZS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5mdWxsLWxpbmsge1xyXG4gICAgd2lkdGg6IG1pbigyMDBweCwgNDB2dyk7XHJcbiAgICBtYXJnaW46IDV2dyA1dncgNXZ3IDA7XHJcbn1cclxuXHJcblxyXG4ucmVzdW1lLWJ1dHRvbnMgYnV0dG9uIHtcclxuICAgIC8qd2lkdGg6IDMwMHB4OyovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NmZjZjE7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICM2NmZjZjE7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXN1bWUtYnV0dG9ucyBpIHtcclxuICAgIHRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5yZXN1bWUtYnV0dG9ucyBpOmhvdmVyIHtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnJlc3VtZS1idXR0b25zIHNwYW46aG92ZXIge1xyXG4gICAgdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5yZXN1bWUtYnV0dG9ucyBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5YztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLmN2LWRvd25sb2FkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMi41JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jdi1kb3dubG9hZCAubGFuZ3VhZ2UgcCB7XHJcbiAgICBjb2xvcjogI2M1YzZjNztcclxufVxyXG5cclxuXHJcblxyXG4vKkRvd25sb2FkIGJ1dHRvbiovXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzY2ZmNmMTtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4jZG93bmxvYWQtY3Ygc3BhbiB7XHJcbiAgICBjb2xvcjogIzY2ZmNmMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbiNkb3dubG9hZC1jdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZG93bmxvYWQtY3Ygc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLU91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtT3V0O1xyXG59XHJcblxyXG4jZG93bmxvYWQtY3YgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNkb3duLWFycm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzY2ZmNmMTtcclxuICAgIGxlZnQ6IC0yMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1PdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLU91dDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuI2Rvd25sb2FkLWN2IGkge1xyXG4gICAgY29sb3I6ICMxZjI4MzM7XHJcbn1cclxuXHJcbiNkb3dubG9hZC1jdjpob3ZlciAjZG93bi1hcnJvdyB7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jZG93bmxvYWQtY3Y6aG92ZXIgc3BhbiB7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/timeline/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/timeline/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppTimelineEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EventService = /*#__PURE__*/function () {
      function EventService(http) {
        _classCallCheck(this, EventService);

        this.http = http;
        this.eventUrl = 'assets/events.json';
      }

      _createClass(EventService, [{
        key: "getEvents",
        value: function getEvents() {
          return this.http.get(this.eventUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('All: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return EventService;
    }();

    EventService.ɵfac = function EventService_Factory(t) {
      return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventService,
      factory: EventService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/timeline/logo-pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/timeline/logo-pipe.ts ***!
    \***************************************/

  /*! exports provided: LogoPipe */

  /***/
  function srcAppTimelineLogoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoPipe", function () {
      return LogoPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoPipe = /*#__PURE__*/function () {
      function LogoPipe() {
        _classCallCheck(this, LogoPipe);
      }

      _createClass(LogoPipe, [{
        key: "transform",
        value: function transform(value) {
          var ret_value = "";

          switch (value) {
            case "experience":
              ret_value = "fas fa-briefcase fa-lg";
              break;

            case "education":
              ret_value = "fas fa-user-graduate fa-lg";
              break;

            case "teaching":
              ret_value = "fas fa-chalkboard-teacher fa-lg";
              break;

            case "publication":
              ret_value = "fas fa-book fa-lg";
              break;

            case "course":
              ret_value = "fas fa-certificate fa-lg";
              break;

            case "competition":
              ret_value = "fas fa-trophy fa-lg";
              break;

            case "misc":
              ret_value = "fas fa-theater-masks fa-lg";
              break;

            default:
              console.log("Warning: No logo found for " + value);
              break;
          }

          return ret_value;
        }
      }]);

      return LogoPipe;
    }();

    LogoPipe.ɵfac = function LogoPipe_Factory(t) {
      return new (t || LogoPipe)();
    };

    LogoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "logopipe",
      type: LogoPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'logopipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/timeline/timeline.component.ts":
  /*!************************************************!*\
    !*** ./src/app/timeline/timeline.component.ts ***!
    \************************************************/

  /*! exports provided: TimelineComponent */

  /***/
  function srcAppTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimelineComponent", function () {
      return TimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animation */
    "./src/app/animation.ts");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/timeline/event.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _appear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../appear */
    "./src/app/appear.ts");
    /* harmony import */


    var _logo_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./logo-pipe */
    "./src/app/timeline/logo-pipe.ts");

    function TimelineComponent_i_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
      }
    }

    function TimelineComponent_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 29);
      }
    }

    function TimelineComponent_i_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
      }
    }

    function TimelineComponent_i_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 29);
      }
    }

    function TimelineComponent_ul_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimelineComponent_ul_62_Template_input_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var tag_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.toggleTag(tag_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", tag_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tag_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", tag_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r6);
      }
    }

    function TimelineComponent_div_64_span_1_h3_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dept_r16 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dept_r16, " ");
      }
    }

    function TimelineComponent_div_64_span_1_div_13_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r19);
      }
    }

    function TimelineComponent_div_64_span_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimelineComponent_div_64_span_1_div_13_button_2_Template, 2, 1, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tags_r17 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tags_r17);
      }
    }

    function TimelineComponent_div_64_span_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cert_r20 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cert_r20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function TimelineComponent_div_64_span_1_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var start_r21 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", start_r21, " - ");
      }
    }

    function TimelineComponent_div_64_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "logopipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimelineComponent_div_64_span_1_h3_7_Template, 2, 2, "h3", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TimelineComponent_div_64_span_1_div_13_Template, 3, 1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TimelineComponent_div_64_span_1_div_14_Template, 3, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TimelineComponent_div_64_span_1_ng_container_18_Template, 2, 1, "ng-container", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var event_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("cd-timeline-img ", event_r9.eventName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 20, event_r9.eventName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.role);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r9.department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.enterprise);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r9.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r9.tags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r9.certificate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 22, event_r9.startDate, "MM/yyyy"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 25, event_r9.endDate, "MM/yyyy"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", event_r9.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoom", undefined);
      }
    }

    function TimelineComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function TimelineComponent_div_64_Template_div_appear_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var i_r10 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onAppear(i_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_div_64_span_1_Template, 23, 28, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.hasAppeared[i_r10]);
      }
    }

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "color": a0,
        "border-color": a1
      };
    };

    var TimelineComponent = /*#__PURE__*/function () {
      function TimelineComponent(eventService, route) {
        _classCallCheck(this, TimelineComponent);

        this.eventService = eventService;
        this.route = route;
        this.errorMessage = '';
        this.expanded = false;
        this.tagExpanded = false;
        this.listFilter = {
          "experience": true,
          "education": true,
          "teaching": true,
          "publication": true,
          "course": true,
          "competition": true,
          "misc": true
        };
        this._selectAll = true;
        this.events = [];
        this.hasAppeared = new Array(this.events.length);
        this.tagsOfEvents = new Set();
        this.tagFilter = new Set();
      }

      _createClass(TimelineComponent, [{
        key: "selectAll",
        get: function get() {
          return this._selectAll;
        },
        set: function set(value) {
          this._selectAll = value;
          var input = document.getElementsByClassName('label__checkbox'); // .getElementsByTagName('input')

          for (var i = 0; i < input.length; i++) {
            input[i].checked = value;
          }

          this.listFilter.education = value;
          this.listFilter.experience = value;
          this.listFilter.teaching = value;
          this.listFilter.publication = value;
          this.listFilter.course = value;
          this.listFilter.competition = value;
          this.listFilter.misc = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //AOS.init();
          var id = this.route.snapshot.paramMap.get('id');
          var start_value = false;

          if (id in this.listFilter) {
            this.selectAll = false; // This will set all to false automatically.

            this.updateSelectAll();
            start_value = true;

            switch (id) {
              case "experience":
                this.listFilter.experience = true;
                break;

              case "education":
                this.listFilter.education = true;
                break;

              case "teaching":
                this.listFilter.teaching = true;
                break;

              case "publication":
                this.listFilter.publication = true;
                break;

              case "course":
                this.listFilter.course = true;
                break;

              case "competition":
                this.listFilter.competition = true;
                break;

              case "misc":
                this.listFilter.misc = true;
                break;

              default:
                console.log("Warning: I should never have gotten here");
                break;
            }
          }

          this.eventService.getEvents().subscribe({
            next: function next(data) {
              _this4.events = _this4.parseData(data);
              _this4.filteredEvents = _this4.performFilter();

              _this4.events.forEach(function (event) {
                return event.tags && event.tags.forEach(function (tag) {
                  return _this4.tagsOfEvents.add(tag);
                });
              }); //console.log(this.tagsOfEvents);

            },
            error: function error(err) {
              return _this4.errorMessage = err;
            }
          });

          for (var i = 1; i < this.hasAppeared.length; i++) {
            this.hasAppeared[i] = start_value;
          }

          this.hasAppeared[0] = true;
        }
      }, {
        key: "parseData",
        value: function parseData(data) {
          var _iterator = _createForOfIteratorHelper(data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var event = _step.value;

              if (event.endDate == "Present") {
                event.endDate = new Date();
              } else {
                event.endDate = new Date(event.endDate);
              }

              if (data.hasOwnProperty('startDate')) {
                event.startDate = new Date(event.startDate);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return data.sort(function (a, b) {
            return b.endDate - a.endDate;
          });
        }
      }, {
        key: "changeToCheckbox",
        value: function changeToCheckbox() {
          //console.log("Change done to checkbox");
          this.updateSelectAll();
          this.filteredEvents = this.performFilter();
        }
      }, {
        key: "performFilter",
        value: function performFilter() {
          var _this5 = this;

          var temporalEvent = [];

          var _iterator2 = _createForOfIteratorHelper(this.events),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var event = _step2.value;

              if (this.listFilter.hasOwnProperty(event.eventName)) {
                if (this.listFilter[event.eventName]) {
                  if (this.tagFilter.size == 0 || event.tags && event.tags.some(function (tag) {
                    return _this5.tagFilter.has(tag);
                  })) {
                    temporalEvent.push(event);
                  }
                }
              } else {
                console.log("Warning, unknown property " + event.eventName);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return temporalEvent;
        }
      }, {
        key: "showCheckboxes",
        value: function showCheckboxes() {
          var checkboxes = document.getElementById("type_checkboxes");

          if (!this.expanded) {
            checkboxes.style.display = "flex";
            this.expanded = true;
          } else {
            checkboxes.style.display = "none";
            this.expanded = false;
          }

          checkboxes = document.getElementById("tag_checkboxes");
          checkboxes.style.display = "none";
          this.tagExpanded = false;
        }
      }, {
        key: "showTags",
        value: function showTags() {
          var checkboxes = document.getElementById("tag_checkboxes");

          if (!this.tagExpanded) {
            checkboxes.style.display = "flex";
            this.tagExpanded = true;
          } else {
            checkboxes.style.display = "none";
            this.tagExpanded = false;
          }

          checkboxes = document.getElementById("type_checkboxes");
          checkboxes.style.display = "none";
          this.expanded = false;
        }
      }, {
        key: "onAppear",
        value: function onAppear(variable) {
          this.hasAppeared[variable] = true;
        }
      }, {
        key: "allTrue",
        value: function allTrue() {
          for (var key in this.listFilter) {
            if (this.listFilter.hasOwnProperty(key)) {
              // check if the property/key is defined in the object itself, not in parent    
              //console.log(key, this.listFilter[key]);     
              if (!this.listFilter[key]) {
                //console.log("All not true");
                return false;
              }
            }
          } //console.log("All true");


          return true;
        }
      }, {
        key: "allFalse",
        value: function allFalse() {
          for (var key in this.listFilter) {
            if (this.listFilter.hasOwnProperty(key)) {
              // check if the property/key is defined in the object itself, not in parent    
              //console.log(key, this.listFilter[key]);     
              if (this.listFilter[key]) {
                return false;
              }
            }
          }

          return true;
        }
      }, {
        key: "updateSelectAll",
        value: function updateSelectAll() {
          /*
          Changes the value of Select all if all checkboxes are in the same state.
          */
          //console.log("Update select all");
          if (this.allFalse()) {
            $(document).ready(function () {
              $("#type_checkboxes span").text('Select All');
            });
            this.selectAll = false;
          } else if (this.allTrue()) {
            //console.log("All true");
            $(document).ready(function () {
              $("#type_checkboxes span").text('Deselect All');
            });
            this.selectAll = true;
          }
        }
      }, {
        key: "toggleTag",
        value: function toggleTag(tagName) {
          if (this.tagFilter.has(tagName)) {
            //console.log("Deleting " + tagName);
            this.tagFilter["delete"](tagName);
          } else {
            //console.log("Adding " + tagName);
            this.tagFilter.add(tagName);
          } //console.log(this.tagFilter);


          this.filteredEvents = this.performFilter();
        }
      }]);

      return TimelineComponent;
    }();

    TimelineComponent.ɵfac = function TimelineComponent_Factory(t) {
      return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimelineComponent,
      selectors: [["app-timeline"]],
      decls: 65,
      vars: 93,
      consts: [["id", "body"], [1, "sidebar"], [3, "click"], ["class", "fas fa-angle-right", 4, "ngIf"], ["class", "fas fa-angle-left", 4, "ngIf"], ["id", "type_checkboxes"], [1, "check_item"], ["type", "checkbox", "id", "select-all", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "select-all"], ["id", "selectallspan"], ["type", "checkbox", "id", "education", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "education", 3, "ngStyle"], ["type", "checkbox", "id", "experience", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "experience", 3, "ngStyle"], ["type", "checkbox", "id", "teaching", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "teaching", 3, "ngStyle"], ["type", "checkbox", "id", "publication", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "publication", 3, "ngStyle"], ["type", "checkbox", "id", "course", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "course", 3, "ngStyle"], ["type", "checkbox", "id", "competition", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "competition", 3, "ngStyle"], ["type", "checkbox", "id", "misc", 1, "label__checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "misc", 3, "ngStyle"], ["id", "tag_checkboxes", 1, "container"], ["class", "ks-cboxtags", 4, "ngFor", "ngForOf"], ["id", "cd-timeline", 1, "cd-container"], ["class", "cd-timeline-block", 3, "appear", 4, "ngFor", "ngForOf"], [1, "fas", "fa-angle-right"], [1, "fas", "fa-angle-left"], [1, "ks-cboxtags"], ["type", "checkbox", 3, "id", "value", "change"], [3, "for"], [1, "cd-timeline-block", 3, "appear"], ["class", "container-all", 4, "ngIf"], [1, "container-all"], [1, "cd-timeline-content"], [4, "ngIf"], [1, "editor"], ["class", "tags", 4, "ngIf"], [1, "wrap"], [1, "cd-date"], [1, "far", "fa-calendar-alt"], ["alt", "enterprise-logo", 1, "enterprise-logo", 3, "src"], [1, "tags"], [1, "fas", "fa-tags", 2, "color", "white"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "fas", "fa-link", 2, "color", "#ffffff"]],
      template: function TimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_4_listener() {
            return ctx.showCheckboxes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimelineComponent_i_6_Template, 1, 0, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimelineComponent_i_7_Template, 1, 0, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimelineComponent_Template_button_click_9_listener() {
            return ctx.showTags();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimelineComponent_i_11_Template, 1, 0, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TimelineComponent_i_12_Template, 1, 0, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.selectAll = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_15_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Deselect All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.listFilter["education"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_20_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.listFilter["experience"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_26_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.listFilter["teaching"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_32_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Teachings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.listFilter["publication"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_38_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Publications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.listFilter["course"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_44_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_50_listener($event) {
            return ctx.listFilter["competition"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_50_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Competitions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_input_ngModelChange_56_listener($event) {
            return ctx.listFilter["misc"] = $event;
          })("ngModelChange", function TimelineComponent_Template_input_ngModelChange_56_listener() {
            return ctx.changeToCheckbox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "logopipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Miscellaneous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, TimelineComponent_ul_62_Template, 5, 4, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, TimelineComponent_div_64_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tagExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tagExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectAll)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](64, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["education"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](65, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](66, _c1, ctx.listFilter.education ? "#B48B7D" : "white", ctx.listFilter.education ? "#B48B7D" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 50, "education"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["experience"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](69, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](70, _c1, ctx.listFilter.experience ? "#DABECA" : "white", ctx.listFilter.experience ? "#DABECA" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 52, "experience"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["teaching"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](73, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](74, _c1, ctx.listFilter.teaching ? "#7FC6A4" : "white", ctx.listFilter.teaching ? "#7FC6A4" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 54, "teaching"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["publication"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](77, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](78, _c1, ctx.listFilter.publication ? "#6CA6C1" : "white", ctx.listFilter.publication ? "#6CA6C1" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 56, "publication"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["course"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](81, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](82, _c1, ctx.listFilter.course ? "#FFAD69" : "white", ctx.listFilter.course ? "#FFAD69" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 58, "course"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["competition"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](85, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](86, _c1, ctx.listFilter.competition ? "#F5E663" : "white", ctx.listFilter.competition ? "#F5E663" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 60, "competition"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listFilter["misc"])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](89, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](90, _c1, ctx.listFilter.misc ? "#D6F8D6" : "white", ctx.listFilter.misc ? "#D6F8D6" : "white"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 62, "misc"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagsOfEvents);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredEvents);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _appear__WEBPACK_IMPORTED_MODULE_6__["AppearDirective"]],
      pipes: [_logo_pipe__WEBPACK_IMPORTED_MODULE_7__["LogoPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    margin: 0px;\r\n    padding: 0px;\r\n    overflow-x: hidden; \r\n    overflow-y: hidden; \r\n}\r\n\r\nhtml[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n#body[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n  min-height: 100vh;\r\n  font-family: \"Droid Serif\", serif!important;\r\n  color: #7f8c97;\r\n  \r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.cd-container[_ngcontent-%COMP%] {\r\n  \r\n  width: 90%;\r\n  max-width: 1170px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.cd-container[_ngcontent-%COMP%]::after {\r\n  \r\n  content: '';\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  margin-bottom: 200px;\r\n}\r\n\r\n#cd-timeline[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 2em 0;\r\n  margin-top: 2em;\r\n  \r\n\r\n}\r\n\r\n#cd-timeline[_ngcontent-%COMP%]::before {\r\n  \r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 18px;\r\n  height: 100%;\r\n  width: 4px;\r\n  background: #0b0c10;\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  #cd-timeline[_ngcontent-%COMP%] {\r\n    margin-top: 0em;\r\n    \r\n  }\r\n  #cd-timeline[_ngcontent-%COMP%]::before {\r\n    left: 50%;\r\n    margin-left: -2px;\r\n  }\r\n}\r\n\r\n.cd-timeline-block[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 2rem 0;\r\n  min-height: 250px;\r\n}\r\n\r\n.cd-timeline-block[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.cd-timeline-block[_ngcontent-%COMP%]:first-child {\r\n  margin-top: 0;\r\n}\r\n\r\n.cd-timeline-block[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-block[_ngcontent-%COMP%] {\r\n    margin: 4em 0;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:first-child {\r\n    margin-top: 0;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.cd-timeline-img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 4px #0b0c10, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.cd-timeline-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: black;\r\n  \r\n  \r\n  position: relative;\r\n  left: 53%;\r\n  top: 55%;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n}\r\n\r\n.cd-timeline-img.experience[_ngcontent-%COMP%] {\r\n  background: #DABECA;\r\n}\r\n\r\n.cd-timeline-img.education[_ngcontent-%COMP%] {\r\n  background: #B48B7D;\r\n}\r\n\r\n.cd-timeline-img.teaching[_ngcontent-%COMP%] {\r\n  background: #7FC6A4;\r\n}\r\n\r\n.cd-timeline-img.publication[_ngcontent-%COMP%] {\r\n  background: #6CA6C1;\r\n}\r\n\r\n.cd-timeline-img.course[_ngcontent-%COMP%] {\r\n  background: #FFAD69;\r\n}\r\n\r\n.cd-timeline-img.competition[_ngcontent-%COMP%] {\r\n  background: #F5E663;\r\n}\r\n\r\n.cd-timeline-img.misc[_ngcontent-%COMP%] {\r\n  background: #D6F8D6;\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    left: 50%;\r\n    margin-left: -30px;\r\n    \r\n    -webkit-transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n  .cssanimations[_ngcontent-%COMP%]   .cd-timeline-img.is-hidden[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations[_ngcontent-%COMP%]   .cd-timeline-img.bounce-in[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-1 0.6s;\r\n    animation: cd-bounce-1 0.6s;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-left: 60px;\r\n  background: #45a29e;\r\n  border-radius: 0.25em;\r\n  padding: 1em;\r\n  box-shadow: 0 3px 0 #000000;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  \r\n  font-weight: 200;\r\n  font-family: 'Helvetica Neue', Helvetica, sans-serif !important;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  color: #ffffff;\r\n  \r\n  font-family: 'Helvetica Neue', Helvetica, sans-serif !important;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   .enterprise-logo[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  max-height: 200px;\r\n  height: auto;\r\n  \r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .cd-timeline-content[_ngcontent-%COMP%]   .enterprise-logo[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n  }\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .cd-timeline-content[_ngcontent-%COMP%]   .cd-read-more[_ngcontent-%COMP%], .cd-timeline-content[_ngcontent-%COMP%]   .cd-date[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-size: 13px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   .cd-read-more[_ngcontent-%COMP%], .cd-timeline-content[_ngcontent-%COMP%]   .cd-date[_ngcontent-%COMP%], .cd-timeline-content[_ngcontent-%COMP%]   .enterprise-logo[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 1em 0;\r\n  line-height: 1.6;\r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]   .cd-date[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  padding: 11px 2px;\r\n  opacity: .7;\r\n  color:#222222;\r\n  font-family: 'Helvetica Neue', Helvetica, sans-serif !important;\r\n  \r\n  \r\n  top: 6px;\r\n  font-size: 16px;\r\n  font-size: 1.5rem; \r\n}\r\n\r\n.cd-timeline-content[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 100%;\r\n  height: 0;\r\n  width: 0;\r\n  border: 7px solid transparent;\r\n  border-right: 7px solid #45a29e;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .cd-timeline-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    \r\n    font-size: 1.75rem;\r\n    font-weight: 200;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-family: 'Helvetica Neue', Helvetica, sans-serif !important;\r\n    font-weight: 200;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    font-size: 1rem;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   .cd-read-more[_ngcontent-%COMP%], .cd-timeline-content[_ngcontent-%COMP%]   .cd-date[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n.fas[_ngcontent-%COMP%]   fa-angle-right[_ngcontent-%COMP%]{\r\n  transform: rotate(0deg);\r\n  transition: transform 1s linear;\r\n}\r\n\r\n.fas[_ngcontent-%COMP%]   fa-angle-left[_ngcontent-%COMP%]{\r\n  transform: rotate(180deg);\r\n  transition: transform 1s linear;\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-content[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n    padding: 1.6em;\r\n    width: 45%;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: 200;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]::before {\r\n    top: 24px;\r\n    left: 100%;\r\n    border-color: transparent;\r\n    border-left-color: #45a29e;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   .cd-read-more[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  .cd-timeline-content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    min-width: 230px;\r\n    left: 122%;\r\n    top: 6px;\r\n    font-size: 16px;\r\n    font-size: 1.5rem;\r\n    font-family: 'Helvetica Neue', Helvetica, sans-serif !important;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:nth-child(even)   .cd-timeline-content[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:nth-child(even)   .cd-timeline-content[_ngcontent-%COMP%]::before {\r\n    top: 24px;\r\n    left: auto;\r\n    right: 100%;\r\n    border-color: transparent;\r\n    border-right-color: #45a29e;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:nth-child(even)   .cd-timeline-content[_ngcontent-%COMP%]   .cd-read-more[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block[_ngcontent-%COMP%]:nth-child(even)   .cd-timeline-content[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\r\n    left: auto;\r\n    right: 122%;\r\n    text-align: right;\r\n    \r\n    \r\n  }\r\n  .cssanimations[_ngcontent-%COMP%]   .cd-timeline-content.is-hidden[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations[_ngcontent-%COMP%]   .cd-timeline-content.bounce-in[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-2 0.6s;\r\n    animation: cd-bounce-2 0.6s;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  \r\n  .cssanimations[_ngcontent-%COMP%]   .cd-timeline-block[_ngcontent-%COMP%]:nth-child(even)   .cd-timeline-content.bounce-in[_ngcontent-%COMP%] {\r\n    -webkit-animation: cd-bounce-2-inverse 0.6s;\r\n    animation: cd-bounce-2-inverse 0.6s;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.trigger[_ngcontent-%COMP%]{\r\n  background: #F6AE2D;\r\n  display:inline-block;\r\n  width: 100px;\r\n  height:40px;\r\n  border-radius:5px;\r\n  box-shadow: 0 2px 20px rgba(0,0,0,.7), inset 0 1px 0 rgba(255,255,255, .2);\r\n  color:white;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .trigger[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  position:absolute;\r\n  width:100%;\r\n  height:100%;\r\n  left:0;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  overflow:hidden;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{\r\n  transition: top .3s;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  transition: top .3s;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{\r\n  top:0;\r\n  line-height:40px;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  top:100%;\r\n  }\r\n\r\n.trigger[_ngcontent-%COMP%]:hover   em[_ngcontent-%COMP%]{\r\n  top:-100%;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n  top:12px;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]::before, .trigger[_ngcontent-%COMP%]::after{\r\n  position: absolute;\r\n  opacity:0;\r\n  transition: opcacity .3s;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]::before{\r\n  content: 'Download';\r\n  \r\n  width:140px;\r\n  height:40px;\r\n  line-height:40px;\r\n  background: #2F4858;\r\n  border-radius:.25em;\r\n  bottom:55px;\r\n  left: calc(50% - 70px);\r\n  left: -o-calc(50% - 70px);\r\n  left: -webkit-calc(50% - 70px);\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]::after{\r\n  content:'';\r\n  width:0;\r\n  height:0;\r\n  border:10px solid transparent;\r\n  border-top-color:#2F4858;\r\n  left: calc(50% - 10px);\r\n  left: -o-calc(50% - 10px);\r\n  left:-webkit-calc(50% - 10px);\r\n  bottom: 35px;\r\n  \r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]:hover::before, .trigger[_ngcontent-%COMP%]:hover::after{\r\n  opacity:1;\r\n}\r\n\r\n.headline[_ngcontent-%COMP%]{\r\n  color: #f6ae2d;\r\n}\r\n\r\n.multiselect[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.selectBox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.selectBox[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-weight: bold;\r\n}\r\n\r\n.overSelect[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n\r\n#type_checkboxes[_ngcontent-%COMP%] {\r\n  display: none;\r\n  padding-top: 22px;\r\n  \r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n  flex-flow: column wrap;\r\n  height: 200px;\r\n}\r\n\r\n#type_checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  color: white;\r\n  border: 1px solid white;\r\n  border-radius: 25px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  \r\n  \r\n  \r\n}\r\n\r\n#type_checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n#type_checkboxes[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\r\n  background-color: #5A6B7D;\r\n}\r\n\r\n.check_item[_ngcontent-%COMP%] {\r\n  flex-wrap: nowrap;\r\n  margin: 15px;\r\n}\r\n\r\n#type_checkboxes[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  margin: .4rem;\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  text-transform: capitalize;\r\n  border: 1.5px solid #ffffff;\r\n  padding: 1.5px 3px;\r\n  border-radius: 10px;\r\n  color: #ffffff;\r\n  font-size: 1rem;\r\n  letter-spacing: 1px;\r\n  background-color: transparent;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n  \r\n  left: 0;\r\n  width: 100%;\r\n  height: 200px;\r\n  background: #0B0C10;\r\n  display: grid;\r\n  grid-template-columns: 300px auto 200px;\r\n   \r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   #type_checkboxes[_ngcontent-%COMP%], #tag_checkboxes[_ngcontent-%COMP%]{\r\n  grid-column-start: 2;\r\n  grid-column-end: 2;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  grid-column-start: 1;\r\n  grid-column-end: 1;\r\n  grid-row-start: 1;\r\n  grid-row-end: 1;\r\n  height: 100%;\r\n  width: 100%;\r\n  line-height: 65px;\r\n  font-size: 20px;\r\n  color: white;\r\n  background-color: transparent;\r\n  cursor: pointer;\r\n  \r\n  box-sizing: border-box;\r\n  border-top: 1px solid rgba(255, 255, 255, .1);\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{\r\n  padding-left: 20px;\r\n  background-color: #1f2833;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  max-height: 50px; \r\n  margin: 20px;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 13px;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%] {\r\n  list-style: none; \r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  \r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  background-color: rgba(255, 255, 255, .9);\r\n  border: 2px solid rgba(139, 139, 139, .3);\r\n  color: #adadad;\r\n  border-radius: 20px;\r\n  white-space: nowrap;\r\n  margin: 3px 1.5px;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n  transition: all .2s;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding: 8px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\r\n  \r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: \"Font Awesome 5 Free\";\r\n  font-weight: 900;\r\n  font-size: 10px;\r\n  padding: 1px 5px 1px 1px;\r\n  content: \"\\f067\";\r\n  transition: transform .3s ease-in-out;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n  transform: rotate(-360deg);\r\n  transition: transform .3s ease-in-out;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  border: 2px solid #45a29e;\r\n  background-color: #45a29e;\r\n  color: #fff;\r\n  transition: all .2s;\r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\nul.ks-cboxtags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n\r\n\r\n\r\n#tag_checkboxes[_ngcontent-%COMP%] {\r\n  display: none;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1070px) {\r\n  .sidebar[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  #cd-timeline[_ngcontent-%COMP%] {\r\n    margin-top: 20vw;\r\n    \r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n  \r\n\r\n  .cd-timeline-content[_ngcontent-%COMP%] {\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .cd-timeline-img[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  #cd-timeline[_ngcontent-%COMP%]::before {\r\n    display: none;\r\n  }\r\n\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25COztBQUVBOzs7O2tDQUlrQzs7QUFFbEM7RUFDRSxzSUFBc0k7RUFDdEksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBOzs7O2tDQUlrQzs7QUFFbEM7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7O0FBRXhCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUdBQWlHO0FBQ25HOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsVUFBVTtJQUNWLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQWdCQTtFQUNFO0lBQ0UsVUFBVTtJQUtWLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFLVixxQkFBcUI7RUFDdkI7O0VBRUE7SUFLRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQiwrREFBK0Q7QUFDakU7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLCtEQUErRDtBQUNqRTs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLCtEQUErRDtFQUMvRCxzQkFBc0I7RUFDdEI7Z0JBQ2M7RUFDZCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsK0RBQStEO0lBQy9ELGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7SUFDekIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFFBQVE7SUFDUixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtEQUErRDtFQUNqRTtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qjs0QkFDd0I7RUFDMUI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUVuQywyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRDtJQUNFLDJDQUEyQztJQUUzQyxtQ0FBbUM7RUFDckM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFnQkE7RUFDRTtJQUNFLFVBQVU7SUFLViw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0lBS1YsMkJBQTJCO0VBQzdCOztFQUVBO0lBS0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFDRSxVQUFVO0lBS1YsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsVUFBVTtJQUtWLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUtFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBLG9CQUFvQjs7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7O0FBRUYsb0RBQW9EOztBQUNwRDs7Ozs7Ozs7O0lBU0k7O0FBRUosa0JBQWtCOztBQUdsQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEVBQTBFO0VBQzFFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLE1BQU07QUFDUjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxLQUFLO0VBQ0wsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsUUFBUTtFQUNSOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFJVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFFekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBRXpCLDZCQUE2QjtFQUM3QixZQUFZOztBQUVkOztBQUVBOztFQUVFLFNBQVM7QUFDWDs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBR0E7Ozs7a0NBSWtDOztBQUVsQztFQUNFLHFCQUFxQjtFQUNyQixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDZDQUE2QztFQUM3Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztDQUVDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0REFBNEQ7RUFDNUQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBQ0E7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBSUEsZ0JBQWdCOztBQUVoQjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztFQUNwQztBQUNGOztBQUVBOzs7RUFHRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7S0FFRztBQUNMIiwiZmlsZSI6InNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keVxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47IFxyXG59XHJcblxyXG5odG1sICoge1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNib2R5IHtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiRHJvaWQgU2VyaWZcIiwgc2VyaWYhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjN2Y4Yzk3O1xyXG4gIC8qYmFja2dyb3VuZDogI2YyZjJmMiFpbXBvcnRhbnQ7Ki9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuTW9kdWxlcyAtIHJldXNhYmxlIHBhcnRzIG9mIG91ciBkZXNpZ25cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uY2QtY29udGFpbmVyIHtcclxuICAvKiB0aGlzIGNsYXNzIGlzIHVzZWQgdG8gZ2l2ZSBhIG1heC13aWR0aCB0byB0aGUgZWxlbWVudCBpdCBpcyBhcHBsaWVkIHRvLCBhbmQgY2VudGVyIGl0IGhvcml6b250YWxseSB3aGVuIGl0IHJlYWNoZXMgdGhhdCBtYXgtd2lkdGggKi9cclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICAvKiBjbGVhcmZpeCAqL1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcclxuXHJcbk1haW4gY29tcG9uZW50cyBcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59XHJcbiNjZC10aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICAvKm1hcmdpbi1ib3R0b206IDJlbTsqL1xyXG5cclxufVxyXG4jY2QtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgLyogdGhpcyBpcyB0aGUgdmVydGljYWwgbGluZSAqL1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMThweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjMGIwYzEwO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XHJcbiAgI2NkLXRpbWVsaW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogM2VtOyovXHJcbiAgfVxyXG4gICNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAuY2QtdGltZWxpbmUtYmxvY2sge1xyXG4gICAgbWFyZ2luOiA0ZW0gMDtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzBiMGMxMCwgaW5zZXQgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDNweCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5jZC10aW1lbGluZS1pbWcgaSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIC8qd2lkdGg6IDYwMHB4OyovXHJcbiAgLyogaGVpZ2h0OiA2MDBweDsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTMlO1xyXG4gIHRvcDogNTUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICBtYXJnaW4tdG9wOiAtMTJweDtcclxufVxyXG4uY2QtdGltZWxpbmUtaW1nLmV4cGVyaWVuY2Uge1xyXG4gIGJhY2tncm91bmQ6ICNEQUJFQ0E7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWltZy5lZHVjYXRpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNCNDhCN0Q7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWltZy50ZWFjaGluZyB7XHJcbiAgYmFja2dyb3VuZDogIzdGQzZBNDtcclxufVxyXG4uY2QtdGltZWxpbmUtaW1nLnB1YmxpY2F0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiAjNkNBNkMxO1xyXG59XHJcblxyXG4uY2QtdGltZWxpbmUtaW1nLmNvdXJzZSB7XHJcbiAgYmFja2dyb3VuZDogI0ZGQUQ2OTtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWltZy5jb21wZXRpdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI0Y1RTY2MztcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWltZy5taXNjIHtcclxuICBiYWNrZ3JvdW5kOiAjRDZGOEQ2O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzBweCkge1xyXG4gIC5jZC10aW1lbGluZS1pbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAuY3NzYW5pbWF0aW9ucyAuY2QtdGltZWxpbmUtaW1nLmlzLWhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jc3NhbmltYXRpb25zIC5jZC10aW1lbGluZS1pbWcuYm91bmNlLWluIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2QtYm91bmNlLTEgMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjZC1ib3VuY2UtMSAwLjZzO1xyXG4gICAgYW5pbWF0aW9uOiBjZC1ib3VuY2UtMSAwLjZzO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNkLWJvdW5jZS0xIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBjZC1ib3VuY2UtMSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLWJvdW5jZS0xIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4uY2QtdGltZWxpbmUtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0NWEyOWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3gtc2hhZG93OiAwIDNweCAwICMwMDAwMDA7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIC8qZm9udC1zaXplOiAxLjc1cmVtOyovXHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDN7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLypmb250LXNpemU6IDEuNzVyZW07Ki9cclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmVudGVycHJpc2UtbG9nbyB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgLyptaW4td2lkdGg6IDEwMCU7Ki9cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuZW50ZXJwcmlzZS1sb2dvIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gIH1cclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCwgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSwgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uY2QtdGltZWxpbmUtY29udGVudCAuY2QtcmVhZC1tb3JlLCAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSwgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmVudGVycHJpc2UtbG9nbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gIC8qdGV4dC1hbGlnbjogcmlnaHQ7Ki9cclxuICAvKmZsb2F0OiBsZWZ0OyovXHJcbiAgcGFkZGluZzogMTFweCAycHg7XHJcbiAgb3BhY2l0eTogLjc7XHJcbiAgY29sb3I6IzIyMjIyMjtcclxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cclxuICAvKndpZHRoOiAxMDAlO1xyXG4gIC8qbGVmdDogMTIyJTsqL1xyXG4gIHRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXNpemU6IDEuNXJlbTsgXHJcbn1cclxuXHJcbi5jZC10aW1lbGluZS1jb250ZW50OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE2cHg7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICM0NWEyOWU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIC8qZm9udC1zaXplOiAyMHB4OyovXHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSwgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmFzIGZhLWFuZ2xlLXJpZ2h0e1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5mYXMgZmEtYW5nbGUtbGVmdHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxLjZlbTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIC8qZm9udC1zaXplOiAyMHB4OyovXHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM0NWEyOWU7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC53cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIGxlZnQ6IDEyMiU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2QtdGltZWxpbmUtYmxvY2s6bnRoLWNoaWxkKGV2ZW4pIC5jZC10aW1lbGluZS1jb250ZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOm50aC1jaGlsZChldmVuKSAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM0NWEyOWU7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpudGgtY2hpbGQoZXZlbikgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpudGgtY2hpbGQoZXZlbikgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLndyYXAge1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiAxMjIlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAvKmp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Ki9cclxuICAgIC8qYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cclxuICB9XHJcbiAgLmNzc2FuaW1hdGlvbnMgLmNkLXRpbWVsaW5lLWNvbnRlbnQuaXMtaGlkZGVuIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNzc2FuaW1hdGlvbnMgLmNkLXRpbWVsaW5lLWNvbnRlbnQuYm91bmNlLWluIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2QtYm91bmNlLTIgMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uOiBjZC1ib3VuY2UtMiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uOiBjZC1ib3VuY2UtMiAwLjZzO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAvKiBpbnZlcnNlIGJvdW5jZSBlZmZlY3Qgb24gZXZlbiBjb250ZW50IGJsb2NrcyAqL1xyXG4gIC5jc3NhbmltYXRpb25zIC5jZC10aW1lbGluZS1ibG9jazpudGgtY2hpbGQoZXZlbikgLmNkLXRpbWVsaW5lLWNvbnRlbnQuYm91bmNlLWluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjZC1ib3VuY2UtMi1pbnZlcnNlIDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogY2QtYm91bmNlLTItaW52ZXJzZSAwLjZzO1xyXG4gICAgYW5pbWF0aW9uOiBjZC1ib3VuY2UtMi1pbnZlcnNlIDAuNnM7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1ib3VuY2UtMiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIGNkLWJvdW5jZS0yIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGNkLWJvdW5jZS0yIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBjZC1ib3VuY2UtMi1pbnZlcnNlIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgY2QtYm91bmNlLTItaW52ZXJzZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBjZC1ib3VuY2UtMi1pbnZlcnNlIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBCdXR0b24gZG93bmxvYWQgKi9cclxuLypcclxuLmRvd25sb2FibGUtbGlua3N7bWFyZ2luOjM1cHggMHB4O31cclxuXHJcbiosICo6OmFmdGVyLCAqOjpiZWZvcmV7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG59XHJcblxyXG5cclxuc2VjdGlvbiAudHJpZ2dlcntcclxuICBmb250LXNpemU6MS42cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59Ki9cclxuXHJcbi8qICBDZW50cmEgbCdlbGVtZW50IGFsIG1pZyBkZSBsYSBwxIYgZ2luYSBvIGRlbCBEaXYqL1xyXG4vKlxyXG4gIHNlY3Rpb257XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTp0YWJsZTtcclxuICB9XHJcbiAgc2VjdGlvbiAuY2VudGVye1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH0qL1xyXG5cclxuLyogRmkgZGVsIGNlbnRyYXQqL1xyXG5cclxuXHJcbi50cmlnZ2Vye1xyXG4gIGJhY2tncm91bmQ6ICNGNkFFMkQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwuNyksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwgLjIpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4udHJpZ2dlciBzcGFuLCAudHJpZ2dlciBlbSwgLnRyaWdnZXIgaXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGxlZnQ6MDtcclxufVxyXG5cclxuLnRyaWdnZXIgc3BhbntcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi50cmlnZ2VyIGVte1xyXG4gIHRyYW5zaXRpb246IHRvcCAuM3M7XHJcbn1cclxuXHJcbi50cmlnZ2VyIGl7XHJcbiAgdHJhbnNpdGlvbjogdG9wIC4zcztcclxufVxyXG5cclxuLnRyaWdnZXIgZW17XHJcbiAgdG9wOjA7XHJcbiAgbGluZS1oZWlnaHQ6NDBweDtcclxufVxyXG4udHJpZ2dlciBpIHtcclxuICB0b3A6MTAwJTtcclxuICB9XHJcblxyXG4udHJpZ2dlcjpob3ZlciBlbXtcclxuICB0b3A6LTEwMCU7XHJcbn1cclxuLnRyaWdnZXI6aG92ZXIgaXtcclxuICB0b3A6MTJweDtcclxufVxyXG5cclxuLnRyaWdnZXI6OmJlZm9yZSwgLnRyaWdnZXI6OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGNhY2l0eSAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGNhY2l0eSAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogb3BjYWNpdHkgLjNzO1xyXG4gIHRyYW5zaXRpb246IG9wY2FjaXR5IC4zcztcclxufVxyXG5cclxuLnRyaWdnZXI6OmJlZm9yZXtcclxuICBjb250ZW50OiAnRG93bmxvYWQnO1xyXG4gIFxyXG4gIHdpZHRoOjE0MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgYmFja2dyb3VuZDogIzJGNDg1ODtcclxuICBib3JkZXItcmFkaXVzOi4yNWVtO1xyXG4gIGJvdHRvbTo1NXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzBweCk7XHJcbiAgbGVmdDogLW8tY2FsYyg1MCUgLSA3MHB4KTtcclxuICBsZWZ0OiAtbW96LWNhbGMoNTAlIC0gNzBweCk7XHJcbiAgbGVmdDogLXdlYmtpdC1jYWxjKDUwJSAtIDcwcHgpO1xyXG59XHJcblxyXG4udHJpZ2dlcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDonJztcclxuICB3aWR0aDowO1xyXG4gIGhlaWdodDowO1xyXG4gIGJvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IzJGNDg1ODtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIGxlZnQ6IC1vLWNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbGVmdDotbW96LWNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbGVmdDotd2Via2l0LWNhbGMoNTAlIC0gMTBweCk7XHJcbiAgYm90dG9tOiAzNXB4O1xyXG4gIFxyXG59XHJcblxyXG4udHJpZ2dlcjpob3Zlcjo6YmVmb3JlLFxyXG4udHJpZ2dlcjpob3Zlcjo6YWZ0ZXJ7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG5cclxuLmhlYWRsaW5le1xyXG4gIGNvbG9yOiAjZjZhZTJkO1xyXG59XHJcblxyXG5cclxuLm11bHRpc2VsZWN0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RCb3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlbGVjdEJveCBzZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3ZlclNlbGVjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuI3R5cGVfY2hlY2tib3hlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDogMjJweDtcclxuICAvKiBib3JkZXI6IDFweCAjYjFiMWIxIHNvbGlkOyAqL1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiN0eXBlX2NoZWNrYm94ZXMgbGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xyXG59XHJcblxyXG4jdHlwZV9jaGVja2JveGVzIGxhYmVsIGkge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuI3R5cGVfY2hlY2tib3hlcyBsYWJlbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDtcclxufVxyXG5cclxuLmNoZWNrX2l0ZW0ge1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuI3R5cGVfY2hlY2tib3hlcyBpbnB1dCB7XHJcbiAgbWFyZ2luOiAuNHJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udGFncyBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxLjVweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG5cclxuU2lkZWJhclxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5zaWRlYmFye1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzBCMEMxMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0byAyMDBweDtcclxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSAxMDBweCBhdXRvOyAqLyBcclxufVxyXG5cclxuLnNpZGViYXIgdWwgI3R5cGVfY2hlY2tib3hlcywgI3RhZ19jaGVja2JveGVze1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDE7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHVsIGJ1dHRvbntcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogNjVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKnBhZGRpbmctbGVmdDogMjBweDsqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxudWwgbGk6aG92ZXIgYnV0dG9ue1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyODMzO1xyXG59XHJcblxyXG4uc2lkZWJhciB1bCBidXR0b24gaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi8qXHJcblRhZ3NcclxuKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7IFxyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG51bC5rcy1jYm94dGFncyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvKnBhZGRpbmc6IDIwcHg7Ki9cclxufVxyXG51bC5rcy1jYm94dGFncyBsaXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbnVsLmtzLWNib3h0YWdzIGxpIGxhYmVse1xyXG4gIC8qZGlzcGxheTogaW5saW5lLWJsb2NrOyovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC45KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEzOSwgMTM5LCAxMzksIC4zKTtcclxuICBjb2xvcjogI2FkYWRhZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgbWFyZ2luOiAzcHggMS41cHg7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG51bC5rcy1jYm94dGFncyBsaSBsYWJlbCB7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bC5rcy1jYm94dGFncyBsaSBsYWJlbDo6YmVmb3JlIHtcclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogMXB4IDVweCAxcHggMXB4O1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDY3XCI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxudWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjAwY1wiO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbnVsLmtzLWNib3h0YWdzIGxpIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NWEyOWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTI5ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG59XHJcblxyXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIC8qZGlzcGxheTogYWJzb2x1dGU7Ki9cclxufVxyXG51bC5rcy1jYm94dGFncyBsaSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi8qdWwua3MtY2JveHRhZ3MgbGkgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmZvY3VzICsgbGFiZWwge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMmJiZDQ7XHJcbn0qL1xyXG5cclxuI3RhZ19jaGVja2JveGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIG1vYmlsZSB2aWV3ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzBweCkge1xyXG4gIC5zaWRlYmFye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNjZC10aW1lbGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZ3O1xyXG4gICAgLypzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTsgKi9cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICBcclxuXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5jZC10aW1lbGluZS1pbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiAuY2QtdGltZWxpbmUtYmxvY2sge1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcclxuICB9ICovXHJcbn0iXX0= */"],
      data: {
        animation: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.css'],
          animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["Animations"].Triggers]
        }]
      }], function () {
        return [{
          type: _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Catalina\Documents\GitHub\negu93.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map