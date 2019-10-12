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
/******/ 	return __webpack_require__(__webpack_require__.s = "e83c");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "BCVK":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/pocket");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FDJi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/styles/Pricing.js

var PricingIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Pricing__PricingIcon",
  componentId: "sc-4ynljl-0"
})(["position:relative;width:128px;height:128px;line-height:128px;text-align:center;display:inline-block;margin:auto;background-color:#007bff05;border-radius:50%;&:after{content:'';position:absolute;width:64px;height:64px;line-height:64px;background-color:#007bff0f;border-radius:50%;left:50%;top:50%;margin-top:-32px;margin-left:-32px;}"]);
var Amount = external_styled_components_default.a.div.withConfig({
  displayName: "Pricing__Amount",
  componentId: "sc-4ynljl-1"
})(["font-size:4.5rem;font-weight:900;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;.symbol{font-size:1rem;vertical-align:super;}"]);
var Features = external_styled_components_default.a.ul.withConfig({
  displayName: "Pricing__Features",
  componentId: "sc-4ynljl-2"
})(["padding-left:0;list-style:none;li{display:inline-block;margin:0;}li:not(:last-child)::after{content:'\u2022';-ms-flex-item-align:center;align-self:center;margin:0 0.5rem;color:", ";}"], function (props) {
  return props.theme.primaryColor;
});

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./components/shared/Pricing.js







var Pricing_Pricing = function Pricing(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      description = _ref.description,
      price = _ref.price,
      features = _ref.features,
      icon = _ref.icon;
  return external_react_default.a.createElement(_StyledDiv, {
    className: "bg-white text-center px-3 py-5"
  }, external_react_default.a.createElement(PricingIcon, {
    className: "mb-5 text-primary"
  }, icon), external_react_default.a.createElement("div", {
    className: "mb-5"
  }, external_react_default.a.createElement("h5", {
    className: "mb-0"
  }, title), external_react_default.a.createElement("small", {
    className: "mb-0 text-muted"
  }, subtitle)), external_react_default.a.createElement(Features, {
    className: "mb-5"
  }, features.map(function (feature, index) {
    return external_react_default.a.createElement("li", {
      key: index
    }, feature.title);
  })), external_react_default.a.createElement("p", {
    className: "mb-5"
  }, description), external_react_default.a.createElement("div", {
    className: "mt-auto"
  }, external_react_default.a.createElement(Amount, {
    className: "text-monospace"
  }, external_react_default.a.createElement("span", {
    className: "symbol"
  }, price === 0 ? '' : '$'), external_react_default.a.createElement("span", null, price === 0 ? 'free' : Object(helpers["b" /* formatPrice */])(price).replace('$', ''))), external_react_default.a.createElement(button_default.a, {
    type: "primary"
  }, "Choose plan")));
};

Pricing_Pricing.prototypes = {
  title: external_prop_types_default.a.string.isRequired,
  subtitle: external_prop_types_default.a.string.isRequired,
  description: external_prop_types_default.a.element.isRequired,
  price: external_prop_types_default.a.number.isRequired,
  features: external_prop_types_default.a.arrayOf(external_prop_types_default.a.shape({
    title: external_prop_types_default.a.string,
    available: external_prop_types_default.a.bool
  })).isRequired
};
/* harmony default export */ var shared_Pricing = __webpack_exports__["a"] = (Pricing_Pricing);

var _StyledDiv = external_styled_components_default()("div").withConfig({
  displayName: "Pricing___StyledDiv",
  componentId: "sc-1l40no-0"
})(["margin:1px;"]);

/***/ }),

/***/ "FWZJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return windDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return objectToCamelCase; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rt45");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O40h");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wa2I");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n        background: none, url(", ") no-repeat;\n        background-size: contain;\n        width: ", "px;\n        height: ", "px;\n        display: inline-block;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var weatherIcons = {
  '01d': '/static/weather/day.svg',
  '02d': '/static/weather/cloudy-day-1.svg',
  '03d': '/static/weather/cloudy-day-2.svg',
  '04d': '/static/weather/cloudy-day-3.svg',
  '09d': '/static/weather/rainy-4.svg',
  '10d': '/static/weather/rainy-1.svg',
  '11d': '/static/weather/thunder.svg',
  '13d': '/static/weather/snowy-3.svg',
  '50d': '/static/weather/cloudy-day-3.svg',
  '01n': '/static/weather/night.svg',
  '02n': '/static/weather/cloudy-night-1.svg',
  '03n': '/static/weather/cloudy-night-2.svg',
  '04n': '/static/weather/cloudy-night-3.svg',
  '09n': '/static/weather/rainy-4.svg',
  '10n': '/static/weather/rainy-5.svg',
  '11n': '/static/weather/thunder.svg',
  '13n': '/static/weather/snowy-5.svg',
  '50n': '/static/weather/cloudy-day-3.svg'
}; // Capitalize

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowercase(string) {
  return string.toLowerCase();
} // Format price

function formatPrice(number) {
  var fnumber = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default()(number);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(fnumber);
} // Get wind direction

function windDirection(degree) {
  var sectors = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  degree += 22.5;

  if (degree < 0) {
    degree = 360 - Math.abs(degree) % 360;
  } else {
    degree = degree % 360;
  }

  var which = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default()(degree / 45, 10);

  return sectors[which];
} // Get weather icon class

function getWeatherIcon(code, size) {
  var icon = weatherIcons[code];
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StyledSpan, {
    _css: icon,
    _css2: size,
    _css3: size
  });
} // Get weather data

function getWeather(_x, _x2, _x3) {
  return _getWeather.apply(this, arguments);
}

