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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Overview.js":
/*!********************************!*\
  !*** ./components/Overview.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather/dist/icons/server */ "react-feather/dist/icons/server");
/* harmony import */ var react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/timeline */ "antd/lib/timeline");
/* harmony import */ var antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/progress */ "antd/lib/progress");
/* harmony import */ var antd_lib_progress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather_dist_icons_git_commit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather/dist/icons/git-commit */ "react-feather/dist/icons/git-commit");
/* harmony import */ var react_feather_dist_icons_git_commit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_git_commit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-feather/dist/icons/more-horizontal */ "react-feather/dist/icons/more-horizontal");
/* harmony import */ var react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_feather_dist_icons_message_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather/dist/icons/message-circle */ "react-feather/dist/icons/message-circle");
/* harmony import */ var react_feather_dist_icons_message_circle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_message_circle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_feather_dist_icons_bell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-feather/dist/icons/bell */ "react-feather/dist/icons/bell");
/* harmony import */ var react_feather_dist_icons_bell__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_bell__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_feather_dist_icons_phone_call__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-feather/dist/icons/phone-call */ "react-feather/dist/icons/phone-call");
/* harmony import */ var react_feather_dist_icons_phone_call__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_phone_call__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_feather_dist_icons_bookmark__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-feather/dist/icons/bookmark */ "react-feather/dist/icons/bookmark");
/* harmony import */ var react_feather_dist_icons_bookmark__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_bookmark__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_feather_dist_icons_trending_down__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-feather/dist/icons/trending-down */ "react-feather/dist/icons/trending-down");
/* harmony import */ var react_feather_dist_icons_trending_down__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_trending_down__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_feather_dist_icons_trending_up__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-feather/dist/icons/trending-up */ "react-feather/dist/icons/trending-up");
/* harmony import */ var react_feather_dist_icons_trending_up__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_trending_up__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_feather_dist_icons_printer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-feather/dist/icons/printer */ "react-feather/dist/icons/printer");
/* harmony import */ var react_feather_dist_icons_printer__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_printer__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_feather_dist_icons_save__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-feather/dist/icons/save */ "react-feather/dist/icons/save");
/* harmony import */ var react_feather_dist_icons_save__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_save__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-feather/dist/icons/trash */ "react-feather/dist/icons/trash");
/* harmony import */ var react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_feather_dist_icons_edit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-feather/dist/icons/edit */ "react-feather/dist/icons/edit");
/* harmony import */ var react_feather_dist_icons_edit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_edit__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_feather_dist_icons_archive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-feather/dist/icons/archive */ "react-feather/dist/icons/archive");
/* harmony import */ var react_feather_dist_icons_archive__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_archive__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-vis */ "react-vis");
/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_vis__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _shared_PostCard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/PostCard */ "./components/shared/PostCard.js");
/* harmony import */ var _shared_StatCard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/StatCard */ "./components/shared/StatCard.js");
/* harmony import */ var _shared_WeatherCard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/WeatherCard */ "./components/shared/WeatherCard.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./styles/GlobalStyles */ "./components/styles/GlobalStyles.js");
function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                          display: flex;\n                        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        display: block;\n                      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                        display: block;\n                        color: #007bff;\n                        margin: auto;\n                      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: block;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
































var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/Overview.js";








var MonthPicker = antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_27___default.a.MonthPicker;

var axes = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_26___default()(Array(12).keys());

var generate = function generate() {
  var arr = [];
  axes.map(function (x) {
    var y = Math.floor(Math.random() * 10) + 1;
    arr.push({
      x: x,
      y: y
    });
  });
  return arr;
};

var series = [{
  title: 'Views',
  data: generate()
}, {
  title: 'Sales',
  data: generate()
}];
var Legend = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Overview__Legend",
  componentId: "sc-1phv1b2-0"
})(["display:flex;align-items:center;justify-content:space-between;padding:0.5rem 0;.rv-discrete-color-legend{display:inline-block;width:auto !important;}.rv-discrete-color-legend-item{padding-top:0;padding-bottom:0;}"]);
var menu = react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
  type: "flex",
  align: "middle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_archive__WEBPACK_IMPORTED_MODULE_25___default.a, {
  size: 16,
  strokeWidth: 1,
  className: "mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}), ' ', react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, "Archive"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
  type: "flex",
  align: "middle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_edit__WEBPACK_IMPORTED_MODULE_22___default.a, {
  size: 16,
  strokeWidth: 1,
  className: "mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}), " ", react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, "Edit"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
  type: "flex",
  align: "middle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_trash__WEBPACK_IMPORTED_MODULE_21___default.a, {
  size: 16,
  strokeWidth: 1,
  className: "mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}), " ", react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "Delete"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Divider, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
  type: "flex",
  align: "middle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_save__WEBPACK_IMPORTED_MODULE_20___default.a, {
  size: 16,
  strokeWidth: 1,
  className: "mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}), " ", react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, "Save as"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_23___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
  type: "flex",
  align: "middle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_printer__WEBPACK_IMPORTED_MODULE_19___default.a, {
  size: 16,
  strokeWidth: 1,
  className: "mr-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}), ' ', react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "Print"))));
var data = [{
  title: 'Click through ratio',
  subtitle: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, "15%"), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_trending_up__WEBPACK_IMPORTED_MODULE_18___default.a, {
    size: 20,
    strokeWidth: 1,
    className: "text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }))
}, {
  title: 'Cost per thousand',
  subtitle: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "$320.89"), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_trending_down__WEBPACK_IMPORTED_MODULE_17___default.a, {
    size: 20,
    strokeWidth: 1,
    className: "text-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }))
}, {
  title: 'Bounce rate',
  subtitle: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    className: "mr-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, "34%"), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_trending_up__WEBPACK_IMPORTED_MODULE_18___default.a, {
    size: 20,
    strokeWidth: 1,
    className: "text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }))
}];

var TimelinePeriod = function TimelinePeriod(_ref) {
  var content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_StyledSmall, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, content);
};

