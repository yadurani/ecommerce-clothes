(this["webpackJsonpecommerce-prueba"]=this["webpackJsonpecommerce-prueba"]||[]).push([[5,8],{110:function(n,t,e){"use strict";e.r(t);var i,r,c,a,o,s,d,l,b=e(1),u=e(3),j=e(4),p=e(2),x=j.b.section(i||(i=Object(u.a)(["\n  margin-bottom: 70px;\n  width: 100%;\n"]))),g=j.b.img(r||(r=Object(u.a)(["\n  width: 100%;\n"]))),f=function(){return Object(p.jsx)(x,{children:Object(p.jsx)(g,{src:"/images/banner-principal-desktop.png",alt:"Banner principal"})})},O=j.b.section(c||(c=Object(u.a)(["\n  display: grid;\n  grid-gap: 20px 0;\n  margin-bottom: 70px;\n  @media(min-width: 561px) {\n    grid-gap: 0 52px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),h=j.b.div(a||(a=Object(u.a)(["\n  position: relative;\n  width: 100%;\n"]))),m=j.b.img(o||(o=Object(u.a)(["\n  width: 100%;\n"]))),v=j.b.h3(s||(s=Object(u.a)(["\n  bottom: 0%;\n  color: white;\n  font-size: 50px;\n  font-style: italic;\n  font-weight: bolder;\n  left: 0;\n  margin: 0.8em 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-shadow: -5px 5px 10px rgb(0 0 0 / 80%);\n  text-transform: uppercase;\n  @media(max-width: 767px) {\n    font-size: 30px;\n  }\n"]))),w=function(){return Object(p.jsxs)(O,{className:"container",children:[Object(p.jsxs)(h,{children:[Object(p.jsx)(m,{src:"/images/categorias-destacadas-moda-infantil.png",alt:"Moda infantil"}),Object(p.jsx)(v,{children:"Moda infantil"})]}),Object(p.jsxs)(h,{children:[Object(p.jsx)(m,{src:"/images/categorias-destacadas-proteccion.png",alt:"Moda infantil"}),Object(p.jsx)(v,{children:"Protecci\xf3n"})]})]})},k=e(58),y=e(76),S=e.n(y),A=e(60),C=e(61),z=e(57),E=e(59),F=e(64),M=e.n(F),B=e(65),N=e(20),T=e(62),R=function(){var n=Object(b.useState)([]),t=Object(N.a)(n,2),e=t[0],i=t[1],r=Object(b.useState)(null),c=Object(N.a)(r,2),a=c[0],o=c[1],s=Object(b.useState)(!1),d=Object(N.a)(s,2),l=d[0],u=d[1],j=function(){var n=Object(B.a)(M.a.mark((function n(){var t,e;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,Object(T.a)();case 4:t=n.sent,e=t.data.results,i(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o("Hubo un error, intentelo nuevamente");case 12:return n.prev=12,u(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return Object(b.useEffect)((function(){j()}),[]),{data:e,error:a,loading:l}},q=e(55),P=j.b.div(d||(d=Object(u.a)(["\n  margin: 0 15px;\n  @media(min-width: 561px) {\n    width: 85%;\n    margin: auto;\n    margin-bottom: 70px;\n  }\n"]))),D=function(){var n=R(),t=n.data,e=n.error;return n.loading?Object(p.jsx)(C.a,{carousel:!0}):e?Object(p.jsx)(z.default,{}):t.length?Object(p.jsx)(P,{children:Object(p.jsx)(S.a,Object(k.a)(Object(k.a)({},E.h),{},{children:null===t||void 0===t?void 0:t.map((function(n){return Object(p.jsx)(A.a,Object(k.a)({slider:!0},n),n.id)}))}))}):Object(p.jsx)(q.a,{})},I=j.b.h2(l||(l=Object(u.a)(["\n  margin-top: 0;\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 50px;\n  font-weight: bold;\n"]))),J=function(){return Object(p.jsxs)("section",{className:"container margin-0",children:[Object(p.jsx)(I,{children:"PRODUCTOS M\xc1S BUSCADOS"}),Object(p.jsx)(D,{})]})};t.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(w,{}),Object(p.jsx)(J,{})]})}},53:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return c}));var i=function(n,t){var e=Math.pow(10,0),i=t/n*100-100;return parseInt(i*e)},r=function(n){return new Intl.NumberFormat("es-ES").format(n)},c=function(n){for(var t=[],e=0;e<n;e++)t.push(e);return t}},55:function(n,t,e){"use strict";var i,r=e(3),c=(e(1),e(4)),a=e(2),o=c.b.div(i||(i=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 40px 0;\n"])));t.a=function(){return Object(a.jsxs)(o,{children:["\ud83d\ude1e\u2639\ud83d\ude1e",Object(a.jsx)("p",{children:"No tienes productos."})]})}},57:function(n,t,e){"use strict";e.r(t);var i,r=e(3),c=(e(1),e(4)),a=e(2),o=c.b.div(i||(i=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 40px 0;\n"])));t.default=function(){return Object(a.jsxs)(o,{children:["\ud83d\ude1e\u2639\ud83d\ude1e",Object(a.jsx)("p",{children:"Error, vuelve a intentarlo."})]})}},59:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"c",(function(){return j})),e.d(t,"b",(function(){return p})),e.d(t,"f",(function(){return x})),e.d(t,"e",(function(){return g})),e.d(t,"d",(function(){return f})),e.d(t,"g",(function(){return O})),e.d(t,"h",(function(){return h}));var i,r=e(58),c=e(75),a=e(3),o=(e(1),e(4)),s=e(2),d=o.b.button(i||(i=Object(a.a)(["\n  background-color: transparent;\n  border: none;\n"]))),l=function(n){var t=n.currentSlide,e=n.slideCount,i=Object(c.a)(n,["currentSlide","slideCount"]);return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},i),{},{className:"slick-next slick-arrow"+(t===e-1?" slick-disabled":""),"aria-hidden":"true","aria-disabled":t===e-1,type:"button",children:Object(s.jsx)("img",{src:"/images/arrowRight.png",alt:"Arrow Right",height:"50"})}))},b=function(n){var t=n.currentSlide,e=(n.slideCount,Object(c.a)(n,["currentSlide","slideCount"]));return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{className:"slick-prev slick-arrow"+(0===t?" slick-disabled":""),"aria-hidden":"true","aria-disabled":0===t,type:"button",children:Object(s.jsx)("img",{src:"/images/arrowLeft.png",alt:"Arrow Right",height:"50"})}))},u="https://api.mercadolibre.com/sites/MCO/search",j="?q=",p="category=",x="MCO1430",g="MCO157294",f="discount=5-100",O="limit=8",h={infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,arrows:!0,nextArrow:Object(s.jsx)(l,{}),prevArrow:Object(s.jsx)(b,{}),responsive:[{breakpoint:960,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:560,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}}]}},60:function(n,t,e){"use strict";var i,r,c,a,o,s,d,l,b,u=e(3),j=(e(1),e(4)),p=e(19),x=e(24),g=e(53),f=e(23),O=e(2),h=j.b.div(i||(i=Object(u.a)(["\n  border: 1px solid #E6E6E6;\n  position: relative;\n  text-align: center;\n  ","\n"])),(function(n){return n.slider&&Object(j.a)(r||(r=Object(u.a)(["\n    @media(min-width: 561px) {\n      & {\n        margin: 0 20px;\n      }\n    }\n  "])))})),m=j.b.img(c||(c=Object(u.a)(["\n  width: 100%;\n  height: 250px;\n  object-fit: contain;\n"]))),v=j.b.div(a||(a=Object(u.a)(["\n  background-color: #F4F4F4;\n  border: 1px solid #E6E6E6;\n  padding: 20px;\n  text-align: left;\n"]))),w=j.b.span(o||(o=Object(u.a)(["\n  background-color: #5B17AA;\n  color: white;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: bold;\n  left: 12px;\n  padding: 5px 15px;\n  position: absolute;\n  text-align: center;\n  top: 12px;\n"]))),k=j.b.h3(s||(s=Object(u.a)(["\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  display: -webkit-box;\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 16px;\n  font-weight: normal;\n  margin-bottom: 10px;\n"]))),y=j.b.p(d||(d=Object(u.a)(["\n  color: #5B17AA;\n  display: flex;\n  font-size: 18px;\n  font-weight: bold;\n  justify-content: space-between;\n  margin: 0 0 15px;\n"]))),S=j.b.span(l||(l=Object(u.a)(["\n  color: #6B6B6B;\n  font-size: 16px;\n  font-weight: normal;\n  opacity: 0.8;\n  text-decoration: line-through;\n"]))),A=j.b.button(b||(b=Object(u.a)(["\n  align-items: center;\n  background-color: #000000;\n  border: none;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  font-size: 14px;\n  height: 40px;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  span {\n    svg {\n      margin-right: 10px;\n    }\n    align-items: center;\n    display: flex;\n  }\n"]))),C={addCart:f.a};t.a=Object(x.b)((function(n,t){var e=t.id;return{isAdd:Object(f.e)(e)(n)}}),C)((function(n){var t=n.id,e=n.title,i=n.price,r=n.original_price,c=n.thumbnail,a=n.slider,o=n.isAdd,s=n.addCart,d=o?"Producto agregado":"Agregar al carrito";return Object(O.jsxs)(h,{slider:a,children:[r&&Object(O.jsxs)(w,{children:[Object(g.a)(r,i),"%"]}),Object(O.jsx)(m,{src:c,alt:e}),Object(O.jsxs)(v,{children:[Object(O.jsx)(k,{children:e}),Object(O.jsxs)(y,{children:["$",Object(g.b)(i),r&&Object(O.jsxs)(S,{children:["$",Object(g.b)(r)]})]}),Object(O.jsx)(A,{onClick:function(){return s({id:t,title:e,price:i,quantity:1})},children:Object(O.jsxs)("span",{children:[Object(O.jsx)(p.a,{size:"1.3em"})," ",d]})})]})]})}))},61:function(n,t,e){"use strict";var i,r,c,a=e(3),o=(e(1),e(4)),s=e(53),d=e(2),l=o.b.ul(i||(i=Object(a.a)(["\n  display: grid;\n  grid-gap: 15px 62px;\n  grid-template-columns: repeat(4, 1fr);\n  list-style: none;\n  margin: 0 auto 70px;\n  padding: 0;\n  width: ",";\n  @media(max-width: 960px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 15px 42px;\n  }\n  @media(max-width: 560px) {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 15px 0;\n  }\n"])),(function(n){return n.carousel&&"80%"})),b=Object(o.c)(r||(r=Object(a.a)(["\n  from {\n    background-position: 0% 0%;\n  }\n  to {\n    background-position: -135% 0%;\n  }\n"]))),u=o.b.li(c||(c=Object(a.a)(["\n  -moz-column-break-inside: avoid;\n  -webkit-column-break-inside: avoid;\n  animation: "," 1.2s ease-in-out infinite;\n  background-image: linear-gradient(to right, #9b9b9b 0%, #F8F8F8 50%, #969595 100%);\n  background-position: 0% 0%;\n  background-size: 400% 400%;\n  display: inline-block;\n  height: 350px;\n  margin: 5px 0;\n  opacity: 0.8;\n  width: 100%;\n"])),b);t.a=function(n){var t=n.quantity,e=void 0===t?4:t,i=n.carousel,r=Object(s.c)(e);return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(l,{carousel:i,children:null===r||void 0===r?void 0:r.map((function(n){return Object(d.jsx)(u,{},n)}))})})}},62:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o}));var i=e(66),r=e.n(i),c=e(59),a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.e,t="".concat(c.a,"?").concat(c.b).concat(n,"&").concat(c.d,"&").concat(c.g);return r.a.get(t)},o=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.f,e="".concat(c.a).concat(c.c).concat(n,"&").concat(c.b).concat(t);return r.a.get(e)}}}]);
//# sourceMappingURL=5.442fe9b2.chunk.js.map