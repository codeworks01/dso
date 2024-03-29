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
/******/ 	return __webpack_require__(__webpack_require__.s = "c4ce");
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

/***/ "7SeW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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

// EXTERNAL MODULE: external "antd/lib/collapse"
var collapse_ = __webpack_require__("QNhp");
var collapse_default = /*#__PURE__*/__webpack_require__.n(collapse_);

// CONCATENATED MODULE: ./demos/antd/collapse/accordion.js


var Panel = collapse_default.a.Panel;
var accordion_text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var accordion_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    accordion: true
  }, external_react_default.a.createElement(Panel, {
    header: "This is panel header 1",
    key: "1"
  }, external_react_default.a.createElement("p", null, accordion_text)), external_react_default.a.createElement(Panel, {
    header: "This is panel header 2",
    key: "2"
  }, external_react_default.a.createElement("p", null, accordion_text)), external_react_default.a.createElement(Panel, {
    header: "This is panel header 3",
    key: "3"
  }, external_react_default.a.createElement("p", null, accordion_text)));
};

/* harmony default export */ var accordion = (accordion_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/basic.js


var basic_Panel = collapse_default.a.Panel;

function callback(key) {
  console.log(key);
}

var basic_text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var basic_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    defaultActiveKey: ['1'],
    onChange: callback
  }, external_react_default.a.createElement(basic_Panel, {
    header: "This is panel header 1",
    key: "1"
  }, external_react_default.a.createElement("p", {
    className: "m-0"
  }, basic_text)), external_react_default.a.createElement(basic_Panel, {
    header: "This is panel header 2",
    key: "2"
  }, external_react_default.a.createElement("p", {
    className: "m-0"
  }, basic_text)), external_react_default.a.createElement(basic_Panel, {
    header: "This is panel header 3",
    key: "3",
    disabled: true
  }, external_react_default.a.createElement("p", {
    className: "m-0"
  }, basic_text)));
};

/* harmony default export */ var basic = (basic_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/borderless.js


var borderless_Panel = collapse_default.a.Panel;
var borderless_text = external_react_default.a.createElement("p", {
  style: {
    paddingLeft: 24
  }
}, "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.");

var borderless_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    bordered: false,
    defaultActiveKey: ['1']
  }, external_react_default.a.createElement(borderless_Panel, {
    header: "This is panel header 1",
    key: "1"
  }, borderless_text), external_react_default.a.createElement(borderless_Panel, {
    header: "This is panel header 2",
    key: "2"
  }, borderless_text), external_react_default.a.createElement(borderless_Panel, {
    header: "This is panel header 3",
    key: "3"
  }, borderless_text));
};

/* harmony default export */ var borderless = (borderless_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/custom.js


var custom_Panel = collapse_default.a.Panel;
var custom_text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
var customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden'
};

var custom_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    bordered: false,
    defaultActiveKey: ['1']
  }, external_react_default.a.createElement(custom_Panel, {
    header: "This is panel header 1",
    key: "1",
    style: customPanelStyle
  }, external_react_default.a.createElement("p", null, custom_text)), external_react_default.a.createElement(custom_Panel, {
    header: "This is panel header 2",
    key: "2",
    style: customPanelStyle
  }, external_react_default.a.createElement("p", null, custom_text)), external_react_default.a.createElement(custom_Panel, {
    header: "This is panel header 3",
    key: "3",
    style: customPanelStyle
  }, external_react_default.a.createElement("p", null, custom_text)));
};

/* harmony default export */ var custom = (custom_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/mix.js


var mix_Panel = collapse_default.a.Panel;

function mix_callback(key) {
  console.log(key);
}

var mix_text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var mix_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    onChange: mix_callback
  }, external_react_default.a.createElement(mix_Panel, {
    header: "This is panel header 1",
    key: "1"
  }, external_react_default.a.createElement(collapse_default.a, {
    defaultActiveKey: "1"
  }, external_react_default.a.createElement(mix_Panel, {
    header: "This is panel nest panel",
    key: "1"
  }, external_react_default.a.createElement("p", null, mix_text)))), external_react_default.a.createElement(mix_Panel, {
    header: "This is panel header 2",
    key: "2"
  }, external_react_default.a.createElement("p", null, mix_text)), external_react_default.a.createElement(mix_Panel, {
    header: "This is panel header 3",
    key: "3"
  }, external_react_default.a.createElement("p", null, mix_text)));
};

/* harmony default export */ var mix = (mix_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/noarrow.js


var noarrow_Panel = collapse_default.a.Panel;

function noarrow_callback(key) {
  console.log(key);
}

var noarrow_text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var noarrow_Component = function Component() {
  return external_react_default.a.createElement(collapse_default.a, {
    defaultActiveKey: ['1'],
    onChange: noarrow_callback
  }, external_react_default.a.createElement(noarrow_Panel, {
    header: "This is panel header with arrow icon",
    key: "1"
  }, external_react_default.a.createElement("p", null, noarrow_text)), external_react_default.a.createElement(noarrow_Panel, {
    showArrow: false,
    header: "This is panel header with no arrow icon",
    key: "2"
  }, external_react_default.a.createElement("p", null, noarrow_text)));
};

/* harmony default export */ var noarrow = (noarrow_Component);
// CONCATENATED MODULE: ./demos/antd/collapse/demo.js















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
      return external_react_default.a.createElement(card_default.a, {
        bodyStyle: {
          padding: 0
        },
        id: "components-button-demo"
      }, external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Collapse")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(basic, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Accordion")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(accordion, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Nested panel")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(mix, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Borderless")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(borderless, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "Custom panel")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(custom, null)), external_react_default.a.createElement(divider_default.a, {
        orientation: "left"
      }, external_react_default.a.createElement("small", null, "No arrow")), external_react_default.a.createElement("div", {
        className: "p-4"
      }, external_react_default.a.createElement(noarrow, null)));
    }
  }]);

  return Demo;
}(external_react_default.a.Component);

/* harmony default export */ var demo = (demo_Demo);
// CONCATENATED MODULE: ./pages/data-display/collapse.js



var collapse_DemoPage = function DemoPage() {
  return external_react_default.a.createElement(demo, null);
};

/* harmony default export */ var collapse = __webpack_exports__["default"] = (collapse_DemoPage);

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

/***/ "QNhp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

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

/***/ "c4ce":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7SeW");


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ })

/******/ });