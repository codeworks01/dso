(window.webpackJsonp=window.webpackJsonp||[]).push([["86c3"],{"5g4C":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-display/popover",function(){var e=n("qVT8");return{page:e.default||e}}])},"7QdS":function(e,t,n){"use strict";t.__esModule=!0;var o={adjustX:1,adjustY:1},r=[0,0],a=t.placements={left:{points:["cr","cl"],overflow:o,offset:[-4,0],targetOffset:r},right:{points:["cl","cr"],overflow:o,offset:[4,0],targetOffset:r},top:{points:["bc","tc"],overflow:o,offset:[0,-4],targetOffset:r},bottom:{points:["tc","bc"],overflow:o,offset:[0,4],targetOffset:r},topLeft:{points:["bl","tl"],overflow:o,offset:[0,-4],targetOffset:r},leftTop:{points:["tr","tl"],overflow:o,offset:[-4,0],targetOffset:r},topRight:{points:["br","tr"],overflow:o,offset:[0,-4],targetOffset:r},rightTop:{points:["tl","tr"],overflow:o,offset:[4,0],targetOffset:r},bottomRight:{points:["tr","br"],overflow:o,offset:[0,4],targetOffset:r},rightBottom:{points:["bl","br"],overflow:o,offset:[4,0],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:o,offset:[0,4],targetOffset:r},leftBottom:{points:["br","bl"],overflow:o,offset:[-4,0],targetOffset:r}};t.default=a},DWoR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOverflowOptions=c,t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.arrowWidth,n=void 0===t?5:t,a=e.horizontalArrowShift,l=void 0===a?16:a,s=e.verticalArrowShift,f=void 0===s?12:s,p=e.autoAdjustOverflow,u=void 0===p||p,m={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(l+n),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(f+n)]},topRight:{points:["br","tc"],offset:[l+n,-4]},rightTop:{points:["tl","cr"],offset:[4,-(f+n)]},bottomRight:{points:["tr","bc"],offset:[l+n,4]},rightBottom:{points:["bl","cr"],offset:[4,f+n]},bottomLeft:{points:["tl","bc"],offset:[-(l+n),4]},leftBottom:{points:["br","cl"],offset:[-4,f+n]}};return Object.keys(m).forEach(function(t){m[t]=e.arrowPointAtCenter?r({},m[t],{overflow:c(u),targetOffset:i}):r({},o.placements[t],{overflow:c(u)}),m[t].ignoreShake=!0}),m};var o=n("7QdS");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={adjustX:1,adjustY:1},l={adjustX:0,adjustY:0},i=[0,0];function c(e){return"boolean"==typeof e?e?a:l:r({},l,e)}},OLES:function(e,t,n){"use strict";n.r(t);var o=n("QbLZ"),r=n.n(o),a=n("jo6Y"),l=n.n(a),i=n("iCc5"),c=n.n(i),s=n("FYw3"),f=n.n(s),p=n("mRg0"),u=n.n(p),m=n("q1tI"),d=n.n(m),g=n("17x9"),v=n.n(g),b=n("uciX"),y={adjustX:1,adjustY:1},h=[0,0],O={left:{points:["cr","cl"],overflow:y,offset:[-4,0],targetOffset:h},right:{points:["cl","cr"],overflow:y,offset:[4,0],targetOffset:h},top:{points:["bc","tc"],overflow:y,offset:[0,-4],targetOffset:h},bottom:{points:["tc","bc"],overflow:y,offset:[0,4],targetOffset:h},topLeft:{points:["bl","tl"],overflow:y,offset:[0,-4],targetOffset:h},leftTop:{points:["tr","tl"],overflow:y,offset:[-4,0],targetOffset:h},topRight:{points:["br","tr"],overflow:y,offset:[0,-4],targetOffset:h},rightTop:{points:["tl","tr"],overflow:y,offset:[4,0],targetOffset:h},bottomRight:{points:["tr","br"],overflow:y,offset:[0,4],targetOffset:h},rightBottom:{points:["bl","br"],overflow:y,offset:[4,0],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:y,offset:[0,4],targetOffset:h},leftBottom:{points:["br","bl"],overflow:y,offset:[-4,0],targetOffset:h}},E=function(e){function t(){return c()(this,t),f()(this,e.apply(this,arguments))}return u()(t,e),t.prototype.componentDidUpdate=function(){var e=this.props.trigger;e&&e.forcePopupAlign()},t.prototype.render=function(){var e=this.props,t=e.overlay,n=e.prefixCls,o=e.id;return d.a.createElement("div",{className:n+"-inner",id:o,role:"tooltip"},"function"==typeof t?t():t)},t}(d.a.Component);E.propTypes={prefixCls:v.a.string,overlay:v.a.oneOfType([v.a.node,v.a.func]).isRequired,id:v.a.string,trigger:v.a.any};var w=E,C=function(e){function t(){var n,o,r;c()(this,t);for(var a=arguments.length,l=Array(a),i=0;i<a;i++)l[i]=arguments[i];return n=o=f()(this,e.call.apply(e,[this].concat(l))),o.getPopupElement=function(){var e=o.props,t=e.arrowContent,n=e.overlay,r=e.prefixCls,a=e.id;return[d.a.createElement("div",{className:r+"-arrow",key:"arrow"},t),d.a.createElement(w,{key:"content",trigger:o.trigger,prefixCls:r,id:a,overlay:n})]},o.saveTrigger=function(e){o.trigger=e},r=n,f()(o,r)}return u()(t,e),t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.render=function(){var e=this.props,t=e.overlayClassName,n=e.trigger,o=e.mouseEnterDelay,a=e.mouseLeaveDelay,i=e.overlayStyle,c=e.prefixCls,s=e.children,f=e.onVisibleChange,p=e.afterVisibleChange,u=e.transitionName,m=e.animation,g=e.placement,v=e.align,y=e.destroyTooltipOnHide,h=e.defaultVisible,E=e.getTooltipContainer,w=l()(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer"]),C=r()({},w);return"visible"in this.props&&(C.popupVisible=this.props.visible),d.a.createElement(b.default,r()({popupClassName:t,ref:this.saveTrigger,prefixCls:c,popup:this.getPopupElement,action:n,builtinPlacements:O,popupPlacement:g,popupAlign:v,getPopupContainer:E,onPopupVisibleChange:f,afterPopupVisibleChange:p,popupTransitionName:u,popupAnimation:m,defaultPopupVisible:h,destroyPopupOnHide:y,mouseLeaveDelay:a,popupStyle:i,mouseEnterDelay:o},C),s)},t}(m.Component);C.propTypes={trigger:v.a.any,children:v.a.any,defaultVisible:v.a.bool,visible:v.a.bool,placement:v.a.string,transitionName:v.a.oneOfType([v.a.string,v.a.object]),animation:v.a.any,onVisibleChange:v.a.func,afterVisibleChange:v.a.func,overlay:v.a.oneOfType([v.a.node,v.a.func]).isRequired,overlayStyle:v.a.object,overlayClassName:v.a.string,prefixCls:v.a.string,mouseEnterDelay:v.a.number,mouseLeaveDelay:v.a.number,getTooltipContainer:v.a.func,destroyTooltipOnHide:v.a.bool,align:v.a.object,arrowContent:v.a.any,id:v.a.string},C.defaultProps={prefixCls:"rc-tooltip",mouseEnterDelay:0,destroyTooltipOnHide:!1,mouseLeaveDelay:.1,align:{},placement:"right",trigger:["hover"],arrowContent:null};var j=C;t.default=j},aOJk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("q1tI")),r=i(n("d1El")),a=n("vgIT"),l=i(n("aVg8"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},g=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,u(t).apply(this,arguments))).saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var n=t.getPrefixCls,a=e.props,l=a.prefixCls,i=d(a,["prefixCls"]);delete i.title;var c=n("popover",l);return o.createElement(r.default,s({},i,{prefixCls:c,ref:e.saveTooltip,overlay:e.getOverlay(c)}))},e}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.Component),n=t,(i=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,n=t.title,r=t.content;return(0,l.default)(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),o.createElement("div",null,n&&o.createElement("div",{className:"".concat(e,"-title")},n),o.createElement("div",{className:"".concat(e,"-inner-content")},r))}},{key:"render",value:function(){return o.createElement(a.ConfigConsumer,null,this.renderPopover)}}])&&f(n.prototype,i),c&&f(n,c),t}();t.default=g,g.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},e.exports=t.default},d1El:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n("q1tI")),r=n("VCL8"),a=s(n("OLES")),l=s(n("TSYQ")),i=s(n("DWoR")),c=n("vgIT");function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var v=function(e){function t(e){var n,r,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=u(t).call(this,e),(n=!i||"object"!==f(i)&&"function"!=typeof i?m(r):i).onVisibleChange=function(e){var t=n.props.onVisibleChange;"visible"in n.props||n.setState({visible:!n.isNoTitle()&&e}),t&&!n.isNoTitle()&&t(e)},n.onPopupAlign=function(e,t){var o=n.getPlacements(),r=Object.keys(o).filter(function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]})[0];if(r){var a=e.getBoundingClientRect(),l={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?l.top="".concat(a.height-t.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(l.top="".concat(-t.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?l.left="".concat(a.width-t.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(l.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(l.left," ").concat(l.top)}},n.saveTooltip=function(e){n.tooltip=e},n.renderTooltip=function(e){var t=e.getPopupContainer,r=e.getPrefixCls,i=m(n),c=i.props,s=i.state,f=c.prefixCls,p=c.title,u=c.overlay,d=c.openClassName,v=c.getPopupContainer,b=c.getTooltipContainer,y=c.children,h=r("tooltip",f),O=s.visible;"visible"in c||!n.isNoTitle()||(O=!1);var E,w,C,j=n.getDisabledCompatibleChildren(o.isValidElement(y)?y:o.createElement("span",null,y)),P=j.props,T=(0,l.default)(P.className,(E={},w=d||"".concat(h,"-open"),C=!0,w in E?Object.defineProperty(E,w,{value:C,enumerable:!0,configurable:!0,writable:!0}):E[w]=C,E));return o.createElement(a.default,g({},n.props,{prefixCls:h,getTooltipContainer:v||b||t,ref:n.saveTooltip,builtinPlacements:n.getPlacements(),overlay:u||p||"",visible:O,onVisibleChange:n.onVisibleChange,onPopupAlign:n.onPopupAlign}),O?(0,o.cloneElement)(j,{className:T}):j)},n.state={visible:!!e.visible||!!e.defaultVisible},n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,s=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getPlacements",value:function(){var e=this.props,t=e.builtinPlacements,n=e.arrowPointAtCenter,o=e.autoAdjustOverflow;return t||(0,i.default)({arrowPointAtCenter:n,verticalArrowShift:8,autoAdjustOverflow:o})}},{key:"getDisabledCompatibleChildren",value:function(e){if((e.type.__ANT_BUTTON||"button"===e.type)&&e.props.disabled){var t=function(e,t){var n={},o=g({},e);return t.forEach(function(t){e&&t in e&&(n[t]=e[t],delete o[t])}),{picked:n,omitted:o}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=t.picked,r=t.omitted,a=g({display:"inline-block"},n,{cursor:"not-allowed",width:e.props.block?"100%":null}),l=g({},r,{pointerEvents:"none"}),i=(0,o.cloneElement)(e,{style:l,className:null});return o.createElement("span",{style:a,className:e.props.className},i)}return e}},{key:"isNoTitle",value:function(){var e=this.props,t=e.title,n=e.overlay;return!t&&!n}},{key:"render",value:function(){return o.createElement(c.ConfigConsumer,null,this.renderTooltip)}}])&&p(n.prototype,r),s&&p(n,s),t}();v.defaultProps={placement:"top",transitionName:"zoom-big-fast",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0},(0,r.polyfill)(v);var b=v;t.default=b,e.exports=t.default},qVT8:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=n("N9UN"),l=n.n(a),i=n("UIqZ"),c=n.n(i),s=n("0iUn"),f=n("sLSF"),p=n("MI3g"),u=n("a7VT"),m=n("Tit0"),d=n("aOJk"),g=n.n(d),v=n("4IMT"),b=n.n(v),y=r.a.createElement("span",null,"Title"),h=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),O=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{placement:"topLeft",title:y,content:h},r.a.createElement(b.a,null,"Align edge / 边缘对齐")),r.a.createElement(g.a,{placement:"topLeft",title:y,content:h,arrowPointAtCenter:!0},r.a.createElement(b.a,null,"Arrow points to center / 箭头指向中心")))},E=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),w=function(){return r.a.createElement(g.a,{content:E,title:"Title"},r.a.createElement(b.a,null,"Hover me"))},C=n("AT/M"),j=n("vYYK"),P=function(e){function t(){var e,n;Object(s.default)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=Object(p.default)(this,(e=Object(u.default)(t)).call.apply(e,[this].concat(r))),Object(j.a)(Object(C.default)(n),"state",{visible:!1}),Object(j.a)(Object(C.default)(n),"hide",function(){n.setState({visible:!1})}),Object(j.a)(Object(C.default)(n),"handleVisibleChange",function(e){n.setState({visible:e})}),n}return Object(m.default)(t,e),Object(f.default)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{content:r.a.createElement("a",{onClick:this.hide},"Close"),title:"Title",trigger:"click",visible:this.state.visible,onVisibleChange:this.handleVisibleChange},r.a.createElement(b.a,null,"Click me"))}}]),t}(r.a.Component),T=function(e){function t(){var e,n;Object(s.default)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=Object(p.default)(this,(e=Object(u.default)(t)).call.apply(e,[this].concat(r))),Object(j.a)(Object(C.default)(n),"state",{clicked:!1,hovered:!1}),Object(j.a)(Object(C.default)(n),"hide",function(){n.setState({clicked:!1,hovered:!1})}),Object(j.a)(Object(C.default)(n),"handleHoverChange",function(e){n.setState({hovered:e,clicked:!1})}),Object(j.a)(Object(C.default)(n),"handleClickChange",function(e){n.setState({clicked:e,hovered:!1})}),n}return Object(m.default)(t,e),Object(f.default)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null,"This is hover content."),t=r.a.createElement("div",null,"This is click content.");return r.a.createElement(g.a,{style:{width:500},content:e,title:"Hover title",trigger:"hover",visible:this.state.hovered,onVisibleChange:this.handleHoverChange},r.a.createElement(g.a,{content:r.a.createElement("div",null,t,r.a.createElement("a",{onClick:this.hide},"Close")),title:"Click title",trigger:"click",visible:this.state.clicked,onVisibleChange:this.handleClickChange},r.a.createElement(b.a,null,"Hover and click / 悬停并单击")))}}]),t}(r.a.Component),k=r.a.createElement("span",null,"Title"),N=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),_=function(){return r.a.createElement("div",{className:"demo"},r.a.createElement("div",{style:{marginLeft:70,whiteSpace:"nowrap"}},r.a.createElement(g.a,{placement:"topLeft",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"TL")),r.a.createElement(g.a,{placement:"top",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"Top")),r.a.createElement(g.a,{placement:"topRight",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"TR"))),r.a.createElement("div",{style:{width:70,float:"left"}},r.a.createElement(g.a,{placement:"leftTop",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"LT")),r.a.createElement(g.a,{placement:"left",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"Left")),r.a.createElement(g.a,{placement:"leftBottom",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"LB"))),r.a.createElement("div",{style:{width:70,marginLeft:304}},r.a.createElement(g.a,{placement:"rightTop",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"RT")),r.a.createElement(g.a,{placement:"right",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"Right")),r.a.createElement(g.a,{placement:"rightBottom",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"RB"))),r.a.createElement("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"}},r.a.createElement(g.a,{placement:"bottomLeft",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"BL")),r.a.createElement(g.a,{placement:"bottom",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"Bottom")),r.a.createElement(g.a,{placement:"bottomRight",title:k,content:N,trigger:"click"},r.a.createElement(b.a,null,"BR"))))},S=r.a.createElement("div",null,r.a.createElement("p",null,"Content"),r.a.createElement("p",null,"Content")),x=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{content:S,title:"Title",trigger:"hover"},r.a.createElement(b.a,null,"Hover me")),r.a.createElement(g.a,{content:S,title:"Title",trigger:"focus"},r.a.createElement(b.a,null,"Focus me")),r.a.createElement(g.a,{content:S,title:"Title",trigger:"click"},r.a.createElement(b.a,null,"Click me")))},L=function(e){function t(){return Object(s.default)(this,t),Object(p.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(f.default)(t,[{key:"render",value:function(){return r.a.createElement(l.a,{bodyStyle:{padding:0},id:"components-button-demo"},r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Basic")),r.a.createElement("div",{className:"p-4"},r.a.createElement(w,null)),r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Placement")),r.a.createElement("div",{className:"p-4"},r.a.createElement(_,null)),r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Arrow point at center")),r.a.createElement("div",{className:"p-4"},r.a.createElement(O,null)),r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Three ways to trigger")),r.a.createElement("div",{className:"p-4"},r.a.createElement(x,null)),r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Controlling the close of the dialog")),r.a.createElement("div",{className:"p-4"},r.a.createElement(P,null)),r.a.createElement(c.a,{orientation:"left"},r.a.createElement("small",null,"Hover with click popover")),r.a.createElement("div",{className:"p-4"},r.a.createElement(T,null)))}}]),t}(r.a.Component);t.default=function(){return r.a.createElement(L,null)}}},[["5g4C","5d41","9da1"]]]);