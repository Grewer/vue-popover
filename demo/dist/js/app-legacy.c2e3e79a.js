(function(e){function o(o){for(var a,i,s=o[0],p=o[1],v=o[2],l=0,u=[];l<s.length;l++)i=s[l],r[i]&&u.push(r[i][0]),r[i]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(e[a]=p[a]);c&&c(o);while(u.length)u.shift()();return n.push.apply(n,v||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],a=!0,s=1;s<t.length;s++){var p=t[s];0!==r[p]&&(a=!1)}a&&(n.splice(o--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},n=[];function i(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,o){if(1&o&&(e=i(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)i.d(t,a,function(o){return e[o]}.bind(null,a));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=o,s=s.slice();for(var v=0;v<s.length;v++)o(s[v]);var c=p;n.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var a=t("04f5"),r=t.n(a);r.a},"04f5":function(e,o,t){},1908:function(e,o,t){},"56d7":function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c");var a=t("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],i=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",{staticClass:"box"},[t("h3",[e._v("position")]),t("span",{directives:[{name:"popover",rawName:"v-popover.hover",value:{name:"foo",position:"top"},expression:"{name:'foo',position:'top'}",modifiers:{hover:!0}}]},[e._v("top")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:{name:"foo2",trigger:"hover",position:"bottom"},expression:"{name:'foo2',trigger:'hover',position:'bottom'}"}]},[e._v("bottom")]),t("span",{directives:[{name:"popover",rawName:"v-popover.hover",value:{name:"foo3",position:"left"},expression:"{name:'foo3',position:'left'}",modifiers:{hover:!0}}]},[e._v("left")]),t("span",{directives:[{name:"popover",rawName:"v-popover.hover",value:{name:"foo4",position:"right"},expression:"{name:'foo4',position:'right'}",modifiers:{hover:!0}}]},[e._v("right")])]),t("div",{staticClass:"box"},[t("h3",[e._v("trigger")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:"clickMe",expression:"'clickMe'"}]},[e._v("click me!")])]),t("div",{staticClass:"box"},[t("h3",[e._v("animation")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:"animation",expression:"'animation'"}]},[e._v("click me to show animation")])]),t("div",{staticClass:"box"},[t("h3",[e._v("your className")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:"className",expression:"'className'"}]},[e._v("add your className")])]),t("div",{staticClass:"box"},[t("h3",[e._v("autoFix (default Close)")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:"autoFix1",expression:"'autoFix1'"}],staticStyle:{position:"relative",left:"-90px"}},[e._v("fixLeft click me")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:"autoFix2",expression:"'autoFix2'"}],staticStyle:{position:"relative",right:"-81%"}},[e._v("fixRight click me")])]),t("div",{staticClass:"box"},[t("h3",[e._v("dynamic")]),t("span",{directives:[{name:"popover",rawName:"v-popover",value:e.dynamicName,expression:"dynamicName"}]},[e._v("dynamic name popover")]),t("button",{on:{click:e.handleToggle}},[e._v(" change bind name")])]),t("Popover",{attrs:{name:"foo"}},[t("div",[e._v("show on top")])]),t("Popover",{attrs:{name:"foo2"}},[t("div",[e._v("show on bottom")])]),t("Popover",{attrs:{name:"foo3"}},[t("div",[e._v("show on left")])]),t("Popover",{attrs:{name:"foo4"}},[t("div",[e._v("show on right")])]),t("Popover",{attrs:{name:"clickMe"}},[t("div",[e._v("show after click")])]),t("transition",{attrs:{name:"pop-out"}},[t("Popover",{attrs:{name:"animation"}},[t("div",[e._v("show animation")])])],1),t("Popover",{staticClass:"myClass",attrs:{name:"className"}},[t("div",[e._v("font color change")])]),t("Popover",{attrs:{name:"autoFix1","auto-fix":!0}},[t("div",[e._v("autoFix1 ~~~~~~~")])]),t("Popover",{attrs:{name:"autoFix2",width:"200",autoFix:""}},[t("div",[e._v("autoFix1 ~~~~~~~")])]),t("Popover",{attrs:{name:"bar",autoFix:""}},[t("div",[e._v("this is dynamic bar ~~~~~~~")])]),t("Popover",{attrs:{name:"bar2",autoFix:""}},[t("div",[e._v("this is dynamic bar2~~~~~~~")])])],1)},s=[],p={name:"HelloWorld",data:function(){return{name:"foo3",dynamicName:"bar"}},methods:{handleToggle:function(){this.dynamicName="bar2"===this.dynamicName?"bar":"bar2"}},props:{msg:String}},v=p,c=(t("601e"),t("2877")),l=Object(c["a"])(v,i,s,!1,null,"46d0f0ce",null),u=l.exports,m={name:"app",components:{HelloWorld:u}},f=m,d=(t("034f"),Object(c["a"])(f,r,n,!1,null,null,null)),h=d.exports,b=t("422c");a["a"].use(b["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)}}).$mount("#app")},"601e":function(e,o,t){"use strict";var a=t("1908"),r=t.n(a);r.a}});