var Overview = function Overview() {
  return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 24,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_shared_StatCard__WEBPACK_IMPORTED_MODULE_32__["default"], {
    type: "fill",
    title: "Campaigns",
    value: 103,
    icon: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_bookmark__WEBPACK_IMPORTED_MODULE_16___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }),
    color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].primaryColor,
    clickHandler: function clickHandler() {
      return antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.info('Campaign stat button clicked');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 24,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_shared_StatCard__WEBPACK_IMPORTED_MODULE_32__["default"], {
    type: "fill",
    title: "Customers",
    value: 230,
    icon: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_phone_call__WEBPACK_IMPORTED_MODULE_13___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }),
    color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].darkColor,
    clickHandler: function clickHandler() {
      return antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.info('Customers stat button clicked');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 24,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_shared_StatCard__WEBPACK_IMPORTED_MODULE_32__["default"], {
    type: "fill",
    title: "Queries",
    value: 323,
    icon: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_bell__WEBPACK_IMPORTED_MODULE_12___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }),
    color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].warningColor,
    clickHandler: function clickHandler() {
      return antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.info('Queries stat button clicked');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    xs: 24,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_shared_StatCard__WEBPACK_IMPORTED_MODULE_32__["default"], {
    type: "fill",
    title: "Opens",
    value: 870,
    icon: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_message_circle__WEBPACK_IMPORTED_MODULE_11___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }),
    color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].errorColor,
    clickHandler: function clickHandler() {
      return antd_lib_message__WEBPACK_IMPORTED_MODULE_15___default.a.info('Opens stat button clicked');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "Sales analytics",
    extra: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      overlay: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: 20,
      strokeWidth: 1,
      fill: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].textColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    })),
    bodyStyle: {
      padding: '1rem'
    },
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(Legend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["DiscreteColorLegend"], {
    width: 180,
    height: 20,
    items: series,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(MonthPicker, {
    placeholder: "Select a month",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["FlexibleWidthXYPlot"], {
    xType: "ordinal",
    height: 340,
    xDistance: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["VerticalGridLines"], {
    style: {
      strokeWidth: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["HorizontalGridLines"], {
    style: {
      strokeWidth: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["XAxis"], {
    style: {
      strokeWidth: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["YAxis"], {
    style: {
      strokeWidth: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["VerticalBarSeries"], {
    color: "#007bff",
    data: series[0].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_vis__WEBPACK_IMPORTED_MODULE_29__["VerticalBarSeries"], {
    color: "rgb(211, 232, 255)",
    data: series[1].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    sm: 24,
    md: 8,
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a, {
    bodyStyle: {
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
    type: "flex",
    align: "middle",
    justify: "center",
    gutter: 16,
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_progress__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "dashboard",
    percent: 90,
    width: 181,
    format: function format(percent) {
      return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_StyledDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_git_commit__WEBPACK_IMPORTED_MODULE_7___default.a, {
        size: 20,
        strokeWidth: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_StyledDiv2, {
        className: "h5 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, percent), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
        className: "h6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "30% commission rate")));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item.Meta, {
        title: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_StyledA, {
          href: "javascript:;",
          className: "px-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, item.title, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
          className: "mr-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, item.subtitle)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    sm: 24,
    md: 8,
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "Tasks",
    extra: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      overlay: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: 20,
      strokeWidth: 1,
      fill: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].textColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pending: "Tasks pending...",
    className: "mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "09.45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Create a services site"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "11.20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Solve initial network problems"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    dot: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_server__WEBPACK_IMPORTED_MODULE_2___default.a, {
      size: 16,
      strokeWidth: 1,
      color: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].errorColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "13.00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "Technical testing"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "15.00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "Network problems being solved")))))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_14___default.a, {
    sm: 24,
    md: 8,
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "Activity",
    extra: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
      overlay: menu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(react_feather_dist_icons_more_horizontal__WEBPACK_IMPORTED_MODULE_10___default.a, {
      size: 20,
      strokeWidth: 1,
      fill: _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_34__["theme"].textColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pending: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
      className: "ml-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, "Activities pending..."),
    className: "mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    dot: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: 24,
      src: "/static/images/face1.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "ml-4 text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "9.45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "John Doe"), " launched a new application"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    dot: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: 24,
      src: "/static/images/face2.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "ml-4 text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "11.20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "Paula Bean"), " Cleared calendar events"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    dot: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: 24,
      src: "/static/images/face3.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "ml-4 text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "13.00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Peter Hadji"), " Joined your mailing list"))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_timeline__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    dot: react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      size: 24,
      src: "/static/images/face4.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("div", {
    className: "ml-4 text-truncate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(TimelinePeriod, {
    content: "15.00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "Trevor Belmont"), " Created a new task list"))))))), react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_24___default.a, {
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Overview);

var _StyledSmall = styled_components__WEBPACK_IMPORTED_MODULE_5___default()("small")(_templateObject());

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default()("div")(_templateObject2());

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_5___default()("div")(_templateObject3());

var _StyledA = styled_components__WEBPACK_IMPORTED_MODULE_5___default()("a")(_templateObject4());

/***/ }),

/***/ "./components/shared/PostCard.js":
/*!***************************************!*\
  !*** ./components/shared/PostCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather/dist/icons/share */ "react-feather/dist/icons/share");
/* harmony import */ var react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather/dist/icons/star */ "react-feather/dist/icons/star");
/* harmony import */ var react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather/dist/icons/heart */ "react-feather/dist/icons/heart");
/* harmony import */ var react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n                    background-image: url(", ");\n                    height: ", "px;\n                  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/shared/PostCard.js";



var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "PostCard__StyledCard",
  componentId: "sc-18b9nbe-0"
})([".ant-card-cover{position:relative;}"]);
var Cover = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "PostCard__Cover",
  componentId: "sc-18b9nbe-1"
})(["position:relative;width:100%;.ant-carousel{position:absolute;width:100%;height:100%;}.slick-slider{width:100%;height:100%;}.slick-slide > div{display:flex;}.image{position:relative;background-size:cover;background-position:top center;width:100%;}.weakColor & .image{-webkit-filter:invert(100%);filter:invert(100%);}.content{position:relative;z-index:9;}.title{position:absolute;bottom:0;left:0;width:100%;background-image:linear-gradient( to bottom,transparent 0,rgb(29,29,29) 100% );}"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "PostCard__Content",
  componentId: "sc-18b9nbe-2"
})(["position:relative;height:4.5em;overflow:hidden;&:after{content:'';text-align:right;position:absolute;bottom:0;right:0;width:10%;height:1.5em;background:linear-gradient( to right,rgba(255,255,255,0),rgba(255,255,255,1) 50% );}"]);

var PostCard = function PostCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      text = _ref.text,
      images = _ref.images,
      imageHeight = _ref.imageHeight;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    cover: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Cover, {
      style: {
        height: imageHeight
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      autoplay: true,
      autoplaySpeed: 6000,
      className: "rounded-top overflow-hidden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StyledDiv, {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this,
        _css: image,
        _css2: imageHeight
      }));
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "title p-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
      className: "mb-0 text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
      className: "mb-0 text-white-50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, subtitle))),
    actions: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2___default.a, {
      size: 20,
      strokeWidth: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, text)));
};

