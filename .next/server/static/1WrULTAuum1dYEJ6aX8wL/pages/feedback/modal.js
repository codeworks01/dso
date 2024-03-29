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
/******/ 	return __webpack_require__(__webpack_require__.s = "eb2a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "abcn":
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

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__("xZtu");
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// CONCATENATED MODULE: ./demos/antd/modal/async.js











var async_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOk", function () {
      _this.setState({
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true
      });

      setTimeout(function () {
        _this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function () {
      console.log('Clicked cancel button');

      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          visible = _this$state.visible,
          confirmLoading = _this$state.confirmLoading,
          ModalText = _this$state.ModalText;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: this.showModal
      }, "Open Modal with async logic"), external_react_default.a.createElement(modal_default.a, {
        title: "Title",
        visible: visible,
        onOk: this.handleOk,
        confirmLoading: confirmLoading,
        onCancel: this.handleCancel
      }, external_react_default.a.createElement("p", null, ModalText)));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var modal_async = (async_App);
// CONCATENATED MODULE: ./demos/antd/modal/basic.js











var basic_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOk", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: this.showModal
      }, "Open Modal"), external_react_default.a.createElement(modal_default.a, {
        title: "Basic Modal",
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel
      }, external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents...")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var basic = (basic_App);
/*<style>
.ant-modal p {
  margin: 0;
}
</style>*/
// CONCATENATED MODULE: ./demos/antd/modal/button-props.js











var button_props_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOk", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: this.showModal
      }, "Open Modal with customized button props"), external_react_default.a.createElement(modal_default.a, {
        title: "Basic Modal",
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        okButtonProps: {
          disabled: true
        },
        cancelButtonProps: {
          disabled: true
        }
      }, external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents...")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var button_props = (button_props_App);
// CONCATENATED MODULE: ./demos/antd/modal/confirm.js



var confirm_confirm = modal_default.a.confirm;

function showConfirm() {
  confirm_confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk: function onOk() {
      console.log('OK');
    },
    onCancel: function onCancel() {
      console.log('Cancel');
    }
  });
}

function showDeleteConfirm() {
  confirm_confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: function onOk() {
      console.log('OK');
    },
    onCancel: function onCancel() {
      console.log('Cancel');
    }
  });
}

function showPropsConfirm() {
  confirm_confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    okButtonProps: {
      disabled: true
    },
    cancelText: 'No',
    onOk: function onOk() {
      console.log('OK');
    },
    onCancel: function onCancel() {
      console.log('Cancel');
    }
  });
}

var confirm_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
    onClick: showConfirm
  }, "Confirm"), external_react_default.a.createElement(button_default.a, {
    onClick: showDeleteConfirm,
    type: "dashed"
  }, "Delete"), external_react_default.a.createElement(button_default.a, {
    onClick: showPropsConfirm,
    type: "dashed"
  }, "With extra props"));
};

/* harmony default export */ var modal_confirm = (confirm_Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./demos/antd/modal/confirm-promise.js




var confirm_promise_confirm = modal_default.a.confirm;

function confirm_promise_showConfirm() {
  confirm_promise_confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk: function onOk() {
      return new promise_default.a(function (resolve, reject) {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(function () {
        return console.log('Oops errors!');
      });
    },
    onCancel: function onCancel() {}
  });
}

var confirm_promise_Component = function Component() {
  return external_react_default.a.createElement(button_default.a, {
    onClick: confirm_promise_showConfirm
  }, "Confirm");
};

/* harmony default export */ var confirm_promise = (confirm_promise_Component);
// CONCATENATED MODULE: ./demos/antd/modal/footer.js











var footer_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      loading: false,
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleOk", function () {
      _this.setState({
        loading: true
      });

      setTimeout(function () {
        _this.setState({
          loading: false,
          visible: false
        });
      }, 3000);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleCancel", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          visible = _this$state.visible,
          loading = _this$state.loading;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: this.showModal
      }, "Open Modal with customized footer"), external_react_default.a.createElement(modal_default.a, {
        visible: visible,
        title: "Title",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: [external_react_default.a.createElement(button_default.a, {
          key: "back",
          onClick: this.handleCancel
        }, "Return"), external_react_default.a.createElement(button_default.a, {
          key: "submit",
          loading: loading,
          onClick: this.handleOk
        }, "Submit")]
      }, external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents..."), external_react_default.a.createElement("p", null, "Some contents...")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var footer = (footer_App);
// CONCATENATED MODULE: ./demos/antd/modal/info.js




function info() {
  modal_default.a.info({
    title: 'This is a notification message',
    content: external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "some messages...some messages..."), external_react_default.a.createElement("p", null, "some messages...some messages...")),
    onOk: function onOk() {}
  });
}

function success() {
  modal_default.a.success({
    title: 'This is a success message',
    content: 'some messages...some messages...'
  });
}

function error() {
  modal_default.a.error({
    title: 'This is an error message',
    content: 'some messages...some messages...'
  });
}

function warning() {
  modal_default.a.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...'
  });
}

