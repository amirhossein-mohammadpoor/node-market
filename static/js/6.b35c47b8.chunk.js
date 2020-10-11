(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{218:function(e,t,a){"use strict";var r=a(1),n=a.n(r);a(219);t.a=function(e){var t=e.onChange,a=e.value,r=e.placeholder,c=e.textLeft;return n.a.createElement("div",{className:"input"},n.a.createElement("span",null,r),n.a.createElement("input",{onChange:t,value:a,className:"input",style:{direction:c?"ltr":"rtl"}}))}},219:function(e,t,a){},220:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"d",(function(){return m}));var r=a(4),n=a(13),c=a(27),u=function(e){var t=JSON.parse(localStorage.getItem("carts"));return localStorage.setItem("carts",JSON.stringify([].concat(Object(n.a)(t),[e]))),{type:c.a.CREATE_CART,cart:e}},l=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e.email?{email:e.email,products:[].concat(Object(n.a)(t.products),[e.products[0]])}:t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.ADD_ITEM,cart:e}},o=function(e,t){var a=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number+1}:e},r=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(a)}:t}));return localStorage.setItem("carts",JSON.stringify(r)),{type:c.a.INCREMENT_ITEM,email:e,id:t}},i=function(e,t){var a=function(e){return e.productId===t?{productId:e.productId,productName:e.productName,productPrice:e.productPrice,number:e.number-1}:e},r=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?{email:e,products:t.products.map(a)}:t}));return localStorage.setItem("carts",JSON.stringify(r)),{type:c.a.DECREMENT_ITEM,email:e,id:t}},s=function(e,t){var a=JSON.parse(localStorage.getItem("carts")).map((function(a){return a.email===e?{email:e,products:a.products.filter((function(e){return e.productId!==t}))}:a}));return localStorage.setItem("carts",JSON.stringify(a)),{type:c.a.REMOVE_ITEM,email:e,id:t}},m=function(e){var t=JSON.parse(localStorage.getItem("carts")).map((function(t){return t.email===e?Object(r.a)(Object(r.a)({},t),{},{products:[]}):t}));return localStorage.setItem("carts",JSON.stringify(t)),{type:c.a.EMPTY_CART,email:e}}},227:function(e,t,a){"use strict";var r=a(1),n=a.n(r);a(228);t.a=function(e){var t=e.alerts;return n.a.createElement("ul",{className:"form-alert"},t.map((function(e){return n.a.createElement("li",{key:e},e)})))}},228:function(e,t,a){},256:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(14),c=a(1),u=a.n(c),l=a(218),o=a(57),i=(a(256),a(227)),s=a(207),m=a(257),p=a.n(m),d=a(24),f=a(58),g=a(220),b=a(9);t.default=Object(d.b)(null,{signUpUser:f.d,createCart:g.b})((function(e){var t=e.signUpUser,a=e.createCart,m=Object(b.g)(),d=Object(c.useState)({name:"",lastName:"",number:"",email:"",password:"",repeatPassword:""}),f=Object(n.a)(d,2),g=f[0],O=f[1],E=Object(c.useState)(null),v=Object(n.a)(E,2),N=v[0],S=v[1];return u.a.createElement(s.a,{className:"signup-form"},u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=[];if(p.a.isEmail(g.email)||r.push("\u0627\u06cc\u0645\u06cc\u0644 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a"),p.a.isNumeric(g.number)||r.push("\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a"),p.a.isLength(g.password,{min:4})||r.push("\u0637\u0648\u0644 \u06af\u0630\u0631 \u0648\u0627\u0698\u0647 \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 4 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),g.password!==g.repeatPassword&&r.push("\u06af\u0630\u0631 \u0648\u0627\u0698\u0647 \u0647\u0627 \u0647\u0645\u062e\u0648\u0627\u0646\u06cc \u0646\u062f\u0627\u0631\u062f"),0!==r.length)S(u.a.createElement(i.a,{alerts:r}));else{S(null);var n={name:g.name.trim(),lastName:g.lastName.trim(),number:g.number.trim(),email:p.a.normalizeEmail(g.email),password:g.password.trim(),credit:0,position:[],favorites:[],orders:[]},c={email:p.a.normalizeEmail(g.email),products:[]};a(c),t(n),m.push("/user/profile"),O({name:"",lastName:"",number:"",email:"",password:"",repeatPassword:""})}}},u.a.createElement("h4",null,"\u062b\u0628\u062a \u0646\u0627\u0645"),u.a.createElement(l.a,{placeholder:"\u0646\u0627\u0645",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{name:e.target.value}))},value:g.name,textLeft:!1}),u.a.createElement(l.a,{placeholder:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{lastName:e.target.value}))},value:g.lastName,textLeft:!1}),u.a.createElement(l.a,{placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{number:e.target.value}))},value:g.number,textLeft:!0}),u.a.createElement(l.a,{placeholder:"\u0627\u06cc\u0645\u06cc\u0644",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{email:e.target.value}))},value:g.email,textLeft:!0}),u.a.createElement(l.a,{placeholder:"\u06af\u0630\u0631 \u0648\u0627\u0698\u0647",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{password:e.target.value}))},value:g.password,textLeft:!0}),u.a.createElement(l.a,{placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u06af\u0630\u0631 \u0648\u0627\u0698\u0647",onChange:function(e){O(Object(r.a)(Object(r.a)({},g),{},{repeatPassword:e.target.value}))},value:g.repeatPassword,textLeft:!0}),N,u.a.createElement(o.a,null,"\u062b\u0628\u062a \u0646\u0627\u0645")))}))}}]);
//# sourceMappingURL=6.b35c47b8.chunk.js.map