PostCard.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  imageHeight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_6___default()("div")(_templateObject(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

/***/ }),

/***/ "./components/shared/StatCard.js":
/*!***************************************!*\
  !*** ./components/shared/StatCard.js ***!
  \***************************************/
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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/shared/StatCard.js";



var StatCard = function StatCard(_ref) {
  var type = _ref.type,
      title = _ref.title,
      value = _ref.value,
      icon = _ref.icon,
      color = _ref.color,
      clickHandler = _ref.clickHandler;
  var before = null,
      after = null;
  var cardIcon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    shape: "circle",
    size: "large",
    type: "primary",
    style: {
      backgroundColor: color,
      borderColor: color
    },
    className: type !== 'fill' ? 'mr-4' : null,
    onClick: clickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, icon));

  if (icon) {
    type === 'fill' ? after = cardIcon : before = cardIcon;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "mb-4",
    style: type === 'fill' ? {
      backgroundColor: color
    } : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    align: "middle",
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, before, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "mb-0 ".concat(type === 'fill' ? 'text-white' : null),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, value), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", {
    className: type === 'fill' ? 'text-white-50' : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), after));
};

StatCard.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['fill']),
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.element,
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (StatCard);

/***/ }),

/***/ "./components/shared/WeatherCard.js":
/*!******************************************!*\
  !*** ./components/shared/WeatherCard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/skeleton */ "antd/lib/skeleton");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-feather/dist/icons/arrow-up-left */ "react-feather/dist/icons/arrow-up-left");
/* harmony import */ var react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-feather/dist/icons/arrow-left */ "react-feather/dist/icons/arrow-left");
/* harmony import */ var react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-feather/dist/icons/arrow-down-left */ "react-feather/dist/icons/arrow-down-left");
/* harmony import */ var react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-feather/dist/icons/arrow-down */ "react-feather/dist/icons/arrow-down");
/* harmony import */ var react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-feather/dist/icons/arrow-down-right */ "react-feather/dist/icons/arrow-down-right");
/* harmony import */ var react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-feather/dist/icons/arrow-right */ "react-feather/dist/icons/arrow-right");
/* harmony import */ var react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-feather/dist/icons/arrow-up-right */ "react-feather/dist/icons/arrow-up-right");
/* harmony import */ var react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-feather/dist/icons/arrow-up */ "react-feather/dist/icons/arrow-up");
/* harmony import */ var react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_22__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: block;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




















var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/shared/WeatherCard.js";






var DescriptionItem = function DescriptionItem(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, content));
};

var ForecastItem = function ForecastItem(_ref2) {
  var content = _ref2.content;
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_StyledSpan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, content);
};

var getWindDirection = function getWindDirection(degree) {
  var direction = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__["windDirection"])(degree);

  switch (direction) {
    case 'n':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });

    case 'ne':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });

    case 'e':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });

    case 'se':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });

    case 's':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      });

    case 'sw':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });

    case 'w':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      });

    case 'nw':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: 20,
        strokeWidth: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });

    default:
      break;
  }
};

var WeatherCard = function WeatherCard(_ref3) {
  var city = _ref3.city,
      country = _ref3.country,
      days = _ref3.days;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(undefined),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(undefined),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState3, 2),
      forecast = _useState4[0],
      setForecast = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      var _forecast, _current;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__["getWeather"])(city, country, days);

            case 3:
              _forecast = _context.sent;

              if (_forecast) {
                _current = _forecast.list[0];
                setCurrent(_current);
                setForecast(_forecast);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  }, [city, country, days]);
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bodyStyle: {
      padding: 0
    },
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    loading: !current && !forecast,
    active: true,
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, current && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, forecast && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", {
    className: "mb-0 font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "".concat(forecast.city.name, ", ").concat(forecast.city.country)), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h6", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_22___default()(current.dt * 1000, 'MMMM Do YYYY')), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__["capitalize"])(current.weather[0].description))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h3", {
    className: "font-weight-light mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, current.main.temp, "\xB0")))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(current.main).map(function (key, index) {
    return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      xs: 12,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(DescriptionItem, {
      title: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__["capitalize"])(key.replace(/_/g, ' ')),
      content: current.main[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Forecast")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, forecast && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "text-center",
    style: {
      flexFlow: 'initial'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, forecast.list.map(function (day, index) {
    return index !== 0 && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("p", {
      className: "text-center mb-0",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: date_fns_format__WEBPACK_IMPORTED_MODULE_22___default()(day.dt * 1000, 'ddd'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: day.weather.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: getWindDirection(day.wind.deg),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__["getWeatherIcon"])(day.weather[0].icon, 50),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: "".concat(day.main.temp, "\xB0"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }));
  }))))));
};

WeatherCard.propTypes = {
  city: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,
  country: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string,
  days: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (WeatherCard);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_17___default()("span")(_templateObject());

/***/ }),

/***/ "./components/styles/GlobalStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/GlobalStyles.js ***!
  \*******************************************/