var info_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
    onClick: info
  }, "Info"), external_react_default.a.createElement(button_default.a, {
    onClick: success
  }, "Success"), external_react_default.a.createElement(button_default.a, {
    onClick: error
  }, "Error"), external_react_default.a.createElement(button_default.a, {
    onClick: warning
  }, "Warning"));
};

/* harmony default export */ var modal_info = (info_Component);
// CONCATENATED MODULE: ./demos/antd/modal/locale.js











var locale_LocalizedModal =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(LocalizedModal, _React$Component);

  function LocalizedModal() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, LocalizedModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(LocalizedModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      visible: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "hideModal", function () {
      _this.setState({
        visible: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(LocalizedModal, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: this.showModal
      }, "Modal"), external_react_default.a.createElement(modal_default.a, {
        title: "Modal",
        visible: this.state.visible,
        onOk: this.hideModal,
        onCancel: this.hideModal,
        okText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88"
      }, external_react_default.a.createElement("p", null, "Bla bla ..."), external_react_default.a.createElement("p", null, "Bla bla ..."), external_react_default.a.createElement("p", null, "Bla bla ...")));
    }
  }]);

  return LocalizedModal;
}(external_react_default.a.Component);

function locale_confirm() {
  modal_default.a.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消'
  });
}

var locale_Component = function Component() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(locale_LocalizedModal, null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(button_default.a, {
    onClick: locale_confirm
  }, "Confirm"));
};

/* harmony default export */ var locale = (locale_Component);
// CONCATENATED MODULE: ./demos/antd/modal/manual.js




function countDown() {
  var secondsToGo = 5;

  var modal = modal_default.a.success({
    title: 'This is a notification message',
    content: "This modal will be destroyed after ".concat(secondsToGo, " second.")
  });

  setInterval(function () {
    secondsToGo -= 1;
    modal.update({
      content: "This modal will be destroyed after ".concat(secondsToGo, " second.")
    });
  }, 1000);
  setTimeout(function () {
    return modal.destroy();
  }, secondsToGo * 1000);
}

var manual_Component = function Component() {
  return external_react_default.a.createElement(button_default.a, {
    onClick: countDown
  }, "Open modal to close in 5s");
};

/* harmony default export */ var manual = (manual_Component);
// CONCATENATED MODULE: ./demos/antd/modal/position.js











var position_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      modal1Visible: false,
      modal2Visible: false
    });

    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "setModal1Visible",
    value: function setModal1Visible(modal1Visible) {
      this.setState({
        modal1Visible: modal1Visible
      });
    }
  }, {
    key: "setModal2Visible",
    value: function setModal2Visible(modal2Visible) {
      this.setState({
        modal2Visible: modal2Visible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(button_default.a, {
        onClick: function onClick() {
          return _this2.setModal1Visible(true);
        }
      }, "Display a modal dialog at 20px to Top"), external_react_default.a.createElement(modal_default.a, {
        title: "20px to Top",
        style: {
          top: 20
        },
        visible: this.state.modal1Visible,
        onOk: function onOk() {
          return _this2.setModal1Visible(false);
        },
        onCancel: function onCancel() {
          return _this2.setModal1Visible(false);
        }
      }, external_react_default.a.createElement("p", null, "some contents..."), external_react_default.a.createElement("p", null, "some contents..."), external_react_default.a.createElement("p", null, "some contents...")), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(button_default.a, {
        onClick: function onClick() {
          return _this2.setModal2Visible(true);
        }
      }, "Vertically centered modal dialog"), external_react_default.a.createElement(modal_default.a, {
        title: "Vertically centered modal dialog",
        centered: true,
        visible: this.state.modal2Visible,
        onOk: function onOk() {
          return _this2.setModal2Visible(false);
        },
        onCancel: function onCancel() {
          return _this2.setModal2Visible(false);
        }
      }, external_react_default.a.createElement("p", null, "some contents..."), external_react_default.a.createElement("p", null, "some contents..."), external_react_default.a.createElement("p", null, "some contents...")));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var position = (position_App);
// CONCATENATED MODULE: ./demos/antd/modal/demo.js





















var demo_Demo =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Demo, _React$Component);

  function Demo() {
    Object(classCallCheck["a" /* default */])(this, Demo);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Demo).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Demo, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(row_default.a, {
        gutter: 16,
        id: "components-button-demo"
      }, external_react_default.a.createElement(col_default.a, {
        lg: 12,
        md: 24
      }, external_react_default.a.createElement(card_default.a, {
        bodyStyle: {
          padding: 0
        }
      }, external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customized footer")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(footer, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Confirmation modal dialog")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(confirm_promise, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Internationalization")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(locale, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customize the position of the modal")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(position, null)))), external_react_default.a.createElement(col_default.a, {
        lg: 12,
        md: 24
      }, external_react_default.a.createElement(card_default.a, {
        bodyStyle: {
          padding: 0
        }
      }, external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Asynchronously close")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(modal_async, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Confirmation modal dialog")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(modal_confirm, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Infomation modal dialog")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(modal_info, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Manual to update destroy")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(manual, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Customize footer buttons props")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(button_props, null)))));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/feedback/modal.js



var modal_ModalPage = function ModalPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var feedback_modal = __webpack_exports__["default"] = (modal_ModalPage);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "eb2a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("abcn");


/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ })

/******/ });