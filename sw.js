!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/node-market/",r(r.s=7)}([function(e,t,r){e.exports=r(6)},function(e,t,r){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(n){}},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=u(e,t,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(e,r,c),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=i;var s={};function f(){}function l(){}function h(){}var p={};p[a]=function(){return this};var v=Object.getPrototypeOf,d=v&&v(v(_([])));d&&d!==t&&r.call(d,a)&&(p=d);var y=h.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var s=u(e[a],e,o);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(l).then((function(e){f.value=e,c(f)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function m(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return l.prototype=y.constructor=h,h.constructor=l,h[c]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),g.prototype[o]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new g(i(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),m(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;m(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t);r(1);var c=[],i=function(){return c};r(2);var u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=function(e){return[u.prefix,e,u.suffix].filter((function(e){return e&&e.length>0})).join("-")},f=function(e){return e||s(u.precache)},l=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"")};function h(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=a(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}var p=r(0),v=r.n(p);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void r(s)}i.done?t(u):Promise.resolve(u).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){y(o,n,a,c,i,"next",e)}function i(e){y(o,n,a,c,i,"throw",e)}c(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&x(e.prototype,t),r&&x(e,r),e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){return!t||"object"!==R(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return function(){var t,r=_(e);if(L()){var n=_(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return T(this,t)}}function E(e,t,r){return(E=L()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&m(a,r.prototype),a}).apply(null,arguments)}function S(e){var t="function"===typeof Map?new Map:void 0;return(S=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return E(e,arguments,_(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,e)})(e)}var U=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t},j=function(e){k(r,e);var t=O(r);function r(e,n){var a;g(this,r);var o=U(e,n);return(a=t.call(this,o)).name=e,a.details=n,a}return r}(S(Error)),K=new Set;function q(){return P.apply(this,arguments)}function P(){return(P=b(v.a.mark((function e(){var t,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,t=h(K),e.prev=2,t.s();case 4:if((r=t.n()).done){e.next=11;break}return n=r.value,e.next=8,n();case 8:0;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.e(e.t0);case 16:return e.prev=16,t.f(),e.finish(16);case 19:0;case 20:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}var A,M=function(e,t){return e.filter((function(e){return t in e}))},N=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.mode,a=t.plugins,o=M(void 0===a?[]:a,"cacheKeyWillBeUsed"),c=r,i=h(o),e.prev=4,i.s();case 6:if((u=i.n()).done){e.next=15;break}return s=u.value,e.next=10,s.cacheKeyWillBeUsed.call(s,{mode:n,request:c});case 10:"string"===typeof(c=e.sent)&&(c=new Request(c));case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),i.e(e.t0);case 20:return e.prev=20,i.f(),e.finish(20);case 23:return e.abrupt("return",c);case 24:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.response,a=t.event,o=t.plugins,c=n,i=!1,u=h(void 0===o?[]:o),e.prev=4,u.s();case 6:if((s=u.n()).done){e.next=19;break}if(!("cacheWillUpdate"in(f=s.value))){e.next=17;break}return i=!0,l=f.cacheWillUpdate,e.next=13,l.call(f,{request:r,response:c,event:a});case 13:if(c=e.sent){e.next=17;break}return e.abrupt("break",19);case 17:e.next=6;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),u.e(e.t0);case 24:return e.prev=24,u.f(),e.finish(24);case 27:return i||(c=c&&200===c.status?c:void 0),e.abrupt("return",c||null);case 29:case"end":return e.stop()}}),e,null,[[4,21,24,27]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,d,y;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheName,n=t.request,a=t.event,o=t.matchOptions,c=t.plugins,i=void 0===c?[]:c,e.next=3,self.caches.open(r);case 3:return u=e.sent,e.next=6,N({plugins:i,request:n,mode:"read"});case 6:return s=e.sent,e.next=9,u.match(s,o);case 9:f=e.sent,l=h(i),e.prev=12,l.s();case 14:if((p=l.n()).done){e.next=24;break}if(!("cachedResponseWillBeUsed"in(d=p.value))){e.next=22;break}return y=d.cachedResponseWillBeUsed,e.next=20,y.call(d,{cacheName:r,event:a,matchOptions:o,cachedResponse:f,request:s});case 20:f=e.sent;case 22:e.next=14;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(12),l.e(e.t0);case 29:return e.prev=29,l.f(),e.finish(29);case 32:return e.abrupt("return",f);case 33:case"end":return e.stop()}}),e,null,[[12,26,29,32]])})));return function(t){return e.apply(this,arguments)}}(),F={put:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,p,d,y,b,g,x;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.cacheName,n=t.request,a=t.response,o=t.event,c=t.plugins,i=void 0===c?[]:c,u=t.matchOptions,e.next=4;break;case 4:return e.next=6,N({plugins:i,request:n,mode:"write"});case 6:if(s=e.sent,a){e.next=10;break}throw new j("cache-put-with-no-response",{url:l(s.url)});case 10:return e.next=12,I({event:o,plugins:i,response:a,request:s});case 12:if(f=e.sent){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,self.caches.open(r);case 18:if(p=e.sent,!((d=M(i,"cacheDidUpdate")).length>0)){e.next=26;break}return e.next=23,C({cacheName:r,matchOptions:u,request:s});case 23:e.t0=e.sent,e.next=27;break;case 26:e.t0=null;case 27:return y=e.t0,e.prev=29,e.next=32,p.put(s,f);case 32:e.next=40;break;case 34:if(e.prev=34,e.t1=e.catch(29),"QuotaExceededError"!==e.t1.name){e.next=39;break}return e.next=39,q();case 39:throw e.t1;case 40:b=h(d),e.prev=41,b.s();case 43:if((g=b.n()).done){e.next=49;break}return x=g.value,e.next=47,x.cacheDidUpdate.call(x,{cacheName:r,event:o,oldResponse:y,newResponse:f,request:s});case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),b.e(e.t2);case 54:return e.prev=54,b.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[29,34],[41,51,54,57]])})));return function(t){return e.apply(this,arguments)}}(),match:C},W={fetch:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,d,y,b,g,x,w,m,k,_,L;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.request,n=t.fetchOptions,a=t.event,o=t.plugins,c=void 0===o?[]:o,"string"===typeof r&&(r=new Request(r)),!(a instanceof FetchEvent&&a.preloadResponse)){e.next=9;break}return e.next=5,a.preloadResponse;case 5:if(!(i=e.sent)){e.next=9;break}return e.abrupt("return",i);case 9:0,u=M(c,"fetchDidFail"),s=u.length>0?r.clone():null,e.prev=12,f=h(c),e.prev=14,f.s();case 16:if((l=f.n()).done){e.next=27;break}if(!("requestWillFetch"in(p=l.value))){e.next=25;break}return d=p.requestWillFetch,y=r.clone(),e.next=23,d.call(p,{request:y,event:a});case 23:r=e.sent;case 25:e.next=16;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(14),f.e(e.t0);case 32:return e.prev=32,f.f(),e.finish(32);case 35:e.next=40;break;case 37:throw e.prev=37,e.t1=e.catch(12),new j("plugin-error-request-will-fetch",{thrownError:e.t1});case 40:if(b=r.clone(),e.prev=41,"navigate"!==r.mode){e.next=48;break}return e.next=45,fetch(r);case 45:g=e.sent,e.next=51;break;case 48:return e.next=50,fetch(r,n);case 50:g=e.sent;case 51:0,x=h(c),e.prev=53,x.s();case 55:if((w=x.n()).done){e.next=64;break}if(!("fetchDidSucceed"in(m=w.value))){e.next=62;break}return e.next=60,m.fetchDidSucceed.call(m,{event:a,request:b,response:g});case 60:g=e.sent;case 62:e.next=55;break;case 64:e.next=69;break;case 66:e.prev=66,e.t2=e.catch(53),x.e(e.t2);case 69:return e.prev=69,x.f(),e.finish(69);case 72:return e.abrupt("return",g);case 75:e.prev=75,e.t3=e.catch(41),k=h(u),e.prev=79,k.s();case 81:if((_=k.n()).done){e.next=87;break}return L=_.value,e.next=85,L.fetchDidFail.call(L,{error:e.t3,event:a,originalRequest:s.clone(),request:b.clone()});case 85:e.next=81;break;case 87:e.next=92;break;case 89:e.prev=89,e.t4=e.catch(79),k.e(e.t4);case 92:return e.prev=92,k.f(),e.finish(92);case 95:throw e.t3;case 96:case"end":return e.stop()}}),e,null,[[12,37],[14,29,32,35],[41,75],[53,66,69,72],[79,89,92,95]])})));return function(t){return e.apply(this,arguments)}}()};function D(){if(void 0===A){var e=new Response("");if("body"in e)try{new Response(e.body),A=!0}catch(t){A=!1}A=!1}return A}function B(e,t){return G.apply(this,arguments)}function G(){return(G=b(v.a.mark((function e(t,r){var n,a,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},o=r?r(a):a,!D()){e.next=7;break}e.t0=n.body,e.next=10;break;case 7:return e.next=9,n.blob();case 9:e.t0=e.sent;case 10:return c=e.t0,e.abrupt("return",new Response(c,o));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){if(!e)throw new j("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){var t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}var r=e.revision,n=e.url;if(!n)throw new j("add-to-cache-list-unexpected-type",{entry:e});if(!r){var a=new URL(n,location.href);return{cacheKey:a.href,url:a.href}}var o=new URL(n,location.href),c=new URL(n,location.href);return o.searchParams.set("__WB_REVISION__",r),{cacheKey:o.href,url:c.href}}var Y,J=function(){function e(t){g(this,e),this._cacheName=f(t),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}return w(e,[{key:"addToCacheList",value:function(e){var t,r=[],n=h(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;"string"===typeof a?r.push(a):a&&void 0===a.revision&&r.push(a.url);var o=H(a),c=o.cacheKey,i=o.url,u="string"!==typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==c)throw new j("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:c});if("string"!==typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(c)&&this._cacheKeysToIntegrities.get(c)!==a.integrity)throw new j("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(c,a.integrity)}if(this._urlsToCacheKeys.set(i,c),this._urlsToCacheModes.set(i,u),r.length>0){var s="Workbox is precaching URLs without revision "+"info: ".concat(r.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(s)}}}catch(f){n.e(f)}finally{n.f()}}},{key:"install",value:function(){var e=b(v.a.mark((function e(){var t,r,n,a,o,c,i,u,s,f,l,p,y,b,g,x=this,w=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.length>0&&void 0!==w[0]?w[0]:{},r=t.event,n=t.plugins,a=[],o=[],e.next=6,self.caches.open(this._cacheName);case 6:return c=e.sent,e.next=9,c.keys();case 9:i=e.sent,u=new Set(i.map((function(e){return e.url}))),s=h(this._urlsToCacheKeys);try{for(s.s();!(f=s.n()).done;)l=d(f.value,2),p=l[0],y=l[1],u.has(y)?o.push(p):a.push({cacheKey:y,url:p})}catch(v){s.e(v)}finally{s.f()}return b=a.map((function(e){var t=e.cacheKey,a=e.url,o=x._cacheKeysToIntegrities.get(t),c=x._urlsToCacheModes.get(a);return x._addURLToCache({cacheKey:t,cacheMode:c,event:r,integrity:o,plugins:n,url:a})})),e.next=16,Promise.all(b);case 16:return g=a.map((function(e){return e.url})),e.abrupt("return",{updatedURLs:g,notUpdatedURLs:o});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"activate",value:function(){var e=b(v.a.mark((function e(){var t,r,n,a,o,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.caches.open(this._cacheName);case 2:return t=e.sent,e.next=5,t.keys();case 5:r=e.sent,n=new Set(this._urlsToCacheKeys.values()),a=[],o=h(r),e.prev=9,o.s();case 11:if((c=o.n()).done){e.next=19;break}if(i=c.value,n.has(i.url)){e.next=17;break}return e.next=16,t.delete(i);case 16:a.push(i.url);case 17:e.next=11;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),o.e(e.t0);case 24:return e.prev=24,o.f(),e.finish(24);case 27:return e.abrupt("return",{deletedURLs:a});case 29:case"end":return e.stop()}}),e,this,[[9,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"_addURLToCache",value:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheKey,n=t.url,a=t.cacheMode,o=t.event,c=t.plugins,i=t.integrity,u=new Request(n,{integrity:i,cache:a,credentials:"same-origin"}),e.next=4,W.fetch({event:o,plugins:c,request:u});case 4:s=e.sent,l=h(c||[]);try{for(l.s();!(p=l.n()).done;)"cacheWillUpdate"in(d=p.value)&&(f=d)}catch(v){l.e(v)}finally{l.f()}if(!f){e.next=13;break}return e.next=10,f.cacheWillUpdate({event:o,request:u,response:s});case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=s.status<400;case 14:if(e.t0){e.next=17;break}throw new j("bad-precaching-response",{url:n,status:s.status});case 17:if(!s.redirected){e.next=21;break}return e.next=20,B(s);case 20:s=e.sent;case 21:return e.next=23,F.put({event:o,plugins:c,response:s,request:r===n?u:new Request(r),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getURLsToCacheKeys",value:function(){return this._urlsToCacheKeys}},{key:"getCachedURLs",value:function(){return o(this._urlsToCacheKeys.keys())}},{key:"getCacheKeyForURL",value:function(e){var t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}},{key:"matchPrecache",value:function(){var e=b(v.a.mark((function e(t){var r,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t instanceof Request?t.url:t,!(n=this.getCacheKeyForURL(r))){e.next=7;break}return e.next=5,self.caches.open(this._cacheName);case 5:return a=e.sent,e.abrupt("return",a.match(n));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHandler",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var r=b(v.a.mark((function r(n){var a,o;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.request,r.prev=1,r.next=4,e.matchPrecache(a);case 4:if(!(o=r.sent)){r.next=7;break}return r.abrupt("return",o);case 7:throw new j("missing-precache-entry",{cacheName:e._cacheName,url:a instanceof Request?a.url:a});case 10:if(r.prev=10,r.t0=r.catch(1),!t){r.next=15;break}return r.abrupt("return",fetch(a));case 15:throw r.t0;case 16:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}},{key:"createHandlerBoundToURL",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.getCacheKeyForURL(e);if(!r)throw new j("non-precached-url",{url:e});var n=this.createHandler(t),a=new Request(e);return function(){return n({request:a})}}}]),e}(),Q=function(){return Y||(Y=new J),Y};function V(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(){var r=a[n];t.some((function(e){return e.test(r)}))&&e.searchParams.delete(r)},n=0,a=o(e.searchParams.keys());n<a.length;n++)r();return e}var $=v.a.mark(z);function z(e){var t,r,n,a,o,c,i,u,s,f,l,p,d,y=arguments;return v.a.wrap((function(v){for(;;)switch(v.prev=v.next){case 0:return t=y.length>1&&void 0!==y[1]?y[1]:{},r=t.ignoreURLParametersMatching,n=t.directoryIndex,a=t.cleanURLs,o=t.urlManipulation,(c=new URL(e,location.href)).hash="",v.next=5,c.href;case 5:return i=V(c,r),v.next=8,i.href;case 8:if(!n||!i.pathname.endsWith("/")){v.next=13;break}return(u=new URL(i.href)).pathname+=n,v.next=13,u.href;case 13:if(!a){v.next=18;break}return(s=new URL(i.href)).pathname+=".html",v.next=18,s.href;case 18:if(!o){v.next=37;break}f=o({url:c}),l=h(f),v.prev=21,l.s();case 23:if((p=l.n()).done){v.next=29;break}return d=p.value,v.next=27,d.href;case 27:v.next=23;break;case 29:v.next=34;break;case 31:v.prev=31,v.t0=v.catch(21),l.e(v.t0);case 34:return v.prev=34,l.f(),v.finish(34);case 37:case"end":return v.stop()}}),$,null,[[21,31,34,37]])}var X=function(e,t){var r,n=Q().getURLsToCacheKeys(),a=h(z(e,t));try{for(a.s();!(r=a.n()).done;){var o=r.value,c=n.get(o);if(c)return c}}catch(i){a.e(i)}finally{a.f()}},Z=!1;function ee(e){Z||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreURLParametersMatching,r=void 0===t?[/^utm_/]:t,n=e.directoryIndex,a=void 0===n?"index.html":n,o=e.cleanURLs,c=void 0===o||o,i=e.urlManipulation,u=f();self.addEventListener("fetch",(function(e){var t=X(e.request.url,{cleanURLs:c,directoryIndex:a,ignoreURLParametersMatching:r,urlManipulation:i});if(t){var n=self.caches.open(u).then((function(e){return e.match(t)})).then((function(e){return e||fetch(t)}));0,e.respondWith(n)}}))}(e),Z=!0)}var te=function(e){var t=Q(),r=i();e.waitUntil(t.install({event:e,plugins:r}).catch((function(e){throw e})))},re=function(e){var t=Q();e.waitUntil(t.activate())};r(3);r(4),function(){var e=b(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==(r=t.response).status&&0!==r.status){e.next=3;break}return e.abrupt("return",r);case 3:return e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)})))}();var ne=function(){function e(t,r){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.onupgradeneeded,c=a.onversionchange;g(this,e),this._db=null,this._name=t,this._version=r,this._onupgradeneeded=o,this._onversionchange=c||function(){return n.close()}}return w(e,[{key:"open",value:function(){var e=b(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._db){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,new Promise((function(e,r){var n=!1;setTimeout((function(){n=!0,r(new Error("The open request was blocked and timed out"))}),t.OPEN_TIMEOUT);var a=indexedDB.open(t._name,t._version);a.onerror=function(){return r(a.error)},a.onupgradeneeded=function(e){n?(a.transaction.abort(),a.result.close()):"function"===typeof t._onupgradeneeded&&t._onupgradeneeded(e)},a.onsuccess=function(){var r=a.result;n?r.close():(r.onversionchange=t._onversionchange.bind(t),e(r))}}));case 4:return this._db=e.sent,e.abrupt("return",this);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getKey",value:function(){var e=b(v.a.mark((function e(t,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllKeys(t,r,1);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=b(v.a.mark((function e(t,r,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllMatching(t,{query:r,count:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getAllKeys",value:function(){var e=b(v.a.mark((function e(t,r,n){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllMatching(t,{query:r,count:n,includeKeys:!0});case 2:return a=e.sent,e.abrupt("return",a.map((function(e){return e.key})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getAllMatching",value:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=r.index,a=r.query,o=void 0===a?null:a,c=r.direction,i=void 0===c?"next":c,u=r.count,s=r.includeKeys,f=void 0!==s&&s,e.next=3,this.transaction([t],"readonly",(function(e,r){var a=e.objectStore(t),c=n?a.index(n):a,s=[],l=c.openCursor(o,i);l.onsuccess=function(){var e=l.result;e?(s.push(f?e:e.value),u&&s.length>=u?r(s):e.continue()):r(s)}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"transaction",value:function(){var e=b(v.a.mark((function e(t,r,n){var a=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.open();case 2:return e.next=4,new Promise((function(e,o){var c=a._db.transaction(t,r);c.onabort=function(){return o(c.error)},c.oncomplete=function(){return e()},n(c,(function(t){return e(t)}))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_call",value:function(){var e=b(v.a.mark((function e(t,r,n){var a,o,c,i,u=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=u.length,o=new Array(a>3?a-3:0),c=3;c<a;c++)o[c-3]=u[c];return i=function(e,n){var a=e.objectStore(r),c=a[t].apply(a,o);c.onsuccess=function(){return n(c.result)}},e.next=4,this.transaction([r],n,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"close",value:function(){this._db&&(this._db.close(),this._db=null)}},{key:"db",get:function(){return this._db}}]),e}();ne.prototype.OPEN_TIMEOUT=2e3;for(var ae=function(){var e,t=d(ce[oe],2),r=t[0],n=h(t[1]);try{var a=function(){var t=e.value;t in IDBObjectStore.prototype&&(ne.prototype[t]=function(){var e=b(v.a.mark((function e(n){var a,o,c,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=i.length,o=new Array(a>1?a-1:0),c=1;c<a;c++)o[c-1]=i[c];return e.next=3,this._call.apply(this,[t,n,r].concat(o));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())};for(n.s();!(e=n.n()).done;)a()}catch(o){n.e(o)}finally{n.f()}},oe=0,ce=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});oe<ce.length;oe++)ae();r(5);var ie,ue;ie=[{'revision':'9f29e4aef0a99eab1dee6b78d438d4be','url':'/node-market/index.html'},{'revision':'5e5f0e8a0e42bbd7cc60e505ef0ffed4','url':'/node-market/precache-manifest.5e5f0e8a0e42bbd7cc60e505ef0ffed4.js'},{'revision':'fe48edbd9fc0ae66fdf3e520d00c8fd2','url':'/node-market/service-worker.js'},{'revision':'4db932d45c0f37f3200e6e169224e9bb','url':'/node-market/static/css/10.a60af3e9.chunk.css'},{'revision':'7f0ffe6d803836d23ba60f188131c920','url':'/node-market/static/css/11.804f1e7f.chunk.css'},{'revision':'7e6cf02c7f110031b45741cdd9c034ac','url':'/node-market/static/css/12.ba7a645e.chunk.css'},{'revision':'ea4b1faeb623a243def6d0c7ad6c86f6','url':'/node-market/static/css/13.3ee91685.chunk.css'},{'revision':'82d05f08088a58d639bef49a0934808e','url':'/node-market/static/css/14.885a9b97.chunk.css'},{'revision':'73b6b3cfcb93546e36b42d3e3e9b1267','url':'/node-market/static/css/15.e7b30d56.chunk.css'},{'revision':'5a992adca3194bd60d7a548914d023b9','url':'/node-market/static/css/16.64b93d95.chunk.css'},{'revision':'32e8e1c6a3e82f384060c7c5b8cdd8ad','url':'/node-market/static/css/17.c8593fbb.chunk.css'},{'revision':'cc6123ea0b3fdbef15e357b35a9aaf8e','url':'/node-market/static/css/18.38f46048.chunk.css'},{'revision':'e3baa32102fc78c3d08b2d0562f06f03','url':'/node-market/static/css/3.c3b68ffc.chunk.css'},{'revision':'ce36e96ad61131cd086ade6e5ecc7fdb','url':'/node-market/static/css/5.44a50480.chunk.css'},{'revision':'71b9868f0c6512005eb2c9a827a219d0','url':'/node-market/static/css/6.5cc2ad0f.chunk.css'},{'revision':'ec7d931b475adece25fe320cdab73ffd','url':'/node-market/static/css/7.6805de0a.chunk.css'},{'revision':'dc8d81b496233573fb7dcdf0257176ae','url':'/node-market/static/css/8.7783d558.chunk.css'},{'revision':'af49f8c0ffffe985b2cb9bb7d7f1587a','url':'/node-market/static/css/9.a7986a0e.chunk.css'},{'revision':'a88424cf2186c34d8f0471cbaa90028b','url':'/node-market/static/css/main.0761001a.chunk.css'},{'revision':'2434e6148b484acd673a690908f156b0','url':'/node-market/static/js/0.481dae4b.chunk.js'},{'revision':'223e1043e6c92cd5b8490b603521d509','url':'/node-market/static/js/0.481dae4b.chunk.js.LICENSE.txt'},{'revision':'e6d8275ce5aafbd7593fbdff82fcf563','url':'/node-market/static/js/10.bcdc3328.chunk.js'},{'revision':'d85575ed96f517a8ae7b332bac2e1902','url':'/node-market/static/js/11.83d2b53c.chunk.js'},{'revision':'74c502577a33190ae5cd914e24e01721','url':'/node-market/static/js/12.9a7da762.chunk.js'},{'revision':'154f336188eda3a81b876d82e7e7915a','url':'/node-market/static/js/13.7499c407.chunk.js'},{'revision':'35a549882d98d9195f102ecbbfb813b7','url':'/node-market/static/js/14.3d390981.chunk.js'},{'revision':'b974cda2d1b7379c1b8289d2d927e438','url':'/node-market/static/js/15.0be5fe77.chunk.js'},{'revision':'16b506df0c5b176ea347c357016fe5cd','url':'/node-market/static/js/16.e3a1aa7c.chunk.js'},{'revision':'7af6035a6daaddf6321b85a8a71be8c1','url':'/node-market/static/js/17.c803f023.chunk.js'},{'revision':'3ffa94110f1b31f60f6c157274d79b0f','url':'/node-market/static/js/18.83c856cd.chunk.js'},{'revision':'79daa9db244ef896d0c0770541b5ca52','url':'/node-market/static/js/19.3c1ea0dd.chunk.js'},{'revision':'a5d5295b64583b003d654ef57a26b539','url':'/node-market/static/js/3.a0a6e4f8.chunk.js'},{'revision':'8a0f87d4ff9462a28d37926fe68f0ebe','url':'/node-market/static/js/3.a0a6e4f8.chunk.js.LICENSE.txt'},{'revision':'6bb3edd34aa121f27135c561166a49a0','url':'/node-market/static/js/4.8938573b.chunk.js'},{'revision':'dd6e59810f35369222f7675d1307479d','url':'/node-market/static/js/5.5f62f8fd.chunk.js'},{'revision':'977214e69cdc8a100ae2bffcec7ab442','url':'/node-market/static/js/6.7a30aad1.chunk.js'},{'revision':'8917b6f47ffc0a270afb8fb4f5da6260','url':'/node-market/static/js/7.8648e206.chunk.js'},{'revision':'014f5a91717babe6a3ba470bf03b2700','url':'/node-market/static/js/8.b054f969.chunk.js'},{'revision':'19d83764b410f8d161ec6694f58657bc','url':'/node-market/static/js/9.c904061f.chunk.js'},{'revision':'9ece04957d20c06a92cba3d26dc4fd9a','url':'/node-market/static/js/main.2e9ec3f5.chunk.js'},{'revision':'4cc9b717569992e501c33edf9f25543c','url':'/node-market/static/js/runtime-main.430ecf8c.js'},{'revision':'58144455a071730528cf8ef75b18f1b4','url':'/node-market/static/media/1.58144455.jpg'},{'revision':'b7c9e1e479de3b53f1e4e30ebac2403a','url':'/node-market/static/media/slick.b7c9e1e4.woff'},{'revision':'ced611daf7709cc778da928fec876475','url':'/node-market/static/media/slick.ced611da.eot'},{'revision':'d41f55a78e6f49a5512878df1737e58a','url':'/node-market/static/media/slick.d41f55a7.ttf'},{'revision':'f97e3bbf73254b0112091d0192f17aec','url':'/node-market/static/media/slick.f97e3bbf.svg'}],ue={ignoreURLParametersMatching:[/\.jpg/]},function(e){Q().addToCacheList(e),e.length>0&&(self.addEventListener("install",te),self.addEventListener("activate",re))}(ie),ee(ue),self.addEventListener("message",(function(){event.data&&"SKIP_WAITING"===event.data.type&&self.skipWaiting()}))}]);
//# sourceMappingURL=sw.js.map