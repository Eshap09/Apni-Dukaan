(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,c,s){},102:function(e,c,s){},103:function(e,c,s){},104:function(e,c,s){},105:function(e,c,s){},108:function(e,c,s){"use strict";s.r(c);var a=s(2),t=s(0),n=s.n(t),i=s(18),l=s.n(i),r=s(25),j=s(9),o=(s(72),s(60)),d=s.n(o),b=s(61),h=s.n(b),m=s(138);s(73);var O=function(){return Object(a.jsxs)("nav",{className:"nav",children:[Object(a.jsxs)("div",{className:"nav__left",children:[Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("img",{className:"nav__logo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rOqWkRzc8nnZwzxGZVza0tFMFk825n2uTg&usqp=CAU",alt:""})}),Object(a.jsxs)("div",{className:"nav__search",children:[Object(a.jsx)("input",{type:"text",className:"nav__searchinput"}),Object(a.jsx)(d.a,{className:"nav__searchicon"})]})]}),Object(a.jsxs)("div",{className:"nav__navlinks",children:[Object(a.jsx)(r.b,{to:"/login",className:"nav__link",children:Object(a.jsxs)("div",{className:"nav__option",children:[Object(a.jsx)("span",{className:"nav__optionline1",children:"Hello "}),Object(a.jsx)("span",{className:"nav__optionline2",children:"Sign in"})]})}),Object(a.jsx)(r.b,{to:"/",className:"nav__link",children:Object(a.jsxs)("div",{className:"nav__option",children:[Object(a.jsx)("span",{className:"nav__optionline1",children:"Returns"}),Object(a.jsx)("span",{className:"nav__optionline2",children:"& Orders"})]})}),Object(a.jsx)(r.b,{to:"/checkout",className:"nav__link",children:Object(a.jsxs)("div",{className:"nav__optionbasket",children:[Object(a.jsx)(h.a,{}),Object(a.jsx)("span",{className:"nav__basket",children:"0"})]})}),Object(a.jsx)(m.a,{alt:"Eshap",src:"x.jpg",className:"nav__avatar"})]})]})},x=s(24),_=s(62),p=s.n(_);s(101),s(102);var g=function(e){var c=e.id,s=e.description,t=e.image,n=e.price,i="$".concat(n);return Object(a.jsxs)("div",{className:"pd",children:[Object(a.jsx)("img",{className:"pd__image",src:t,alt:"xyz"}),Object(a.jsx)("p",{className:"pd__desc",children:s}),Object(a.jsx)("p",{className:"price",children:i}),Object(a.jsx)("button",{className:"pd__addtocart",children:"Add to cart"})]},c)},u=s(36),v=s(38),N=(s(103),s(133)),f=s(141),k=s(140),y=s(134),C=s(135),w=s(136),F=(s(104),s(109)),G=s(137),S=Object(N.a)({root:{width:300}});function A(e){return"".concat(e,"\xb0C")}function E(){var e=S(),c=n.a.useState([100,2e3]),s=Object(x.a)(c,2),t=s[0],i=s[1];return Object(a.jsx)("div",{className:"slider",children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(F.a,{className:"slider__title",id:"range-slider",gutterBottom:!0,children:"Price"}),Object(a.jsx)(G.a,{value:t,onChange:function(e,c){i(c)},valueLabelDisplay:"on",max:2e3,min:100,step:100,"aria-labelledby":"range-slider",getAriaValueText:A})]})})}var M=Object(N.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}}));var z=function(){var e=Object(t.useState)({gilad:!1,jason:!1,antoine:!1}),c=Object(x.a)(e,2),s=c[0],n=c[1],i=Object(t.useState)({Electronics:!1,Clothes:!1,FMCG:!1}),l=Object(x.a)(i,2),r=l[0],j=l[1],o=function(e){n(Object(v.a)(Object(v.a)({},s),{},Object(u.a)({},e.target.name,e.target.checked)))},d=s.gilad,b=s.jason,h=s.antoine,m=function(e){j(Object(v.a)(Object(v.a)({},r),{},Object(u.a)({},e.target.name,e.target.checked)))},O=r.Electronics,_=r.Clothes,p=(r.Toiletries,r.FMCG),g=M();return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsx)("h5",{className:"filters__text",children:"Filters"}),Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsx)("div",{className:"brands",children:Object(a.jsx)("div",{className:g.root,children:Object(a.jsxs)(k.a,{component:"fieldset",className:g.formControl,children:[Object(a.jsx)(f.a,{className:"brand__heading",component:"legend",children:"Brands"}),Object(a.jsxs)(y.a,{className:"brand__formgroup",children:[Object(a.jsx)(C.a,{className:"brand__checkbox",control:Object(a.jsx)(w.a,{checked:d,onChange:o,name:"gilad"}),label:"Gilad Gray"}),Object(a.jsx)(C.a,{className:"brand__checkbox",control:Object(a.jsx)(w.a,{checked:b,onChange:o,name:"jason"}),label:"Jason Killian"}),Object(a.jsx)(C.a,{className:"brand__checkbox",control:Object(a.jsx)(w.a,{checked:h,onChange:o,name:"antoine"}),label:"Antoine Llorca"})]})]})})}),Object(a.jsx)("div",{className:"category",children:Object(a.jsx)("div",{className:g.root,children:Object(a.jsxs)(k.a,{component:"fieldset",className:g.formControl,children:[Object(a.jsx)(f.a,{className:"category__heading",component:"legend",children:"Category"}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(C.a,{className:"category__checkbox",control:Object(a.jsx)(w.a,{checked:O,onChange:m,name:"Electronics"}),label:"Electronics"}),Object(a.jsx)(C.a,{className:"category__checkbox",control:Object(a.jsx)(w.a,{checked:_,onChange:m,name:"Clothes"}),label:"Clothes"}),Object(a.jsx)(C.a,{className:"category__checkbox",control:Object(a.jsx)(w.a,{checked:p,onChange:m,name:"FMCG"}),label:"FMCG"})]})]})})}),Object(a.jsx)("div",{className:"price__slide",children:Object(a.jsx)(E,{})})]})]})};var B=function(){var e=Object(t.useState)([]),c=Object(x.a)(e,2),s=c[0],n=c[1];return Object(t.useEffect)((function(){p.a.get("https://fakestoreapi.com/products").then((function(e){return n(e.data)})).catch((function(e){return console.error("erroe ".concat(e))}))}),[]),Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("div",{className:"prdt__left",children:Object(a.jsx)(z,{})}),Object(a.jsxs)("div",{className:"product__right",children:[Object(a.jsx)("div",{className:"sortby",children:Object(a.jsxs)("div",{class:"btn-group sortby__button",children:[Object(a.jsx)("button",{type:"button",class:"btn btn-danger dropdown-toggle button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"SortBy"}),Object(a.jsxs)("ul",{class:"dropdown-menu",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"dropdown-item",href:"#",children:"Action"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"dropdown-item",href:"#",children:"Another action"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{class:"dropdown-item",href:"#",children:"Something else here"})})]})]})}),Object(a.jsx)("div",{className:"prdt",children:s.map((function(e){return Object(a.jsx)(g,{id:e.id,description:e.description,price:e.price,image:e.image},e.id)}))})]})]})},I=(s(105),s(39));var R=function(){return Object(a.jsx)("div",{className:"carosel__back",children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(I.a.Item,{className:"carosel__item",children:Object(a.jsx)("img",{className:"d-block w-100 carosel__img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/3/0516194d-9080-4a1b-a9f1-f261a8b8c9e31622730655218-Desktop-banner--1-.gif",alt:"First slide"})}),Object(a.jsx)(I.a.Item,{className:"carosel__item",children:Object(a.jsx)("img",{className:"d-block w-100 carosel__img",src:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/3/d2e0a562-e178-4024-96ea-6522cc2f1e8b1622735796695-Weekend-sale_DK-2.jpg",alt:"Second slide"})}),Object(a.jsx)(I.a.Item,{className:"carosel__item",children:Object(a.jsx)("img",{className:"d-block w-100 carosel__img",src:"https://i.pinimg.com/originals/42/7f/cb/427fcb19fc75f1c0d6c480e51b9260fc.jpg",alt:"Third slide"})})]})})},T=function(){return Object(a.jsx)(r.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/checkout",children:Object(a.jsx)("h1",{children:"Checkout"})}),Object(a.jsx)(j.a,{path:"/login",children:Object(a.jsx)("h1",{children:"Login"})}),Object(a.jsx)(j.a,{path:"/register",children:Object(a.jsx)("h1",{children:"Register"})}),Object(a.jsxs)(j.a,{path:"/",children:[Object(a.jsx)(O,{}),Object(a.jsx)(R,{}),Object(a.jsx)(B,{})]})]})})})};s(106);l.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))},72:function(e,c,s){},73:function(e,c,s){}},[[108,1,2]]]);
//# sourceMappingURL=main.c604c0ef.chunk.js.map