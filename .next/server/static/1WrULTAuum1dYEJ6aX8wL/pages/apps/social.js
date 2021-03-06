module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "dd85");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xaq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






var Context = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();
var Provider = Context.Provider;
var mql;
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function () {
  return document.querySelector('.workspace > .ant-layout').scrollTop = 0;
});

var saveToLocal = function saveToLocal(state) {
  delete state.mobile;
  delete state.optionDrawer;
  delete state.mobileDrawer;
  localStorage.setItem('settings', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(state));
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'fullscreen':
      {
        var element = document.querySelector('#__next');
        var isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;

        element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () {
          return false;
        };

        document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () {
          return false;
        };

        isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          fullscreen: !isFullscreen
        });
      }

    case 'boxed':
      {
        var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          boxed: !state.boxed
        });

        saveToLocal(newState);
        return newState;
      }

    case 'sidebarTheme':
      {
        var _newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          darkSidebar: !state.darkSidebar
        });

        saveToLocal(_newState);
        return _newState;
      }

    case 'sidebarPopup':
      {
        var _newState2 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarPopup: !state.sidebarPopup
        });

        saveToLocal(_newState2);
        return _newState2;
      }

    case 'sidebarIcons':
      {
        if (state.collapsed) return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state);

        var _newState3 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          sidebarIcons: !state.sidebarIcons
        });

        saveToLocal(_newState3);
        return _newState3;
      }

    case 'collapse':
      {
        var collapse = state.collapsed;
        var sidebarIcons = state.sidebarIcons;
        if (!collapse) sidebarIcons = true;

        var _newState4 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          collapsed: !state.collapsed,
          sidebarIcons: sidebarIcons
        });

        saveToLocal(_newState4);
        return _newState4;
      }

    case 'weak':
      {
        var weak = state.weakColor;
        var darkSidebar = state.darkSidebar;
        if (!weak && darkSidebar) darkSidebar = false;

        var _newState5 = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          weakColor: !state.weakColor,
          darkSidebar: darkSidebar
        });

        saveToLocal(_newState5);
        return _newState5;
      }

    case 'mobile':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobile: !mql.matches
      });

    case 'options':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        optionDrawer: !state.optionDrawer
      });

    case 'mobileDrawer':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
        mobileDrawer: !state.mobileDrawer
      });

    case 'setup':
      {
        var settings = JSON.parse(localStorage.getItem('settings'));
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          mobile: !mql.matches
        }, settings);
      }

    default:
      return state;
  }
};

