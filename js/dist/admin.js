module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=7)}([function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return r}))},function(t,n){t.exports=flarum.core.compat.app},,,,function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,n,e){"use strict";e.r(n);var r=e(1),o=e.n(r),u=e(0),a=e(5),i=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t);var e=n.prototype;return e.className=function(){return"AnnounceSettingsModal Modal--medium"},e.title=function(){return app.translator.trans("heidongwang-announce.admin.settings.title")},e.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("heidongwang-announce.admin.settings.text")),m("textarea",{rows:"5",required:!0,className:"FormControl",type:"text",bidi:this.setting("heidongwang-announce.text")}))]},n}(e.n(a).a);o.a.initializers.add("heidongwang-announce",(function(){o.a.extensionSettings["heidongwang-announce"]=function(){return o.a.modal.show(new i)}}))}]);
//# sourceMappingURL=admin.js.map