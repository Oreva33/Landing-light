(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),i=c.n(n),j=(c(9),c(2)),r=(c(10),c(11),c(0)),l=function(){return Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"http://www.google.com/",children:"TRIPS"})}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"http://www.google.com/",children:"RECENTLY VIEWED"})}),Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"http://www.google.com/",children:"BOOKINGS"})})]})},d=(c(13),c(14),function(){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("hr",{})})}),b=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(l,{}),Object(r.jsx)(d,{})]})},o=(c(15),function(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),l=Object(j.a)(i,2),d=l[0],b=l[1],o=Object(s.useState)(!1),O=Object(j.a)(o,2),h=O[0],m=O[1],u=Object(s.useState)(""),x=Object(j.a)(u,2),p=x[0],v=x[1],f=Object(s.useState)(""),N=Object(j.a)(f,2),g=N[0],w=N[1];return Object(r.jsx)("form",{onSubmit:function(t){if(t.preventDefault(),a.length>12||a.length<12)m(!0);else{var c={cardNum:a,expiredDate:d};e.onData(c),b(""),n(""),v(""),w("")}},children:Object(r.jsxs)("div",{className:"input-form",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"first-label ".concat(h?"invalid":""," "),htmlFor:"first",children:"Credit card number"}),Object(r.jsx)("input",{className:"first ".concat(h?"invalid":""," "),id:"first",type:"number",value:a,onChange:function(e){n(e.target.value),m(!1)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"second",children:"Expiration date"}),Object(r.jsx)("input",{className:"second",id:"second",type:"month",value:d,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"third",children:"Security code"}),Object(r.jsx)("input",{id:"third",className:"third",type:"text",value:p,onChange:function(e){v(e.target.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"fourth",children:"Postal Code"}),Object(r.jsx)("input",{id:"fourth",className:"fourth",type:"text",value:g,onChange:function(e){w(e.target.value)}})]}),Object(r.jsxs)("button",{className:"button-1",type:"submit",children:["Add Card"," "]})]})})}),O=(c(16),c.p+"static/media/simcard.41463026.PNG"),h=function(e){var t=e.cardNumber,c="";if(void 0===t)c=" ";else for(var s=t.split(""),a=0;a<3;a++){c=s.splice(s.length-4,s.length).join("")+" "+c}return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"top",children:"CARD NUMBER"}),Object(r.jsx)("div",{className:"lowertop",children:c}),Object(r.jsx)("div",{className:"middle",children:Object(r.jsx)("img",{src:O,alt:"simcard"})}),Object(r.jsx)("div",{className:"bottom",children:"EXPIRATION DATE"}),Object(r.jsxs)("div",{className:"inner-wrapper",children:[Object(r.jsxs)("div",{className:"st-item",children:[Object(r.jsx)("p",{className:"date",children:e.date}),Object(r.jsx)("p",{className:"name",children:"John Doe"})]}),Object(r.jsxs)("div",{className:"last",children:[Object(r.jsx)("div",{className:"circle1"}),Object(r.jsx)("div",{className:"circle2"}),Object(r.jsx)("div",{})]})]})]})},m=(c(17),c.p+"static/media/visa.91d43da8.PNG"),u=function(){return Object(r.jsxs)("div",{className:"payment-info",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Payment Information "}),Object(r.jsx)("p",{children:"Choose your method of payment."})]}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"img1",src:m,alt:"visa"})})]})},x=(c(18),function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],i=119.64;return Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsxs)("div",{className:"subtotal",children:[Object(r.jsx)("p",{children:"Subtotal"}),Object(r.jsxs)("p",{children:["\u20a6",2497]})]}),Object(r.jsxs)("div",{className:"estimated-tax",children:[Object(r.jsx)("p",{children:"Estimated TAX"}),Object(r.jsxs)("p",{children:["\u20a6",i]})]}),Object(r.jsxs)("div",{className:"promotional-code",children:[Object(r.jsx)("p",{children:"Promotional Code: Z4KXLM9A"}),Object(r.jsxs)("p",{children:["\u20a6",-60]})]}),Object(r.jsx)(d,{}),Object(r.jsxs)("div",{className:"estimated-tax",children:[Object(r.jsx)("span",{children:Object(r.jsx)("button",{className:"button-2",onClick:function(){n(2556.64)},children:"Complete payment"})}),Object(r.jsxs)("p",{className:"total-size",children:["Total: #",c]})]})]})}),p=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=c.cardNum,i=c.expiredDate;return Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{}),Object(r.jsx)(u,{}),Object(r.jsxs)("div",{className:"main-wrapper",children:[Object(r.jsx)(h,{className:"master-card1",date:i,cardNumber:n}),Object(r.jsx)(o,{className:"input-form1",onData:function(e){a(e)}})]}),Object(r.jsx)(d,{}),Object(r.jsx)(x,{})]})};i.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.f8cd8129.chunk.js.map