var AppProvider = function AppProvider(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, {
    name: 'One',
    mobile: false,
    boxed: false,
    darkSidebar: false,
    sidebarPopup: false,
    sidebarIcons: false,
    collapsed: false,
    weakColor: false,
    optionDrawer: false,
    mobileDrawer: false,
    fullscreen: false
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mql = window.matchMedia("(min-width: 992px)");
    mql.addListener(mediaQueryChanged);
    dispatch({
      type: 'setup'
    });
    return function () {
      return mql.removeListener(mediaQueryChanged);
    };
  }, []);

  var mediaQueryChanged = function mediaQueryChanged() {
    dispatch({
      type: 'mobile'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Provider, {
    value: [state, dispatch]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (AppProvider);
var useAppState = function useAppState() {
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(Context);
};

/***/ }),

/***/ "226c":
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "6v9+":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/clock");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Lj3Z":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/share");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "aawa":
/***/ (function(module, exports) {

module.exports = require("antd/lib/timeline");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dd85":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nqMn");


/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nqMn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "antd/lib/timeline"
var timeline_ = __webpack_require__("aawa");
var timeline_default = /*#__PURE__*/__webpack_require__.n(timeline_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__("xZtu");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__("z6+L");
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);

// EXTERNAL MODULE: external "antd/lib/progress"
var progress_ = __webpack_require__("226c");
var progress_default = /*#__PURE__*/__webpack_require__.n(progress_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react-feather/dist/icons/share"
var share_ = __webpack_require__("Lj3Z");
var share_default = /*#__PURE__*/__webpack_require__.n(share_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "antd/lib/auto-complete"
var auto_complete_ = __webpack_require__("sEuj");
var auto_complete_default = /*#__PURE__*/__webpack_require__.n(auto_complete_);

// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "react-feather/dist/icons/clock"
var clock_ = __webpack_require__("6v9+");
var clock_default = /*#__PURE__*/__webpack_require__.n(clock_);

// CONCATENATED MODULE: ./demos/mock/activity.js



/* harmony default export */ var activity = ([{
  title: 'Vestibulum Fusce Purus',
  subtitle: 'A few seconds ago',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    style: {
      color: '#f56a00',
      backgroundColor: '#fde3cf'
    }
  }, "S"),
  body: 'Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
}, {
  title: 'Dapibus Parturient Lorem Etiam Quam',
  subtitle: '1 minute ago',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    src: "/static/images/face1.jpg"
  }),
  body: 'Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.'
}, {
  title: 'Ullamcorper Parturient Ridiculus',
  subtitle: '2 Hours ago',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    style: {
      color: 'rgb(34, 245, 0)',
      backgroundColor: 'rgb(207, 253, 219)'
    }
  }, "S"),
  body: 'Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
}, {
  title: 'Fringilla Pellentesque Risus Tristique',
  subtitle: 'Yesterday',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    src: "/static/images/face2.jpg"
  }),
  body: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
}, {
  title: 'Inceptos Vulputate',
  subtitle: '4 Days ago',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    src: "/static/images/face3.jpg"
  }),
  body: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.'
}, {
  title: 'Inceptos Vulputate',
  subtitle: '4 Days ago',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: "small",
    style: {
      color: 'rgb(143, 0, 245)',
      backgroundColor: 'rgb(214, 207, 253)'
    }
  }, "S"),
  body: 'Sed posuere consectetur est at lobortis.'
}, {
  title: 'Create a services site'
}, {
  title: 'Solve initial network problems'
}, {
  title: 'Technical testing',
  avatar: external_react_default.a.createElement(clock_default.a, {
    size: 16,
    strokeWidth: 3
  })
}, {
  title: 'Network problems being solved'
}]);
// EXTERNAL MODULE: ./demos/mock/contacts.js
var contacts = __webpack_require__("v+u8");

// EXTERNAL MODULE: ./components/shared/AppProvider.js
var AppProvider = __webpack_require__("+xaq");

// CONCATENATED MODULE: ./components/Social.js
function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                            display: block;\n                          "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                          display: block;\n                        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                      display: block;\n                    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                      display: block;\n                    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                      display: block;\n                    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                  display: inline-block;\n                "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}































var FormItem = form_default.a.Item;
var Option = select_default.a.Option;
var AutoCompleteOption = auto_complete_default.a.Option;

var Social_DescriptionItem = function DescriptionItem(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return external_react_default.a.createElement("div", {
    className: "text-muted mb-2"
  }, external_react_default.a.createElement(_StyledP, {
    className: "text-body mr-3"
  }, title, ":"), external_react_default.a.createElement("small", null, content));
};

var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
var tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

