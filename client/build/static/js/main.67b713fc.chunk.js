(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(1),r=c.n(i),j=c(17),o=c.n(j),s=(c(24),c(25),c(3)),a=c(4),u=c.n(a),l=function(){var t=Object(i.useState)(""),e=Object(s.a)(t,2),c=e[0],r=e[1],j=Object(i.useState)(""),o=Object(s.a)(j,2),a=o[0],l=o[1],b=Object(i.useState)(""),d=Object(s.a)(b,2),p=d[0],O=d[1];return Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.a.post("http://localhost:8000/api/product",{title:c,price:a,description:p}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Title"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(t){return r(t.target.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Price"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"number",onChange:function(t){return l(t.target.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Description"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",onChange:function(t){return O(t.target.value)}})]}),Object(n.jsx)("input",{type:"submit"})]})},b=c(5),d=function(t){var e=t.removeFromDom;return Object(n.jsx)("div",{children:t.product.map((function(t,c){return Object(n.jsxs)("p",{children:[Object(n.jsx)(b.a,{to:"/".concat(t._id),children:t.title}),Object(n.jsx)("button",{onClick:function(c){var n;n=t._id,u.a.delete("http://localhost:8000/api/product/"+n).then((function(t){e(n)}))},children:"Delete"})]},c)}))})},p=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),c=e[0],r=e[1],j=Object(i.useState)(!1),o=Object(s.a)(j,2),a=o[0],b=o[1];Object(i.useEffect)((function(){u.a.get("http://localhost:8000/api/product").then((function(t){r(t.data),b(!0)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Add a Product"}),Object(n.jsx)(l,{}),Object(n.jsx)("hr",{}),Object(n.jsx)("h1",{children:"All Products"}),a&&Object(n.jsx)(d,{product:c,removeFromDom:function(t){r(c.filter((function(e){return e._id!=t})))}})]})},O=function(t){var e=Object(i.useState)({}),c=Object(s.a)(e,2),r=c[0],j=c[1];return Object(i.useEffect)((function(){u.a.get("http://localhost:8000/api/product/"+t.id).then((function(t){console.log(t),j(t.data)})).catch((function(t){return console.log(t)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Title: ",r.title&&r.title]}),Object(n.jsxs)("p",{children:["Price: ",r.price&&r.price]}),Object(n.jsxs)("p",{children:["Description: ",r.description&&r.description]}),Object(n.jsx)(b.a,{to:"/"+r._id+"/edit",children:"Edit"})]})},h=function(t){var e=t.id,c=Object(i.useState)(""),r=Object(s.a)(c,2),j=r[0],o=r[1],a=Object(i.useState)(""),l=Object(s.a)(a,2),d=l[0],p=l[1],O=Object(i.useState)(""),h=Object(s.a)(O,2),x=h[0],f=h[1];Object(i.useEffect)((function(){u.a.get("http://localhost:8000/api/product/"+e).then((function(t){o(t.data.title),p(t.data.price),f(t.data.description)}))}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Update a Product"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),u.a.put("http://localhost:8000/api/product/"+e,{title:j,price:d,description:x}).then((function(t){console.log(t),Object(b.c)("/product/".concat(e))}))},children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Title"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"title",value:j,onChange:function(t){o(t.target.value)}})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Price"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"number",name:"price",value:d,onChange:function(t){p(t.target.value)}})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("label",{children:"Description"}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"text",name:"description",value:x,onChange:function(t){f(t.target.value)}})]}),Object(n.jsx)("button",{type:"submit",onClick:function(t){return window.location.href="/".concat(e)},children:"Submit"})]})]})};var x=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(b.b,{children:[Object(n.jsx)(p,{path:"/"}),Object(n.jsx)(O,{path:"/:id"}),Object(n.jsx)(h,{path:"/:id/edit"})]})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,j=e.getTTFB;c(t),n(t),i(t),r(t),j(t)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()}},[[50,1,2]]]);
//# sourceMappingURL=main.67b713fc.chunk.js.map