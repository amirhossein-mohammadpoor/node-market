(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[12],{220:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return m})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return s}));var a=r(4),n=r(13),c=r(27),u=function(e){var t=JSON.parse(localStorage.getItem("carts"));return localStorage.setItem("carts",JSON.stringify([].concat(Object(n.a)(t),[e]))),{type:c.a.CREATE_CART,cart:e}},l=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e.email?{email:e.email,products:[].concat(Object(n.a)(t.products),[e.products[0]])}:t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.ADD_ITEM,cart:e}},o=function(e,t){var r=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number+1}:e},a=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(r)}:t}));return localStorage.setItem("carts",JSON.stringify(a)),{type:c.a.INCREMENT_ITEM,email:e,id:t}},m=function(e,t){var r=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number-1}:e},a=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(r)}:t}));return localStorage.setItem("carts",JSON.stringify(a)),{type:c.a.DECREMENT_ITEM,email:e,id:t}},i=function(e,t){var r=JSON.parse(localStorage.getItem("carts")).map((function(r){return r.email===e?{email:e,products:r.products.filter((function(e){return e.productId!==t}))}:r}));return localStorage.setItem("carts",JSON.stringify(r)),{type:c.a.REMOVE_ITEM,email:e,id:t}},s=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?Object(a.a)(Object(a.a)({},t),{},{products:[]}):t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.EMPTY_CART,email:e}}},251:function(e,t,r){},356:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=(r(251),r(57)),u=r(9),l=r(207),o=r(11),m=r(24),i=r(62),s=r(25),d=r(220),p=r(5),E=Object(s.b)({userProducts:i.b});t.default=Object(m.b)(E,{removeItem:d.f,incrementItem:d.e,decrementItem:d.c})((function(e){var t=Object(u.g)(),r=Object(m.c)((function(e){return e.user.token})),a=e.userProducts,i=e.removeItem,s=e.incrementItem,d=e.decrementItem;return n.a.createElement("div",{className:"cart-page"},n.a.createElement("div",{className:"return-button"},n.a.createElement(c.a,{onClick:function(){return t.goBack()}},"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0642\u0628\u0644")),0===a.length?n.a.createElement("h1",null,"\u0633\u0628\u062f \u06a9\u0627\u0644\u0627 \u062e\u0627\u0644\u06cc \u0627\u0633\u062a ",n.a.createElement("span",{style:{color:"red"}},":(")):n.a.createElement(l.a,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u0646\u0627\u0645 \u0645\u062d\u0635\u0648\u0644"),n.a.createElement("th",null,"\u062a\u0639\u062f\u0627\u062f"),n.a.createElement("th",null,"\u0642\u06cc\u0645\u062a"),n.a.createElement("th",null,"\u0627\u0639\u0645\u0627\u0644 \u062a\u063a\u06cc\u06cc\u0631"))),n.a.createElement("tbody",null,a.map((function(e){return n.a.createElement("tr",{key:e.productId},n.a.createElement("td",null,e.productName),n.a.createElement("td",null,e.number),n.a.createElement("td",null,Number(e.productPrice)*e.number," \u062a\u0648\u0645\u0627\u0646"),n.a.createElement("td",null,n.a.createElement("button",{className:"add",onClick:function(){return s(r,e.productId)}},n.a.createElement(o.o,null)),1!==e.number?n.a.createElement("button",{className:"remove",onClick:function(){return d(r,e.productId)}},n.a.createElement(o.m,null)):n.a.createElement("button",{className:"remove",onClick:function(){return i(r,e.productId)}},n.a.createElement(o.s,null))))})))),n.a.createElement("div",{className:"submit"},n.a.createElement(p.b,{to:"/checkout"},n.a.createElement(c.a,null,"\u0646\u0647\u0627\u06cc\u06cc \u06a9\u0631\u062f\u0646 \u0633\u0641\u0627\u0631\u0634")))))}))}}]);
//# sourceMappingURL=12.c4bfb80a.chunk.js.map