/*! exports provided: GlobalStyles, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var less_vars_to_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! less-vars-to-js */ "less-vars-to-js");
/* harmony import */ var less_vars_to_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(less_vars_to_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");
/* harmony import */ var _raw_loader_assets_antd_custom_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !raw-loader!../../assets/antd-custom.less */ "./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @import url('/static/app.css');\n  @import url('/static/nprogress.css');\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  #__next > .ant-spin-nested-loading > .ant-spin-blur:after {\n    opacity: .8;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 14px;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  body {\n    background-color: ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering:optimizeLegibility;\n  }\n\n  #nprogress .bar {\n    background: ", ";\n  }\n  #nprogress .peg {\n    box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n  }\n  #nprogress .spinner-icon {\n    border-top-color: ", ";\n    border-left-color: ", ";\n  }\n\n  .weakColor{\n    -webkit-filter:invert(80%);\n    filter:invert(80%)\n  }\n\n  .weakColor img {\n    -webkit-filter:invert(100%);\n    filter:invert(100%)\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    white-space: nowrap;\n    color: ", ";\n    justify-content: center;\n  }\n  .brand > svg {\n    fill: ", ";\n  }\n  .anticon {\n    vertical-align: middle\n  }\n\n  b, strong {\n    font-weight: 600;\n  }\n\n  h1, h2, h3, h4, h5, h6,\n  .h1, .h2, .h3, .h4, .h5, .h6 {\n    margin-bottom: 0.5rem;\n    font-family: inherit;\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n\n  h2, .h2 {\n    font-size: 2rem;\n  }\n\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n\n  h5, .h5 {\n    font-size: 1.25rem;\n  }\n\n  h6, .h6 {\n    font-size: 1rem;\n  }\n\n  .clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n  .list-unstyled {\n    padding-left: 0;\n    list-style: none;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .scroll-y {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .scroll-x {\n    overflow-x: auto!important;\n  }\n\n  .fill-workspace {\n    height: calc(100vh - 105px);\n  }\n\n  .full-workspace {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n  }\n\n  .bg-primary {\n    background-color: ", " !important;\n  }\n\n  .bg-normal {\n    background-color: ", " !important;\n  }\n\n  .bg-success {\n    background-color: ", " !important;\n  }\n\n  .bg-info {\n    background-color: ", " !important;\n  }\n\n  .bg-warning {\n    background-color: ", " !important;\n  }\n\n  .bg-error {\n    background-color: ", " !important;\n  }\n\n  .bg-dark {\n    background-color: ", " !important;\n  }\n\n  .bg-white {\n    background-color: #fff !important;\n  }\n\n  .bg-transparent {\n    background-color: transparent !important;\n  }\n\n  .border {\n    border: 1px solid ", " !important;\n  }\n\n  .border-top {\n    border-top: 1px solid ", " !important;\n  }\n\n  .border-right {\n    border-right: 1px solid ", " !important;\n  }\n\n  .border-bottom {\n    border-bottom: 1px solid ", " !important;\n  }\n\n  .border-left {\n    border-left: 1px solid ", " !important;\n  }\n\n  .border-0 {\n    border: 0 !important;\n  }\n\n  .border-top-0 {\n    border-top: 0 !important;\n  }\n\n  .border-right-0 {\n    border-right: 0 !important;\n  }\n\n  .border-bottom-0 {\n    border-bottom: 0 !important;\n  }\n\n  .border-left-0 {\n    border-left: 0 !important;\n  }\n\n  .border-primary {\n    border-color: ", " !important;\n  }\n\n  .border-normal {\n    border-color: ", " !important;\n  }\n\n  .border-success {\n    border-color: ", " !important;\n  }\n\n  .border-info {\n    border-color: ", " !important;\n  }\n\n  .border-warning {\n    border-color: ", " !important;\n  }\n\n  .border-error {\n    border-color: ", " !important;\n  }\n\n  .border-white {\n    border-color: #fff !important;\n  }\n\n  .rounded {\n    border-radius: ", " !important;\n  }\n\n  .rounded-top {\n    border-top-left-radius: ", " !important;\n    border-top-right-radius: ", " !important;\n  }\n\n  .rounded-right {\n    border-top-right-radius: ", " !important;\n    border-bottom-right-radius: ", " !important;\n  }\n\n  .rounded-bottom {\n    border-bottom-right-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-left {\n    border-top-left-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-circle {\n    border-radius: 50% !important;\n  }\n\n  .rounded-0 {\n    border-radius: 0 !important;\n  }\n\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  }\n\n  .shadow {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n  }\n\n  .shadow-lg {\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n  }\n\n  .shadow-none, .shadow-0 {\n    box-shadow: none !important;\n  }\n\n  .m-0 {\n    margin: 0 !important;\n  }\n\n  .mt-0,\n  .my-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-0,\n  .mx-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-0,\n  .my-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-0,\n  .mx-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-1,\n  .mx-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-1,\n  .my-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-1,\n  .mx-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-2,\n  .my-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-2,\n  .my-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-2,\n  .mx-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-3,\n  .mx-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-3,\n  .my-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-3,\n  .mx-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-4,\n  .my-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-4,\n  .mx-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-4,\n  .my-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-4,\n  .mx-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-5,\n  .my-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-5,\n  .mx-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-5,\n  .my-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-5,\n  .mx-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-0 {\n    padding: 0 !important;\n  }\n\n  .pt-0,\n  .py-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-0,\n  .px-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-0,\n  .py-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-0,\n  .px-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-1,\n  .py-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-1,\n  .px-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-1,\n  .py-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-1,\n  .px-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-2,\n  .py-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-2,\n  .px-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-2,\n  .py-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-2,\n  .px-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-3,\n  .px-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-3,\n  .px-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-4,\n  .py-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-4,\n  .px-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-4,\n  .py-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-4,\n  .px-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-5,\n  .py-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-5,\n  .px-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-5,\n  .py-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-5,\n  .px-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-auto {\n    margin: auto !important;\n  }\n\n  .mt-auto,\n  .my-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-auto,\n  .mx-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-auto,\n  .my-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-auto,\n  .mx-auto {\n    margin-left: auto !important;\n  }\n\n  @media (min-width: 576px) {\n    .m-sm-0 {\n      margin: 0 !important;\n    }\n    .mt-sm-0,\n    .my-sm-0 {\n      margin-top: 0 !important;\n    }\n    .mr-sm-0,\n    .mx-sm-0 {\n      margin-right: 0 !important;\n    }\n    .mb-sm-0,\n    .my-sm-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-sm-0,\n    .mx-sm-0 {\n      margin-left: 0 !important;\n    }\n    .m-sm-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-sm-1,\n    .my-sm-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-sm-1,\n    .mx-sm-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-sm-1,\n    .my-sm-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-sm-1,\n    .mx-sm-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-sm-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-sm-2,\n    .my-sm-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-sm-2,\n    .mx-sm-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-sm-2,\n    .my-sm-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-sm-2,\n    .mx-sm-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-sm-3 {\n      margin: 1rem !important;\n    }\n    .mt-sm-3,\n    .my-sm-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-sm-3,\n    .mx-sm-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-sm-3,\n    .my-sm-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-sm-3,\n    .mx-sm-3 {\n      margin-left: 1rem !important;\n    }\n    .m-sm-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-sm-4,\n    .my-sm-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-sm-4,\n    .mx-sm-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-sm-4,\n    .my-sm-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-sm-4,\n    .mx-sm-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-sm-5 {\n      margin: 3rem !important;\n    }\n    .mt-sm-5,\n    .my-sm-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-sm-5,\n    .mx-sm-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-sm-5,\n    .my-sm-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-sm-5,\n    .mx-sm-5 {\n      margin-left: 3rem !important;\n    }\n    .p-sm-0 {\n      padding: 0 !important;\n    }\n    .pt-sm-0,\n    .py-sm-0 {\n      padding-top: 0 !important;\n    }\n    .pr-sm-0,\n    .px-sm-0 {\n      padding-right: 0 !important;\n    }\n    .pb-sm-0,\n    .py-sm-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-sm-0,\n    .px-sm-0 {\n      padding-left: 0 !important;\n    }\n    .p-sm-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-sm-1,\n    .py-sm-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-sm-1,\n    .px-sm-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-sm-1,\n    .py-sm-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-sm-1,\n    .px-sm-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-sm-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-sm-2,\n    .py-sm-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-sm-2,\n    .px-sm-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-sm-2,\n    .py-sm-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-sm-2,\n    .px-sm-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-sm-3 {\n      padding: 1rem !important;\n    }\n    .pt-sm-3,\n    .py-sm-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-sm-3,\n    .px-sm-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-sm-3,\n    .py-sm-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-sm-3,\n    .px-sm-3 {\n      padding-left: 1rem !important;\n    }\n    .p-sm-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-sm-4,\n    .py-sm-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-sm-4,\n    .px-sm-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-sm-4,\n    .py-sm-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-sm-4,\n    .px-sm-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-sm-5 {\n      padding: 3rem !important;\n    }\n    .pt-sm-5,\n    .py-sm-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-sm-5,\n    .px-sm-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-sm-5,\n    .py-sm-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-sm-5,\n    .px-sm-5 {\n      padding-left: 3rem !important;\n    }\n    .m-sm-auto {\n      margin: auto !important;\n    }\n    .mt-sm-auto,\n    .my-sm-auto {\n      margin-top: auto !important;\n    }\n    .mr-sm-auto,\n    .mx-sm-auto {\n      margin-right: auto !important;\n    }\n    .mb-sm-auto,\n    .my-sm-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-sm-auto,\n    .mx-sm-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .m-md-0 {\n      margin: 0 !important;\n    }\n    .mt-md-0,\n    .my-md-0 {\n      margin-top: 0 !important;\n    }\n    .mr-md-0,\n    .mx-md-0 {\n      margin-right: 0 !important;\n    }\n    .mb-md-0,\n    .my-md-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-md-0,\n    .mx-md-0 {\n      margin-left: 0 !important;\n    }\n    .m-md-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-md-1,\n    .my-md-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-md-1,\n    .mx-md-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-md-1,\n    .my-md-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-md-1,\n    .mx-md-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-md-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-md-2,\n    .my-md-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-md-2,\n    .mx-md-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-md-2,\n    .my-md-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-md-2,\n    .mx-md-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-md-3 {\n      margin: 1rem !important;\n    }\n    .mt-md-3,\n    .my-md-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-md-3,\n    .mx-md-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-md-3,\n    .my-md-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-md-3,\n    .mx-md-3 {\n      margin-left: 1rem !important;\n    }\n    .m-md-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-md-4,\n    .my-md-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-md-4,\n    .mx-md-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-md-4,\n    .my-md-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-md-4,\n    .mx-md-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-md-5 {\n      margin: 3rem !important;\n    }\n    .mt-md-5,\n    .my-md-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-md-5,\n    .mx-md-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-md-5,\n    .my-md-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-md-5,\n    .mx-md-5 {\n      margin-left: 3rem !important;\n    }\n    .p-md-0 {\n      padding: 0 !important;\n    }\n    .pt-md-0,\n    .py-md-0 {\n      padding-top: 0 !important;\n    }\n    .pr-md-0,\n    .px-md-0 {\n      padding-right: 0 !important;\n    }\n    .pb-md-0,\n    .py-md-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-md-0,\n    .px-md-0 {\n      padding-left: 0 !important;\n    }\n    .p-md-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-md-1,\n    .py-md-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-md-1,\n    .px-md-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-md-1,\n    .py-md-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-md-1,\n    .px-md-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-md-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-md-2,\n    .py-md-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-md-2,\n    .px-md-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-md-2,\n    .py-md-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-md-2,\n    .px-md-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-md-3 {\n      padding: 1rem !important;\n    }\n    .pt-md-3,\n    .py-md-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-md-3,\n    .px-md-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-md-3,\n    .py-md-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-md-3,\n    .px-md-3 {\n      padding-left: 1rem !important;\n    }\n    .p-md-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-md-4,\n    .py-md-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-md-4,\n    .px-md-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-md-4,\n    .py-md-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-md-4,\n    .px-md-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-md-5 {\n      padding: 3rem !important;\n    }\n    .pt-md-5,\n    .py-md-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-md-5,\n    .px-md-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-md-5,\n    .py-md-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-md-5,\n    .px-md-5 {\n      padding-left: 3rem !important;\n    }\n    .m-md-auto {\n      margin: auto !important;\n    }\n    .mt-md-auto,\n    .my-md-auto {\n      margin-top: auto !important;\n    }\n    .mr-md-auto,\n    .mx-md-auto {\n      margin-right: auto !important;\n    }\n    .mb-md-auto,\n    .my-md-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-md-auto,\n    .mx-md-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .m-lg-0 {\n      margin: 0 !important;\n    }\n    .mt-lg-0,\n    .my-lg-0 {\n      margin-top: 0 !important;\n    }\n    .mr-lg-0,\n    .mx-lg-0 {\n      margin-right: 0 !important;\n    }\n    .mb-lg-0,\n    .my-lg-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-lg-0,\n    .mx-lg-0 {\n      margin-left: 0 !important;\n    }\n    .m-lg-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-lg-1,\n    .my-lg-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-lg-1,\n    .mx-lg-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-lg-1,\n    .my-lg-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-lg-1,\n    .mx-lg-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-lg-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-lg-2,\n    .my-lg-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-lg-2,\n    .mx-lg-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-lg-2,\n    .my-lg-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-lg-2,\n    .mx-lg-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-lg-3 {\n      margin: 1rem !important;\n    }\n    .mt-lg-3,\n    .my-lg-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-lg-3,\n    .mx-lg-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-lg-3,\n    .my-lg-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-lg-3,\n    .mx-lg-3 {\n      margin-left: 1rem !important;\n    }\n    .m-lg-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-lg-4,\n    .my-lg-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-lg-4,\n    .mx-lg-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-lg-4,\n    .my-lg-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-lg-4,\n    .mx-lg-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-lg-5 {\n      margin: 3rem !important;\n    }\n    .mt-lg-5,\n    .my-lg-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-lg-5,\n    .mx-lg-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-lg-5,\n    .my-lg-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-lg-5,\n    .mx-lg-5 {\n      margin-left: 3rem !important;\n    }\n    .p-lg-0 {\n      padding: 0 !important;\n    }\n    .pt-lg-0,\n    .py-lg-0 {\n      padding-top: 0 !important;\n    }\n    .pr-lg-0,\n    .px-lg-0 {\n      padding-right: 0 !important;\n    }\n    .pb-lg-0,\n    .py-lg-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-lg-0,\n    .px-lg-0 {\n      padding-left: 0 !important;\n    }\n    .p-lg-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-lg-1,\n    .py-lg-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-lg-1,\n    .px-lg-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-lg-1,\n    .py-lg-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-lg-1,\n    .px-lg-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-lg-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-lg-2,\n    .py-lg-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-lg-2,\n    .px-lg-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-lg-2,\n    .py-lg-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-lg-2,\n    .px-lg-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-lg-3 {\n      padding: 1rem !important;\n    }\n    .pt-lg-3,\n    .py-lg-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-lg-3,\n    .px-lg-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-lg-3,\n    .py-lg-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-lg-3,\n    .px-lg-3 {\n      padding-left: 1rem !important;\n    }\n    .p-lg-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-lg-4,\n    .py-lg-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-lg-4,\n    .px-lg-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-lg-4,\n    .py-lg-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-lg-4,\n    .px-lg-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-lg-5 {\n      padding: 3rem !important;\n    }\n    .pt-lg-5,\n    .py-lg-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-lg-5,\n    .px-lg-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-lg-5,\n    .py-lg-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-lg-5,\n    .px-lg-5 {\n      padding-left: 3rem !important;\n    }\n    .m-lg-auto {\n      margin: auto !important;\n    }\n    .mt-lg-auto,\n    .my-lg-auto {\n      margin-top: auto !important;\n    }\n    .mr-lg-auto,\n    .mx-lg-auto {\n      margin-right: auto !important;\n    }\n    .mb-lg-auto,\n    .my-lg-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-lg-auto,\n    .mx-lg-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .m-xl-0 {\n      margin: 0 !important;\n    }\n    .mt-xl-0,\n    .my-xl-0 {\n      margin-top: 0 !important;\n    }\n    .mr-xl-0,\n    .mx-xl-0 {\n      margin-right: 0 !important;\n    }\n    .mb-xl-0,\n    .my-xl-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-xl-0,\n    .mx-xl-0 {\n      margin-left: 0 !important;\n    }\n    .m-xl-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-xl-1,\n    .my-xl-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-xl-1,\n    .mx-xl-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-xl-1,\n    .my-xl-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-xl-1,\n    .mx-xl-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-xl-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-xl-2,\n    .my-xl-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-xl-2,\n    .mx-xl-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-xl-2,\n    .my-xl-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-xl-2,\n    .mx-xl-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-xl-3 {\n      margin: 1rem !important;\n    }\n    .mt-xl-3,\n    .my-xl-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-xl-3,\n    .mx-xl-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-xl-3,\n    .my-xl-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-xl-3,\n    .mx-xl-3 {\n      margin-left: 1rem !important;\n    }\n    .m-xl-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-xl-4,\n    .my-xl-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-xl-4,\n    .mx-xl-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-xl-4,\n    .my-xl-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-xl-4,\n    .mx-xl-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-xl-5 {\n      margin: 3rem !important;\n    }\n    .mt-xl-5,\n    .my-xl-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-xl-5,\n    .mx-xl-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-xl-5,\n    .my-xl-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-xl-5,\n    .mx-xl-5 {\n      margin-left: 3rem !important;\n    }\n    .p-xl-0 {\n      padding: 0 !important;\n    }\n    .pt-xl-0,\n    .py-xl-0 {\n      padding-top: 0 !important;\n    }\n    .pr-xl-0,\n    .px-xl-0 {\n      padding-right: 0 !important;\n    }\n    .pb-xl-0,\n    .py-xl-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-xl-0,\n    .px-xl-0 {\n      padding-left: 0 !important;\n    }\n    .p-xl-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-xl-1,\n    .py-xl-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-xl-1,\n    .px-xl-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-xl-1,\n    .py-xl-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-xl-1,\n    .px-xl-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-xl-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-xl-2,\n    .py-xl-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-xl-2,\n    .px-xl-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-xl-2,\n    .py-xl-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-xl-2,\n    .px-xl-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-xl-3 {\n      padding: 1rem !important;\n    }\n    .pt-xl-3,\n    .py-xl-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-xl-3,\n    .px-xl-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-xl-3,\n    .py-xl-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-xl-3,\n    .px-xl-3 {\n      padding-left: 1rem !important;\n    }\n    .p-xl-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-xl-4,\n    .py-xl-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-xl-4,\n    .px-xl-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-xl-4,\n    .py-xl-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-xl-4,\n    .px-xl-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-xl-5 {\n      padding: 3rem !important;\n    }\n    .pt-xl-5,\n    .py-xl-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-xl-5,\n    .px-xl-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-xl-5,\n    .py-xl-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-xl-5,\n    .px-xl-5 {\n      padding-left: 3rem !important;\n    }\n    .m-xl-auto {\n      margin: auto !important;\n    }\n    .mt-xl-auto,\n    .my-xl-auto {\n      margin-top: auto !important;\n    }\n    .mr-xl-auto,\n    .mx-xl-auto {\n      margin-right: auto !important;\n    }\n    .mb-xl-auto,\n    .my-xl-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-xl-auto,\n    .mx-xl-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  .text-monospace {\n    font-family: ", " ;\n  }\n\n  .text-justify {\n    text-align: justify !important;\n  }\n\n  .text-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .text-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .text-left {\n    text-align: left !important;\n  }\n\n  .text-right {\n    text-align: right !important;\n  }\n\n  .text-center {\n    text-align: center !important;\n  }\n\n  .text-lowercase {\n    text-transform: lowercase !important;\n  }\n\n  .text-uppercase {\n    text-transform: uppercase !important;\n  }\n\n  .text-capitalize {\n    text-transform: capitalize !important;\n  }\n\n  .font-weight-light {\n    font-weight: 300 !important;\n  }\n\n  .font-weight-normal {\n    font-weight: 400 !important;\n  }\n\n  .font-weight-bold {\n    font-weight: 700 !important;\n  }\n\n  .font-italic {\n    font-style: italic !important;\n  }\n\n  .text-white {\n    color: #fff !important;\n  }\n\n  .text-primary {\n    color: ", " !important;\n  }\n\n  .text-normal {\n    color: ", " !important;\n  }\n\n  .text-success {\n    color: ", " !important;\n  }\n\n  .text-info {\n    color: ", " !important;\n  }\n\n  .text-warning {\n    color: ", " !important;\n  }\n\n  .text-error {\n    color: ", " !important;\n  }\n\n  .text-dark {\n    color: ", " !important;\n  }\n\n  .text-body {\n    color: ", " !important;\n  }\n\n  .text-muted {\n    color: ", " !important;\n  }\n\n  .text-black {\n    color: rgba(0, 0, 0, 1) !important;\n  }\n\n  .text-black-50 {\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .text-white-50 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-white-65 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-light {\n    color: white !important;\n  }\n\n  .text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  }\n\n  /* Fixes */\n  .mapboxgl-ctrl-group {\n    display: inline-block;\n    margin: 1rem;\n  }\n  .rv-discrete-color-legend {\n    display: block;\n    width: 100%!important;\n    text-align: center;\n  }\n  .rv-discrete-color-legend-item {\n    display: inline-block;\n  }\n\n  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,\n  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n    box-shadow: none;\n  }\n  .header-notifications .ant-spin-container {\n    overflow: auto;\n    height: 220px;\n    width: 350px;\n  }\n  .header-notifications .ant-list-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-top: 1px solid rgba(0,0,0,.03)\n  }\n  /* custom card */\n  .ant-card-bordered {\n    box-shadow: 0 0 1px rgba(0,0,0,.1);\n    border: 0!important;\n    background-clip: padding-box;\n  }\n  .card-head-0 .ant-card-head {\n    border: 0;\n  }\n  .ant-card-actions {\n    border-radius: 0 0 ", " ", ";\n  }\n  .ant-card-head-title {\n    font-weight: 700;\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(45deg) translateX(3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(-45deg) translateX(3px);\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(-45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    height: 1px;\n  }\n  /* Chart */\n  .rv-xy-plot__grid-lines, .rv-xy-plot__axis {\n    stroke-width: 0.2;\n  }\n  .rv-discrete-color-legend-item__color {\n    height: 6px;\n  }\n  .rv-discrete-color-legend-item__color__path {\n    stroke-width: 6px;\n  }\n  /* Chat */\n  .chat-drawer .ant-drawer-header,\n  .chat-drawer .ant-drawer-body {\n    padding: 0;\n  }\n  .message-modal .ant-modal-content {\n    border-radius: 4px 4px 0 0;\n  }\n\n  .am-weather-cloud-2 > path, [id^=cloudy-day-] > path {\n    stroke-width: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var lessVariables = less_vars_to_js__WEBPACK_IMPORTED_MODULE_3___default()(_raw_loader_assets_antd_custom_less__WEBPACK_IMPORTED_MODULE_5__["default"], {
  resolveVariables: true,
  stripPrefix: true
}),
    camelCasedVariables = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_4__["objectToCamelCase"])(lessVariables),
    theme = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, camelCasedVariables);

