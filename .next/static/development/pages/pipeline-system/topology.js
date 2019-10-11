((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/pipeline-system/topology.js"],{

/***/ "./components/Topology.js":
/*!********************************!*\
  !*** ./components/Topology.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_hierarchy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vx/hierarchy */ "./node_modules/@vx/hierarchy/dist/vx-hierarchy.es.js");
/* harmony import */ var _vx_gradient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vx/gradient */ "./node_modules/@vx/gradient/dist/vx-gradient.es.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@vx/shape/dist/vx-shape.es.js");








var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/components/Topology.js";







var data = {
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

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      layout: 'cartesian',
      orientation: 'horizontal',
      linkType: 'diagonal',
      stepPercent: 0.5
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          color: 'rgba(38, 150, 136, 1.000)',
          fontSize: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "layout:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            layout: e.target.value
          });
        },
        value: layout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "cartesian",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "cartesian"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "polar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "polar")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "orientation:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            orientation: e.target.value
          });
        },
        value: orientation,
        disabled: layout === 'polar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "vertical"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "horizontal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "horizontal")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "link:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        onChange: function onChange(e) {
          return _this2.setState({
            linkType: e.target.value
          });
        },
        value: linkType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "diagonal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "diagonal"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "step",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "step"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "curve",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "curve"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "line")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "step:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
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
        disabled: linkType !== 'step' || layout === 'polar',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
        width: width,
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_vx_gradient__WEBPACK_IMPORTED_MODULE_11__["LinearGradient"], {
        id: "lg",
        from: "#fd9b93",
        to: "#fe6e9e",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
        width: width,
        height: height,
        rx: 14,
        fill: "#272b4d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_9__["Group"], {
        top: margin.top,
        left: margin.left,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_vx_hierarchy__WEBPACK_IMPORTED_MODULE_10__["Tree"], {
        root: Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_12__["hierarchy"])(data, function (d) {
          return d.isExpanded ? null : d.children;
        }),
        size: [sizeWidth, sizeHeight],
        separation: function separation(a, b) {
          return (a.parent == b.parent ? 1 : 0.5) / a.depth;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, function (data) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_9__["Group"], {
          top: origin.y,
          left: origin.x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, data.links().map(function (link, i) {
          var LinkComponent;

          if (layout === 'polar') {
            if (linkType === 'step') {
              LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkRadialStep"];
            } else if (linkType === 'curve') {
              LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkRadialCurve"];
            } else if (linkType === 'line') {
              LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkRadialLine"];
            } else {
              LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkRadial"];
            }
          } else {
            if (orientation === 'vertical') {
              if (linkType === 'step') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkVerticalStep"];
              } else if (linkType === 'curve') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkVerticalCurve"];
              } else if (linkType === 'line') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkVerticalLine"];
              } else {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkVertical"];
              }
            } else {
              if (linkType === 'step') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkHorizontalStep"];
              } else if (linkType === 'curve') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkHorizontalCurve"];
              } else if (linkType === 'line') {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkHorizontalLine"];
              } else {
                LinkComponent = _vx_shape__WEBPACK_IMPORTED_MODULE_14__["LinkHorizontal"];
              }
            }
          }

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LinkComponent, {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          });
        }), data.descendants().map(function (node, key) {
          var width = 40;
          var height = 20;
          var top;
          var left;

          if (layout === 'polar') {
            var _pointRadial = Object(d3_shape__WEBPACK_IMPORTED_MODULE_13__["pointRadial"])(node.x, node.y),
                _pointRadial2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_pointRadial, 2),
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

          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_9__["Group"], {
            top: top,
            left: left,
            key: key,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            },
            __self: this
          }, node.depth === 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("circle", {
            r: 12,
            fill: "url('#lg')",
            onClick: function onClick() {
              node.data.isExpanded = !node.data.isExpanded;
              console.log(node);

              _this2.forceUpdate();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }), node.depth !== 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("rect", {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("text", {
            dy: '.33em',
            fontSize: 9,
            fontFamily: "Arial",
            textAnchor: 'middle',
            style: {
              pointerEvents: 'none'
            },
            fill: node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 274
            },
            __self: this
          }, node.data.name));
        }));
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@vx/gradient/dist/vx-gradient.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vx/gradient/dist/vx-gradient.es.js ***!
  \**********************************************************/
