import{S as B,i as J,s as L,k as p,q as y,a as j,l as g,m as b,r as E,h as d,c as q,b as I,D as m,u as S,B as w,J as R,e as A,n as C,Z as D}from"../../../../chunks/index-38eac70c.js";function H(o,t,a){const e=o.slice();return e[1]=t[a],e}function N(o,t,a){const e=o.slice();return e[4]=t[a][0],e[5]=t[a][1],e}function O(o){let t,a,e=o[4]+"",l,i,n=o[5]+"",f,u;return{c(){t=p("article"),a=p("p"),l=y(e),i=y(": "),f=y(n),this.h()},l(h){t=g(h,"ARTICLE",{class:!0});var s=b(t);a=g(s,"P",{});var r=b(a);l=E(r,e),i=E(r,": "),f=E(r,n),r.forEach(d),s.forEach(d),this.h()},h(){C(t,"class",u=D(o[4])+" svelte-1ym6rcr")},m(h,s){I(h,t,s),m(t,a),m(a,l),m(a,i),m(a,f)},p(h,s){s&1&&e!==(e=h[4]+"")&&S(l,e),s&1&&n!==(n=h[5]+"")&&S(f,n),s&1&&u!==(u=D(h[4])+" svelte-1ym6rcr")&&C(t,"class",u)},d(h){h&&d(t)}}}function P(o){let t,a=Object.entries(o[1]),e=[];for(let l=0;l<a.length;l+=1)e[l]=O(N(o,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=A()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=A()},m(l,i){for(let n=0;n<e.length;n+=1)e[n].m(l,i);I(l,t,i)},p(l,i){if(i&1){a=Object.entries(l[1]);let n;for(n=0;n<a.length;n+=1){const f=N(l,a,n);e[n]?e[n].p(f,i):(e[n]=O(f),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=a.length}},d(l){R(e,l),l&&d(t)}}}function M(o){let t,a,e="Showing results for: "+o[0].params.category,l,i,n,f,u,h=o[0].response,s=[];for(let r=0;r<h.length;r+=1)s[r]=P(H(o,h,r));return{c(){t=p("main"),a=p("h2"),l=y(e),i=j(),n=p("hr"),f=j(),u=p("div");for(let r=0;r<s.length;r+=1)s[r].c()},l(r){t=g(r,"MAIN",{});var _=b(t);a=g(_,"H2",{});var c=b(a);l=E(c,e),c.forEach(d),i=q(_),n=g(_,"HR",{}),f=q(_),u=g(_,"DIV",{});var v=b(u);for(let k=0;k<s.length;k+=1)s[k].l(v);v.forEach(d),_.forEach(d)},m(r,_){I(r,t,_),m(t,a),m(a,l),m(t,i),m(t,n),m(t,f),m(t,u);for(let c=0;c<s.length;c+=1)s[c].m(u,null)},p(r,[_]){if(_&1&&e!==(e="Showing results for: "+r[0].params.category)&&S(l,e),_&1){h=r[0].response;let c;for(c=0;c<h.length;c+=1){const v=H(r,h,c);s[c]?s[c].p(v,_):(s[c]=P(v),s[c].c(),s[c].m(u,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=h.length}},i:w,o:w,d(r){r&&d(t),R(s,r)}}}function T(o,t,a){let{data:e}=t;return o.$$set=l=>{"data"in l&&a(0,e=l.data)},[e]}class Z extends B{constructor(t){super(),J(this,t,T,M,L,{data:0})}}export{Z as default};
