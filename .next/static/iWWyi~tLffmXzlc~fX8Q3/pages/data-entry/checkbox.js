(window.webpackJsonp=window.webpackJsonp||[]).push([["9d10"],{"/TSp":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("N9UN"),o=n.n(l),c=n("UIqZ"),u=n.n(c),i=n("0iUn"),s=n("sLSF"),f=n("MI3g"),p=n("a7VT"),d=n("Tit0"),h=n("g4D/"),b=n.n(h);function m(e){console.log("checked = ".concat(e.target.checked))}var y=function(){return r.a.createElement(b.a,{onChange:m},"Checkbox")},v=n("AT/M"),g=n("vYYK"),O=b.a.Group,k=["Apple","Pear","Orange"],E=["Apple","Orange"],C=function(e){function t(){var e,n;Object(i.default)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=Object(f.default)(this,(e=Object(p.default)(t)).call.apply(e,[this].concat(r))),Object(g.a)(Object(v.default)(n),"state",{checkedList:E,indeterminate:!0,checkAll:!1}),Object(g.a)(Object(v.default)(n),"onChange",function(e){n.setState({checkedList:e,indeterminate:!!e.length&&e.length<k.length,checkAll:e.length===k.length})}),Object(g.a)(Object(v.default)(n),"onCheckAllChange",function(e){n.setState({checkedList:e.target.checked?k:[],indeterminate:!1,checkAll:e.target.checked})}),n}return Object(d.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},r.a.createElement(b.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),r.a.createElement("br",null),r.a.createElement(O,{options:k,value:this.state.checkedList,onChange:this.onChange}))}}]),t}(r.a.Component),j=n("4IMT"),x=n.n(j),w=function(e){function t(){var e,n;Object(i.default)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=Object(f.default)(this,(e=Object(p.default)(t)).call.apply(e,[this].concat(r))),Object(g.a)(Object(v.default)(n),"state",{checked:!0,disabled:!1}),Object(g.a)(Object(v.default)(n),"toggleChecked",function(){n.setState({checked:!n.state.checked})}),Object(g.a)(Object(v.default)(n),"toggleDisable",function(){n.setState({disabled:!n.state.disabled})}),Object(g.a)(Object(v.default)(n),"onChange",function(e){console.log("checked = ",e.target.checked),n.setState({checked:e.target.checked})}),n}return Object(d.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){var e="".concat(this.state.checked?"Checked":"Unchecked","-").concat(this.state.disabled?"Disabled":"Enabled");return r.a.createElement("div",null,r.a.createElement("p",{style:{marginBottom:"20px"}},r.a.createElement(b.a,{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange},e)),r.a.createElement("p",null,r.a.createElement(x.a,{type:"primary",size:"small",onClick:this.toggleChecked},this.state.checked?"Uncheck":"Check"),r.a.createElement(x.a,{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:this.toggleDisable},this.state.disabled?"Enable":"Disable")))}}]),t}(r.a.Component),P=function(){return r.a.createElement("div",null,r.a.createElement(b.a,{defaultChecked:!1,disabled:!0}),r.a.createElement("br",null),r.a.createElement(b.a,{defaultChecked:!0,disabled:!0}))},_=b.a.Group;function S(e){console.log("checked = ",e)}var T=["Apple","Pear","Orange"],A=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],N=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],D=function(){return r.a.createElement("div",null,r.a.createElement(_,{options:T,defaultValue:["Apple"],onChange:S}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_,{options:A,defaultValue:["Pear"],onChange:S}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(_,{options:N,disabled:!0,defaultValue:["Apple"],onChange:S}))},M=n("9xET"),G=n.n(M),I=n("ZPTe"),L=n.n(I);function F(e){console.log("checked = ",e)}var B=function(){return r.a.createElement(b.a.Group,{style:{width:"100%"},onChange:F},r.a.createElement(G.a,null,r.a.createElement(L.a,{span:8},r.a.createElement(b.a,{value:"A"},"A")),r.a.createElement(L.a,{span:8},r.a.createElement(b.a,{value:"B"},"B")),r.a.createElement(L.a,{span:8},r.a.createElement(b.a,{value:"C"},"C")),r.a.createElement(L.a,{span:8},r.a.createElement(b.a,{value:"D"},"D")),r.a.createElement(L.a,{span:8},r.a.createElement(b.a,{value:"E"},"E"))))},J=function(e){function t(){return Object(i.default)(this,t),Object(f.default)(this,Object(p.default)(t).apply(this,arguments))}return Object(d.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return r.a.createElement(o.a,{bodyStyle:{padding:0},id:"components-button-demo"},r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Basic")),r.a.createElement("div",{className:"p-4"},r.a.createElement(y,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Check all")),r.a.createElement("div",{className:"p-4"},r.a.createElement(C,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Controller")),r.a.createElement("div",{className:"p-4"},r.a.createElement(w,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Disabled")),r.a.createElement("div",{className:"p-4"},r.a.createElement(P,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Group")),r.a.createElement("div",{className:"p-4"},r.a.createElement(D,null)),r.a.createElement(u.a,{orientation:"left"},r.a.createElement("small",null,"Layout")),r.a.createElement("div",{className:"p-4"},r.a.createElement(B,null)))}}]),t}(r.a.Component);t.default=function(){return r.a.createElement(J,null)}},DMXp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n("q1tI")),r=p(n("17x9")),l=n("VCL8"),o=f(n("TSYQ")),c=f(n("Gytx")),u=f(n("BGR+")),i=f(n("JmJJ")),s=n("vgIT");function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},k=function(e){function t(e){var n,r,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,l=y(t).call(this,e),(n=!l||"object"!==d(l)&&"function"!=typeof l?v(r):l).toggleOption=function(e){var t=n.state.value.indexOf(e.value),a=b(n.state.value);-1===t?a.push(e.value):a.splice(t,1),"value"in n.props||n.setState({value:a});var r=n.props.onChange;r&&r(a)},n.renderGroup=function(e){var t=e.getPrefixCls,r=v(n),l=r.props,c=r.state,s=l.prefixCls,f=l.className,p=l.style,d=l.options,b=O(l,["prefixCls","className","style","options"]),m=t("checkbox",s),y="".concat(m,"-group"),g=(0,u.default)(b,["children","defaultValue","value","onChange","disabled"]),k=l.children;d&&d.length>0&&(k=n.getOptions().map(function(e){return a.createElement(i.default,{prefixCls:m,key:e.value.toString(),disabled:"disabled"in e?e.disabled:l.disabled,value:e.value,checked:-1!==c.value.indexOf(e.value),onChange:e.onChange,className:"".concat(y,"-item")},e.label)}));var E=(0,o.default)(y,f);return a.createElement("div",h({className:E,style:p},g),k)},n.state={value:e.value||e.defaultValue||[]},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.Component),n=t,l=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(r=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name}}}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,c.default)(this.props,e)||!(0,c.default)(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map(function(e){return"string"==typeof e?{label:e,value:e}:e})}},{key:"render",value:function(){return a.createElement(s.ConfigConsumer,null,this.renderGroup)}}])&&m(n.prototype,r),l&&m(n,l),t}();k.defaultProps={options:[]},k.propTypes={defaultValue:r.array,value:r.array,options:r.array.isRequired,onChange:r.func},k.childContextTypes={checkboxGroup:r.any},(0,l.polyfill)(k);var E=k;t.default=E,e.exports=t.default},Gytx:function(e,t){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var l=Object.keys(e),o=Object.keys(t);if(l.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<l.length;u++){var i=l[u];if(!c(i))return!1;var s=e[i],f=t[i];if(!1===(r=n?n.call(a,s,f,i):void 0)||void 0===r&&s!==f)return!1}return!0}},JmJJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("q1tI")),r=s(n("17x9")),l=i(n("TSYQ")),o=i(n("x1Ya")),c=i(n("Gytx")),u=n("vgIT");function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},g=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=b(t).apply(this,arguments),(e=!r||"object"!==f(r)&&"function"!=typeof r?m(n):r).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,c=m(e),u=c.props,i=c.context,s=u.prefixCls,f=u.className,h=u.children,b=u.indeterminate,y=u.style,g=u.onMouseEnter,O=u.onMouseLeave,k=v(u,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),E=i.checkboxGroup,C=r("checkbox",s),j=d({},k);E&&(j.onChange=function(){k.onChange&&k.onChange.apply(k,arguments),E.toggleOption({label:h,value:u.value})},j.name=E.name,j.checked=-1!==E.value.indexOf(u.value),j.disabled=u.disabled||E.disabled);var x=(0,l.default)(f,(p(n={},"".concat(C,"-wrapper"),!0),p(n,"".concat(C,"-wrapper-checked"),j.checked),p(n,"".concat(C,"-wrapper-disabled"),j.disabled),n)),w=(0,l.default)(p({},"".concat(C,"-indeterminate"),b));return a.createElement("label",{className:x,style:y,onMouseEnter:g,onMouseLeave:O},a.createElement(o.default,d({},j,{prefixCls:C,className:w,ref:e.saveCheckbox})),void 0!==h&&a.createElement("span",null,h))},e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.Component),n=t,(r=[{key:"shouldComponentUpdate",value:function(e,t,n){return!(0,c.default)(this.props,e)||!(0,c.default)(this.state,t)||!(0,c.default)(this.context.checkboxGroup,n.checkboxGroup)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return a.createElement(u.ConfigConsumer,null,this.renderCheckbox)}}])&&h(n.prototype,r),i&&h(n,i),t}();t.default=g,g.defaultProps={indeterminate:!1},g.contextTypes={checkboxGroup:r.any},e.exports=t.default},XLhg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-entry/checkbox",function(){var e=n("/TSp");return{page:e.default||e}}])},"g4D/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n("JmJJ")),r=l(n("DMXp"));function l(e){return e&&e.__esModule?e:{default:e}}a.default.Group=r.default;var o=a.default;t.default=o,e.exports=t.default},x1Ya:function(e,t,n){"use strict";n.r(t);var a=n("jo6Y"),r=n.n(a),l=n("QbLZ"),o=n.n(l),c=n("iCc5"),u=n.n(c),i=n("FYw3"),s=n.n(i),f=n("mRg0"),p=n.n(f),d=n("q1tI"),h=n.n(d),b=n("17x9"),m=n.n(b),y=n("TSYQ"),v=n.n(y),g=n("VCL8"),O=function(e){function t(n){u()(this,t);var a=s()(this,e.call(this,n));a.handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:o()({},a.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in n?n.checked:n.defaultChecked;return a.state={checked:r},a}return p()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?o()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,a=t.className,l=t.style,c=t.name,u=t.id,i=t.type,s=t.disabled,f=t.readOnly,p=t.tabIndex,d=t.onClick,b=t.onFocus,m=t.onBlur,y=t.autoFocus,g=t.value,O=r()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),k=Object.keys(O).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e},{}),E=this.state.checked,C=v()(n,a,((e={})[n+"-checked"]=E,e[n+"-disabled"]=s,e));return h.a.createElement("span",{className:C,style:l},h.a.createElement("input",o()({name:c,id:u,type:i,readOnly:f,disabled:s,tabIndex:p,className:n+"-input",checked:!!E,onClick:d,onFocus:b,onBlur:m,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:g},k)),h.a.createElement("span",{className:n+"-inner"}))},t}(d.Component);O.propTypes={prefixCls:m.a.string,className:m.a.string,style:m.a.object,name:m.a.string,id:m.a.string,type:m.a.string,defaultChecked:m.a.oneOfType([m.a.number,m.a.bool]),checked:m.a.oneOfType([m.a.number,m.a.bool]),disabled:m.a.bool,onFocus:m.a.func,onBlur:m.a.func,onChange:m.a.func,onClick:m.a.func,tabIndex:m.a.oneOfType([m.a.string,m.a.number]),readOnly:m.a.bool,autoFocus:m.a.bool,value:m.a.any},O.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(g.polyfill)(O);var k=O;t.default=k}},[["XLhg","5d41","9da1"]]]);