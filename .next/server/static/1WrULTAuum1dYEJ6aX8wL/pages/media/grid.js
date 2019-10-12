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
/******/ 	return __webpack_require__(__webpack_require__.s = "5eca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5eca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UbcE");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "UbcE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Media.js

var Figure = external_styled_components_default.a.figure.withConfig({
  displayName: "Media__Figure",
  componentId: "sc-1bekdu0-0"
})(["position:relative;overflow:hidden;text-align:center;cursor:pointer;background:", ";text-align:left;margin-bottom:1px;height:", "px;img{position:relative;display:block;max-width:100%;opacity:0.8;transition:opacity 300ms,transform 300ms;opacity:0.85;height:300px;margin:auto;object-fit:cover;}&:hover > img{opacity:0.6;}&:hover > figcaption > span{transform:translate3d(0,0,0);text-align:left;}"], function (props) {
  return props.theme.darkColor;
}, function (props) {
  return props.height;
});
var Caption = external_styled_components_default.a.figcaption.withConfig({
  displayName: "Media__Caption",
  componentId: "sc-1bekdu0-1"
})(["position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden;padding:1rem;"]);
var Title = external_styled_components_default.a.span.withConfig({
  displayName: "Media__Title",
  componentId: "sc-1bekdu0-2"
})(["position:absolute;bottom:0;left:0;padding:0.5rem 1rem;width:50%;transition:transform 300ms;transform:translate3d(100%,0,0);text-align:right;font-size:1.2rem;font-weight:700;color:#fff;"]);
var Image = external_styled_components_default.a.span.withConfig({
  displayName: "Media__Image",
  componentId: "sc-1bekdu0-3"
})(["position:absolute;background-size:cover;background-position:center center;background-image:url(", ");width:100%;height:100%;"], function (props) {
  return props.source;
});

// CONCATENATED MODULE: ./components/Grid.js




var Grid_images = [];

for (var num = 1; num <= 20; num += 1) {
  Grid_images.push(num);
}

var Grid_Grid = function Grid() {
  return external_react_default.a.createElement(row_default.a, {
    type: "flex",
    gutter: 1
  }, Grid_images.map(function (id) {
    return external_react_default.a.createElement(col_default.a, {
      xl: 6,
      lg: 8,
      sm: 12,
      xs: 24,
      key: id
    }, external_react_default.a.createElement(Figure, {
      height: 300
    }, external_react_default.a.createElement(Image, {
      source: "/static/images/unsplash/".concat(id, ".jpg"),
      alt: "image ".concat(id)
    }), external_react_default.a.createElement(Caption, null, external_react_default.a.createElement(Title, null, "Media ", external_react_default.a.createElement("strong", null, id)))));
  }));
};

/* harmony default export */ var components_Grid = (Grid_Grid);
// CONCATENATED MODULE: ./pages/media/grid.js



var grid_GridPage = function GridPage() {
  return external_react_default.a.createElement(components_Grid, null);
};

/* harmony default export */ var grid = __webpack_exports__["default"] = (grid_GridPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ })

/******/ });