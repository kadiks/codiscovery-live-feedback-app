(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),a=n.n(r),s=(n(15),n(10)),o=n(9),l=n(2),u=n(0),j=function(e){e._id;var t=e.title,n=e.description,c=e.type;e.created;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:c})}),Object(u.jsx)("p",{children:n})]})},b=n(6),d=n.n(b),h=n(8),O=function(e){var t=e.onSubmitSuccess,n=Object(c.useState)(""),i=Object(l.a)(n,2),r=i[0],a=i[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),j=o[0],b=o[1],O=Object(c.useState)(""),v=Object(l.a)(O,2),p=v[0],x=v[1],f=function(){var e=Object(h.a)(d.a.mark((function e(n){var c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("#onSubmitForm"),n.preventDefault(),e.next=4,fetch("/api/feedbacks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({title:r,description:j,type:p})});case 4:return c=e.sent,e.next=7,c.json();case 7:i=e.sent,t(i.data),a(""),b(""),x("");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Formulaire"}),Object(u.jsxs)("form",{onSubmit:f,children:[Object(u.jsxs)("div",{className:"Form-group",children:[Object(u.jsx)("label",{htmlFor:"form-title",children:"Titre"}),Object(u.jsx)("input",{id:"form-title",onChange:function(e){var t=e.target;a(t.value)},type:"text",className:"Form-title",value:r})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("select",{onChange:function(e){var t=e.target;console.log("target",t.value),x(t.value)},children:[{value:"",htmlText:""},{value:"live",htmlText:"Live"},{value:"tutorial",htmlText:"Tutoriel"},{value:"article",htmlText:"Article de blog"}].map((function(e){var t=e.value,n=e.htmlText,c=t===p;return Object(u.jsx)("option",{value:t,selected:c,children:n})}))}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{onChange:function(e){var t=e.target;b(t.value)},value:j})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"Submit"})})]})]})]})},v=(n(18),function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),b=a[0],d=a[1];Object(c.useEffect)((function(){fetch("/api/feedbacks").then((function(e){return e.json()})).then((function(e){console.log("json",e),i(!1),d(e.data)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"App-title",children:"Codiscovery Feedback"}),n&&Object(u.jsx)("p",{children:"Loading"}),!n&&b.map((function(e){return Object(u.jsx)(j,Object(s.a)({},e),e._id)})),Object(u.jsx)(O,{onSubmitSuccess:function(e){var t=Object(o.a)(b);t.push(e),d(t)}})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.407d14df.chunk.js.map