/*! exports provided: LinearGradient, RadialGradient, GradientDarkgreenGreen, GradientLightgreenGreen, GradientOrangeRed, GradientPinkBlue, GradientPinkRed, GradientPurpleOrange, GradientPurpleRed, GradientPurpleTeal, GradientSteelPurple, GradientTealBlue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGradient", function() { return LinearGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialGradient", function() { return RadialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientDarkgreenGreen", function() { return GradientDarkGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientLightgreenGreen", function() { return GradientLightgreenGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientOrangeRed", function() { return GradientOrangeRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPinkBlue", function() { return GradientPinkBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPinkRed", function() { return GradientPinkRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPurpleOrange", function() { return GradientPurpleOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPurpleRed", function() { return GradientPurpleRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPurpleTeal", function() { return GradientPurpleTeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientSteelPurple", function() { return GradientSteelPurple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientTealBlue", function() { return GradientTealBlue; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

LinearGradient.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  from: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  x1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  y2: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fromOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fromOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  toOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  toOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
function LinearGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === void 0 ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === void 0 ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === void 0 ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === void 0 ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? true : _ref$vertical,
      restProps = _objectWithoutProperties(_ref, ["children", "id", "from", "to", "x1", "y1", "x2", "y2", "fromOffset", "fromOpacity", "toOffset", "toOpacity", "rotate", "transform", "vertical"]);

  if (vertical && !x1 && !x2 && !y1 && !y2) {
    x1 = '0';
    x2 = '0';
    y1 = '0';
    y2 = '1';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("linearGradient", _extends({
    id: id,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    gradientTransform: rotate ? "rotate(".concat(rotate, ")") : transform
  }, restProps), !!children && children, !children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("stop", {
    offset: fromOffset,
    stopColor: from,
    stopOpacity: fromOpacity
  }), !children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("stop", {
    offset: toOffset,
    stopColor: to,
    stopOpacity: toOpacity
  })));
}

RadialGradient.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  from: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fromOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fromOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  toOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  toOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
function RadialGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === void 0 ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === void 0 ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === void 0 ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === void 0 ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      restProps = _objectWithoutProperties(_ref, ["children", "id", "from", "to", "fromOffset", "fromOpacity", "toOffset", "toOpacity", "rotate", "transform"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("radialGradient", _extends({
    id: id,
    gradientTransform: rotate ? "rotate(".concat(rotate, ")") : transform
  }, restProps), !!children && children, !children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("stop", {
    offset: fromOffset,
    stopColor: from,
    stopOpacity: fromOpacity
  }), !children && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("stop", {
    offset: toOffset,
    stopColor: to,
    stopOpacity: toOpacity
  })));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientDarkGreen(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#184E86' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#57CA85' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientLightgreenGreen(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#42E695' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#3BB2B8' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientOrangeRed(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#FCE38A' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#F38181' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientPinkBlue(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#F02FC2' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#6094EA' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientPinkRed(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#F54EA2' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#FF7676' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientPurpleOrange(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#7117EA' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#EA6060' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientPurpleRed(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#622774' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#C53364' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientPurpleTeal(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#5B247A' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#1BCEDF' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientSteelPurple(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#65799B' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#5E2563' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}

/**
 * All props pass through to `<LinearGradient {...props} />`
 */

function GradientTealBlue(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? '#17EAD9' : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? '#6078EA' : _ref$to,
      restProps = _objectWithoutProperties(_ref, ["from", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinearGradient, _extends({
    from: from,
    to: to
  }, restProps));
}




/***/ }),

/***/ "./node_modules/@vx/group/dist/vx-group.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@vx/group/dist/vx-group.es.js ***!
  \****************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

Group.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
};
function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "transform", "className", "children", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-group', className),
    transform: transform || "translate(".concat(left, ", ").concat(top, ")")
  }, restProps), children);
}




/***/ }),

/***/ "./node_modules/@vx/hierarchy/dist/vx-hierarchy.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@vx/hierarchy/dist/vx-hierarchy.es.js ***!
  \************************************************************/
/*! exports provided: Tree, Treemap, Cluster, Pack, Partition, HierarchyDefaultLink, HierarchyDefaultNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Treemap", function() { return Treemap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cluster", function() { return Cluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pack", function() { return Pack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partition", function() { return Partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyDefaultLink", function() { return HierarchyDefaultLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyDefaultNode", function() { return HierarchyDefaultNode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/index.js");






function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

HierarchyDefaultLink.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
function HierarchyDefaultLink(_ref) {
  var link = _ref.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: link.source.x,
    y1: link.source.y,
    x2: link.target.x,
    y2: link.target.y,
    strokeWidth: 2,
    stroke: "#999",
    strokeOpacity: 0.6
  });
}

HierarchyDefaultNode.propTypes = {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
function HierarchyDefaultNode(_ref) {
  var node = _ref.node;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: node.x,
    cy: node.y,
    r: 15,
    fill: "#21D4FD"
  });
}

Tree.propTypes = {
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  nodeSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  separation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  linkComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
function Tree(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      size = _ref.size,
      nodeSize = _ref.nodeSize,
      separation = _ref.separation,
      children = _ref.children,
      _ref$linkComponent = _ref.linkComponent,
      linkComponent = _ref$linkComponent === void 0 ? HierarchyDefaultLink : _ref$linkComponent,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? HierarchyDefaultNode : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "size", "nodeSize", "separation", "children", "linkComponent", "nodeComponent"]);

  var tree$$1 = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["tree"])();
  if (size) tree$$1.size(size);
  if (nodeSize) tree$$1.nodeSize(nodeSize);
  if (separation) tree$$1.separation(separation);
  var data = tree$$1(root);
  if (children) return children(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
    top: top,
    left: left,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-tree', className)
  }, linkComponent && data.links().map(function (link, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "tree-link-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(linkComponent, {
      link: link
    }));
  }), nodeComponent && data.descendants().map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "tree-node-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeComponent, {
      node: node
    }));
  }));
}

Treemap.propTypes = {
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingInner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingOuter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  paddingLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  nodeComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
function Treemap(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      tile = _ref.tile,
      size = _ref.size,
      round = _ref.round,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      children = _ref.children,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? HierarchyDefaultNode : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "tile", "size", "round", "padding", "paddingInner", "paddingOuter", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "children", "nodeComponent"]);

  var treemap$$1 = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["treemap"])();
  if (tile) treemap$$1.tile(tile);
  if (size) treemap$$1.size(size);
  if (round) treemap$$1.round(round);
  if (padding) treemap$$1.padding(padding);
  if (paddingInner) treemap$$1.paddingInner(paddingInner);
  if (paddingOuter) treemap$$1.paddingOuter(paddingOuter);
  if (paddingTop) treemap$$1.paddingTop(paddingTop);
  if (paddingRight) treemap$$1.paddingRight(paddingRight);
  if (paddingBottom) treemap$$1.paddingBottom(paddingBottom);
  if (paddingLeft) treemap$$1.paddingLeft(paddingLeft);
  var data = treemap$$1(root);
  if (children) return children(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
    top: top,
    left: left,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-treemap', className)
  }, nodeComponent && data.descendants().map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "treemap-node-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeComponent, {
      node: node
    }));
  }));
}

Cluster.propTypes = {
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  nodeSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  separation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  linkComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  nodeComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
function Cluster(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      size = _ref.size,
      nodeSize = _ref.nodeSize,
      separation = _ref.separation,
      children = _ref.children,
      _ref$linkComponent = _ref.linkComponent,
      linkComponent = _ref$linkComponent === void 0 ? HierarchyDefaultLink : _ref$linkComponent,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? HierarchyDefaultNode : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "size", "nodeSize", "separation", "children", "linkComponent", "nodeComponent"]);

  var cluster$$1 = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["cluster"])();
  if (size) cluster$$1.size(size);
  if (nodeSize) cluster$$1.nodeSize(nodeSize);
  if (separation) cluster$$1.separation(separation);
  var data = cluster$$1(root);
  if (children) return children(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
    top: top,
    left: left,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-cluster', className)
  }, linkComponent && data.links().map(function (link, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "cluster-link-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(linkComponent, {
      link: link
    }));
  }), nodeComponent && data.descendants().map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "cluster-node-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeComponent, {
      node: node
    }));
  }));
}

Pack.propTypes = {
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  nodeComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
function Pack(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      radius = _ref.radius,
      size = _ref.size,
      padding = _ref.padding,
      children = _ref.children,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? HierarchyDefaultNode : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "radius", "size", "padding", "children", "nodeComponent"]);

  var pack$$1 = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["pack"])();
  if (size) pack$$1.size(size);
  if (radius !== undefined) pack$$1.radius(radius);
  if (padding) pack$$1.padding(padding);
  var data = pack$$1(root);
  if (children) return children(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
    top: top,
    left: left,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-pack', className)
  }, nodeComponent && data.descendants().map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "pack-node-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeComponent, {
      node: node
    }));
  }));
}

Partition.propTypes = {
  root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number),
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  nodeComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
function Partition(_ref) {
  var top = _ref.top,
      left = _ref.left,
      className = _ref.className,
      root = _ref.root,
      size = _ref.size,
      round = _ref.round,
      padding = _ref.padding,
      children = _ref.children,
      _ref$nodeComponent = _ref.nodeComponent,
      nodeComponent = _ref$nodeComponent === void 0 ? HierarchyDefaultNode : _ref$nodeComponent,
      restProps = _objectWithoutProperties(_ref, ["top", "left", "className", "root", "size", "round", "padding", "children", "nodeComponent"]);

  var partition$$1 = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["partition"])();
  if (size) partition$$1.size(size);
  if (round) partition$$1.round(round);
  if (padding) partition$$1.padding(padding);
  var data = partition$$1(root);
  if (children) return children(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
    top: top,
    left: left,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-partition', className)
  }, nodeComponent && data.descendants().map(function (node, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      key: "partition-node-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nodeComponent, {
      node: node
    }));
  }));
}




/***/ }),

