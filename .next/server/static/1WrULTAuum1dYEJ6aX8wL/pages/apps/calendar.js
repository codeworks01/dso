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
/******/ 	return __webpack_require__(__webpack_require__.s = "3c61");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3c61":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jG4j");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Yj90":
/***/ (function(module, exports) {

module.exports = require("antd/lib/badge");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "jG4j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/calendar"
var calendar_ = __webpack_require__("wajx");
var calendar_default = /*#__PURE__*/__webpack_require__.n(calendar_);

// EXTERNAL MODULE: external "antd/lib/badge"
var badge_ = __webpack_require__("Yj90");
var badge_default = /*#__PURE__*/__webpack_require__.n(badge_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/Calendar.js

var CalendarStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Calendar__CalendarStyles",
  componentId: "ood6g2-0"
})([".ant-fullcalendar-year-select > div{border-radius:4px 0 0 4px;}.ant-fullcalendar-month-select > div{border-radius:0 4px 4px 0;margin-left:-1px;}.ant-select-open .ant-select-selection{z-index:99;}.events{list-style:none;margin:0;padding:0;}.ant-badge-status{overflow:hidden;white-space:nowrap;width:100%;text-overflow:ellipsis;font-size:12px;}.notes-month{text-align:center;}.ant-fullcalendar-fullscreen .ant-fullcalendar-month{height:calc((100vh - 184px) / 4);}"]);
/* harmony default export */ var Calendar = (CalendarStyles);
// CONCATENATED MODULE: ./components/Calendar.js





var getListData = function getListData(value) {
  var listData;

  switch (value.date()) {
    case 8:
      listData = [{
        type: 'warning',
        content: 'This is warning event.'
      }, {
        type: 'success',
        content: 'This is usual event.'
      }];
      break;

    case 10:
      listData = [{
        type: 'warning',
        content: 'This is warning event.'
      }, {
        type: 'success',
        content: 'This is usual event.'
      }, {
        type: 'error',
        content: 'This is error event.'
      }];
      break;

    case 15:
      listData = [{
        type: 'warning',
        content: 'This is warning event'
      }, {
        type: 'success',
        content: 'This is very long usual event。。....'
      }, {
        type: 'error',
        content: 'This is error event 1.'
      }, {
        type: 'error',
        content: 'This is error event 2.'
      }, {
        type: 'error',
        content: 'This is error event 3.'
      }, {
        type: 'error',
        content: 'This is error event 4.'
      }];
      break;

    default:
  }

  return listData || [];
};

var Calendar_dateCellRender = function dateCellRender(value) {
  var listData = getListData(value);
  return external_react_default.a.createElement("ul", {
    className: "events"
  }, listData.map(function (item) {
    return external_react_default.a.createElement("li", {
      key: item.content
    }, external_react_default.a.createElement("small", null, external_react_default.a.createElement(badge_default.a, {
      status: item.type,
      text: item.content
    })));
  }));
};

var getMonthData = function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
};

var Calendar_monthCellRender = function monthCellRender(value) {
  var num = getMonthData(value);
  return num ? external_react_default.a.createElement("div", {
    className: "notes-month"
  }, external_react_default.a.createElement("section", null, num), external_react_default.a.createElement("span", null, "Backlog number")) : null;
};

var Calendar_CalendarPage = function CalendarPage() {
  return external_react_default.a.createElement(Calendar, null, external_react_default.a.createElement(calendar_default.a, {
    dateCellRender: Calendar_dateCellRender,
    monthCellRender: Calendar_monthCellRender
  }));
};

/* harmony default export */ var components_Calendar = (Calendar_CalendarPage);
// CONCATENATED MODULE: ./pages/apps/calendar.js



var calendar_CalendarPage = function CalendarPage() {
  return external_react_default.a.createElement(components_Calendar, null);
};

/* harmony default export */ var calendar = __webpack_exports__["default"] = (calendar_CalendarPage);

/***/ }),

/***/ "wajx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/calendar");

/***/ })

/******/ });