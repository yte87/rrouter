(this.webpackJsonprouterdeployment=this.webpackJsonprouterdeployment||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),m=(a(28),a(9)),u=a(10),o=a(12),i=a(11),p=(a(29),a(3)),s=a(1),E=(a(30),a(14)),d=a.n(E),h=a(21),f=a.n(h),g=a(15),v=a.n(g),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,null,r.a.createElement(s.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:d.a,alt:"city"})}}),r.a.createElement(s.c,{path:"/products",render:function(){return r.a.createElement("img",{src:f.a,alt:"city"})}}),r.a.createElement(s.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"city"})}}),r.a.createElement(s.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:v.a,alt:"city"})}}),r.a.createElement(s.c,{render:function(){return r.a.createElement("img",{src:d.a,alt:"city"})}})))},b=(a(36),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),x=function(){var e=b.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},j=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},k=[{id:1,title:"title1",author:"author1",text:"text1"},{id:2,title:"title2",author:"author2",text:"text2"},{id:3,title:"title3",author:"author3",text:"text3"}],w=function(){var e=k.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},z=function(e){return r.a.createElement("acrticle",{className:"product"},r.a.createElement("h1",null,e.id))},J=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona z produktami"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powrot do listy"))},O=(a(37),["car","bike","motorcycle"]),N=function(){var e=O.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produktow"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},S=(a(38),function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e.handleChange=function(t){e.setState({value:t.target.value})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",null,r.a.createElement("h3",null,"Napisz"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomosc"}),r.a.createElement("button",null,"Wyslij")),r.a.createElement(s.a,{when:this.state.value,message:"masz niewypelniony formularz, chcesz przejsc dalej?"}))}}]),a}(r.a.Component)),F=function(){return r.a.createElement(s.c,{render:function(){return r.a.createElement(s.b,{to:"/login"})}})},C=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlfor:""},"Podaj Login ",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlfor:""},"Podaj Haslo ",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},P=function(){return r.a.createElement("div",null,"Strona bledu")},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,null,r.a.createElement(s.c,{path:"/",exact:!0,component:w}),r.a.createElement(s.c,{path:"/products",component:N}),r.a.createElement(s.c,{path:"/product/:id",component:J}),r.a.createElement(s.c,{path:"/contact",component:S}),r.a.createElement(s.c,{path:"/admin",component:F}),r.a.createElement(s.c,{path:"/login",component:C}),r.a.createElement(s.c,{component:P})))},L=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Footer"),r.a.createElement(s.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jestes na stronie glownej")}}),r.a.createElement(s.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.url)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.path)))}}),r.a.createElement(s.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.url)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.path)))}}))}),T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(x,null)),r.a.createElement("section",{className:"page"},r.a.createElement(B,null))),r.a.createElement("footer",null,r.a.createElement(L,null))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.0d851568.chunk.js.map