/***/ "./node_modules/@vx/point/dist/vx-point.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@vx/point/dist/vx-point.es.js ***!
  \****************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Point =
/*#__PURE__*/
function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();




/***/ }),

/***/ "./node_modules/@vx/shape/dist/vx-shape.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@vx/shape/dist/vx-shape.es.js ***!
  \****************************************************/
/*! exports provided: Arc, Pie, Line, LinePath, LineRadial, Area, AreaClosed, AreaStack, Bar, BarGroup, BarGroupHorizontal, BarStack, BarStackHorizontal, Stack, stackOffset, STACK_OFFSETS, STACK_OFFSET_NAMES, stackOrder, STACK_ORDERS, STACK_ORDER_NAMES, degreesToRadians, LinkHorizontal, pathHorizontalDiagonal, LinkVertical, pathVerticalDiagonal, LinkRadial, pathRadialDiagonal, LinkHorizontalCurve, pathHorizontalCurve, LinkVerticalCurve, pathVerticalCurve, LinkRadialCurve, pathRadialCurve, LinkHorizontalLine, pathHorizontalLine, LinkVerticalLine, pathVerticalLine, LinkRadialLine, pathRadialLine, LinkHorizontalStep, pathHorizontalStep, LinkVerticalStep, pathVerticalStep, LinkRadialStep, pathRadialStep, Polygon, getPoints, getPoint, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePath", function() { return LinePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRadial", function() { return LineRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaClosed", function() { return AreaClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaStack", function() { return AreaStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroup", function() { return BarGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroupHorizontal", function() { return BarGroupHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStack", function() { return BarStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStackHorizontal", function() { return BarStackHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffset", function() { return stackOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSETS", function() { return STACK_OFFSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSET_NAMES", function() { return STACK_OFFSET_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrder", function() { return stackOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDERS", function() { return STACK_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDER_NAMES", function() { return STACK_ORDER_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontal", function() { return LinkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalDiagonal", function() { return pathHorizontalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVertical", function() { return LinkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalDiagonal", function() { return pathVerticalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadial", function() { return LinkRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialDiagonal", function() { return pathRadialDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalCurve", function() { return LinkHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalCurve", function() { return pathHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalCurve", function() { return LinkVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalCurve", function() { return pathVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialCurve", function() { return LinkRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialCurve", function() { return pathRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalLine", function() { return LinkHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalLine", function() { return pathHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalLine", function() { return LinkVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalLine", function() { return pathVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialLine", function() { return LinkRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialLine", function() { return pathRadialLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalStep", function() { return LinkHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalStep", function() { return pathHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalStep", function() { return LinkVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalStep", function() { return pathVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialStep", function() { return LinkRadialStep$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialStep", function() { return pathRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoints", function() { return getPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoint", function() { return getPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/point */ "./node_modules/@vx/point/dist/vx-point.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

Arc.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  centroid: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  outerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  padRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
};
function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      children = _ref.children,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["className", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "children", "innerRef"]);

  var arc$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["arc"])();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius !== undefined) arc$$1.innerRadius(innerRadius);
  if (outerRadius !== undefined) arc$$1.outerRadius(outerRadius);
  if (cornerRadius !== undefined) arc$$1.cornerRadius(cornerRadius);
  if (startAngle !== undefined) arc$$1.startAngle(startAngle);
  if (endAngle !== undefined) arc$$1.endAngle(endAngle);
  if (padAngle !== undefined) arc$$1.padAngle(padAngle);
  if (padRadius !== undefined) arc$$1.padRadius(padRadius);
  if (children) return children({
    path: arc$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-arc', className),
    d: arc$$1(data)
  }, restProps));
}

Pie.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  centroid: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  outerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  padRadius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  pieValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  pieSort: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  pieSortValues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function Pie(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children"]);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["arc"])();
  if (innerRadius != null) path$$1.innerRadius(innerRadius);
  if (outerRadius != null) path$$1.outerRadius(outerRadius);
  if (cornerRadius != null) path$$1.cornerRadius(cornerRadius);
  if (padRadius != null) path$$1.padRadius(padRadius);
  var pie$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["pie"])();
  if (pieSort !== undefined) pie$$1.sort(pieSort);
  if (pieSortValues !== undefined) pie$$1.sortValues(pieSortValues);
  if (pieValue !== undefined) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  if (children) return children({
    arcs: arcs,
    path: path$$1,
    pie: pie$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    className: "vx-pie-arcs-group",
    top: top,
    left: left
  }, arcs.map(function (arc$$1, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", {
      key: "pie-arc-".concat(i)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-pie-arc', className),
      d: path$$1(arc$$1)
    }, restProps)), centroid && centroid(path$$1.centroid(arc$$1), arc$$1));
  }));
}

Line.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  from: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  }),
  to: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  })
};
function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === void 0 ? new _vx_point__WEBPACK_IMPORTED_MODULE_3__["Point"]({
    x: 0,
    y: 0
  }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? new _vx_point__WEBPACK_IMPORTED_MODULE_3__["Point"]({
    x: 1,
    y: 1
  }) : _ref$to,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["from", "to", "fill", "className", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("line", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    fill: fill
  }, restProps));
}

LinePath.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  defined: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
};
function LinePath(_ref) {
  var children = _ref.children,
      data = _ref.data,
      x = _ref.x,
      y = _ref.y,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      className = _ref.className,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      _ref$defined = _ref.defined,
      defined = _ref$defined === void 0 ? function () {
    return true;
  } : _ref$defined,
      restProps = _objectWithoutProperties(_ref, ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"]);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["line"])();
  if (x) path$$1.x(x);
  if (y) path$$1.y(y);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-linepath', className),
    d: path$$1(data),
    fill: fill
  }, restProps));
}

LineRadial.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  radius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])
};
function LineRadial(_ref) {
  var className = _ref.className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      children = _ref.children,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'transparent' : _ref$fill,
      restProps = _objectWithoutProperties(_ref, ["className", "angle", "radius", "defined", "curve", "data", "innerRef", "children", "fill"]);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["radialLine"])();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-line-radial', className),
    d: path$$1(data),
    fill: fill
  }, restProps));
}

Area.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
};
function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === void 0 ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"]);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y) path$$1.y(y);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-area', className),
    d: path$$1(data)
  }, restProps)));
}

AreaClosed.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
};
function AreaClosed(_ref) {
  var x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y1 = _ref.y1,
      y0 = _ref.y0,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === void 0 ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"]);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);

  if (y0) {
    path$$1.y0(y0);
  } else {
    path$$1.y0(yScale.range()[0]);
  }

  if (y && !y1) path$$1.y1(y);
  if (y1 && !y) path$$1.y1(y1);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-area-closed', className),
    d: path$$1(data)
  }, restProps));
}

var STACK_ORDERS = {
  ascending: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOrderAscending"],
  descending: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOrderDescending"],
  insideout: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOrderInsideOut"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOrderNone"],
  reverse: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOrderReverse"]
};
var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);
function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOffsetExpand"],
  diverging: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOffsetDiverging"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOffsetNone"],
  silhouette: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOffsetSilhouette"],
  wiggle: d3_shape__WEBPACK_IMPORTED_MODULE_1__["stackOffsetWiggle"]
};
var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);
function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

Stack.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  defined: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string])
};
function Stack(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      color = _ref.color,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"]);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));
  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);
  var stacks = stack$$1(data);
  if (children) return children({
    stacks: stacks,
    path: path$$1,
    stack: stack$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    top: top,
    left: left
  }, stacks.map(function (series, i) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-stack', className),
      key: "stack-".concat(i, "-").concat(series.key || ''),
      d: path$$1(series),
      fill: color(series.key, i)
    }, restProps));
  }));
}

AreaStack.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  defined: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string])
};
function AreaStack(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      color = _ref.color,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Stack, _extends({
    className: className,
    top: top,
    left: left,
    keys: keys,
    data: data,
    curve: curve,
    defined: defined,
    x: x,
    x0: x0,
    x1: x1,
    y0: y0,
    y1: y1,
    value: value,
    order: order,
    offset: offset,
    color: color
  }, restProps), !!children ? children : function (_ref2) {
    var stacks = _ref2.stacks,
        path$$1 = _ref2.path,
        stack$$1 = _ref2.stack;
    return stacks.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-area-stack', className),
        key: "area-stack-".concat(i, "-").concat(series.key || ''),
        d: path$$1(series),
        fill: color(series.key, i)
      }, restProps));
    });
  });
}

Bar.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])
};
function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["className", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("rect", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-bar', className)
  }, restProps));
}

function objHasMethod(obj, funcName) {
  return !!obj[funcName] && typeof obj[funcName] === 'function';
}

