(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15],{352:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(14),c=a(1),r=a.n(c),u=(a(352),a(57)),i=a(24),m=a(58),s=[{title:"10.000 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",value:1e4},{title:"20.000 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",value:2e4},{title:"50.000 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",value:5e4},{title:"100.000 \u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646",value:1e5}];t.default=Object(i.b)(null,{editUserProfile:m.b})((function(e){var t=e.editUserProfile,a=Object(c.useState)(!1),m=Object(l.a)(a,2),o=m[0],f=m[1],d=Object(c.useState)(""),E=Object(l.a)(d,2),b=E[0],p=E[1],v=Object(c.useState)(0),j=Object(l.a)(v,2),O=j[0],k=j[1],N=Object(i.c)((function(e){return e.user.token})),h=Object(i.c)((function(e){return e.user.users.filter((function(e){return e.email===N}))}))[0];Object(c.useEffect)((function(){k(h.credit)}),[h]);var C=function(){f(!o)},y=function(e){e=Number(e);var a=Object(n.a)(Object(n.a)({},h),{},{credit:h.credit+e});t(a),p("")};return r.a.createElement("div",{className:"user-credit"},r.a.createElement("h4",null,"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0639\u062a\u0628\u0627\u0631"),r.a.createElement("h5",null,"\u0645\u0648\u062c\u0648\u062f\u06cc \u0641\u0639\u0644\u06cc: ",r.a.createElement("span",null,O," \u062a\u0648\u0645\u0627\u0646")),r.a.createElement("div",null,r.a.createElement("ul",{className:"d-none d-md-flex justify-content-md-between"},s.map((function(e){return r.a.createElement("li",{key:e.title,onClick:function(){return y(e.value)}},r.a.createElement(u.a,null,e.title))})),r.a.createElement("li",null,r.a.createElement(u.a,{onClick:C},"\u0645\u0628\u0644\u063a \u062f\u0644\u062e\u0648\u0627\u0647"))),r.a.createElement("ul",{className:"d-flex flex-column align-items-center d-md-none"},s.map((function(e){return r.a.createElement("li",{key:e.title,className:"mb-4",onClick:function(){return y(e.value)}},r.a.createElement(u.a,null,e.title))})),r.a.createElement("li",{className:"mb-4"},r.a.createElement(u.a,{onClick:C},"\u0645\u0628\u0644\u063a \u062f\u0644\u062e\u0648\u0627\u0647")))),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-credit-input"},r.a.createElement("input",{onChange:function(e){return p(e.target.value)},value:b,placeholder:"\u0645\u0628\u0644\u063a \u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0639\u062a\u0628\u0627\u0631 \u0631\u0627 \u0628\u0647 \u062a\u0648\u0645\u0627\u0646 \u06a9\u0646\u06cc\u062f"}),r.a.createElement("span",null,"\u062a\u0648\u0645\u0627\u0646")),r.a.createElement("div",{className:"add-credit-button"},r.a.createElement(u.a,{onClick:function(){return y(b)}},"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0639\u062a\u0628\u0627\u0631"))))}))}}]);
//# sourceMappingURL=15.a93508ee.chunk.js.map