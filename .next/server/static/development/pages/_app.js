module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.js */ "./styles/global.js");
var _jsxFileName = "D:\\DeveloperSoftware\\HyperionDev\\Task40-NextJSI\\portfolio\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Layout(props) {
  return __jsx("div", {
    className: "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_global_js__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles_global_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "D:\\DeveloperSoftware\\HyperionDev\\Task40-NextJSI\\portfolio\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("*{margin:0;}body{font-size:16px;background:white;font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;overflow-x:hidden;z-index:1;margin:0;padding:0;}header{font-size:1em;font-weight:400;margin-right:50em;}.header-section{min-height:100vh;background:url(\"/headerimage.jpg\");background-size:cover;width:100%;}.intro-text{font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;font-size:43px;text-align:left;line-height:2;}nav{position:fixed;right:0;z-index:20;}nav li{display:inline-block;}.nav-link{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;color:black;opacity:.5;padding:1em;}.nav-link:hover{opacity:1;}.about-container{min-height:100vh;background:white;background-size:cover;}.about-content{display:grid;grid-template-columns:auto 500px;}.about-description{font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;font-size:20px;text-align:left;display:inline-block;margin-top:30px;}.about-image{display:inline-block;width:500px;margin-top:30px;}.icon-horizontal-list li{display:inline-block;margin-right:5px;}.icon-horizontal-list li:hover{color:#0e4ba8;}.additional-skills-list{font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;font-size:20px;list-style:none;}.projects-section{background:url(\"/projectsimage.jpg\");background-size:cover;width:100%;}.projects-container{display:grid;grid-template-columns:50% 50%;}.projects-card{padding:10px 10px;margin:15px 15px;background-color:white;border-radius:8px;}.project-image{object-fit:cover;width:98%;}.fa-github:hover{color:#0e4ba8;}.fa-link:hover{color:#0e4ba8;}.fa-twitter:hover{color:#0e4ba8;}.fa-linkedin-in:hover{color:#0e4ba8;}.fa-reddit-alien:hover{color:#0e4ba8;}.contact-section{min-height:100vh;background:url(\"/contactimage.jpg\");background-size:cover;width:100%;}.contact-section h1{color:white;font-family:'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;}.contact-list-container{width:100%;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wZXJTb2Z0d2FyZVxcSHlwZXJpb25EZXZcXFRhc2s0MC1OZXh0SlNJXFxwb3J0Zm9saW9cXHN0eWxlc1xcZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV5QixBQUdnQixBQUdJLEFBVUQsQUFNRSxBQU02RCxBQU0vRCxBQU1PLEFBR04sQUFPTCxBQUdNLEFBS0gsQUFJZ0UsQUFPdEQsQUFLRixBQUlQLEFBRytELEFBS3hDLEFBS3hCLEFBSU8sQUFNRixBQUlKLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRSxBQU1KLEFBSUQsU0E5SGIsQ0ErQ0EsQ0FnRmdCLENBSitELENBcEU1QyxBQWlDSCxDQTNFZCxBQThEbEIsQUEyQkEsQUFHQSxBQUdBLEFBR0EsQUFHQSxDQS9HbUIsQUE0QlQsQUFTYSxFQXJCYyxBQStCbkIsQUFnREosQUFtQndCLENBekJqQixHQXZEckIsQUE2QmdCLEFBS0csRUF2Q04sRUFnR2IsRUE3QkEsR0FyRm9CLEVBVjJELENBK0QzRCxDQWxDcEIsQUFrQndCLENBMENHLEVBVkgsQ0FYeEIsS0FpQkEsR0FqQ0EsRUF6Q0EsQ0FxREEsR0FoRHdCLENBa0dBLEdBbEV4QixFQTBDcUIsQ0FWUixNQTNDQyxLQTRDZCxHQTVEaUIsQUFrQ0EsQUFtQkEsQ0F6REosQ0FrR0EsQ0F4QmIsQ0FyRGEsUUFwQmIsQUFzR0EsQ0FKQSxFQTlGa0IsQUFpQkwsQUFpQkssQUFtQkEsWUFuQ2xCLElBakJnQixBQWtDTyxBQW1CdkIsQ0EzRW9CLGFBdUJwQixLQXRCWSxFQXdETSxRQXZEUCxRQXdEWCxDQXZEWSxVQUNaIiwiZmlsZSI6IkQ6XFxEZXZlbG9wZXJTb2Z0d2FyZVxcSHlwZXJpb25EZXZcXFRhc2s0MC1OZXh0SlNJXFxwb3J0Zm9saW9cXHN0eWxlc1xcZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbiAgKntcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBlbTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaGVhZGVyaW1hZ2UuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaW50cm8tdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIH1cclxuICBuYXZ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgfVxyXG5cclxuICBuYXYgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5uYXYtbGlua3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgcGFkZGluZzoxZW07XHJcbiAgfVxyXG4gIC5uYXYtbGluazpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIC5hYm91dC1jb250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG4gIC5hYm91dC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA1MDBweDtcclxuICB9XHJcbiAgLmFib3V0LWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmFib3V0LWltYWdle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmljb24taG9yaXpvbnRhbC1saXN0IGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5pY29uLWhvcml6b250YWwtbGlzdCBsaTpob3ZlcntcclxuICAgIGNvbG9yOiAjMGU0YmE4O1xyXG4gIH1cclxuICAuYWRkaXRpb25hbC1za2lsbHMtbGlzdHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgLnByb2plY3RzLXNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvcHJvamVjdHNpbWFnZS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5wcm9qZWN0cy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gIH1cclxuICAucHJvamVjdHMtY2FyZHtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICBtYXJnaW46IDE1cHggMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gIH1cclxuICAucHJvamVjdC1pbWFnZXtcclxuICAgICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgICAgd2lkdGg6IDk4JTtcclxuICB9XHJcbiAgLmZhLWdpdGh1Yjpob3ZlcntcclxuICAgIGNvbG9yOiAjMGU0YmE4O1xyXG4gIH1cclxuICAuZmEtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiAjMGU0YmE4O1xyXG4gIH1cclxuICAuZmEtdHdpdHRlcjpob3ZlcntcclxuICAgIGNvbG9yOiAjMGU0YmE4O1xyXG4gIH1cclxuICAuZmEtbGlua2VkaW4taW46aG92ZXJ7XHJcbiAgICBjb2xvcjogIzBlNGJhODtcclxuICB9XHJcbiAgLmZhLXJlZGRpdC1hbGllbjpob3ZlcntcclxuICAgIGNvbG9yOiAjMGU0YmE4O1xyXG4gIH1cclxuICAuY29udGFjdC1zZWN0aW9ue1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9jb250YWN0aW1hZ2UuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY29udGFjdC1zZWN0aW9uIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb250YWN0LWxpc3QtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmAiXX0= */\n/*@ sourceURL=D:\\\\DeveloperSoftware\\\\HyperionDev\\\\Task40-NextJSI\\\\portfolio\\\\styles\\\\global.js */");

_defaultExport.__hash = "1684649764";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map