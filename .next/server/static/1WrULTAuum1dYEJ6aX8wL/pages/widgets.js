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
/******/ 	return __webpack_require__(__webpack_require__.s = "ee42");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0NIG":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down");

/***/ }),

/***/ "0Qvy":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/heart");

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "2Fv8":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/bell");

/***/ }),

/***/ "2fKw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ "3GIh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var StatCard = function StatCard(_ref) {
  var type = _ref.type,
      title = _ref.title,
      value = _ref.value,
      icon = _ref.icon,
      color = _ref.color,
      clickHandler = _ref.clickHandler;
  var before = null,
      after = null;
  var cardIcon = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    shape: "circle",
    size: "large",
    type: "primary",
    style: {
      backgroundColor: color,
      borderColor: color
    },
    className: type !== 'fill' ? 'mr-4' : null,
    onClick: clickHandler
  }, icon));

  if (icon) {
    type === 'fill' ? after = cardIcon : before = cardIcon;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "mb-4",
    style: type === 'fill' ? {
      backgroundColor: color
    } : null
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    align: "middle",
    justify: "start"
  }, before, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "mb-0 ".concat(type === 'fill' ? 'text-white' : null)
  }, value), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("small", {
    className: type === 'fill' ? 'text-white-50' : null
  }, title)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "mr-auto"
  }), after));
};

/* harmony default export */ __webpack_exports__["a"] = (StatCard);

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "4g8T":
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Oko":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up");

/***/ }),

/***/ "5rRV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "5vHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rt45");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Lj3Z");
/* harmony import */ var react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Do8d");
/* harmony import */ var react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0Qvy");
/* harmony import */ var react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("i0nf");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n                    background-image: url(", ");\n                    height: ", "px;\n                  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










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
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(StyledCard, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    cover: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Cover, {
      style: {
        height: imageHeight
      }
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
      autoplay: true,
      autoplaySpeed: 6000,
      className: "rounded-top overflow-hidden"
    }, images.map(function (image, index) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_StyledDiv, {
        className: "image",
        _css: image,
        _css2: imageHeight
      }));
    })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "title p-4"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h6", {
      className: "mb-0 text-white"
    }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
      className: "mb-0 text-white-50"
    }, subtitle))),
    actions: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_heart__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: 20,
      strokeWidth: 1
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_star__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: 20,
      strokeWidth: 1
    }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_feather_dist_icons_share__WEBPACK_IMPORTED_MODULE_2___default.a, {
      size: 20,
      strokeWidth: 1
    })]
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Content, null, text)));
};

/* harmony default export */ __webpack_exports__["a"] = (PostCard);

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_6___default()("div")(_templateObject(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9ubE":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "DTXx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "react-feather/dist/icons/message-circle"
var message_circle_ = __webpack_require__("vrlj");
var message_circle_default = /*#__PURE__*/__webpack_require__.n(message_circle_);

// EXTERNAL MODULE: external "react-feather/dist/icons/bell"
var bell_ = __webpack_require__("2Fv8");
var bell_default = /*#__PURE__*/__webpack_require__.n(bell_);

// EXTERNAL MODULE: external "react-feather/dist/icons/phone-call"
var phone_call_ = __webpack_require__("yYSy");
var phone_call_default = /*#__PURE__*/__webpack_require__.n(phone_call_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: external "react-feather/dist/icons/bookmark"
var bookmark_ = __webpack_require__("vIJI");
var bookmark_default = /*#__PURE__*/__webpack_require__.n(bookmark_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "antd/lib/card"
var card_ = __webpack_require__("5rRV");
var card_default = /*#__PURE__*/__webpack_require__.n(card_);

// EXTERNAL MODULE: external "antd/lib/carousel"
var carousel_ = __webpack_require__("i0nf");
var carousel_default = /*#__PURE__*/__webpack_require__.n(carousel_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/shared/ImageStatCard.js






var StyledCard = external_styled_components_default.a.div.withConfig({
  displayName: "ImageStatCard__StyledCard",
  componentId: "gemgcc-0"
})([".ant-card-cover{position:relative;}"]);
var Cover = external_styled_components_default.a.div.withConfig({
  displayName: "ImageStatCard__Cover",
  componentId: "gemgcc-1"
})(["position:relative;width:100%;.ant-carousel{position:absolute;width:100%;height:100%;}.slick-slider{width:100%;height:100%;}.slick-slide > div{display:flex;}.image{position:relative;background-size:cover;background-position:top center;width:100%;}.weakColor & .image{-webkit-filter:invert(100%);filter:invert(100%);}.content{position:relative;z-index:9;}"]);

var ImageStatCard_ImageStatCard = function ImageStatCard(_ref) {
  var images = _ref.images,
      imageHeight = _ref.imageHeight,
      stats = _ref.stats;
  return external_react_default.a.createElement(StyledCard, null, external_react_default.a.createElement(card_default.a, {
    className: "mb-4",
    cover: external_react_default.a.createElement(Cover, {
      style: {
        height: imageHeight
      }
    }, external_react_default.a.createElement(carousel_default.a, {
      autoplay: true,
      autoplaySpeed: 4000,
      className: "rounded-top overflow-hidden"
    }, images.map(function (image, index) {
      return external_react_default.a.createElement("div", {
        key: index
      }, external_react_default.a.createElement("div", {
        key: index,
        className: "image",
        style: {
          backgroundImage: "url(".concat(image, ")"),
          height: imageHeight
        }
      }));
    })))
  }, external_react_default.a.createElement(row_default.a, {
    type: "flex",
    gutter: 16,
    align: "middle",
    justify: "space-around"
  }, stats.map(function (stat, index) {
    return external_react_default.a.createElement(col_default.a, {
      className: "text-center",
      key: index
    }, external_react_default.a.createElement("h5", {
      className: "mb-0"
    }, stat.value), external_react_default.a.createElement("small", null, stat.title));
  }))));
};

/* harmony default export */ var shared_ImageStatCard = (ImageStatCard_ImageStatCard);
// EXTERNAL MODULE: external "antd/lib/avatar"
var avatar_ = __webpack_require__("9ubE");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar_);

// CONCATENATED MODULE: ./demos/mock/feed.js


/* harmony default export */ var mock_feed = ([{
  from: 'Ali Connors',
  message: 'Dapibus Tellus',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: 48,
    alt: "Ali Connors",
    src: "/static/images/face3.jpg"
  }),
  subject: 'Quam Amet Vehicula'
}, {
  from: 'Trevor Hansen',
  message: 'Sit Malesuada',
  subject: 'Sem Adipiscing Tristique'
}, {
  from: 'Sandra Adams',
  message: 'Adipiscing Mattis',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: 48,
    alt: "Sandra Adams",
    src: "/static/images/face4.jpg"
  }),
  subject: 'Ullamcorper Bibendum Ligula'
}, {
  from: 'Jeff Jones',
  message: 'Consectetur Dolor',
  avatar: external_react_default.a.createElement(avatar_default.a, {
    size: 48,
    "aria-label": "Post"
  }, "J"),
  subject: 'Ullamcorper Bibendum Ligula'
}]);
// EXTERNAL MODULE: external "antd/lib/list"
var list_ = __webpack_require__("4g8T");
var list_default = /*#__PURE__*/__webpack_require__.n(list_);