function _getWeather() {
  _getWeather = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(city, country, days) {
    var forecast, forecast_call;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            forecast = undefined;
            _context.prev = 1;
            _context.next = 4;
            return fetch("//api.openweathermap.org/data/2.5/forecast?q=".concat(city, ",").concat(country, "&appid=").concat("", "&cnt=").concat(days, "&units=metric")).then(function (res) {
              if (res.ok) {
                return res;
              } else {
                throw Error("Request rejected with status ".concat(res.status));
              }
            }).catch(console.error);

          case 4:
            forecast_call = _context.sent;

            if (!(forecast_call !== undefined)) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return forecast_call.json();

          case 8:
            forecast = _context.sent;

          case 9:
            return _context.abrupt("return", forecast);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", '');

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _getWeather.apply(this, arguments);
}

function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_]+/g, ' ').replace(/[^\w\s]/g, '').replace(/ (.)/g, function ($1) {
    return $1.toUpperCase();
  }).replace(/ /g, '');
}

function objectToCamelCase(origObj) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(origObj).reduce(function (newObj, key) {
    var val = origObj[key];
    var newVal = typeof val === 'object' ? objectToCamelCase(val) : val;
    newObj[toCamelCase(key)] = newVal;
    return newObj;
  }, {});
} // getWeather();

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_4___default()("span")(_templateObject(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

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

/***/ "NtZb":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/server");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "O4cO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react-feather/dist/icons/gitlab"
var gitlab_ = __webpack_require__("fb3Q");
var gitlab_default = /*#__PURE__*/__webpack_require__.n(gitlab_);

// EXTERNAL MODULE: external "react-feather/dist/icons/activity"
var activity_ = __webpack_require__("TbDL");
var activity_default = /*#__PURE__*/__webpack_require__.n(activity_);

// EXTERNAL MODULE: external "react-feather/dist/icons/server"
var server_ = __webpack_require__("NtZb");
var server_default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "react-feather/dist/icons/pocket"
var pocket_ = __webpack_require__("BCVK");
var pocket_default = /*#__PURE__*/__webpack_require__.n(pocket_);

// CONCATENATED MODULE: ./data/setup.js





/* harmony default export */ var setup = ([{
  icon: external_react_default.a.createElement(pocket_default.a, {
    size: 64,
    strokeWidth: 0.5
  }),
  title: 'Standard Licence',
  subtitle: 'Test account',
  description: 'Perfect for small startups that have less than 10 team members',
  price: 0,
  features: [{
    title: 'Secure'
  }, {
    title: '1 user'
  }, {
    title: 'Analytics'
  }]
}, {
  icon: external_react_default.a.createElement(server_default.a, {
    size: 64,
    strokeWidth: 0.5
  }),
  title: 'Basic License',
  subtitle: 'Freelancer',
  description: 'Perfect for small startups that have less than 10 team members',
  price: 2,
  features: [{
    title: 'Secure'
  }, {
    title: '2 users'
  }, {
    title: 'Analytics'
  }]
}, {
  icon: external_react_default.a.createElement(activity_default.a, {
    size: 64,
    strokeWidth: 0.5
  }),
  title: 'Managed License',
  subtitle: 'Small business',
  description: 'Perfect for small startups that have less than 10 team members',
  price: 5,
  features: [{
    title: 'Secure'
  }, {
    title: '3 users'
  }, {
    title: 'Analytics'
  }]
}, {
  icon: external_react_default.a.createElement(gitlab_default.a, {
    size: 64,
    strokeWidth: 0.5
  }),
  title: 'Extended License',
  subtitle: 'Corporate',
  description: 'Perfect for small startups that have less than 10 team members',
  price: 10,
  features: [{
    title: 'Secure'
  }, {
    title: 'Unlimited'
  }, {
    title: 'Analytics'
  }]
}]);
// EXTERNAL MODULE: ./components/shared/Pricing.js + 1 modules
var Pricing = __webpack_require__("FDJi");

// CONCATENATED MODULE: ./components/Setup.js










var Setup_Setup = function Setup() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      annual = _useState2[0],
      setAnnual = _useState2[1];

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "text-center my-5"
  }, external_react_default.a.createElement(_StyledH, {
    className: "font-weight-bold"
  }, "Choose the Best Pipeline for Your Organization."), external_react_default.a.createElement("h6", null, "Manage the setup, operations, an maintenance of DevSecOps Pipelines.")), external_react_default.a.createElement(card_default.a, {
    className: "shadow-sm rounded overflow-hidden",
    bordered: false,
    bodyStyle: {
      padding: 0
    }
  }, external_react_default.a.createElement(row_default.a, {
    type: "flex",
    justify: "space-around",
    gutter: 0
  }, setup.map(function (item, index) {
    return external_react_default.a.createElement(col_default.a, {
      className: " ".concat(setup.length - 1 !== index ? '' : ''),
      key: index,
      xl: 6,
      md: 12,
      sm: 24,
      xs: 24
    }, external_react_default.a.createElement(Pricing["a" /* default */], {
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      price: !annual ? item.price : item.price * 12 * 0.9,
      features: item.features,
      icon: item.icon
    }));
  }))));
};

/* harmony default export */ var components_Setup = (Setup_Setup);

var _StyledH = external_styled_components_default()("h1").withConfig({
  displayName: "Setup___StyledH",
  componentId: "dwxrb-0"
})(["display:block;"]);
// CONCATENATED MODULE: ./pages/pipeline-setup/setup.js



var setup_SetupPage = function SetupPage() {
  return external_react_default.a.createElement(components_Setup, null);
};

/* harmony default export */ var pipeline_setup_setup = __webpack_exports__["default"] = (setup_SetupPage);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TbDL":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/activity");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

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

/***/ "e83c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O4cO");


/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fb3Q":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/gitlab");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });