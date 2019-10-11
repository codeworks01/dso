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
/******/ 	return __webpack_require__(__webpack_require__.s = "3c28");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0Pj3":
/***/ (function(module, exports) {

module.exports = require("d3-hierarchy");

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

/***/ "1NxS":
/***/ (function(module, exports) {

module.exports = require("@vx/gradient");

/***/ }),

/***/ "3c28":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rcNW");


/***/ }),

/***/ "75BX":
/***/ (function(module, exports) {

module.exports = require("@vx/group");

/***/ }),

/***/ "9U1/":
/***/ (function(module, exports) {

module.exports = require("@vx/hierarchy");

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

/***/ "FbUu":
/***/ (function(module, exports) {

module.exports = require("@vx/shape");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "eZPE":
/***/ (function(module, exports) {

module.exports = require("d3-shape");

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

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "rcNW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "@vx/group"
var group_ = __webpack_require__("75BX");

// EXTERNAL MODULE: external "@vx/hierarchy"
var hierarchy_ = __webpack_require__("9U1/");

// EXTERNAL MODULE: external "@vx/gradient"
var gradient_ = __webpack_require__("1NxS");

// EXTERNAL MODULE: external "d3-hierarchy"
var external_d3_hierarchy_ = __webpack_require__("0Pj3");

// EXTERNAL MODULE: external "d3-shape"
var external_d3_shape_ = __webpack_require__("eZPE");

// EXTERNAL MODULE: external "@vx/shape"
var shape_ = __webpack_require__("FbUu");

// CONCATENATED MODULE: ./components/Topology.js















var Topology_data = {
  name: 'T',
  children: [{
    name: 'CI/CD',
    children: [{
      name: 'Build 1'
    }, {
      name: 'Build 2'
    }, {
      name: 'Build 3'
    }, {
      name: 'TEST',
      children: [{
        name: 'C1'
      }, {
        name: 'UAT',
        children: [{
          name: 'D1'
        }, {
          name: 'D2'
        }, {
          name: 'D3'
        }]
      }]
    }]
  }, {
    name: 'SEC',
    children: [{
      name: 'B1'
    }, {
      name: 'B2'
    }, {
      name: 'B3'
    }]
  }]
};

var Topology_default =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      layout: 'cartesian',
      orientation: 'horizontal',
      linkType: 'diagonal',
      stepPercent: 0.5
    });

    return _this;
  }

  Object(createClass["a" /* default */])(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 1500 : _this$props$width,
          _this$props$height = _this$props.height,
          height = _this$props$height === void 0 ? 800 : _this$props$height,
          _this$props$margin = _this$props.margin,
          margin = _this$props$margin === void 0 ? {
        top: 30,
        left: 30,
        right: 30,
        bottom: 30
      } : _this$props$margin;
      var _this$state = this.state,
          layout = _this$state.layout,
          orientation = _this$state.orientation,
          linkType = _this$state.linkType,
          stepPercent = _this$state.stepPercent;
      var innerWidth = width - margin.left - margin.right;
      var innerHeight = height - margin.top - margin.bottom;
      var origin;
      var sizeWidth;
      var sizeHeight;

      if (layout === 'polar') {
        origin = {
          x: innerWidth / 2,
          y: innerHeight / 2
        };
        sizeWidth = 2 * Math.PI;
        sizeHeight = Math.min(innerWidth, innerHeight) / 2;
      } else {
        origin = {
          x: 0,
          y: 0
        };

        if (orientation === 'vertical') {
          sizeWidth = innerWidth;
          sizeHeight = innerHeight;
        } else {
          sizeWidth = innerHeight;
          sizeHeight = innerWidth;
        }
      }

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        style: {
          color: 'rgba(38, 150, 136, 1.000)',
          fontSize: 10
        }
      }, external_react_default.a.createElement("label", null, "layout:"), external_react_default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            layout: e.target.value
          });
        },
        value: layout
      }, external_react_default.a.createElement("option", {
        value: "cartesian"
      }, "cartesian"), external_react_default.a.createElement("option", {
        value: "polar"
      }, "polar")), external_react_default.a.createElement("label", null, "orientation:"), external_react_default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            orientation: e.target.value
          });
        },
        value: orientation,
        disabled: layout === 'polar'
      }, external_react_default.a.createElement("option", {
        value: "vertical"
      }, "vertical"), external_react_default.a.createElement("option", {
        value: "horizontal"
      }, "horizontal")), external_react_default.a.createElement("label", null, "link:"), external_react_default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            linkType: e.target.value
          });
        },
        value: linkType
      }, external_react_default.a.createElement("option", {
        value: "diagonal"
      }, "diagonal"), external_react_default.a.createElement("option", {
        value: "step"
      }, "step"), external_react_default.a.createElement("option", {
        value: "curve"
      }, "curve"), external_react_default.a.createElement("option", {
        value: "line"
      }, "line")), external_react_default.a.createElement("label", null, "step:"), external_react_default.a.createElement("input", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        type: "range",
        min: 0,
        max: 1,
        step: 0.1,
        onChange: function onChange(e) {
          return _this2.setState({
            stepPercent: e.target.value
          });
        },
        value: stepPercent,
        disabled: linkType !== 'step' || layout === 'polar'
      })), external_react_default.a.createElement("svg", {
        width: width,
        height: height
      }, external_react_default.a.createElement(gradient_["LinearGradient"], {
        id: "lg",
        from: "#fd9b93",
        to: "#fe6e9e"
      }), external_react_default.a.createElement("rect", {
        width: width,
        height: height,
        rx: 14,
        fill: "#272b4d"
      }), external_react_default.a.createElement(group_["Group"], {
        top: margin.top,
        left: margin.left
      }, external_react_default.a.createElement(hierarchy_["Tree"], {
        root: Object(external_d3_hierarchy_["hierarchy"])(Topology_data, function (d) {
          return d.isExpanded ? null : d.children;
        }),
        size: [sizeWidth, sizeHeight],
        separation: function separation(a, b) {
          return (a.parent == b.parent ? 1 : 0.5) / a.depth;
        }
      }, function (data) {
        return external_react_default.a.createElement(group_["Group"], {
          top: origin.y,
          left: origin.x
        }, data.links().map(function (link, i) {
          var LinkComponent;

          if (layout === 'polar') {
            if (linkType === 'step') {
              LinkComponent = shape_["LinkRadialStep"];
            } else if (linkType === 'curve') {
              LinkComponent = shape_["LinkRadialCurve"];
            } else if (linkType === 'line') {
              LinkComponent = shape_["LinkRadialLine"];
            } else {
              LinkComponent = shape_["LinkRadial"];
            }
          } else {
            if (orientation === 'vertical') {
              if (linkType === 'step') {
                LinkComponent = shape_["LinkVerticalStep"];
              } else if (linkType === 'curve') {
                LinkComponent = shape_["LinkVerticalCurve"];
              } else if (linkType === 'line') {
                LinkComponent = shape_["LinkVerticalLine"];
              } else {
                LinkComponent = shape_["LinkVertical"];
              }
            } else {
              if (linkType === 'step') {
                LinkComponent = shape_["LinkHorizontalStep"];
              } else if (linkType === 'curve') {
                LinkComponent = shape_["LinkHorizontalCurve"];
              } else if (linkType === 'line') {
                LinkComponent = shape_["LinkHorizontalLine"];
              } else {
                LinkComponent = shape_["LinkHorizontal"];
              }
            }
          }

          return external_react_default.a.createElement(LinkComponent, {
            data: link,
            percent: +stepPercent,
            stroke: "#374469",
            strokeWidth: "1",
            fill: "none",
            key: i,
            onClick: function onClick(data) {
              return function (event) {
                console.log(data);
              };
            }
          });
        }), data.descendants().map(function (node, key) {
          var width = 40;
          var height = 20;
          var top;
          var left;

          if (layout === 'polar') {
            var _pointRadial = Object(external_d3_shape_["pointRadial"])(node.x, node.y),
                _pointRadial2 = Object(slicedToArray["a" /* default */])(_pointRadial, 2),
                radialX = _pointRadial2[0],
                radialY = _pointRadial2[1];

            top = radialY;
            left = radialX;
          } else {
            if (orientation === 'vertical') {
              top = node.y;
              left = node.x;
            } else {
              top = node.x;
              left = node.y;
            }
          }

          return external_react_default.a.createElement(group_["Group"], {
            top: top,
            left: left,
            key: key
          }, node.depth === 0 && external_react_default.a.createElement("circle", {
            r: 12,
            fill: "url('#lg')",
            onClick: function onClick() {
              node.data.isExpanded = !node.data.isExpanded;
              console.log(node);

              _this2.forceUpdate();
            }
          }), node.depth !== 0 && external_react_default.a.createElement("rect", {
            height: height,
            width: width,
            y: -height / 2,
            x: -width / 2,
            fill: '#272b4d',
            stroke: node.data.children ? '#03c0dc' : '#26deb0',
            strokeWidth: 1,
            strokeDasharray: !node.data.children ? '2,2' : '0',
            strokeOpacity: !node.data.children ? 0.6 : 1,
            rx: !node.data.children ? 10 : 0,
            onClick: function onClick() {
              node.data.isExpanded = !node.data.isExpanded;
              console.log(node);

              _this2.forceUpdate();
            }
          }), external_react_default.a.createElement("text", {
            dy: '.33em',
            fontSize: 9,
            fontFamily: "Arial",
            textAnchor: 'middle',
            style: {
              pointerEvents: 'none'
            },
            fill: node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'
          }, node.data.name));
        }));
      }))));
    }
  }]);

  return _default;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./pages/pipeline-system/topology.js



var topology_TopologyPage = function TopologyPage() {
  return external_react_default.a.createElement(Topology_default, null);
};

/* harmony default export */ var topology = __webpack_exports__["default"] = (topology_TopologyPage);

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

/***/ })

/******/ });