// CONCATENATED MODULE: ./components/shared/NewsCard.js





var NewsCard_NewsCard = function NewsCard(_ref) {
  var feed = _ref.feed,
      title = _ref.title,
      subtitle = _ref.subtitle;
  return external_react_default.a.createElement(card_default.a, {
    title: title,
    extra: external_react_default.a.createElement("small", null, subtitle),
    className: "mb-4"
  }, external_react_default.a.createElement(list_default.a, {
    itemLayout: "horizontal",
    dataSource: feed,
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(list_default.a.Item, {
        className: "border-bottom-0"
      }, external_react_default.a.createElement(list_default.a.Item.Meta, {
        avatar: item.avatar ? item.avatar : external_react_default.a.createElement(avatar_default.a, {
          size: 48,
          style: {
            color: 'rgb(143, 0, 245)',
            backgroundColor: 'rgb(214, 207, 253)'
          }
        }, item.subject.charAt(0)),
        title: external_react_default.a.createElement("a", {
          href: "javascript:;",
          className: "text-truncate"
        }, item.subject),
        description: external_react_default.a.createElement("span", {
          className: "text-truncate"
        }, item.message)
      }));
    }
  }));
};

/* harmony default export */ var shared_NewsCard = (NewsCard_NewsCard);
// EXTERNAL MODULE: ./components/shared/PostCard.js
var PostCard = __webpack_require__("5vHU");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// CONCATENATED MODULE: ./components/shared/ProfileCard.js
function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n                    background-image: url(", ");\n                    height: ", "px;\n                  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













var ProfileCard_Cover = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__Cover",
  componentId: "gi9sik-0"
})(["position:relative;width:100%;.ant-carousel{position:absolute;width:100%;height:100%;}.slick-slider{width:100%;height:100%;}.slick-slide > div{display:flex;}.image{position:relative;background-size:cover;background-position:top center;width:100%;}.weakColor & .image{-webkit-filter:invert(100%);filter:invert(100%);}.content{position:relative;z-index:9;}"]);
var Picture = external_styled_components_default.a.div.withConfig({
  displayName: "ProfileCard__Picture",
  componentId: "gi9sik-1"
})(["position:relative;.message,.phone{position:absolute;top:60%;margin-top:-8px;z-index:1;}.message{left:-8px;}.phone{right:-8px;}"]);

var ProfileCard_ProfileCard = function ProfileCard(_ref) {
  var name = _ref.name,
      avatar = _ref.avatar,
      imageHeight = _ref.imageHeight,
      location = _ref.location,
      stats = _ref.stats,
      images = _ref.images,
      callHandler = _ref.callHandler,
      messageHandler = _ref.messageHandler;
  return external_react_default.a.createElement(card_default.a, {
    className: "mb-4",
    cover: external_react_default.a.createElement(ProfileCard_Cover, {
      style: {
        height: imageHeight
      }
    }, external_react_default.a.createElement(carousel_default.a, {
      autoplay: true,
      autoplaySpeed: 6000,
      className: "rounded-top overflow-hidden"
    }, images.map(function (image, index) {
      return external_react_default.a.createElement("div", {
        key: index
      }, external_react_default.a.createElement(_StyledDiv, {
        className: "image",
        _css: image,
        _css2: imageHeight
      }));
    })), external_react_default.a.createElement("div", {
      className: "content text-center p-4"
    }, external_react_default.a.createElement(row_default.a, {
      type: "flex",
      align: "middle",
      justify: "space-around",
      className: "mb-4"
    }, external_react_default.a.createElement(Picture, null, external_react_default.a.createElement(button_default.a, {
      shape: "circle",
      type: "primary",
      size: "large",
      onClick: messageHandler,
      className: "message"
    }, external_react_default.a.createElement(message_circle_default.a, {
      size: 16,
      strokeWidth: 1
    })), external_react_default.a.createElement(avatar_default.a, {
      alt: name,
      src: avatar,
      size: 128,
      className: "shadow"
    }), external_react_default.a.createElement(button_default.a, {
      shape: "circle",
      type: "primary",
      size: "large",
      onClick: callHandler,
      className: "phone"
    }, external_react_default.a.createElement(phone_call_default.a, {
      size: 16,
      strokeWidth: 1
    })))), external_react_default.a.createElement("h5", {
      className: "mb-0 text-white"
    }, name), external_react_default.a.createElement("small", {
      className: "text-white"
    }, location)))
  }, external_react_default.a.createElement(row_default.a, {
    type: "flex",
    align: "middle",
    justify: "space-around"
  }, stats.map(function (stat, index) {
    return external_react_default.a.createElement(col_default.a, {
      className: "text-center",
      key: index
    }, external_react_default.a.createElement("h5", {
      className: "mb-0"
    }, stat.value), external_react_default.a.createElement("small", null, stat.title));
  })));
};

/* harmony default export */ var shared_ProfileCard = (ProfileCard_ProfileCard);

var _StyledDiv = external_styled_components_default()("div")(_templateObject(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});
// EXTERNAL MODULE: ./components/shared/StatCard.js
var StatCard = __webpack_require__("3GIh");

// EXTERNAL MODULE: ./components/shared/WeatherCard.js
var WeatherCard = __webpack_require__("GKd8");

// EXTERNAL MODULE: ./components/styles/GlobalStyles.js + 1 modules
var GlobalStyles = __webpack_require__("GXHU");

// CONCATENATED MODULE: ./components/Widgets.js



















