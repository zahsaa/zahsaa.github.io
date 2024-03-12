import{S as Z,i as ee,s as oe,k,q as j,a as q,I as te,l as x,m as D,r as O,h as I,c as C,n as z,D as v,b as B,M as ae,B as U,J as se,N as ne,O as J,u as ie}from"../../../chunks/index-af3d84ef.js";import{p as re}from"../../../chunks/parse-f0c618df.js";import{j as S}from"../../../chunks/singletons-532ef522.js";S.disable_scroll_handling;S.goto;S.invalidate;const le=S.invalidateAll;S.preload_data;S.preload_code;S.before_navigate;S.after_navigate;const ue=S.apply_action;function he(o){const e=JSON.parse(o);return e.data&&(e.data=re(e.data)),e}function ye(o,e=()=>{}){const n=async({action:a,result:i,reset:l})=>{i.type==="success"&&(l!==!1&&HTMLFormElement.prototype.reset.call(o),await le()),(location.origin+location.pathname===a.origin+a.pathname||i.type==="redirect"||i.type==="error")&&ue(i)};async function y(a){var _,m,w;a.preventDefault();const i=new URL((_=a.submitter)!=null&&_.hasAttribute("formaction")?a.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(o).action),l=new FormData(o),d=(m=a.submitter)==null?void 0:m.getAttribute("name");d&&l.append(d,((w=a.submitter)==null?void 0:w.getAttribute("value"))??"");const h=new AbortController;let r=!1;const c=await e({action:i,cancel:()=>r=!0,controller:h,data:l,form:o})??n;if(r)return;let s;try{const f=await fetch(i,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:l,signal:h.signal});s=he(await f.text()),s.type==="error"&&(s.status=f.status)}catch(f){if((f==null?void 0:f.name)==="AbortError")return;s={type:"error",error:f}}c({action:i,data:l,form:o,update:f=>n({action:i,result:s,reset:f==null?void 0:f.reset}),result:s})}return HTMLFormElement.prototype.addEventListener.call(o,"submit",y),{destroy(){HTMLFormElement.prototype.removeEventListener.call(o,"submit",y)}}}var T={};T.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];T.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];T.elizaQuits=["bye","goodbye","done","exit","quit"];T.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];T.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];T.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};T.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];T.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var t=T;function p(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}p.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<t.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=t.elizaKeywords[o][2],n=0;n<e.length;n++)this.lastchoice[o][n]=-1}};p.prototype._dataParsed=!1;p.prototype._init=function(){var o={};if(t.elizaSynons&&typeof t.elizaSynons=="object")for(var e in t.elizaSynons)o[e]="("+e+"|"+t.elizaSynons[e].join("|")+")";(!t.elizaKeywords||typeof t.elizaKeywords.length>"u")&&(t.elizaKeywords=[["###",0,[["###",[]]]]]);for(var n=/@(\S+)/,y=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,i=/(\S)\s*\*\s*$/,l=/^\s*\*\s*$/,d=/\s+/g,h=0;h<t.elizaKeywords.length;h++){var r=t.elizaKeywords[h][2];t.elizaKeywords[h][3]=h;for(var e=0;e<r.length;e++){var u=r[e];if(u[0].charAt(0)=="$"){for(var c=1;u[0].charAt[c]==" ";)c++;u[0]=u[0].substring(c),u[2]=!0}else u[2]=!1;for(var s=n.exec(u[0]);s;){var _=o[s[1]]?o[s[1]]:s[1];u[0]=u[0].substring(0,s.index)+_+u[0].substring(s.index+s[0].length),s=n.exec(u[0])}if(l.test(u[0]))u[0]="\\s*(.*)\\s*";else{if(s=y.exec(u[0]),s){for(var m="",w=u[0];s;)m+=w.substring(0,s.index+1),s[1]!=")"&&(m+="\\b"),m+="\\s*(.*)\\s*",s[2]!="("&&s[2]!="\\"&&(m+="\\b"),m+=s[2],w=w.substring(s.index+s[0].length),s=y.exec(w);u[0]=m+w}if(s=a.exec(u[0]),s){var m="\\s*(.*)\\s*";s[1]!=")"&&s[1]!="\\"&&(m+="\\b"),u[0]=m+u[0].substring(s.index-1+s[0].length)}if(s=i.exec(u[0]),s){var m=u[0].substring(0,s.index+1);s[1]!="("&&(m+="\\b"),u[0]=m+"\\s*(.*)\\s*"}}u[0]=u[0].replace(d,"\\s+"),d.lastIndex=0}}if(t.elizaKeywords.sort(this._sortKeywords),p.prototype.pres={},p.prototype.posts={},t.elizaPres&&t.elizaPres.length){for(var f=new Array,e=0;e<t.elizaPres.length;e+=2)f.push(t.elizaPres[e]),p.prototype.pres[t.elizaPres[e]]=t.elizaPres[e+1];p.prototype.preExp=new RegExp("\\b("+f.join("|")+")\\b")}else p.prototype.preExp=/####/,p.prototype.pres["####"]="####";if(t.elizaPosts&&t.elizaPosts.length){for(var f=new Array,e=0;e<t.elizaPosts.length;e+=2)f.push(t.elizaPosts[e]),p.prototype.posts[t.elizaPosts[e]]=t.elizaPosts[e+1];p.prototype.postExp=new RegExp("\\b("+f.join("|")+")\\b")}else p.prototype.postExp=/####/,p.prototype.posts["####"]="####";(!t.elizaQuits||typeof t.elizaQuits.length>"u")&&(t.elizaQuits=[]),p.prototype._dataParsed=!0};p.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};p.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var n=o.split("."),y=0;y<n.length;y++){var a=n[y];if(a!=""){for(var i=0;i<t.elizaQuits.length;i++)if(t.elizaQuits[i]==a)return this.quit=!0,this.getFinal();var l=this.preExp.exec(a);if(l){for(var d="",h=a;l;)d+=h.substring(0,l.index)+this.pres[l[1]],h=h.substring(l.index+l[0].length),l=this.preExp.exec(h);a=d+h}this.sentence=a;for(var r=0;r<t.elizaKeywords.length;r++)if(a.search(new RegExp("\\b"+t.elizaKeywords[r][0]+"\\b","i"))>=0&&(e=this._execRule(r)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var r=this._getRuleIndexByKey("xnone");r>=0&&(e=this._execRule(r))}return e!=""?e:"I am at a loss for words."};p.prototype._execRule=function(o){for(var e=t.elizaKeywords[o],n=e[2],y=/\(([0-9]+)\)/,a=0;a<n.length;a++){var i=this.sentence.match(n[a][0]);if(i!=null){var l=n[a][1],d=n[a][2],h=this.noRandom?0:Math.floor(Math.random()*l.length);this.noRandom&&this.lastchoice[o][a]>h||this.lastchoice[o][a]==h?(h=++this.lastchoice[o][a],h>=l.length&&(h=0,this.lastchoice[o][a]=-1)):this.lastchoice[o][a]=h;var r=l[h];if(this.debug&&alert(`match:
key: `+t.elizaKeywords[o][0]+`
rank: `+t.elizaKeywords[o][1]+`
decomp: `+n[a][0]+`
reasmb: `+r+`
memflag: `+d),r.search("^goto ","i")==0){var u=this._getRuleIndexByKey(r.substring(5));if(u>=0)return this._execRule(u)}var c=y.exec(r);if(c){for(var s="",_=r;c;){var m=i[parseInt(c[1])],w=this.postExp.exec(m);if(w){for(var f="",P=m;w;)f+=P.substring(0,w.index)+this.posts[w[1]],P=P.substring(w.index+w[0].length),w=this.postExp.exec(P);m=f+P}s+=_.substring(0,c.index)+m,_=_.substring(c.index+c[0].length),c=y.exec(_)}r=s+_}if(r=this._postTransform(r),d)this._memSave(r);else return r}}return""};p.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),t.elizaPostTransforms&&t.elizaPostTransforms.length)for(var e=0;e<t.elizaPostTransforms.length;e+=2)o=o.replace(t.elizaPostTransforms[e],t.elizaPostTransforms[e+1]),t.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var n=/^([a-z])/,y=n.exec(o);y&&(o=y[0].toUpperCase()+o.substring(1))}return o};p.prototype._getRuleIndexByKey=function(o){for(var e=0;e<t.elizaKeywords.length;e++)if(t.elizaKeywords[e][0]==o)return e;return-1};p.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};p.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],n=o+1;n<this.mem.length;n++)this.mem[n-1]=this.mem[n];return this.mem.length--,e}else return""};p.prototype.getFinal=function(){return t.elizaFinals?t.elizaFinals[Math.floor(Math.random()*t.elizaFinals.length)]:""};p.prototype.getInitial=function(){return t.elizaInitials?t.elizaInitials[Math.floor(Math.random()*t.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var de=p;const{document:$}=ne;function V(o,e,n){const y=o.slice();return y[4]=e[n],y}function X(o){let e,n,y=o[4].text+"",a,i;return{c(){e=k("article"),n=k("span"),a=j(y),this.h()},l(l){e=x(l,"ARTICLE",{class:!0});var d=D(e);n=x(d,"SPAN",{});var h=D(n);a=O(h,y),h.forEach(I),d.forEach(I),this.h()},h(){z(e,"class",i=J(o[4].user)+" svelte-oppqp6")},m(l,d){B(l,e,d),v(e,n),v(n,a)},p(l,d){d&1&&y!==(y=l[4].text+"")&&ie(a,y),d&1&&i!==(i=J(l[4].user)+" svelte-oppqp6")&&z(e,"class",i)},d(l){l&&I(e)}}}function ce(o){let e,n,y,a,i,l,d,h,r,u,c,s,_,m,w,f,P,H,Y,F,N,R=o[0],W=[];for(let g=0;g<R.length;g+=1)W[g]=X(V(o,R,g));return{c(){e=k("link"),n=k("style"),y=j(`nav {\r
      margin-left: 10%;\r
      margin-right: 10%;\r
    }`),a=q(),i=k("div"),l=k("h1"),d=j("TODO: Complete assignment"),h=q(),r=k("div");for(let g=0;g<W.length;g+=1)W[g].c();u=q(),c=k("article"),s=k("span"),_=q(),m=k("span"),w=q(),f=k("span"),P=q(),H=k("form"),Y=k("input"),this.h()},l(g){const E=te("svelte-1jh6dql",$.head);e=x(E,"LINK",{rel:!0,href:!0}),n=x(E,"STYLE",{});var b=D(n);y=O(b,`nav {\r
      margin-left: 10%;\r
      margin-right: 10%;\r
    }`),b.forEach(I),E.forEach(I),a=C(g),i=x(g,"DIV",{class:!0});var A=D(i);l=x(A,"H1",{});var G=D(l);d=O(G,"TODO: Complete assignment"),G.forEach(I),h=C(A),r=x(A,"DIV",{class:!0});var M=D(r);for(let L=0;L<W.length;L+=1)W[L].l(M);u=C(M),c=x(M,"ARTICLE",{id:!0,class:!0});var K=D(c);s=x(K,"SPAN",{class:!0}),D(s).forEach(I),_=C(K),m=x(K,"SPAN",{class:!0}),D(m).forEach(I),w=C(K),f=x(K,"SPAN",{class:!0}),D(f).forEach(I),K.forEach(I),M.forEach(I),P=C(A),H=x(A,"FORM",{method:!0});var Q=D(H);Y=x(Q,"INPUT",{type:!0,name:!0}),Q.forEach(I),A.forEach(I),this.h()},h(){z(e,"rel","stylesheet"),z(e,"href","/pico.min.css"),z(s,"class","circle svelte-oppqp6"),z(m,"class","circle svelte-oppqp6"),z(f,"class","circle svelte-oppqp6"),z(c,"id","visible"),z(c,"class","svelte-oppqp6"),z(r,"class","scrollable"),z(Y,"type","text"),z(Y,"name","text"),z(H,"method","post"),z(i,"class","container")},m(g,E){v($.head,e),v($.head,n),v(n,y),B(g,a,E),B(g,i,E),v(i,l),v(l,d),v(i,h),v(i,r);for(let b=0;b<W.length;b+=1)W[b].m(r,null);v(r,u),v(r,c),v(c,s),v(c,_),v(c,m),v(c,w),v(c,f),v(i,P),v(i,H),v(H,Y),F||(N=ae(ye.call(null,H,o[2])),F=!0)},p(g,[E]){if(E&1){R=g[0];let b;for(b=0;b<R.length;b+=1){const A=V(g,R,b);W[b]?W[b].p(A,E):(W[b]=X(A),W[b].c(),W[b].m(r,u))}for(;b<W.length;b+=1)W[b].d(1);W.length=R.length}},i:U,o:U,d(g){I(e),I(n),g&&I(a),g&&I(i),se(W,g),F=!1,N()}}}function me(o,e,n){let y=new de,a=[{user:"eliza",text:y.getInitial()}];async function i(d){a.push({user:"me",text:d}),n(0,a);var h=document.getElementById("visible");h.style.display="flex",await new Promise(r=>setTimeout(r,1e3+Math.random()*1e3)),h.style.display="none",n(0,a=a.concat({user:"eliza",text:y.transform(d)}))}return[a,i,({form:d,data:h,action:r,cancel:u})=>{u();const c=h.get("text");i(c),d.reset()}]}class we extends Z{constructor(e){super(),ee(this,e,me,ce,oe,{})}}export{we as default};
