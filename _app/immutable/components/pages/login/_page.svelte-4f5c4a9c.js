import{S as J,i as K,s as W,k as r,q as L,a as w,l as o,m as c,r as y,h as i,c as S,n as h,b as X,D as e,N as q,O as H,B as G,P as Y,Q as Z}from"../../../chunks/index-23a970da.js";function x(v){let a,u,_,m,t,d,B,D,f,N,b,T,A,p,I,E,O,U,g,F,P,$,k,M;return{c(){a=r("div"),u=r("h1"),_=L("Login"),m=w(),t=r("form"),d=r("label"),B=L("Email:"),D=w(),f=r("input"),N=w(),b=r("label"),T=L("Password:"),A=w(),p=r("input"),I=w(),E=r("button"),O=L("Sumbit"),U=w(),g=r("p"),F=L("Don´t have an account? "),P=r("a"),$=L("register"),this.h()},l(s){a=o(s,"DIV",{class:!0});var l=c(a);u=o(l,"H1",{});var Q=c(u);_=y(Q,"Login"),Q.forEach(i),m=S(l),t=o(l,"FORM",{class:!0});var n=c(t);d=o(n,"LABEL",{for:!0});var R=c(d);B=y(R,"Email:"),R.forEach(i),D=S(n),f=o(n,"INPUT",{id:!0}),N=S(n),b=o(n,"LABEL",{for:!0});var V=c(b);T=y(V,"Password:"),V.forEach(i),A=S(n),p=o(n,"INPUT",{id:!0}),I=S(n),E=o(n,"BUTTON",{type:!0});var j=c(E);O=y(j,"Sumbit"),j.forEach(i),n.forEach(i),U=S(l),g=o(l,"P",{});var C=c(g);F=y(C,"Don´t have an account? "),P=o(C,"A",{href:!0});var z=c(P);$=y(z,"register"),z.forEach(i),C.forEach(i),l.forEach(i),this.h()},h(){h(d,"for","Email"),h(f,"id","Email"),h(b,"for","Password"),h(p,"id","Password"),h(E,"type","submit"),h(t,"class","svelte-1bnl7q6"),h(P,"href","/register"),h(a,"class","svelte-1bnl7q6")},m(s,l){X(s,a,l),e(a,u),e(u,_),e(a,m),e(a,t),e(t,d),e(d,B),e(t,D),e(t,f),q(f,v[0]),e(t,N),e(t,b),e(b,T),e(t,A),e(t,p),q(p,v[1]),e(t,I),e(t,E),e(E,O),e(a,U),e(a,g),e(g,F),e(g,P),e(P,$),k||(M=[H(f,"input",v[2]),H(p,"input",v[3]),H(t,"submit",Z(ee))],k=!0)},p(s,[l]){l&1&&f.value!==s[0]&&q(f,s[0]),l&2&&p.value!==s[1]&&q(p,s[1])},i:G,o:G,d(s){s&&i(a),k=!1,Y(M)}}}function ee(){console.log("Form submitted!")}function te(v,a,u){let _,m;function t(){_=this.value,u(0,_)}function d(){m=this.value,u(1,m)}return[_,m,t,d]}class le extends J{constructor(a){super(),K(this,a,te,x,W,{})}}export{le as default};
