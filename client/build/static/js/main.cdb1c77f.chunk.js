(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,a){e.exports=a(314)},242:function(e,t,a){},243:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=(a(242),a(71)),c=(a(243),a(39)),u=a(89),m=a(185),s=a(189),d=a(190),p=a(98),b=a(194),f=a(191),h=a(222),E=a.n(h),v=a(195),w=a(200),O=a(198),j=a(199),y=a(197),g=a(186),x=a(30),N=a(130),k=Object(m.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},button:{boxShadow:"none",fontSize:17,textTransform:"none"},container:{display:"flex",flexWrap:"wrap"},input:{margin:e.spacing(1)}}});function B(){var e=k(),t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],i=Object(x.a)(),l=Object(g.a)(i.breakpoints.down("sm"));function m(){o(!1)}return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(E.a,null)),r.a.createElement(p.a,{variant:"h5",className:e.title,"aria-label":"menu"},r.a.createElement(b.a,{component:u.b,to:"/home",variant:"contained",color:"primary",className:e.button},"Home"),r.a.createElement(b.a,{component:u.b,to:"/users",variant:"contained",color:"primary",className:e.button},"Users")),r.a.createElement(b.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){o(!0)}},"Sign In"),r.a.createElement(b.a,{variant:"contained",color:"primary",className:e.button,"aria-hidden":"true"},"Sign Out"))),r.a.createElement(v.a,{fullScreen:l,open:n,onClose:m,fullWidth:!0,maxWidth:"xs","aria-labelledby":"responsive-dialog-title"},r.a.createElement(y.a,{id:"responsive-dialog-title"},"Sign In"),r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement("div",{className:e.container},r.a.createElement(N.a,{placeholder:"Username",className:e.input,fullWidth:!0,inputProps:{"aria-label":"description"}})),r.a.createElement("div",{className:e.container},r.a.createElement(N.a,{placeholder:"Password",type:"password",className:e.input,fullWidth:!0,inputProps:{"aria-label":"description"}})))),r.a.createElement(w.a,null,r.a.createElement(b.a,{onClick:m,color:"primary"},"Go"))))}var S=a(56),C=a(40),P=a(59),W=a(57),U=a(58),R=function(e){function t(){return Object(S.a)(this,t),Object(P.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Home page")}}]),t}(n.Component),T=a(145),Y=a(91),G=a(224),I=a.n(G);function H(){var e=r.a.useState({columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}]}),t=Object(c.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",null,r.a.createElement(I.a,{title:"Users List",columns:a.columns,data:a.data,editable:{onRowAdd:function(e){return new Promise(function(t){setTimeout(function(){t();var r=Object(Y.a)(a.data);r.push(e),n(Object(T.a)({},a,{data:r}))},600)})},onRowUpdate:function(e,t){return new Promise(function(r){setTimeout(function(){r();var o=Object(Y.a)(a.data);o[o.indexOf(t)]=e,n(Object(T.a)({},a,{data:o}))},600)})},onRowDelete:function(e){return new Promise(function(t){setTimeout(function(){t();var r=Object(Y.a)(a.data);r.splice(r.indexOf(e),1),n(Object(T.a)({},a,{data:r}))},600)})}}}))}var J=function(e){function t(){return Object(S.a)(this,t),Object(P.a)(this,Object(W.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Users page"),r.a.createElement(H,null))}}]),t}(n.Component);var z=function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:R}),r.a.createElement(l.a,{path:"/home",component:R}),r.a.createElement(l.a,{path:"/users",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[237,1,2]]]);
//# sourceMappingURL=main.cdb1c77f.chunk.js.map