var Social_Social = function Social(_ref2) {
  var form = _ref2.form;

  var _useAppState = Object(AppProvider["b" /* useAppState */])(),
      _useAppState2 = Object(slicedToArray["a" /* default */])(_useAppState, 1),
      state = _useAppState2[0];

  var _useState = Object(external_react_["useState"])('1'),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      autoCompleteResult = _useState4[0],
      setAutoCompleteResult = _useState4[1];

  var getFieldDecorator = form.getFieldDecorator;
  var prefixSelector = getFieldDecorator('prefix', {
    initialValue: '+86'
  })(external_react_default.a.createElement(select_default.a, {
    style: {
      width: 'auto'
    }
  }, external_react_default.a.createElement(Option, {
    value: "86"
  }, "+86"), external_react_default.a.createElement(Option, {
    value: "87"
  }, "+87")));

  var handleWebsiteChange = function handleWebsiteChange(value) {
    var autoCompleteResult;

    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(function (domain) {
        return "".concat(value).concat(domain);
      });
    }

    setAutoCompleteResult(autoCompleteResult);
  };

  var websiteOptions = autoCompleteResult.map(function (website) {
    return external_react_default.a.createElement(AutoCompleteOption, {
      key: website
    }, website);
  });
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(card_default.a, {
    headStyle: {
      backgroundImage: 'url(/static/images/23.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
    bodyStyle: {
      padding: 0
    },
    className: "mb-4 overflow-hidden w-100",
    title: external_react_default.a.createElement(row_default.a, {
      type: "flex",
      align: "middle"
    }, external_react_default.a.createElement(avatar_default.a, {
      size: 64,
      src: "/static/images/avatar.jpg"
    }), !state.mobile && external_react_default.a.createElement(_StyledDiv, {
      className: "px-4 text-light"
    }, external_react_default.a.createElement("h5", {
      className: "my-0 text-white"
    }, external_react_default.a.createElement("span", null, "John"), external_react_default.a.createElement("b", null, " Doe")), external_react_default.a.createElement("small", null, "UX Developer"))),
    extra: external_react_default.a.createElement(row_default.a, {
      type: "flex",
      align: "middle",
      className: "p-4"
    }, external_react_default.a.createElement(button_default.a, {
      type: "dashed",
      shape: "circle",
      ghost: true
    }, external_react_default.a.createElement(share_default.a, {
      size: 20,
      strokeWidth: 1
    })), external_react_default.a.createElement("span", {
      className: "px-2"
    }), external_react_default.a.createElement(button_default.a, {
      type: "primary"
    }, "Follow"))
  }, external_react_default.a.createElement(menu_default.a, {
    onClick: function onClick(tab) {
      if (activeTab !== tab.key) setActiveTab(tab.key);
    },
    selectedKeys: [activeTab],
    mode: "horizontal",
    className: "border-bottom-0"
  }, external_react_default.a.createElement(menu_default.a.Item, {
    key: "1"
  }, "Activity"), external_react_default.a.createElement(menu_default.a.Item, {
    key: "2"
  }, "About me"), external_react_default.a.createElement(menu_default.a.Item, {
    key: "3"
  }, "Friends"), external_react_default.a.createElement(menu_default.a.Item, {
    key: "4"
  }, "Account & profile"))), external_react_default.a.createElement(row_default.a, {
    type: "flex",
    gutter: 16
  }, external_react_default.a.createElement(col_default.a, {
    xl: 8,
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    order: state.mobile ? 1 : 2
  }, external_react_default.a.createElement(card_default.a, {
    bodyStyle: {
      padding: 0
    },
    className: "mb-4"
  }, external_react_default.a.createElement("div", {
    className: "px-4 pt-4"
  }, external_react_default.a.createElement(row_default.a, {
    type: "flex",
    align: "top",
    justify: "space-between"
  }, external_react_default.a.createElement(col_default.a, null, external_react_default.a.createElement("h5", {
    className: "m-0"
  }, external_react_default.a.createElement("span", null, "John"), " ", external_react_default.a.createElement("b", null, "Doe")), external_react_default.a.createElement("p", {
    className: "mb-0"
  }, "UX Developer"), external_react_default.a.createElement(_StyledA, {
    href: "javascript:;"
  }, "john@doe.com"), external_react_default.a.createElement(_StyledA2, {
    href: "javascript:;"
  }, "www.johndoe.com"), external_react_default.a.createElement(_StyledA3, {
    href: "javascript:;"
  }, "+86 181 0000 0000")), external_react_default.a.createElement(col_default.a, null, external_react_default.a.createElement("div", {
    className: "text-center"
  }, external_react_default.a.createElement(avatar_default.a, {
    size: 80,
    src: "/static/images/avatar.jpg"
  })), external_react_default.a.createElement("div", {
    className: "m-1 text-center"
  }, external_react_default.a.createElement("p", {
    className: "mb-1"
  }, "Account Storage"), external_react_default.a.createElement(tooltip_default.a, {
    title: "3 done / 3 in progress / 4 to do"
  }, external_react_default.a.createElement(progress_default.a, {
    percent: 60,
    successPercent: 30
  })))))), external_react_default.a.createElement(divider_default.a, {
    orientation: "left"
  }, external_react_default.a.createElement("small", null, "Stats")), external_react_default.a.createElement(row_default.a, {
    className: "text-center w-100 px-4",
    type: "flex",
    align: "middle",
    justify: "space-between"
  }, external_react_default.a.createElement(col_default.a, {
    span: 8
  }, external_react_default.a.createElement("h2", {
    className: "m-0"
  }, external_react_default.a.createElement("b", null, "23,8K")), external_react_default.a.createElement("small", null, "Followers")), external_react_default.a.createElement(col_default.a, {
    span: 8
  }, external_react_default.a.createElement("h2", {
    className: "m-0"
  }, external_react_default.a.createElement("b", null, "569")), external_react_default.a.createElement("small", null, "Following")), external_react_default.a.createElement(col_default.a, {
    span: 8
  }, external_react_default.a.createElement("h2", {
    className: "m-0"
  }, external_react_default.a.createElement("b", null, "67")), external_react_default.a.createElement("small", null, "Posts"))), external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement("div", {
    className: "px-4 pb-4"
  }, external_react_default.a.createElement("p", {
    className: "text-uppercase mb-4"
  }, external_react_default.a.createElement("strong", null, "About Me")), external_react_default.a.createElement("p", null, "Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.")))), external_react_default.a.createElement(col_default.a, {
    xl: 16,
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    order: state.mobile ? 2 : 1
  }, activeTab === '1' && external_react_default.a.createElement(card_default.a, null, external_react_default.a.createElement(timeline_default.a, {
    className: "p-3"
  }, activity.map(function (item, index) {
    return external_react_default.a.createElement(timeline_default.a.Item, {
      key: index,
      dot: item.avatar && item.avatar
    }, external_react_default.a.createElement("div", {
      className: "ml-4"
    }, external_react_default.a.createElement(_StyledSpan, null, item.title), external_react_default.a.createElement("small", null, item.subtitle), external_react_default.a.createElement("p", null, item.body)));
  }))), activeTab === '2' && external_react_default.a.createElement(card_default.a, {
    bodyStyle: {
      padding: 0
    }
  }, external_react_default.a.createElement("div", {
    className: "p-4"
  }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Full Name",
    content: "Lily"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Account",
    content: "AntDesign@example.com"
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "City",
    content: "HangZhou"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Country",
    content: "China\uD83C\uDDE8\uD83C\uDDF3"
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Birthday",
    content: "February 2,1900"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Website",
    content: "-"
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 24
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Message",
    content: "Make things as simple as possible but no simpler."
  })))), external_react_default.a.createElement(divider_default.a, {
    orientation: "left"
  }, external_react_default.a.createElement("small", null, "Company")), external_react_default.a.createElement("div", {
    className: "p-4"
  }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Position",
    content: "Programmer"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Responsibilities",
    content: "Coding"
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Department",
    content: "AFX"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Supervisor",
    content: external_react_default.a.createElement("a", null, "Lin")
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 24
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Skills",
    content: "C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
  })))), external_react_default.a.createElement(divider_default.a, {
    orientation: "left"
  }, external_react_default.a.createElement("small", null, "Contacts")), external_react_default.a.createElement("div", {
    className: "p-4"
  }, external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Email",
    content: "AntDesign@example.com"
  })), external_react_default.a.createElement(col_default.a, {
    span: 12
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Phone Number",
    content: "+86 181 0000 0000"
  }))), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 24
  }, external_react_default.a.createElement(Social_DescriptionItem, {
    title: "Github",
    content: external_react_default.a.createElement("a", {
      href: "http://github.com/ant-design/ant-design/"
    }, "github.com/ant-design/ant-design/")
  }))))), activeTab === '3' && external_react_default.a.createElement(card_default.a, null, external_react_default.a.createElement(row_default.a, null, contacts["a" /* default */].map(function (contact, index) {
    return external_react_default.a.createElement(col_default.a, {
      xs: 24,
      sm: 12,
      lg: 12,
      xl: 8,
      key: index
    }, external_react_default.a.createElement(row_default.a, {
      type: "flex",
      align: "middle",
      className: "w-100 mb-4"
    }, contact.avatar, external_react_default.a.createElement("span", {
      className: "ml-4"
    }, external_react_default.a.createElement(_StyledSpan2, null, contact.name), external_react_default.a.createElement("small", {
      className: "text-muted"
    }, external_react_default.a.createElement("span", null, contact.status)))));
  }))), activeTab === '4' && external_react_default.a.createElement(card_default.a, null, external_react_default.a.createElement(form_default.a, null, external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "First name"
  }), getFieldDecorator('fname', {
    rules: [{
      required: true,
      message: 'Please input your First name!'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Last name"
  }), getFieldDecorator('lname', {
    rules: [{
      required: true,
      message: 'Please input your Last name!'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "E-mail"
  }), getFieldDecorator('email', {
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Phone Number"
  }), getFieldDecorator('phone', {
    rules: [{
      required: true,
      message: 'Please input your phone number!'
    }]
  })(external_react_default.a.createElement(input_default.a, {
    addonBefore: prefixSelector,
    style: {
      width: '100%'
    }
  }))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Company name"
  }), getFieldDecorator('company', {
    rules: [{
      required: true,
      message: 'Please input your company'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Website"
  }), getFieldDecorator('website', {
    rules: [{
      required: true,
      message: 'Please input website!'
    }]
  })(external_react_default.a.createElement(auto_complete_default.a, {
    dataSource: websiteOptions,
    onChange: handleWebsiteChange,
    placeholder: "website"
  }, external_react_default.a.createElement(input_default.a, null)))), external_react_default.a.createElement(divider_default.a, null), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Address line"
  }), getFieldDecorator('addline', {
    rules: [{
      required: true,
      message: 'Please input your address'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Address line cont"
  }), getFieldDecorator('addlinecont')(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "City"
  }), getFieldDecorator('city', {
    rules: [{
      required: true,
      message: 'Please input your city'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "State/Province"
  }), getFieldDecorator('state', {
    rules: [{
      required: true,
      message: 'Please input your state'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Postal code"
  }), getFieldDecorator('postal', {
    rules: [{
      required: true,
      message: 'Please input your postal code'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, Object(esm_extends["a" /* default */])({}, formItemLayout, {
    label: "Country"
  }), getFieldDecorator('country', {
    rules: [{
      required: true,
      message: 'Please input your country'
    }]
  })(external_react_default.a.createElement(input_default.a, null))), external_react_default.a.createElement(FormItem, tailFormItemLayout, external_react_default.a.createElement(button_default.a, {
    type: "primary",
    htmlType: "submit"
  }, "Save information")))))));
};

/* harmony default export */ var components_Social = (form_default.a.create()(Social_Social));

var _StyledP = external_styled_components_default()("p").withConfig({
  displayName: "Social___StyledP",
  componentId: "sc-1geyown-0"
})(["display:inline-block;"]);

var _StyledDiv = external_styled_components_default()("div")(_templateObject());

var _StyledA = external_styled_components_default()("a")(_templateObject2());

var _StyledA2 = external_styled_components_default()("a")(_templateObject3());

var _StyledA3 = external_styled_components_default()("a")(_templateObject4());

var _StyledSpan = external_styled_components_default()("span")(_templateObject5());

var _StyledSpan2 = external_styled_components_default()("span")(_templateObject6());
// CONCATENATED MODULE: ./pages/apps/social.js



var social_SocialPage = function SocialPage() {
  return external_react_default.a.createElement(components_Social, null);
};

/* harmony default export */ var social = __webpack_exports__["default"] = (social_SocialPage);

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "sEuj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "v+u8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ubE");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = ([{
  name: 'Bobby Sullivan',
  status: 'Mollis Nullam',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    style: {
      color: '#f56a00',
      backgroundColor: '#fde3cf'
    }
  }, "B")
}, {
  name: 'Bryan Morgan',
  status: 'Risus Justo',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face4.jpg"
  })
}, {
  name: 'Phillip Caroll',
  status: 'Mollis Nibh',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    style: {
      color: 'rgb(34, 245, 0)',
      backgroundColor: 'rgb(207, 253, 219)'
    }
  }, "P")
}, {
  name: 'Brandon Boyd',
  status: 'Dolor Mattis',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face1.jpg"
  })
}, {
  name: 'Laura Mason',
  status: 'Commodo Amet',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face3.jpg"
  })
}, {
  name: 'Barbara Chapman',
  status: 'Tellus Sollicitudin',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face2.jpg"
  })
}, {
  name: 'Doris Baker',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face1.jpg"
  })
}, {
  name: 'Doris Marshall',
  status: 'Tellus Sollicitudin',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    style: {
      color: 'rgb(143, 0, 245)',
      backgroundColor: 'rgb(214, 207, 253)'
    }
  }, "D")
}, {
  name: 'Andrew Weber',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face4.jpg"
  })
}, {
  name: 'John Doe',
  status: 'Nibh Adipiscing',
  avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 48,
    src: "/static/images/face5.jpg"
  })
}]);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "z6+L":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });