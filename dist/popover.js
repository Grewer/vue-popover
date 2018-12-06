!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports["vue-grewer-popover"]=e(require("vue")):t["vue-grewer-popover"]=e(t.vue)}(window,function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={left:[-1,0],right:[1,0],top:[0,-1],bottom:[0,1]};e.default={name:"popover",methods:{showEventListener:function(t){var e=this;this.visible?o.events.$emit(this.hideEventName):this.$nextTick(function(){e.theEvent=t;var n=t.target,o=t.name,i=t.position;o===e.name&&(e.delayFunc=setTimeout(function(){var o=r[i];e.visible=!0,e.$nextTick(function(){e.$emit("show",t),e.$nextTick(function(){var t=e.getDropdownPosition(n,e.$refs.dropdown,o);e.position={left:t.left+"px",top:t.top+"px"}})})},e.delay))})},hideEventListener:function(t){this.delayFunc&&(clearTimeout(this.delayFunc),this.delayFunc=null),this.visible&&(this.visible=!1,this.$emit("hide",t))},cleanLayout:function(){var t=this,e=this.theEvent,n=e.target,o=e.position,i=r[o];this.$nextTick(function(){var e=t.getDropdownPosition(n,t.$refs.dropdown,i);t.position={left:e.left+"px",top:e.top+"px"}})},getDropdownPosition:function(t,e,n){var o=t.getBoundingClientRect();if(e){var r=e.getBoundingClientRect(),i=o.left,s=o.top,a=.5*(r.height+o.height),u=i-.5*(r.width-o.width),f=s+o.height-a;if(this.arrowPosition=50,this.autoFix){var c=this.theEvent.position;if("bottom"===c||"top"===c){var l=r.width;u<0?(this.arrowPosition=(50+Number(u/l*100)).toFixed(2),this.arrowPosition<0&&(this.arrowPosition=(8/l*100).toFixed(2)),u=0):window.innerWidth-o.right<l/2&&(this.arrowPosition=(50+(u-(window.innerWidth-l))/l*100).toFixed(2),this.arrowPosition>100&&(this.arrowPosition=((l-8)/l*100).toFixed(2)),u=window.innerWidth-l)}}var p=.5*n[0]*(r.width+o.width),d=n[1]*a;this.pointer&&(p+=6*n[0],d+=6*n[1]);var v=this.getScroll();return{left:u+p+v.x,top:f+d+v.y}}},getScroll:function(){var t=void 0;return t=((t=document.documentElement)||(t=document.body.parentNode))&&"number"==typeof t.scrollLeft?t:document.body,this.getScroll=function(){return{x:t.scrollLeft,y:t.scrollTop}},{x:t.scrollLeft,y:t.scrollTop}}},data:function(){return{visible:!1,position:{left:0,top:0},delayFunc:null,theEvent:null,arrowPosition:50}},props:{name:{type:String,required:!0},width:{type:[String,Number]},pointer:{type:Boolean,default:!0},delay:{type:Number,default:0},autoFix:{type:Boolean,default:!1}},mounted:function(){o.events.$on(this.showEventName,this.showEventListener),o.events.$on(this.hideEventName,this.hideEventListener)},beforeDestroy:function(){o.events.$off(this.showEventName,this.showEventListener),o.events.$off(this.hideEventName,this.hideEventListener)},computed:{showEventName:function(){return this.name+":show"},hideEventName:function(){return this.name+":hide"},className:function(){return[this.pointer&&this.positionClass,"vue-popover"]},style:function(){var t=this.position;return this.width&&(t.width=this.width+"px"),t},arrow:function(){var t=this.theEvent.position;return"bottom"===t||"top"===t?{left:"calc("+this.arrowPosition+"% - 6px)"}:{top:"calc(50% - 6px)"}},positionClass:function(){return"dropdown-position-"+this.theEvent.position}},render:function(t){return this.visible?t("div",{class:this.className,style:this.style,on:{click:function(t){t.stopPropagation()}},ref:"dropdown"},[t("i",{style:this.arrow}),this.$slots.default]):null}}},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(11)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.events=void 0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n(7));e.events=new o.default},function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,a){var u,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(f.functional){f._injectStyles=u;var c=f.render;f.render=function(t,e){return u.call(e),c(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:f}}n.d(e,"a",function(){return o})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(t){return t&&t.__esModule?t:{default:t}}(n(6)),s=n(3);var a=function(t){var e=t.modifiers,n=void 0===e?{}:e,o=t.value,i=void 0===o?{}:o,s=Object.keys(n);return{name:"object"===(void 0===i?"undefined":r(i))&&i.name||i,trigger:s[0]||i.trigger||"click",value:i,position:i.position||"bottom"}},u=function(t,e){var n=function(n){s.events.$emit(e.name+":show",o({},e,{target:t,srcEvent:n}));document.addEventListener("click",function n(r){s.events.$emit(e.name+":hide",o({},e,{target:t,srcEvent:r})),document.removeEventListener("click",n)}),n.stopPropagation()};t.addEventListener("click",n),t.$popoverRemoveClickHandlers=function(){t.removeEventListener("click",n)}},f=function(t,e){var n=function(n){s.events.$emit(e.name+":show",o({},e,{target:t,srcEvent:n}))},r=function(n){s.events.$emit(e.name+":hide",o({},e,{target:t,srcEvent:n}))};t.addEventListener("mouseenter",n,!1),t.addEventListener("mouseleave",r,!1),t.$popoverRemoveHoverHandlers=function(){t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",r)}};function c(t){t.$popoverRemoveHoverHandlers&&t.$popoverRemoveHoverHandlers(),t.$popoverRemoveClickHandlers&&t.$popoverRemoveClickHandlers()}function l(t,e){var n=a(e);"click"===n.trigger?u(t,n):f(t,n)}e.default={install:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component("Popover",i.default),t.directive("popover",{bind:function(t,e){l(t,e)},update:function(t,e){e.value!==e.oldValue&&(e.value.name&&e.value.name!==e.oldValue.name?(c(t),l(t,e)):"object"!==r(e.value)&&e.value!==e.oldValue&&(c(t),l(t,e)))},unbind:function(t,e){c(t)}})}}},function(t,e,n){"use strict";n.r(e);var o=n(0);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(8);var i=n(4),s=Object(i.a)(o.default,void 0,void 0,!1,null,"5f29e45c",null);s.options.__file="src/popover.vue",e.default=s.exports},function(e,n){e.exports=t},function(t,e,n){"use strict";var o=n(2);n.n(o).a},function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"\n.vue-popover[data-v-5f29e45c] {\n  display: block;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 4px 20px 0 rgba(52, 73, 94, 0.2);\n  padding: 5px;\n  border-radius: 5px;\n  z-index: 998;\n}\n.vue-popover i[data-v-5f29e45c] {\n  display: block;\n  position: absolute;\n}\n.vue-popover.dropdown-position-bottom i[data-v-5f29e45c] {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  top: -6px;\n  filter: drop-shadow(0px -2px 2px rgba(52, 73, 94, 0.1));\n}\n.vue-popover.dropdown-position-top i[data-v-5f29e45c] {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #fff;\n  bottom: -6px;\n  filter: drop-shadow(0px 2px 2px rgba(52, 73, 94, 0.1));\n}\n.vue-popover.dropdown-position-left i[data-v-5f29e45c] {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-left: 6px solid #fff;\n  right: -6px;\n  filter: drop-shadow(2px 0px 2px rgba(52, 73, 94, 0.1));\n}\n.vue-popover.dropdown-position-right i[data-v-5f29e45c] {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-right: 6px solid #fff;\n  left: -6px;\n  filter: drop-shadow(-2px 0px 2px rgba(52, 73, 94, 0.1));\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),s=null,a=0,u=[],f=n(12);function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(m(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(m(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function l(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return h(e,t.attrs),p(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=a++;n=s||(s=v(e)),o=y.bind(null,n,u,!1),r=y.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),p(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),r=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){d(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return c(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&c(l(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete o[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}])});