BarGroup.propTypes = {
  /**
   * An array of bar group objects.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,

  /**
   * ```js
   * x0(barGroup)
   * ```
   * An accessor function that returns the `x0` value for each datum in *props*.**data**.
   */
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * ```js
   * x0Scale(x0(barGroup))
   * ```
   * A scale function that returns the x position of the bar group.
   */
  x0Scale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * ```js
   * x1Scale(key)
   * ```
   * A scale function that returns the x position of the bar within a bar group.
   */
  x1Scale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * ```js
   * yScale(value)
   * ```
   * A scale function that retuns the y position of the bar within a bar group. `value` is the value of the `key` in the bar group.
   */
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * ```js
   * color(key, barIndex)
   * ```
   * A function that returns color for each bar within a bar group.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,

  /**
   * An array of strings containing the key for each bar group. Each bar within a bar group will follow the order of this array.
   */
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,

  /**
   * Height is used to align the bottom of the the bars. barHeight = height - yScale(bar.value), where bar.y = yScale(bar.value).
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,

  /**
   * Add a class name to the containing `<g>` element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,

  /**
   * A top pixel offset applied to the entire bar group.
   */
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * A left pixel offset applied to the entire bar group.
   */
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * A function that returns a react component. Useful for generating the bar group data with full control over what is rendered. The functions first argument will be the bar groups data as an array of objects with the following properties:
   *
   *  - `index<number>` - the index of the group based on *props*.**data** array.
   *  - `x0<number>` - the position of the group based on *props*.**x0** & *props*.**x0Scale**.
   *  - `bars<array>` - array of objects, ordered by *props*.**keys**, with the following properties:
   *    + `index<number>` - the index of the bar for the current group.
   *    + `key<string>` - the key of the bar.
   *    + `width<number>` - the width of the bar. This will be `x1Scale.bandwidth()`. If `x1Scale` does not have a bandwidth property, then it becomes:
   *      ```js
   *      x1Range = x1Scale.range();
   *      x1Domain = x1Scale.domain();
   *      barWidth = Math.abs(x1Range[x1Range.length - 1] - x1Range[0]) / x1Domain.length
   *      ```
   *    + `height<number>` - the height of the bar.
   *    + `x<number>` - the x position of the bar.
   *    + `y<number>` - the y position of the bar.
   *    + `color<string>` - the color of the bar.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/**
 * Generates bar groups as an array of objects and renders `<rect />`s for each datum grouped by `key`. A general setup might look like this:
 *
 * ```js
 * const data = [{
 *  date: date1,
 *  key1: value,
 *  key2: value,
 *  key3: value
 * }, {
 *  date: date2,
 *  key1: value,
 *  key2: value,
 *  key3: value,
 * }];
 *
 * const x0 = d => d.date;
 * const keys = [key1, key2, key3];
 *
 * const x0Scale = scaleBand({
 *  domain: data.map(x0),
 *  padding: 0.2
 * });
 * const x1Scale = scaleBand({
 *  domain: keys,
 *  padding: 0.1
 * });
 * const yScale = scaleLinear({
 *   domain: [0, Math.max(...data.map(d => Math.max(...keys.map(key => d[key]))))]
 * });
 * const color = scaleOrdinal({
 *   domain: keys,
 *   range: [blue, green, purple]
 * });
 * ```
 *
 * Example: [https://vx-demo.now.sh/bargroup](https://vx-demo.now.sh/bargroup)
 */

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      height = _ref.height,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"]);

  var x1Range = x1Scale.range();
  var x1Domain = x1Scale.domain();
  var barWidth = objHasMethod(x1Scale, 'bandwidth') ? x1Scale.bandwidth() : Math.abs(x1Range[x1Range.length - 1] - x1Range[0]) / x1Domain.length;
  var barGroups = data.map(function (group, i) {
    return {
      index: i,
      x0: x0Scale(x0(group)),
      bars: keys.map(function (key, j) {
        var value = group[key];
        return {
          index: j,
          key: key,
          value: value,
          width: barWidth,
          x: x1Scale(key),
          y: yScale(value),
          color: color(key, j),
          height: height - yScale(value)
        };
      })
    };
  });
  if (children) return children(barGroups);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-bar-group', className),
    top: top,
    left: left
  }, barGroups.map(function (barGroup) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
      key: "bar-group-".concat(barGroup.index, "-").concat(barGroup.x0),
      left: barGroup.x0
    }, barGroup.bars.map(function (bar) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Bar, _extends({
        key: "bar-group-bar-".concat(barGroup.index, "-").concat(bar.index, "-").concat(bar.value, "-").concat(bar.key),
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps));
    }));
  }));
}

BarGroupHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  y0Scale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  y1Scale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function BarGroupHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? function (val) {
    return 0;
  } : _ref$x,
      y0 = _ref.y0,
      y0Scale = _ref.y0Scale,
      y1Scale = _ref.y1Scale,
      xScale = _ref.xScale,
      color = _ref.color,
      keys = _ref.keys,
      width = _ref.width,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "x", "y0", "y0Scale", "y1Scale", "xScale", "color", "keys", "width", "children"]);

  var y1Range = y1Scale.range();
  var y1Domain = y1Scale.domain();
  var barHeight = objHasMethod(y1Scale, 'bandwidth') ? y1Scale.bandwidth() : Math.abs(y1Range[y1Range.length - 1] - y1Range[0]) / y1Domain.length;
  var barGroups = data.map(function (group, i) {
    return {
      index: i,
      y0: y0Scale(y0(group)),
      bars: keys.map(function (key, j) {
        var value = group[key];
        return {
          index: j,
          key: key,
          value: value,
          height: barHeight,
          x: x(value),
          y: y1Scale(key),
          color: color(key, j),
          width: width - xScale(value)
        };
      })
    };
  });
  if (children) return children(barGroups);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-bar-group-horizontal', className),
    top: top,
    left: left
  }, barGroups.map(function (barGroup) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
      key: "bar-group-".concat(barGroup.index, "-").concat(barGroup.y0),
      top: barGroup.y0
    }, barGroup.bars.map(function (bar) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Bar, _extends({
        key: "bar-group-bar-".concat(barGroup.index, "-").concat(bar.index, "-").concat(bar.value, "-").concat(bar.key),
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        fill: bar.color
      }, restProps));
    }));
  }));
}

