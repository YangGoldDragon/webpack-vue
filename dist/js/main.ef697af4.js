!function(t){function e(e){for(var n,a,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);for(l&&l(e);p.length;)p.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(u.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={0:0},u=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;u.push([8,1]),r()}({8:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(2);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i={name:"App",data:function(){return{}},computed:a({},Object(o.c)(["getCount"])),methods:a({},Object(o.b)(["add"])),created:function(){console.log("App loaded...")}},s=r(0),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"App"},[r("router-view"),t._v(" "),r("div",[r("router-link",{attrs:{to:"/home"}},[t._v("go Home")]),t._v(" "),r("router-link",{attrs:{to:"/about"}},[t._v("go About")])],1),t._v(" "),r("div",[r("p",[t._v(t._s(t.getCount))]),t._v(" "),r("button",{on:{click:t.add}},[t._v("add")])])],1)}),[],!1,null,"0a21b91b",null).exports,f=r(4),p={name:"Home",data:function(){return{}}},b=Object(s.a)(p,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Home"},[e("h2",[this._v("Home1")])])}],!1,null,"686a6018",null).exports,d={name:"About",data:function(){return{}}},v=Object(s.a)(d,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"About"},[e("h2",[this._v("About2")])])}],!1,null,"0b2aac07",null).exports;n.a.use(f.a);var h=new f.a({mode:"hash",routes:[{path:"/home",component:b},{path:"/about",component:v},{path:"*",redirect:"/home"}]});n.a.use(o.a);var m=new o.a.Store({state:{count:0},mutations:{add:function(t){t.count++}},actions:{add:function(t){(0,t.commit)("add")}},getters:{getCount:function(t){return t.count}}});new n.a({store:m,router:h,render:function(t){return t(l)}}).$mount("#app")}});