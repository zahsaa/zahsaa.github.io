import{S as q,i as z,s as C,k,q as v,a as O,l as L,m as T,r as M,h as p,c as P,n as E,b as d,D as g,P as R,u as U,B as y,J as H,o as J,p as m,U as D}from"../../../../chunks/index-af3d84ef.js";function I(a,e,n){const f=a.slice();return f[8]=e[n].letter,f[9]=e[n].top,f[10]=e[n].left,f[11]=e[n].ani,f[13]=n,f}function N(a){let e,n=a[8]+"",f,o,i,h;function _(){return a[4](a[8],a[13])}return{c(){e=k("button"),f=v(n),o=O(),this.h()},l(c){e=L(c,"BUTTON",{style:!0,class:!0});var l=T(e);f=M(l,n),o=P(l),l.forEach(p),this.h()},h(){m(e,"position","sticky"),m(e,"top",a[9]+"%"),m(e,"left",a[10]+"%"),E(e,"class","svelte-159r2j4"),D(e,"ani",a[11])},m(c,l){d(c,e,l),g(e,f),g(e,o),i||(h=R(e,"click",_),i=!0)},p(c,l){a=c,l&1&&n!==(n=a[8]+"")&&U(f,n),l&1&&m(e,"top",a[9]+"%"),l&1&&m(e,"left",a[10]+"%"),l&1&&D(e,"ani",a[11])},d(c){c&&p(e),i=!1,h()}}}function V(a){let e,n,f,o,i,h,_,c=a[0],l=[];for(let s=0;s<c.length;s+=1)l[s]=N(I(a,c,s));return{c(){e=k("button"),n=v("Logga in som "),f=v(a[1]),o=O(),i=k("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=L(s,"BUTTON",{class:!0});var r=T(e);n=M(r,"Logga in som "),f=M(r,a[1]),r.forEach(p),o=P(s),i=L(s,"DIV",{class:!0});var t=T(i);for(let u=0;u<l.length;u+=1)l[u].l(t);t.forEach(p),this.h()},h(){E(e,"class","login svelte-159r2j4"),E(i,"class","container svelte-159r2j4")},m(s,r){d(s,e,r),g(e,n),g(e,f),d(s,o,r),d(s,i,r);for(let t=0;t<l.length;t+=1)l[t].m(i,null);h||(_=R(e,"click",a[3]),h=!0)},p(s,[r]){if(r&2&&U(f,s[1]),r&5){c=s[0];let t;for(t=0;t<c.length;t+=1){const u=I(s,c,t);l[t]?l[t].p(u,r):(l[t]=N(u),l[t].c(),l[t].m(i,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=c.length}},i:y,o:y,d(s){s&&p(e),s&&p(o),s&&p(i),H(l,s),h=!1,_()}}}let W=100,w=100;function A(a,e,n){let f="ABCDEFGHIJKLMNOPQRSTVWXYZ<".split(""),o=[],i="";function h(r){let t,u,B,S,j=0;t=W*Math.random(),B=o.filter(b=>Math.abs(b.left-t)<10);do j++,u=w*Math.random(),S=B.filter(b=>Math.abs(b.top-u)<5);while(S.length>0&&j<10);return{letter:r,top:u,left:t,ani:!1}}function _(){n(0,o=[]);for(let r of f)o.push(h(r))}J(()=>{_(),console.log(o),setInterval(()=>{_()},3e3)});function c(r,t){if(r==="<"){n(1,i=i.substring(0,i.length-1));return}n(1,i+=r),n(0,o[t]=h(r),o),n(0,o[t].ani=!0,o),n(0,o),setTimeout(()=>{n(0,o[t].ani=!1,o)},1e3)}return[o,i,c,()=>{alert(i!=""?"logged in as "+i:"Enter username!")},(r,t)=>c(r,t)]}class G extends q{constructor(e){super(),z(this,e,A,V,C,{})}}export{G as default};