var Widgets_Widgets = function Widgets() {
  var _useState = Object(external_react_["useState"])(mock_feed.slice(0, 3)),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 1),
      feed = _useState2[0];

  var _useState3 = Object(external_react_["useState"])([{
    title: 'Comments',
    value: 24
  }, {
    title: 'Likes',
    value: 45
  }, {
    title: 'Shares',
    value: 984
  }]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 1),
      stats = _useState4[0];

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(row_default.a, {
    gutter: 16
  }, external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    title: "Campaigns",
    value: 103,
    icon: external_react_default.a.createElement(bookmark_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].primaryColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Campaign stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    title: "Customers",
    value: 230,
    icon: external_react_default.a.createElement(phone_call_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].darkColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Customer stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    title: "Queries",
    value: 323,
    icon: external_react_default.a.createElement(bell_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].warningColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Queries stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    title: "Opens",
    value: 870,
    icon: external_react_default.a.createElement(message_circle_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].errorColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Opens stat button clicked');
    }
  }))), external_react_default.a.createElement(row_default.a, {
    gutter: 16
  }, external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Campaigns",
    value: 103,
    icon: external_react_default.a.createElement(bookmark_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].primaryColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Campaign stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Customers",
    value: 230,
    icon: external_react_default.a.createElement(phone_call_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].darkColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Customer stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Queries",
    value: 323,
    icon: external_react_default.a.createElement(bell_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].warningColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Queries stat button clicked');
    }
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 6
  }, external_react_default.a.createElement(StatCard["a" /* default */], {
    type: "fill",
    title: "Opens",
    value: 870,
    icon: external_react_default.a.createElement(message_circle_default.a, {
      size: 20,
      strokeWidth: 1
    }),
    color: GlobalStyles["b" /* theme */].errorColor,
    clickHandler: function clickHandler() {
      return message_default.a.info('Opens stat button clicked');
    }
  }))), external_react_default.a.createElement(row_default.a, {
    gutter: 16
  }, external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 24,
    md: 8
  }, external_react_default.a.createElement(shared_NewsCard, {
    title: "Feed",
    subtitle: "Last updated 24 mins ago",
    feed: feed
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 8
  }, external_react_default.a.createElement(shared_ImageStatCard, {
    title: "image stat card",
    images: ['/static/images/unsplash/2.jpg', '/static/images/unsplash/1.jpg', '/static/images/unsplash/13.jpg'],
    imageHeight: 230,
    stats: stats
  })), external_react_default.a.createElement(col_default.a, {
    xs: 24,
    sm: 12,
    md: 8
  }, external_react_default.a.createElement(shared_ProfileCard, {
    name: 'John Doe',
    avatar: "/static/images/face1.jpg",
    images: ['/static/images/unsplash/4.jpg', '/static/images/unsplash/6.jpg'],
    location: 'London, Uk',
    imageHeight: 230,
    stats: stats,
    callHandler: function callHandler() {
      return message_default.a.info('Call button clicked');
    },
    messageHandler: function messageHandler() {
      return message_default.a.info('Message button clicked');
    }
  }))), external_react_default.a.createElement(row_default.a, {
    gutter: 16
  }, external_react_default.a.createElement(col_default.a, {
    sm: 24,
    md: 12
  }, external_react_default.a.createElement(WeatherCard["a" /* default */], {
    city: "harare",
    country: "zw",
    days: 7
  })), external_react_default.a.createElement(col_default.a, {
    sm: 24,
    md: 12
  }, external_react_default.a.createElement(PostCard["a" /* default */], {
    title: "Shrimp and Chorizo Paella",
    subtitle: "Yesterday",
    image: "/static/images/unsplash/1.jpg",
    images: ['/static/images/unsplash/1.jpg', '/static/images/unsplash/15.jpg'],
    imageHeight: 309,
    text: "Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
  }))));
};

/* harmony default export */ var components_Widgets = (Widgets_Widgets);
// CONCATENATED MODULE: ./pages/widgets.js



var widgets_WidgetsPage = function WidgetsPage() {
  return external_react_default.a.createElement(components_Widgets, null);
};

/* harmony default export */ var widgets = __webpack_exports__["default"] = (widgets_WidgetsPage);

/***/ }),

/***/ "Do8d":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/star");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "GKd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rt45");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5rRV");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2fKw");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xZtu");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("O40h");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("doui");
/* harmony import */ var react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("yS+C");
/* harmony import */ var react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("IXT2");
/* harmony import */ var react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ppBY");
/* harmony import */ var react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("0NIG");
/* harmony import */ var react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("IUXo");
/* harmony import */ var react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("POXb");
/* harmony import */ var react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("RZyZ");
/* harmony import */ var react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("5Oko");
/* harmony import */ var react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("FWZJ");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("Skji");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_21__);
function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(["\n      display: block;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

























var DescriptionItem = function DescriptionItem(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, title), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", null, content));
};

var ForecastItem = function ForecastItem(_ref2) {
  var content = _ref2.content;
  return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(_StyledSpan, null, content);
};

var getWindDirection = function getWindDirection(degree) {
  var direction = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__[/* windDirection */ "g"])(degree);

  switch (direction) {
    case 'n':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up__WEBPACK_IMPORTED_MODULE_16___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'ne':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up_right__WEBPACK_IMPORTED_MODULE_15___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'e':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_right__WEBPACK_IMPORTED_MODULE_14___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'se':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down_right__WEBPACK_IMPORTED_MODULE_13___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 's':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down__WEBPACK_IMPORTED_MODULE_12___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'sw':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_down_left__WEBPACK_IMPORTED_MODULE_11___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'w':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_left__WEBPACK_IMPORTED_MODULE_10___default.a, {
        size: 20,
        strokeWidth: 1
      });

    case 'nw':
      return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react_feather_dist_icons_arrow_up_left__WEBPACK_IMPORTED_MODULE_9___default.a, {
        size: 20,
        strokeWidth: 1
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
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_19__["useState"])(undefined),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_useState3, 2),
      forecast = _useState4[0],
      setForecast = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_19__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      var _forecast, _current;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__[/* getWeather */ "c"])(city, country, days);

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
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    loading: !current && !forecast,
    active: true,
    className: "p-4"
  }, current && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_19___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, null, forecast && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h5", {
    className: "mb-0 font-weight-bold"
  }, "".concat(forecast.city.name, ", ").concat(forecast.city.country)), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h6", {
    className: "mb-0"
  }, date_fns_format__WEBPACK_IMPORTED_MODULE_21___default()(current.dt * 1000, 'MMMM Do YYYY')), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", null, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__[/* capitalize */ "a"])(current.weather[0].description))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "text-right"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("h3", {
    className: "font-weight-light mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("span", null, current.main.temp, "\xB0")))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    gutter: 16
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(current.main).map(function (key, index) {
    return react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      xs: 12,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(DescriptionItem, {
      title: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__[/* capitalize */ "a"])(key.replace(/_/g, ' ')),
      content: current.main[key]
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    orientation: "left"
  }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("small", null, "Forecast")), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("div", {
    className: "p-4"
  }, forecast && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_18___default.a, {
    type: "flex",
    align: "middle",
    justify: "space-between",
    className: "text-center",
    style: {
      flexFlow: 'initial'
    }
  }, forecast.list.map(function (day, index) {
    return index !== 0 && react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement("p", {
      className: "text-center mb-0",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: date_fns_format__WEBPACK_IMPORTED_MODULE_21___default()(day.dt * 1000, 'ddd')
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: day.weather.description
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: getWindDirection(day.wind.deg)
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_20__[/* getWeatherIcon */ "d"])(day.weather[0].icon, 50)
    }), react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement(ForecastItem, {
      content: "".concat(day.main.temp, "\xB0")
    }));
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (WeatherCard);

var _StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_17___default()("span")(_templateObject());

/***/ }),

/***/ "GXHU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "less-vars-to-js"
var external_less_vars_to_js_ = __webpack_require__("bPsq");
var external_less_vars_to_js_default = /*#__PURE__*/__webpack_require__.n(external_less_vars_to_js_);

