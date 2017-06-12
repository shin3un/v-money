(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VMoney=t():e.VMoney=t()})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";function r(e){var t=e.keyCode||e.which;8!==t&&46!==t||(e.preventDefault(),e.target.dispatchEvent(new KeyboardEvent("keypress")))}var i=n(2),u=n(5),o=n(0);t.a=function(e,t){function a(){if(e===document.activeElement){var t=e.value.length-f.suffix.length;e.setSelectionRange(t,t)}}function c(t){t.preventDefault();var r=t.keyCode||t.which;0===r&&n.i(i.b)(e),e.value+=String.fromCharCode(r),e.value=n.i(i.a)(e.value,f),e.dispatchEvent(new Event("input"))}var f=n.i(u.a)(o.a,t.value);e.value=n.i(i.a)(e.value,f),a(),e.onkeydown=r,e.onkeypress=c,e.oninput=a,e.dispatchEvent(new Event("input"))}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=u(e),r=c(n,t.precision),i=d(r).split("."),a=i[0],p=i[1];return a=f(a,t.thousands),t.prefix+s(a,p,t.decimal)+t.suffix}function i(e,t){var n=u(e),r=c(n,t);return parseFloat(r)}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e){e.value=u(e.value).slice(0,-1)}var l=n(0);n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return p})},function(e,t,n){"use strict";function r(e){e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"component",function(){return u.a}),n.d(t,"directive",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.1.0";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},computed:{editableValue:{get:function(){return n.i(u.a)(this.value,this.$props)},set:function(e){this.$emit("input",this.masked?e:n.i(u.c)(e,this.precision))}}}}},function(e,t,n){"use strict";t.a=function(e,t){return Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.editableValue,expression:"editableValue"},{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticStyle:{"text-align":"right"},attrs:{type:"tel"},domProps:{value:e.editableValue},on:{input:function(t){t.target.composing||(e.editableValue=t.target.value)}}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});