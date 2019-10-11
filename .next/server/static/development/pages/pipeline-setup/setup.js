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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Setup.js":
/*!*****************************!*\
  !*** ./components/Setup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_setup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/setup */ "./data/setup.js");
/* harmony import */ var _shared_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/Pricing */ "./components/shared/Pricing.js");





var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/Setup.js";





var Setup = function Setup() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      annual = _useState2[0],
      setAnnual = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StyledH, {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Choose the Best Pipeline for Your Organization."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Manage the setup, operations, an maintenance of DevSecOps Pipelines.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "shadow-sm rounded overflow-hidden",
    bordered: false,
    bodyStyle: {
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    justify: "space-around",
    gutter: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data_setup__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: " ".concat(_data_setup__WEBPACK_IMPORTED_MODULE_6__["default"].length - 1 !== index ? '' : ''),
      key: index,
      xl: 6,
      md: 12,
      sm: 24,
      xs: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_shared_Pricing__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      price: !annual ? item.price : item.price * 12 * 0.9,
      features: item.features,
      icon: item.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Setup);

var _StyledH = styled_components__WEBPACK_IMPORTED_MODULE_3___default()("h1").withConfig({
  displayName: "Setup___StyledH",
  componentId: "dwxrb-0"
})(["display:block;"]);

/***/ }),

/***/ "./components/shared/Pricing.js":
/*!**************************************!*\
  !*** ./components/shared/Pricing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Pricing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Pricing */ "./components/styles/Pricing.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");


var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/shared/Pricing.js";





var Pricing = function Pricing(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      description = _ref.description,
      price = _ref.price,
      features = _ref.features,
      icon = _ref.icon;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StyledDiv, {
    className: "bg-white text-center px-3 py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Pricing__WEBPACK_IMPORTED_MODULE_3__["PricingIcon"], {
    className: "mb-5 text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    className: "mb-0 text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, subtitle)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Pricing__WEBPACK_IMPORTED_MODULE_3__["Features"], {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, features.map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, feature.title);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "mt-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles_Pricing__WEBPACK_IMPORTED_MODULE_3__["Amount"], {
    className: "text-monospace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, price === 0 ? '' : '$'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, price === 0 ? 'free' : Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_5__["formatPrice"])(price).replace('$', ''))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Choose plan")));
};

Pricing.prototypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  features: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    available: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Pricing);

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("div").withConfig({
  displayName: "Pricing___StyledDiv",
  componentId: "sc-1l40no-0"
})(["margin:1px;"]);

/***/ }),

/***/ "./components/styles/Pricing.js":
/*!**************************************!*\
  !*** ./components/styles/Pricing.js ***!
  \**************************************/
/*! exports provided: PricingIcon, Amount, Features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingIcon", function() { return PricingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Amount", function() { return Amount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PricingIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Pricing__PricingIcon",
  componentId: "sc-4ynljl-0"
})(["position:relative;width:128px;height:128px;line-height:128px;text-align:center;display:inline-block;margin:auto;background-color:#007bff05;border-radius:50%;&:after{content:'';position:absolute;width:64px;height:64px;line-height:64px;background-color:#007bff0f;border-radius:50%;left:50%;top:50%;margin-top:-32px;margin-left:-32px;}"]);
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Pricing__Amount",
  componentId: "sc-4ynljl-1"
})(["font-size:4.5rem;font-weight:900;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;.symbol{font-size:1rem;vertical-align:super;}"]);
var Features = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Pricing__Features",
  componentId: "sc-4ynljl-2"
})(["padding-left:0;list-style:none;li{display:inline-block;margin:0;}li:not(:last-child)::after{content:'\u2022';-ms-flex-item-align:center;align-self:center;margin:0 0.5rem;color:", ";}"], function (props) {
  return props.theme.primaryColor;
});


/***/ }),

/***/ "./data/setup.js":
/*!***********************!*\
  !*** ./data/setup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_feather_dist_icons_gitlab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-feather/dist/icons/gitlab */ "react-feather/dist/icons/gitlab");
/* harmony import */ var react_feather_dist_icons_gitlab__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_gitlab__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather_dist_icons_activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather/dist/icons/activity */ "react-feather/dist/icons/activity");
/* harmony import */ var react_feather_dist_icons_activity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_activity__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather/dist/icons/server */ "react-feather/dist/icons/server");
/* harmony import */ var react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather_dist_icons_pocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather/dist/icons/pocket */ "react-feather/dist/icons/pocket");
/* harmony import */ var react_feather_dist_icons_pocket__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_pocket__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/data/setup.js";

/* harmony default export */ __webpack_exports__["default"] = ([{
  icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather_dist_icons_pocket__WEBPACK_IMPORTED_MODULE_3___default.a, {
    size: 64,
    strokeWidth: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
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
  icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 64,
    strokeWidth: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
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
  icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather_dist_icons_activity__WEBPACK_IMPORTED_MODULE_1___default.a, {
    size: 64,
    strokeWidth: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
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
  icon: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_feather_dist_icons_gitlab__WEBPACK_IMPORTED_MODULE_0___default.a, {
    size: 64,
    strokeWidth: 0.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
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

/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: capitalize, lowercase, formatPrice, windDirection, getWeatherIcon, getWeather, objectToCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windDirection", function() { return windDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherIcon", function() { return getWeatherIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToCamelCase", function() { return objectToCamelCase; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: none, url(", ") no-repeat;\n        background-size: contain;\n        width: ", "px;\n        height: ", "px;\n        display: inline-block;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/lib/helpers.js";

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this,
    _css: icon,
    _css2: size,
    _css3: size
  });
} // Get weather data

function getWeather(_x, _x2, _x3) {
  return _getWeather.apply(this, arguments);
}

function _getWeather() {
  _getWeather = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/pipeline-setup/setup.js":
/*!***************************************!*\
  !*** ./pages/pipeline-setup/setup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Setup */ "./components/Setup.js");
var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/pages/pipeline-setup/setup.js";



var SetupPage = function SetupPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Setup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SetupPage);

/***/ }),

/***/ 7:
/*!*********************************************!*\
  !*** multi ./pages/pipeline-setup/setup.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/pages/pipeline-setup/setup.js */"./pages/pipeline-setup/setup.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather/dist/icons/activity":
/*!****************************************************!*\
  !*** external "react-feather/dist/icons/activity" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/activity");

/***/ }),

/***/ "react-feather/dist/icons/gitlab":
/*!**************************************************!*\
  !*** external "react-feather/dist/icons/gitlab" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/gitlab");

/***/ }),

/***/ "react-feather/dist/icons/pocket":
/*!**************************************************!*\
  !*** external "react-feather/dist/icons/pocket" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/pocket");

/***/ }),

/***/ "react-feather/dist/icons/server":
/*!**************************************************!*\
  !*** external "react-feather/dist/icons/server" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/server");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=setup.js.map