// EXTERNAL MODULE: ./lib/helpers.js
var helpers = __webpack_require__("FWZJ");

// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./assets/antd-custom.less
/* harmony default export */ var antd_custom = ("// Default ant design variales ->>> https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\n// -------- Colors -----------\n@primary-color          : #007bff;\n@info-color             : #1890ff;\n@success-color          : #52c41a;\n@processing-color       : #1890ff;\n@error-color            : #f5222d;\n@highlight-color        : #f5222d;\n@warning-color          : #faad14;\n@normal-color           : #d9d9d9;\n@background-color       : #f7f7f9;\n@dark-color             : rgb(51,51,51);\n@text-color             : rgba(0, 0, 0, .65);\n@text-color-secondary   : rgba(0,0,0,.45);\n\n// -------- Border radius -----------\n@border-radius-base     : 4px;\n@border-radius-sm       : 4px;\n\n// -------- Border color -----------\n@border-color-base      : hsv(0, 0, 85%);\n@border-color-split     : rgba(0, 0, 0, 0.05);\n\n// -------- Font family -----------\n@font-family            : \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n@code-family            : \"Anonymous Pro\", \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n\n// -------- Menu -----------\n@menu-inline-toplevel-item-height: 36px;\n@menu-item-height       : 36px;\n\n// -------- Header -----------\n@layout-header-background: #ffffff;\n@layout-header-height    : 60px;\n\n// -------- Card -----------\n@card-padding-base      : 16px;\n@card-padding-wider      : 16px;\n\n\n\n@menu-dark-bg: rgb(51,51,51);\n@menu-dark-submenu-bg: rgb(51,51,51);");
// CONCATENATED MODULE: ./components/styles/GlobalStyles.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return theme; });