var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject(), theme.backgroundColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.codeFamily, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.textColor, theme.textColorSecondary, theme.borderRadiusBase, theme.borderRadiusBase);


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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// Default ant design variales ->>> https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\n// -------- Colors -----------\n@primary-color          : #007bff;\n@info-color             : #1890ff;\n@success-color          : #52c41a;\n@processing-color       : #1890ff;\n@error-color            : #f5222d;\n@highlight-color        : #f5222d;\n@warning-color          : #faad14;\n@normal-color           : #d9d9d9;\n@background-color       : #f7f7f9;\n@dark-color             : rgb(51,51,51);\n@text-color             : rgba(0, 0, 0, .65);\n@text-color-secondary   : rgba(0,0,0,.45);\n\n// -------- Border radius -----------\n@border-radius-base     : 4px;\n@border-radius-sm       : 4px;\n\n// -------- Border color -----------\n@border-color-base      : hsv(0, 0, 85%);\n@border-color-split     : rgba(0, 0, 0, 0.05);\n\n// -------- Font family -----------\n@font-family            : \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n@code-family            : \"Anonymous Pro\", \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n\n// -------- Menu -----------\n@menu-inline-toplevel-item-height: 36px;\n@menu-item-height       : 36px;\n\n// -------- Header -----------\n@layout-header-background: #ffffff;\n@layout-header-height    : 60px;\n\n// -------- Card -----------\n@card-padding-base      : 16px;\n@card-padding-wider      : 16px;\n\n\n\n@menu-dark-bg: rgb(51,51,51);\n@menu-dark-submenu-bg: rgb(51,51,51);");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Overview */ "./components/Overview.js");
var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/pages/index.js";