BarStack.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  order: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
};
function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      _ref$y = _ref.y0,
      y0 = _ref$y === void 0 ? function (d) {
    return d[0];
  } : _ref$y,
      _ref$y2 = _ref.y1,
      y1 = _ref$y2 === void 0 ? function (d) {
    return d[1];
  } : _ref$y2,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"]);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));
  var stacks = stack$$1(data);
  var xRange = xScale.range();
  var xDomain = xScale.domain();
  var barWidth = objHasMethod(xScale, 'bandwidth') ? xScale.bandwidth() : Math.abs(xRange[xRange.length - 1] - xRange[0]) / xDomain.length;
  var barStacks = stacks.map(function (barStack, i) {
    var key = barStack.key;
    return {
      index: i,
      key: key,
      bars: barStack.map(function (bar, j) {
        var barHeight = yScale(y0(bar)) - yScale(y1(bar));
        var barY = yScale(y1(bar));
        var barX = objHasMethod(xScale, 'bandwidth') ? xScale(x(bar.data)) : Math.max(xScale(x(bar.data)) - barWidth / 2);
        return {
          bar: bar,
          key: key,
          index: j,
          height: barHeight,
          width: barWidth,
          x: barX,
          y: barY,
          color: color(barStack.key, j)
        };
      })
    };
  });
  if (children) return children(barStacks);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-bar-stack', className),
    top: top,
    left: left
  }, barStacks.map(function (barStack) {
    return barStack.bars.map(function (bar) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Bar, _extends({
        key: "bar-stack-".concat(barStack.index, "-").concat(bar.index),
        x: bar.x,
        y: bar.y,
        height: bar.height,
        width: bar.width,
        fill: bar.color
      }, restProps));
    });
  }));
}

BarStackHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x1: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  order: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      _ref$x = _ref.x0,
      x0 = _ref$x === void 0 ? function (d) {
    return d[0];
  } : _ref$x,
      _ref$x2 = _ref.x1,
      x1 = _ref$x2 === void 0 ? function (d) {
    return d[1];
  } : _ref$x2,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      color = _ref.color,
      keys = _ref.keys,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"]);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));
  var stacks = stack$$1(data);
  var yRange = yScale.range();
  var yDomain = yScale.domain();
  var barHeight = objHasMethod(yScale, 'bandwidth') ? yScale.bandwidth() : Math.abs(yRange[yRange.length - 1] - yRange[0]) / yDomain.length;
  var barStacks = stacks.map(function (barStack, i) {
    var key = barStack.key;
    return {
      index: i,
      key: key,
      bars: barStack.map(function (bar, j) {
        var barWidth = xScale(x1(bar)) - xScale(x0(bar));
        var barX = xScale(x0(bar));
        var barY = objHasMethod(yScale, 'bandwidth') ? yScale(y(bar.data)) : Math.max(yScale(y(bar.data)) - barWidth / 2);
        return {
          bar: bar,
          key: key,
          index: j,
          height: barHeight,
          width: barWidth,
          x: barX,
          y: barY,
          color: color(barStack.key, j)
        };
      })
    };
  });
  if (children) return children(barStacks);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_0__["Group"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-bar-stack-horizontal', className),
    top: top,
    left: left
  }, barStacks.map(function (barStack) {
    return barStack.bars.map(function (bar) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Bar, _extends({
        key: "bar-stack-".concat(barStack.index, "-").concat(bar.index),
        x: bar.x,
        y: bar.y,
        height: bar.height,
        width: bar.width,
        fill: bar.color
      }, restProps));
    });
  }));
}

var degreesToRadians = function degreesToRadians(degrees) {
  return Math.PI / 180 * degrees;
};

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["linkHorizontal"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
LinkHorizontal.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathHorizontalDiagonal({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-horizontal-diagonal', className),
    d: path$$1(data)
  }, restProps));
}

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["linkVertical"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
LinkVertical.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathVerticalDiagonal({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-vertical-diagonal', className),
    d: path$$1(data)
  }, restProps));
}

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;
  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_1__["linkRadial"])();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}
LinkRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  angle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === void 0 ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === void 0 ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "angle", "radius", "source", "target", "children"]);

  path$$1 = path$$1 || pathRadialDiagonal({
    source: source,
    target: target,
    angle: angle,
    radius: radius
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-radial-diagonal', className),
    d: path$$1(data)
  }, restProps));
}

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path$$1.toString();
  };
}
LinkHorizontalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.2 : _ref2$percent,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "percent", "children"]);

  path$$1 = path$$1 || pathHorizontalCurve({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-horizontal-curve', className),
    d: path$$1(data)
  }, restProps));
}

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path$$1.toString();
  };
}
LinkVerticalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.2 : _ref2$percent,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "percent", "children"]);

  path$$1 = path$$1 || pathVerticalCurve({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-vertical-curve', className),
    d: path$$1(data)
  }, restProps));
}

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);
    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;
    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);
    return path$$1.toString();
  };
}
LinkRadialCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.2 : _ref2$percent,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "percent", "children"]);

  path$$1 = path$$1 || pathRadialCurve({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-radial-curve', className),
    d: path$$1(data)
  }, restProps));
}

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);
    return path$$1.toString();
  };
}
LinkHorizontalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathHorizontalLine({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-horizontal-line', className),
    d: path$$1(data)
  }, restProps));
}

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);
    return path$$1.toString();
  };
}
LinkVerticalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathVerticalLine({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-vertical-line', className),
    d: path$$1(data)
  }, restProps));
}

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);
    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sr * sc, sr * ss);
    path$$1.lineTo(tr * tc, tr * ts);
    return path$$1.toString();
  };
}
LinkRadialStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathRadialLine({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-radial-line', className),
    d: path$$1(data)
  }, restProps));
}

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, ty);
    path$$1.lineTo(tx, ty);
    return path$$1.toString();
  };
}
LinkHorizontalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "percent", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathHorizontalStep({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-horizontal-step', className),
    d: path$$1(data)
  }, restProps));
}

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_2__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, ty);
    return path$$1.toString();
  };
}
LinkVerticalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === void 0 ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "percent", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathVerticalStep({
    source: source,
    target: target,
    x: x,
    y: y,
    percent: percent
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-vertical-step', className),
    d: path$$1(data)
  }, restProps));
}

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;
  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);
    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);
    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;
    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;
    return "\n      M".concat(sr * sc, ",").concat(sr * ss, "\n      A").concat(sr, ",").concat(sr, ",0,0,").concat(sf ? 1 : 0, ",").concat(sr * tc, ",").concat(sr * ts, "\n      L").concat(tr * tc, ",").concat(tr * ts, "\n    ");
  };
}
LinkRadialStep$1.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
function LinkRadialStep$1(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === void 0 ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === void 0 ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === void 0 ? function (d) {
    return d.target;
  } : _ref2$target,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["className", "innerRef", "data", "path", "x", "y", "source", "target", "children"]);

  path$$1 = path$$1 || pathRadialStep({
    source: source,
    target: target,
    x: x,
    y: y
  });
  if (children) return children({
    path: path$$1
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("path", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-link vx-link-radial-step', className),
    d: path$$1(data)
  }, restProps));
}

Polygon.propTypes = {
  sides: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  center: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
  })
};
var getPoint = function getPoint(_ref) {
  var sides = _ref.sides,
      size = _ref.size,
      center = _ref.center,
      rotate = _ref.rotate,
      side = _ref.side;
  var degrees = 360 / sides * side - rotate;
  var radians = degreesToRadians(degrees);
  return new _vx_point__WEBPACK_IMPORTED_MODULE_3__["Point"]({
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  });
};
var getPoints = function getPoints(_ref2) {
  var sides = _ref2.sides,
      size = _ref2.size,
      center = _ref2.center,
      rotate = _ref2.rotate;
  return _toConsumableArray(Array(sides).keys()).map(function (side) {
    return getPoint({
      sides: sides,
      size: size,
      center: center,
      rotate: rotate,
      side: side
    });
  });
};
function Polygon(_ref3) {
  var sides = _ref3.sides,
      _ref3$size = _ref3.size,
      size = _ref3$size === void 0 ? 25 : _ref3$size,
      _ref3$center = _ref3.center,
      center = _ref3$center === void 0 ? new _vx_point__WEBPACK_IMPORTED_MODULE_3__["Point"]({
    x: 0,
    y: 0
  }) : _ref3$center,
      _ref3$rotate = _ref3.rotate,
      rotate = _ref3$rotate === void 0 ? 0 : _ref3$rotate,
      className = _ref3.className,
      children = _ref3.children,
      innerRef = _ref3.innerRef,
      restProps = _objectWithoutProperties(_ref3, ["sides", "size", "center", "rotate", "className", "children", "innerRef"]);

  var points = getPoints({
    sides: sides,
    size: size,
    center: center,
    rotate: rotate
  }).map(function (p) {
    return p.toArray();
  });
  if (children) return children({
    points: points
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("polygon", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-polygon', className),
    points: points.join(' ')
  }, restProps));
}

Circle.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object])
};
function Circle(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ["className", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("circle", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('vx-circle', className)
  }, restProps));
}




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/array.js ***!
  \************************************************/
/*! exports provided: slice, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/cluster.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantZero", function() { return constantZero; });
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.eachAfter(count);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeight", function() { return computeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count */ "./node_modules/d3-hierarchy/src/hierarchy/count.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each */ "./node_modules/d3-hierarchy/src/hierarchy/each.js");
/* harmony import */ var _eachBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore */ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
/* harmony import */ var _eachAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter */ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum */ "./node_modules/d3-hierarchy/src/hierarchy/sum.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-hierarchy/src/hierarchy/sort.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path */ "./node_modules/d3-hierarchy/src/hierarchy/path.js");
/* harmony import */ var _ancestors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors */ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
/* harmony import */ var _descendants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants */ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js");
/* harmony import */ var _leaves__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves */ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links */ "./node_modules/d3-hierarchy/src/hierarchy/links.js");












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter__WEBPACK_IMPORTED_MODULE_3__["default"],
  eachBefore: _eachBefore__WEBPACK_IMPORTED_MODULE_2__["default"],
  sum: _sum__WEBPACK_IMPORTED_MODULE_4__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_5__["default"],
  path: _path__WEBPACK_IMPORTED_MODULE_6__["default"],
  ancestors: _ancestors__WEBPACK_IMPORTED_MODULE_7__["default"],
  descendants: _descendants__WEBPACK_IMPORTED_MODULE_8__["default"],
  leaves: _leaves__WEBPACK_IMPORTED_MODULE_9__["default"],
  links: _links__WEBPACK_IMPORTED_MODULE_10__["default"],
  copy: node_copy
};


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/index.js ***!
  \************************************************/