function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  @import url('/static/app.css');\n  @import url('/static/nprogress.css');\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  #__next > .ant-spin-nested-loading > .ant-spin-blur:after {\n    opacity: .8;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 14px;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  body {\n    background-color: ", ";\n    -ms-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering:optimizeLegibility;\n  }\n\n  #nprogress .bar {\n    background: ", ";\n  }\n  #nprogress .peg {\n    box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n  }\n  #nprogress .spinner-icon {\n    border-top-color: ", ";\n    border-left-color: ", ";\n  }\n\n  .weakColor{\n    -webkit-filter:invert(80%);\n    filter:invert(80%)\n  }\n\n  .weakColor img {\n    -webkit-filter:invert(100%);\n    filter:invert(100%)\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  .brand {\n    display: flex;\n    align-items: center;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    white-space: nowrap;\n    color: ", ";\n    justify-content: center;\n  }\n  .brand > svg {\n    fill: ", ";\n  }\n  .anticon {\n    vertical-align: middle\n  }\n\n  b, strong {\n    font-weight: 600;\n  }\n\n  h1, h2, h3, h4, h5, h6,\n  .h1, .h2, .h3, .h4, .h5, .h6 {\n    margin-bottom: 0.5rem;\n    font-family: inherit;\n    font-weight: 400;\n    line-height: 1.2;\n  }\n\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n\n  h2, .h2 {\n    font-size: 2rem;\n  }\n\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n\n  h5, .h5 {\n    font-size: 1.25rem;\n  }\n\n  h6, .h6 {\n    font-size: 1rem;\n  }\n\n  .clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n  .list-unstyled {\n    padding-left: 0;\n    list-style: none;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .scroll-y {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .scroll-x {\n    overflow-x: auto!important;\n  }\n\n  .fill-workspace {\n    height: calc(100vh - 105px);\n  }\n\n  .full-workspace {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    overflow: hidden;\n  }\n\n  .bg-primary {\n    background-color: ", " !important;\n  }\n\n  .bg-normal {\n    background-color: ", " !important;\n  }\n\n  .bg-success {\n    background-color: ", " !important;\n  }\n\n  .bg-info {\n    background-color: ", " !important;\n  }\n\n  .bg-warning {\n    background-color: ", " !important;\n  }\n\n  .bg-error {\n    background-color: ", " !important;\n  }\n\n  .bg-dark {\n    background-color: ", " !important;\n  }\n\n  .bg-white {\n    background-color: #fff !important;\n  }\n\n  .bg-transparent {\n    background-color: transparent !important;\n  }\n\n  .border {\n    border: 1px solid ", " !important;\n  }\n\n  .border-top {\n    border-top: 1px solid ", " !important;\n  }\n\n  .border-right {\n    border-right: 1px solid ", " !important;\n  }\n\n  .border-bottom {\n    border-bottom: 1px solid ", " !important;\n  }\n\n  .border-left {\n    border-left: 1px solid ", " !important;\n  }\n\n  .border-0 {\n    border: 0 !important;\n  }\n\n  .border-top-0 {\n    border-top: 0 !important;\n  }\n\n  .border-right-0 {\n    border-right: 0 !important;\n  }\n\n  .border-bottom-0 {\n    border-bottom: 0 !important;\n  }\n\n  .border-left-0 {\n    border-left: 0 !important;\n  }\n\n  .border-primary {\n    border-color: ", " !important;\n  }\n\n  .border-normal {\n    border-color: ", " !important;\n  }\n\n  .border-success {\n    border-color: ", " !important;\n  }\n\n  .border-info {\n    border-color: ", " !important;\n  }\n\n  .border-warning {\n    border-color: ", " !important;\n  }\n\n  .border-error {\n    border-color: ", " !important;\n  }\n\n  .border-white {\n    border-color: #fff !important;\n  }\n\n  .rounded {\n    border-radius: ", " !important;\n  }\n\n  .rounded-top {\n    border-top-left-radius: ", " !important;\n    border-top-right-radius: ", " !important;\n  }\n\n  .rounded-right {\n    border-top-right-radius: ", " !important;\n    border-bottom-right-radius: ", " !important;\n  }\n\n  .rounded-bottom {\n    border-bottom-right-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-left {\n    border-top-left-radius: ", " !important;\n    border-bottom-left-radius: ", " !important;\n  }\n\n  .rounded-circle {\n    border-radius: 50% !important;\n  }\n\n  .rounded-0 {\n    border-radius: 0 !important;\n  }\n\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n  }\n\n  .shadow {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n  }\n\n  .shadow-lg {\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n  }\n\n  .shadow-none, .shadow-0 {\n    box-shadow: none !important;\n  }\n\n  .m-0 {\n    margin: 0 !important;\n  }\n\n  .mt-0,\n  .my-0 {\n    margin-top: 0 !important;\n  }\n\n  .mr-0,\n  .mx-0 {\n    margin-right: 0 !important;\n  }\n\n  .mb-0,\n  .my-0 {\n    margin-bottom: 0 !important;\n  }\n\n  .ml-0,\n  .mx-0 {\n    margin-left: 0 !important;\n  }\n\n  .m-1 {\n    margin: 0.25rem !important;\n  }\n\n  .mt-1,\n  .my-1 {\n    margin-top: 0.25rem !important;\n  }\n\n  .mr-1,\n  .mx-1 {\n    margin-right: 0.25rem !important;\n  }\n\n  .mb-1,\n  .my-1 {\n    margin-bottom: 0.25rem !important;\n  }\n\n  .ml-1,\n  .mx-1 {\n    margin-left: 0.25rem !important;\n  }\n\n  .m-2 {\n    margin: 0.5rem !important;\n  }\n\n  .mt-2,\n  .my-2 {\n    margin-top: 0.5rem !important;\n  }\n\n  .mr-2,\n  .mx-2 {\n    margin-right: 0.5rem !important;\n  }\n\n  .mb-2,\n  .my-2 {\n    margin-bottom: 0.5rem !important;\n  }\n\n  .ml-2,\n  .mx-2 {\n    margin-left: 0.5rem !important;\n  }\n\n  .m-3 {\n    margin: 1rem !important;\n  }\n\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n\n  .mr-3,\n  .mx-3 {\n    margin-right: 1rem !important;\n  }\n\n  .mb-3,\n  .my-3 {\n    margin-bottom: 1rem !important;\n  }\n\n  .ml-3,\n  .mx-3 {\n    margin-left: 1rem !important;\n  }\n\n  .m-4 {\n    margin: 1.5rem !important;\n  }\n\n  .mt-4,\n  .my-4 {\n    margin-top: 1.5rem !important;\n  }\n\n  .mr-4,\n  .mx-4 {\n    margin-right: 1.5rem !important;\n  }\n\n  .mb-4,\n  .my-4 {\n    margin-bottom: 1.5rem !important;\n  }\n\n  .ml-4,\n  .mx-4 {\n    margin-left: 1.5rem !important;\n  }\n\n  .m-5 {\n    margin: 3rem !important;\n  }\n\n  .mt-5,\n  .my-5 {\n    margin-top: 3rem !important;\n  }\n\n  .mr-5,\n  .mx-5 {\n    margin-right: 3rem !important;\n  }\n\n  .mb-5,\n  .my-5 {\n    margin-bottom: 3rem !important;\n  }\n\n  .ml-5,\n  .mx-5 {\n    margin-left: 3rem !important;\n  }\n\n  .p-0 {\n    padding: 0 !important;\n  }\n\n  .pt-0,\n  .py-0 {\n    padding-top: 0 !important;\n  }\n\n  .pr-0,\n  .px-0 {\n    padding-right: 0 !important;\n  }\n\n  .pb-0,\n  .py-0 {\n    padding-bottom: 0 !important;\n  }\n\n  .pl-0,\n  .px-0 {\n    padding-left: 0 !important;\n  }\n\n  .p-1 {\n    padding: 0.25rem !important;\n  }\n\n  .pt-1,\n  .py-1 {\n    padding-top: 0.25rem !important;\n  }\n\n  .pr-1,\n  .px-1 {\n    padding-right: 0.25rem !important;\n  }\n\n  .pb-1,\n  .py-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .pl-1,\n  .px-1 {\n    padding-left: 0.25rem !important;\n  }\n\n  .p-2 {\n    padding: 0.5rem !important;\n  }\n\n  .pt-2,\n  .py-2 {\n    padding-top: 0.5rem !important;\n  }\n\n  .pr-2,\n  .px-2 {\n    padding-right: 0.5rem !important;\n  }\n\n  .pb-2,\n  .py-2 {\n    padding-bottom: 0.5rem !important;\n  }\n\n  .pl-2,\n  .px-2 {\n    padding-left: 0.5rem !important;\n  }\n\n  .p-3 {\n    padding: 1rem !important;\n  }\n\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n\n  .pr-3,\n  .px-3 {\n    padding-right: 1rem !important;\n  }\n\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n\n  .pl-3,\n  .px-3 {\n    padding-left: 1rem !important;\n  }\n\n  .p-4 {\n    padding: 1.5rem !important;\n  }\n\n  .pt-4,\n  .py-4 {\n    padding-top: 1.5rem !important;\n  }\n\n  .pr-4,\n  .px-4 {\n    padding-right: 1.5rem !important;\n  }\n\n  .pb-4,\n  .py-4 {\n    padding-bottom: 1.5rem !important;\n  }\n\n  .pl-4,\n  .px-4 {\n    padding-left: 1.5rem !important;\n  }\n\n  .p-5 {\n    padding: 3rem !important;\n  }\n\n  .pt-5,\n  .py-5 {\n    padding-top: 3rem !important;\n  }\n\n  .pr-5,\n  .px-5 {\n    padding-right: 3rem !important;\n  }\n\n  .pb-5,\n  .py-5 {\n    padding-bottom: 3rem !important;\n  }\n\n  .pl-5,\n  .px-5 {\n    padding-left: 3rem !important;\n  }\n\n  .m-auto {\n    margin: auto !important;\n  }\n\n  .mt-auto,\n  .my-auto {\n    margin-top: auto !important;\n  }\n\n  .mr-auto,\n  .mx-auto {\n    margin-right: auto !important;\n  }\n\n  .mb-auto,\n  .my-auto {\n    margin-bottom: auto !important;\n  }\n\n  .ml-auto,\n  .mx-auto {\n    margin-left: auto !important;\n  }\n\n  @media (min-width: 576px) {\n    .m-sm-0 {\n      margin: 0 !important;\n    }\n    .mt-sm-0,\n    .my-sm-0 {\n      margin-top: 0 !important;\n    }\n    .mr-sm-0,\n    .mx-sm-0 {\n      margin-right: 0 !important;\n    }\n    .mb-sm-0,\n    .my-sm-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-sm-0,\n    .mx-sm-0 {\n      margin-left: 0 !important;\n    }\n    .m-sm-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-sm-1,\n    .my-sm-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-sm-1,\n    .mx-sm-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-sm-1,\n    .my-sm-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-sm-1,\n    .mx-sm-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-sm-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-sm-2,\n    .my-sm-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-sm-2,\n    .mx-sm-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-sm-2,\n    .my-sm-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-sm-2,\n    .mx-sm-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-sm-3 {\n      margin: 1rem !important;\n    }\n    .mt-sm-3,\n    .my-sm-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-sm-3,\n    .mx-sm-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-sm-3,\n    .my-sm-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-sm-3,\n    .mx-sm-3 {\n      margin-left: 1rem !important;\n    }\n    .m-sm-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-sm-4,\n    .my-sm-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-sm-4,\n    .mx-sm-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-sm-4,\n    .my-sm-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-sm-4,\n    .mx-sm-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-sm-5 {\n      margin: 3rem !important;\n    }\n    .mt-sm-5,\n    .my-sm-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-sm-5,\n    .mx-sm-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-sm-5,\n    .my-sm-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-sm-5,\n    .mx-sm-5 {\n      margin-left: 3rem !important;\n    }\n    .p-sm-0 {\n      padding: 0 !important;\n    }\n    .pt-sm-0,\n    .py-sm-0 {\n      padding-top: 0 !important;\n    }\n    .pr-sm-0,\n    .px-sm-0 {\n      padding-right: 0 !important;\n    }\n    .pb-sm-0,\n    .py-sm-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-sm-0,\n    .px-sm-0 {\n      padding-left: 0 !important;\n    }\n    .p-sm-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-sm-1,\n    .py-sm-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-sm-1,\n    .px-sm-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-sm-1,\n    .py-sm-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-sm-1,\n    .px-sm-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-sm-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-sm-2,\n    .py-sm-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-sm-2,\n    .px-sm-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-sm-2,\n    .py-sm-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-sm-2,\n    .px-sm-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-sm-3 {\n      padding: 1rem !important;\n    }\n    .pt-sm-3,\n    .py-sm-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-sm-3,\n    .px-sm-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-sm-3,\n    .py-sm-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-sm-3,\n    .px-sm-3 {\n      padding-left: 1rem !important;\n    }\n    .p-sm-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-sm-4,\n    .py-sm-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-sm-4,\n    .px-sm-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-sm-4,\n    .py-sm-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-sm-4,\n    .px-sm-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-sm-5 {\n      padding: 3rem !important;\n    }\n    .pt-sm-5,\n    .py-sm-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-sm-5,\n    .px-sm-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-sm-5,\n    .py-sm-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-sm-5,\n    .px-sm-5 {\n      padding-left: 3rem !important;\n    }\n    .m-sm-auto {\n      margin: auto !important;\n    }\n    .mt-sm-auto,\n    .my-sm-auto {\n      margin-top: auto !important;\n    }\n    .mr-sm-auto,\n    .mx-sm-auto {\n      margin-right: auto !important;\n    }\n    .mb-sm-auto,\n    .my-sm-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-sm-auto,\n    .mx-sm-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    .m-md-0 {\n      margin: 0 !important;\n    }\n    .mt-md-0,\n    .my-md-0 {\n      margin-top: 0 !important;\n    }\n    .mr-md-0,\n    .mx-md-0 {\n      margin-right: 0 !important;\n    }\n    .mb-md-0,\n    .my-md-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-md-0,\n    .mx-md-0 {\n      margin-left: 0 !important;\n    }\n    .m-md-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-md-1,\n    .my-md-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-md-1,\n    .mx-md-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-md-1,\n    .my-md-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-md-1,\n    .mx-md-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-md-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-md-2,\n    .my-md-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-md-2,\n    .mx-md-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-md-2,\n    .my-md-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-md-2,\n    .mx-md-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-md-3 {\n      margin: 1rem !important;\n    }\n    .mt-md-3,\n    .my-md-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-md-3,\n    .mx-md-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-md-3,\n    .my-md-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-md-3,\n    .mx-md-3 {\n      margin-left: 1rem !important;\n    }\n    .m-md-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-md-4,\n    .my-md-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-md-4,\n    .mx-md-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-md-4,\n    .my-md-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-md-4,\n    .mx-md-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-md-5 {\n      margin: 3rem !important;\n    }\n    .mt-md-5,\n    .my-md-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-md-5,\n    .mx-md-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-md-5,\n    .my-md-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-md-5,\n    .mx-md-5 {\n      margin-left: 3rem !important;\n    }\n    .p-md-0 {\n      padding: 0 !important;\n    }\n    .pt-md-0,\n    .py-md-0 {\n      padding-top: 0 !important;\n    }\n    .pr-md-0,\n    .px-md-0 {\n      padding-right: 0 !important;\n    }\n    .pb-md-0,\n    .py-md-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-md-0,\n    .px-md-0 {\n      padding-left: 0 !important;\n    }\n    .p-md-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-md-1,\n    .py-md-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-md-1,\n    .px-md-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-md-1,\n    .py-md-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-md-1,\n    .px-md-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-md-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-md-2,\n    .py-md-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-md-2,\n    .px-md-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-md-2,\n    .py-md-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-md-2,\n    .px-md-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-md-3 {\n      padding: 1rem !important;\n    }\n    .pt-md-3,\n    .py-md-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-md-3,\n    .px-md-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-md-3,\n    .py-md-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-md-3,\n    .px-md-3 {\n      padding-left: 1rem !important;\n    }\n    .p-md-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-md-4,\n    .py-md-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-md-4,\n    .px-md-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-md-4,\n    .py-md-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-md-4,\n    .px-md-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-md-5 {\n      padding: 3rem !important;\n    }\n    .pt-md-5,\n    .py-md-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-md-5,\n    .px-md-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-md-5,\n    .py-md-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-md-5,\n    .px-md-5 {\n      padding-left: 3rem !important;\n    }\n    .m-md-auto {\n      margin: auto !important;\n    }\n    .mt-md-auto,\n    .my-md-auto {\n      margin-top: auto !important;\n    }\n    .mr-md-auto,\n    .mx-md-auto {\n      margin-right: auto !important;\n    }\n    .mb-md-auto,\n    .my-md-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-md-auto,\n    .mx-md-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 992px) {\n    .m-lg-0 {\n      margin: 0 !important;\n    }\n    .mt-lg-0,\n    .my-lg-0 {\n      margin-top: 0 !important;\n    }\n    .mr-lg-0,\n    .mx-lg-0 {\n      margin-right: 0 !important;\n    }\n    .mb-lg-0,\n    .my-lg-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-lg-0,\n    .mx-lg-0 {\n      margin-left: 0 !important;\n    }\n    .m-lg-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-lg-1,\n    .my-lg-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-lg-1,\n    .mx-lg-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-lg-1,\n    .my-lg-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-lg-1,\n    .mx-lg-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-lg-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-lg-2,\n    .my-lg-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-lg-2,\n    .mx-lg-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-lg-2,\n    .my-lg-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-lg-2,\n    .mx-lg-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-lg-3 {\n      margin: 1rem !important;\n    }\n    .mt-lg-3,\n    .my-lg-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-lg-3,\n    .mx-lg-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-lg-3,\n    .my-lg-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-lg-3,\n    .mx-lg-3 {\n      margin-left: 1rem !important;\n    }\n    .m-lg-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-lg-4,\n    .my-lg-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-lg-4,\n    .mx-lg-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-lg-4,\n    .my-lg-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-lg-4,\n    .mx-lg-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-lg-5 {\n      margin: 3rem !important;\n    }\n    .mt-lg-5,\n    .my-lg-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-lg-5,\n    .mx-lg-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-lg-5,\n    .my-lg-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-lg-5,\n    .mx-lg-5 {\n      margin-left: 3rem !important;\n    }\n    .p-lg-0 {\n      padding: 0 !important;\n    }\n    .pt-lg-0,\n    .py-lg-0 {\n      padding-top: 0 !important;\n    }\n    .pr-lg-0,\n    .px-lg-0 {\n      padding-right: 0 !important;\n    }\n    .pb-lg-0,\n    .py-lg-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-lg-0,\n    .px-lg-0 {\n      padding-left: 0 !important;\n    }\n    .p-lg-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-lg-1,\n    .py-lg-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-lg-1,\n    .px-lg-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-lg-1,\n    .py-lg-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-lg-1,\n    .px-lg-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-lg-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-lg-2,\n    .py-lg-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-lg-2,\n    .px-lg-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-lg-2,\n    .py-lg-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-lg-2,\n    .px-lg-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-lg-3 {\n      padding: 1rem !important;\n    }\n    .pt-lg-3,\n    .py-lg-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-lg-3,\n    .px-lg-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-lg-3,\n    .py-lg-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-lg-3,\n    .px-lg-3 {\n      padding-left: 1rem !important;\n    }\n    .p-lg-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-lg-4,\n    .py-lg-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-lg-4,\n    .px-lg-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-lg-4,\n    .py-lg-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-lg-4,\n    .px-lg-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-lg-5 {\n      padding: 3rem !important;\n    }\n    .pt-lg-5,\n    .py-lg-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-lg-5,\n    .px-lg-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-lg-5,\n    .py-lg-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-lg-5,\n    .px-lg-5 {\n      padding-left: 3rem !important;\n    }\n    .m-lg-auto {\n      margin: auto !important;\n    }\n    .mt-lg-auto,\n    .my-lg-auto {\n      margin-top: auto !important;\n    }\n    .mr-lg-auto,\n    .mx-lg-auto {\n      margin-right: auto !important;\n    }\n    .mb-lg-auto,\n    .my-lg-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-lg-auto,\n    .mx-lg-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .m-xl-0 {\n      margin: 0 !important;\n    }\n    .mt-xl-0,\n    .my-xl-0 {\n      margin-top: 0 !important;\n    }\n    .mr-xl-0,\n    .mx-xl-0 {\n      margin-right: 0 !important;\n    }\n    .mb-xl-0,\n    .my-xl-0 {\n      margin-bottom: 0 !important;\n    }\n    .ml-xl-0,\n    .mx-xl-0 {\n      margin-left: 0 !important;\n    }\n    .m-xl-1 {\n      margin: 0.25rem !important;\n    }\n    .mt-xl-1,\n    .my-xl-1 {\n      margin-top: 0.25rem !important;\n    }\n    .mr-xl-1,\n    .mx-xl-1 {\n      margin-right: 0.25rem !important;\n    }\n    .mb-xl-1,\n    .my-xl-1 {\n      margin-bottom: 0.25rem !important;\n    }\n    .ml-xl-1,\n    .mx-xl-1 {\n      margin-left: 0.25rem !important;\n    }\n    .m-xl-2 {\n      margin: 0.5rem !important;\n    }\n    .mt-xl-2,\n    .my-xl-2 {\n      margin-top: 0.5rem !important;\n    }\n    .mr-xl-2,\n    .mx-xl-2 {\n      margin-right: 0.5rem !important;\n    }\n    .mb-xl-2,\n    .my-xl-2 {\n      margin-bottom: 0.5rem !important;\n    }\n    .ml-xl-2,\n    .mx-xl-2 {\n      margin-left: 0.5rem !important;\n    }\n    .m-xl-3 {\n      margin: 1rem !important;\n    }\n    .mt-xl-3,\n    .my-xl-3 {\n      margin-top: 1rem !important;\n    }\n    .mr-xl-3,\n    .mx-xl-3 {\n      margin-right: 1rem !important;\n    }\n    .mb-xl-3,\n    .my-xl-3 {\n      margin-bottom: 1rem !important;\n    }\n    .ml-xl-3,\n    .mx-xl-3 {\n      margin-left: 1rem !important;\n    }\n    .m-xl-4 {\n      margin: 1.5rem !important;\n    }\n    .mt-xl-4,\n    .my-xl-4 {\n      margin-top: 1.5rem !important;\n    }\n    .mr-xl-4,\n    .mx-xl-4 {\n      margin-right: 1.5rem !important;\n    }\n    .mb-xl-4,\n    .my-xl-4 {\n      margin-bottom: 1.5rem !important;\n    }\n    .ml-xl-4,\n    .mx-xl-4 {\n      margin-left: 1.5rem !important;\n    }\n    .m-xl-5 {\n      margin: 3rem !important;\n    }\n    .mt-xl-5,\n    .my-xl-5 {\n      margin-top: 3rem !important;\n    }\n    .mr-xl-5,\n    .mx-xl-5 {\n      margin-right: 3rem !important;\n    }\n    .mb-xl-5,\n    .my-xl-5 {\n      margin-bottom: 3rem !important;\n    }\n    .ml-xl-5,\n    .mx-xl-5 {\n      margin-left: 3rem !important;\n    }\n    .p-xl-0 {\n      padding: 0 !important;\n    }\n    .pt-xl-0,\n    .py-xl-0 {\n      padding-top: 0 !important;\n    }\n    .pr-xl-0,\n    .px-xl-0 {\n      padding-right: 0 !important;\n    }\n    .pb-xl-0,\n    .py-xl-0 {\n      padding-bottom: 0 !important;\n    }\n    .pl-xl-0,\n    .px-xl-0 {\n      padding-left: 0 !important;\n    }\n    .p-xl-1 {\n      padding: 0.25rem !important;\n    }\n    .pt-xl-1,\n    .py-xl-1 {\n      padding-top: 0.25rem !important;\n    }\n    .pr-xl-1,\n    .px-xl-1 {\n      padding-right: 0.25rem !important;\n    }\n    .pb-xl-1,\n    .py-xl-1 {\n      padding-bottom: 0.25rem !important;\n    }\n    .pl-xl-1,\n    .px-xl-1 {\n      padding-left: 0.25rem !important;\n    }\n    .p-xl-2 {\n      padding: 0.5rem !important;\n    }\n    .pt-xl-2,\n    .py-xl-2 {\n      padding-top: 0.5rem !important;\n    }\n    .pr-xl-2,\n    .px-xl-2 {\n      padding-right: 0.5rem !important;\n    }\n    .pb-xl-2,\n    .py-xl-2 {\n      padding-bottom: 0.5rem !important;\n    }\n    .pl-xl-2,\n    .px-xl-2 {\n      padding-left: 0.5rem !important;\n    }\n    .p-xl-3 {\n      padding: 1rem !important;\n    }\n    .pt-xl-3,\n    .py-xl-3 {\n      padding-top: 1rem !important;\n    }\n    .pr-xl-3,\n    .px-xl-3 {\n      padding-right: 1rem !important;\n    }\n    .pb-xl-3,\n    .py-xl-3 {\n      padding-bottom: 1rem !important;\n    }\n    .pl-xl-3,\n    .px-xl-3 {\n      padding-left: 1rem !important;\n    }\n    .p-xl-4 {\n      padding: 1.5rem !important;\n    }\n    .pt-xl-4,\n    .py-xl-4 {\n      padding-top: 1.5rem !important;\n    }\n    .pr-xl-4,\n    .px-xl-4 {\n      padding-right: 1.5rem !important;\n    }\n    .pb-xl-4,\n    .py-xl-4 {\n      padding-bottom: 1.5rem !important;\n    }\n    .pl-xl-4,\n    .px-xl-4 {\n      padding-left: 1.5rem !important;\n    }\n    .p-xl-5 {\n      padding: 3rem !important;\n    }\n    .pt-xl-5,\n    .py-xl-5 {\n      padding-top: 3rem !important;\n    }\n    .pr-xl-5,\n    .px-xl-5 {\n      padding-right: 3rem !important;\n    }\n    .pb-xl-5,\n    .py-xl-5 {\n      padding-bottom: 3rem !important;\n    }\n    .pl-xl-5,\n    .px-xl-5 {\n      padding-left: 3rem !important;\n    }\n    .m-xl-auto {\n      margin: auto !important;\n    }\n    .mt-xl-auto,\n    .my-xl-auto {\n      margin-top: auto !important;\n    }\n    .mr-xl-auto,\n    .mx-xl-auto {\n      margin-right: auto !important;\n    }\n    .mb-xl-auto,\n    .my-xl-auto {\n      margin-bottom: auto !important;\n    }\n    .ml-xl-auto,\n    .mx-xl-auto {\n      margin-left: auto !important;\n    }\n  }\n\n  .text-monospace {\n    font-family: ", " ;\n  }\n\n  .text-justify {\n    text-align: justify !important;\n  }\n\n  .text-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .text-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .text-left {\n    text-align: left !important;\n  }\n\n  .text-right {\n    text-align: right !important;\n  }\n\n  .text-center {\n    text-align: center !important;\n  }\n\n  .text-lowercase {\n    text-transform: lowercase !important;\n  }\n\n  .text-uppercase {\n    text-transform: uppercase !important;\n  }\n\n  .text-capitalize {\n    text-transform: capitalize !important;\n  }\n\n  .font-weight-light {\n    font-weight: 300 !important;\n  }\n\n  .font-weight-normal {\n    font-weight: 400 !important;\n  }\n\n  .font-weight-bold {\n    font-weight: 700 !important;\n  }\n\n  .font-italic {\n    font-style: italic !important;\n  }\n\n  .text-white {\n    color: #fff !important;\n  }\n\n  .text-primary {\n    color: ", " !important;\n  }\n\n  .text-normal {\n    color: ", " !important;\n  }\n\n  .text-success {\n    color: ", " !important;\n  }\n\n  .text-info {\n    color: ", " !important;\n  }\n\n  .text-warning {\n    color: ", " !important;\n  }\n\n  .text-error {\n    color: ", " !important;\n  }\n\n  .text-dark {\n    color: ", " !important;\n  }\n\n  .text-body {\n    color: ", " !important;\n  }\n\n  .text-muted {\n    color: ", " !important;\n  }\n\n  .text-black {\n    color: rgba(0, 0, 0, 1) !important;\n  }\n\n  .text-black-50 {\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n\n  .text-white-50 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-white-65 {\n    color: rgba(255, 255, 255, 0.5) !important;\n  }\n\n  .text-light {\n    color: white !important;\n  }\n\n  .text-hide {\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  }\n\n  /* Fixes */\n  .mapboxgl-ctrl-group {\n    display: inline-block;\n    margin: 1rem;\n  }\n  .rv-discrete-color-legend {\n    display: block;\n    width: 100%!important;\n    text-align: center;\n  }\n  .rv-discrete-color-legend-item {\n    display: inline-block;\n  }\n\n  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title,\n  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n  .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n    box-shadow: none;\n  }\n  .header-notifications .ant-spin-container {\n    overflow: auto;\n    height: 220px;\n    width: 350px;\n  }\n  .header-notifications .ant-list-footer {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-top: 1px solid rgba(0,0,0,.03)\n  }\n  /* custom card */\n  .ant-card-bordered {\n    box-shadow: 0 0 1px rgba(0,0,0,.1);\n    border: 0!important;\n    background-clip: padding-box;\n  }\n  .card-head-0 .ant-card-head {\n    border: 0;\n  }\n  .ant-card-actions {\n    border-radius: 0 0 ", " ", ";\n  }\n  .ant-card-head-title {\n    font-weight: 700;\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(45deg) translateX(3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before {\n    transform: rotate(-45deg) translateX(3px);\n  }\n  .ant-menu-submenu-open.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(-45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    transform: rotate(45deg) translateX(-3px);\n  }\n  .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before, .ant-menu-submenu-vertical > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-left > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-vertical-right > .ant-menu-submenu-title .ant-menu-submenu-arrow:after, .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after {\n    height: 1px;\n  }\n  /* Chart */\n  .rv-xy-plot__grid-lines, .rv-xy-plot__axis {\n    stroke-width: 0.2;\n  }\n  .rv-discrete-color-legend-item__color {\n    height: 6px;\n  }\n  .rv-discrete-color-legend-item__color__path {\n    stroke-width: 6px;\n  }\n  /* Chat */\n  .chat-drawer .ant-drawer-header,\n  .chat-drawer .ant-drawer-body {\n    padding: 0;\n  }\n  .message-modal .ant-modal-content {\n    border-radius: 4px 4px 0 0;\n  }\n\n  .am-weather-cloud-2 > path, [id^=cloudy-day-] > path {\n    stroke-width: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var lessVariables = external_less_vars_to_js_default()(antd_custom, {
  resolveVariables: true,
  stripPrefix: true
}),
    camelCasedVariables = Object(helpers["f" /* objectToCamelCase */])(lessVariables),
    theme = Object(objectSpread["a" /* default */])({}, camelCasedVariables);

var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject(), theme.backgroundColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.borderColorBase, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.borderRadiusBase, theme.codeFamily, theme.primaryColor, theme.normalColor, theme.successColor, theme.infoColor, theme.warningColor, theme.errorColor, theme.darkColor, theme.textColor, theme.textColorSecondary, theme.borderRadiusBase, theme.borderRadiusBase);


/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "IUXo":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down-right");

/***/ }),

/***/ "IXT2":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-left");

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

/***/ "POXb":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-right");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RZyZ":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up-right");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bPsq":
/***/ (function(module, exports) {

module.exports = require("less-vars-to-js");

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

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "ee42":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DTXx");


/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "i0nf":
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "ppBY":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-down-left");

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

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "vIJI":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/bookmark");

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

/***/ "vrlj":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/message-circle");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xZtu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "yS+C":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/arrow-up-left");

/***/ }),

/***/ "yYSy":
/***/ (function(module, exports) {

module.exports = require("react-feather/dist/icons/phone-call");

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