var OverviewPage = function OverviewPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/react-vis.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Overview__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (OverviewPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

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

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/progress":
/*!************************************!*\
  !*** external "antd/lib/progress" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/progress");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/skeleton":
/*!************************************!*\
  !*** external "antd/lib/skeleton" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ "antd/lib/timeline":
/*!************************************!*\
  !*** external "antd/lib/timeline" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/timeline");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "less-vars-to-js":
/*!**********************************!*\
  !*** external "less-vars-to-js" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("less-vars-to-js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-feather/dist/icons/archive":
/*!***************************************************!*\
  !*** external "react-feather/dist/icons/archive" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/archive");

/***/ }),

/***/ "react-feather/dist/icons/arrow-down":
/*!******************************************************!*\
  !*** external "react-feather/dist/icons/arrow-down" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down");

/***/ }),

/***/ "react-feather/dist/icons/arrow-down-left":
/*!***********************************************************!*\
  !*** external "react-feather/dist/icons/arrow-down-left" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down-left");

/***/ }),

/***/ "react-feather/dist/icons/arrow-down-right":
/*!************************************************************!*\
  !*** external "react-feather/dist/icons/arrow-down-right" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down-right");

/***/ }),

/***/ "react-feather/dist/icons/arrow-left":
/*!******************************************************!*\
  !*** external "react-feather/dist/icons/arrow-left" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-left");

/***/ }),