/*! exports provided: cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster */ "./node_modules/d3-hierarchy/src/cluster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return _cluster__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _pack_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack/index */ "./node_modules/d3-hierarchy/src/pack/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _pack_index__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pack_siblings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pack/siblings */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return _pack_siblings__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pack_enclose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack/enclose */ "./node_modules/d3-hierarchy/src/pack/enclose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return _pack_enclose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _partition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition */ "./node_modules/d3-hierarchy/src/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _stratify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stratify */ "./node_modules/d3-hierarchy/src/stratify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return _stratify__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree */ "./node_modules/d3-hierarchy/src/tree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return _tree__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _treemap_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/index */ "./node_modules/d3-hierarchy/src/treemap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return _treemap_index__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _treemap_binary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/binary */ "./node_modules/d3-hierarchy/src/treemap/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return _treemap_binary__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _treemap_dice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/dice */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return _treemap_dice__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _treemap_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treemap/slice */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return _treemap_slice__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treemap/sliceDice */ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return _treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _treemap_squarify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treemap/squarify */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return _treemap_squarify__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treemap/resquarify */ "./node_modules/d3-hierarchy/src/treemap/resquarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return _treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__["default"]; });


















/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-hierarchy/src/array.js");


/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  var i = 0, n = (circles = Object(_array__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-hierarchy/src/constant.js");




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = _constant__WEBPACK_IMPORTED_MODULE_2__["constantZero"];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(_constant__WEBPACK_IMPORTED_MODULE_2__["constantZero"], 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = Object(_accessors__WEBPACK_IMPORTED_MODULE_1__["optional"])(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(_siblings__WEBPACK_IMPORTED_MODULE_0__["packEnclose"])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \********************************************************/
/*! exports provided: packEnclose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return packEnclose; });
/* harmony import */ var _enclose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enclose */ "./node_modules/d3-hierarchy/src/pack/enclose.js");


function place(b, a, c) {
  var dx = b.x - a.x, x, a2,
      dy = b.y - a.y, y, b2,
      d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}

function intersects(a, b) {
  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose__WEBPACK_IMPORTED_MODULE_0__["default"])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/partition.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/partition.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treemap_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round */ "./node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _treemap_dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice */ "./node_modules/d3-hierarchy/src/treemap/dice.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(_treemap_round__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        Object(_treemap_dice__WEBPACK_IMPORTED_MODULE_1__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/stratify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["Node"](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["computeHeight"]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/tree.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(_hierarchy_index__WEBPACK_IMPORTED_MODULE_0__["Node"].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ "./node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-hierarchy/src/constant.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var tile = _squarify__WEBPACK_IMPORTED_MODULE_1__["default"],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingTop = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingRight = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingBottom = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingLeft = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(_round__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(_accessors__WEBPACK_IMPORTED_MODULE_2__["required"])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");




/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else Object(_slice__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(_squarify__WEBPACK_IMPORTED_MODULE_2__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(_squarify__WEBPACK_IMPORTED_MODULE_2__["phi"]));


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./node_modules/d3-hierarchy/src/treemap/slice.js");



/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? _slice__WEBPACK_IMPORTED_MODULE_1__["default"] : _dice__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, x0, y0, x1, y1);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squarifyRatio", function() { return squarifyRatio; });
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "./node_modules/d3-hierarchy/src/treemap/slice.js");



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(_slice__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_appearance__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/appearance */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function() { return _order_appearance__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_ascending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/ascending */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_descending__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/descending */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_insideOut__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _order_reverse__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/reverse */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse__WEBPACK_IMPORTED_MODULE_42__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/appearance.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var peaks = series.map(peak);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
});

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_appearance__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpipeline-system%2Ftopology&absolutePagePath=%2FUsers%2Fdischord01%2FDropbox%2FCodeworks%2Felements-one-kube%2Ftemplate%2Fpages%2Fpipeline-system%2Ftopology.js!./":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpipeline-system%2Ftopology&absolutePagePath=%2FUsers%2Fdischord01%2FDropbox%2FCodeworks%2Felements-one-kube%2Ftemplate%2Fpages%2Fpipeline-system%2Ftopology.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/pipeline-system/topology", function() {
      var page = __webpack_require__(/*! ./pages/pipeline-system/topology.js */ "./pages/pipeline-system/topology.js")
      if(true) {
        module.hot.accept(/*! ./pages/pipeline-system/topology.js */ "./pages/pipeline-system/topology.js", function() {
          if(!next.router.components["/pipeline-system/topology"]) return
          var updatedPage = __webpack_require__(/*! ./pages/pipeline-system/topology.js */ "./pages/pipeline-system/topology.js")
          next.router.update("/pipeline-system/topology", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/pipeline-system/topology.js":
/*!*******************************************!*\
  !*** ./pages/pipeline-system/topology.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Topology__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Topology */ "./components/Topology.js");
var _jsxFileName = "/Users/dischord01/Dropbox/Codeworks/elements-one-kube/template/pages/pipeline-system/topology.js";



var TopologyPage = function TopologyPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Topology__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TopologyPage);

/***/ }),

/***/ 3:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fpipeline-system%2Ftopology&absolutePagePath=%2FUsers%2Fdischord01%2FDropbox%2FCodeworks%2Felements-one-kube%2Ftemplate%2Fpages%2Fpipeline-system%2Ftopology.js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fpipeline-system%2Ftopology&absolutePagePath=%2FUsers%2Fdischord01%2FDropbox%2FCodeworks%2Felements-one-kube%2Ftemplate%2Fpages%2Fpipeline-system%2Ftopology.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fpipeline-system%2Ftopology&absolutePagePath=%2FUsers%2Fdischord01%2FDropbox%2FCodeworks%2Felements-one-kube%2Ftemplate%2Fpages%2Fpipeline-system%2Ftopology.js!./");


/***/ }),

/***/ "dll-reference dll_829b10deddf10e1653a8":
/*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_829b10deddf10e1653a8;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=topology.js.map