/***/ "react-feather/dist/icons/arrow-right":
/*!*******************************************************!*\
  !*** external "react-feather/dist/icons/arrow-right" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-right");

/***/ }),

/***/ "react-feather/dist/icons/arrow-up":
/*!****************************************************!*\
  !*** external "react-feather/dist/icons/arrow-up" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up");

/***/ }),

/***/ "react-feather/dist/icons/arrow-up-left":
/*!*********************************************************!*\
  !*** external "react-feather/dist/icons/arrow-up-left" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up-left");

/***/ }),

/***/ "react-feather/dist/icons/arrow-up-right":
/*!**********************************************************!*\
  !*** external "react-feather/dist/icons/arrow-up-right" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up-right");

/***/ }),

/***/ "react-feather/dist/icons/bell":
/*!************************************************!*\
  !*** external "react-feather/dist/icons/bell" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/bell");

/***/ }),

/***/ "react-feather/dist/icons/bookmark":
/*!****************************************************!*\
  !*** external "react-feather/dist/icons/bookmark" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/bookmark");

/***/ }),

/***/ "react-feather/dist/icons/edit":
/*!************************************************!*\
  !*** external "react-feather/dist/icons/edit" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/edit");

/***/ }),

/***/ "react-feather/dist/icons/git-commit":
/*!******************************************************!*\
  !*** external "react-feather/dist/icons/git-commit" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/git-commit");

/***/ }),

/***/ "react-feather/dist/icons/heart":
/*!*************************************************!*\
  !*** external "react-feather/dist/icons/heart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/heart");

/***/ }),

/***/ "react-feather/dist/icons/message-circle":
/*!**********************************************************!*\
  !*** external "react-feather/dist/icons/message-circle" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/message-circle");

/***/ }),

/***/ "react-feather/dist/icons/more-horizontal":
/*!***********************************************************!*\
  !*** external "react-feather/dist/icons/more-horizontal" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/more-horizontal");

/***/ }),

/***/ "react-feather/dist/icons/phone-call":
/*!******************************************************!*\
  !*** external "react-feather/dist/icons/phone-call" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/phone-call");

/***/ }),

/***/ "react-feather/dist/icons/printer":
/*!***************************************************!*\
  !*** external "react-feather/dist/icons/printer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/printer");

/***/ }),

/***/ "react-feather/dist/icons/save":
/*!************************************************!*\
  !*** external "react-feather/dist/icons/save" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/save");

/***/ }),

/***/ "react-feather/dist/icons/server":
/*!**************************************************!*\
  !*** external "react-feather/dist/icons/server" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/server");

/***/ }),

/***/ "react-feather/dist/icons/share":
/*!*************************************************!*\
  !*** external "react-feather/dist/icons/share" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/share");

/***/ }),

/***/ "react-feather/dist/icons/star":
/*!************************************************!*\
  !*** external "react-feather/dist/icons/star" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/star");

/***/ }),

/***/ "react-feather/dist/icons/trash":
/*!*************************************************!*\
  !*** external "react-feather/dist/icons/trash" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/trash");

/***/ }),

/***/ "react-feather/dist/icons/trending-down":
/*!*********************************************************!*\
  !*** external "react-feather/dist/icons/trending-down" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/trending-down");

/***/ }),

/***/ "react-feather/dist/icons/trending-up":
/*!*******************************************************!*\
  !*** external "react-feather/dist/icons/trending-up" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/trending-up");

/***/ }),

/***/ "react-no-ssr":
/*!*******************************!*\
  !*** external "react-no-ssr" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-vis":
/*!****************************!*\
  !*** external "react-vis" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-vis");

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
//# sourceMappingURL=index.js.map