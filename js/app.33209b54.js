(function(){"use strict";var t={6362:function(t,e,n){var o=n(9242),i=n(3396);function r(t,e,n,o,r,s){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var s={name:"App"},a=n(89);const u=(0,a.Z)(s,[["render",r]]);var l=u,c=n(2483);const h=(0,i._)("h1",null,"Connection réussie",-1),g=[h];function d(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",null,g)}var p={name:"SuccessHelloWorld"};const f=(0,a.Z)(p,[["render",d]]);var m=f,w=n(7139);const v={class:"mire"},b={key:0},M=(0,i._)("label",{for:"input1"},"Identifiant",-1),y=(0,i._)("label",{for:"input2"},"Mot de passe",-1);function _(t,e,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",v,[s.loggedMessage?((0,i.wg)(),(0,i.iD)("h1",b,(0,w.zw)(s.loggedMessage),1)):(0,i.kq)("",!0),M,(0,i.wy)((0,i._)("input",{type:"text",id:"input1","onUpdate:modelValue":e[0]||(e[0]=e=>t.input1=e)},null,512),[[o.nr,t.input1]]),y,(0,i.wy)((0,i._)("input",{type:"password",id:"input2","onUpdate:modelValue":e[1]||(e[1]=e=>t.input2=e)},null,512),[[o.nr,t.input2]]),(0,i._)("button",{onClick:e[2]||(e[2]=(...t)=>a.authenticate&&a.authenticate(...t)),class:"loginbutton"},"Connection")])}n(560);var k={name:"LoginHelloWorld",data(){return{loggedMessage:""}},methods:{authenticate(){"badwebsite"===this.input1&&"badwebsite"===this.input2?P.push("/success"):this.loggedMessage="Connection échouée"}}};const x=(0,a.Z)(k,[["render",_]]);var C=x,O=n.p+"img/huge-picture.a394fadf.jpg";const j={class:"helloworld"},H={class:"hugeDiv"};function I(t,e,n,o,r,s){return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("h1",null,(0,w.zw)(s.message),1),(0,i._)("div",H,[r.showButton?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[0]||(e[0]=(...e)=>t.buttonClick&&t.buttonClick(...e)),class:"hellobutton"},"Cliquez-moi")):(0,i.kq)("",!0),(0,i._)("img",{width:"100",height:"100",src:O,style:(0,w.j5)({width:r.imageWidth+"px",height:r.imageHeight+"px",top:r.imageTop+"px",left:r.imageLeft+"px"}),alt:"Changing Image"},null,4)]),(0,i._)("button",{onClick:e[1]||(e[1]=(...t)=>s.goLogin&&s.goLogin(...t)),class:"loginbutton"},"Connection")])}var W={name:"HelloWorld",data(){return{messages:["Hello World","Bonjour le monde","Hola Mundo"],currentMessageIndex:0,imageUrl:"/image.jpg",imageWidth:700,imageHeight:500,imageTop:0,imageLeft:0,showButton:!0}},async beforeMount(){const t=()=>{for(let t=0;t<1e6;t++){}};for(let e=0;e<1e4;e++)t()},async mounted(){function t(t){return new Promise((e=>setTimeout(e,t)))}await t(1e3),console.log("wait 1000 ms"),setInterval((()=>{this.currentMessageIndex=(this.currentMessageIndex+1)%this.messages.length}),1e3),setInterval((()=>{this.imageWidth=Math.floor(700*Math.random())+300,this.imageHeight=Math.floor(500*Math.random())+200,this.imageTop=Math.floor(Math.random()*(window.innerHeight-this.imageHeight)),this.imageLeft=Math.floor(Math.random()*(window.innerWidth-this.imageWidth))}),1e3),setInterval((()=>{this.showButton=!this.showButton}),500);const e=async()=>{await fetch("https://www.octo.com/assets/logo-mini.svg",{mode:"no-cors"})};for(let n=0;n<100;n++)e()},computed:{message(){return this.messages[this.currentMessageIndex]}},methods:{goLogin(){P.push("/login")}}};const L=(0,a.Z)(W,[["render",I]]);var D=L;const T=[{path:"/",component:D},{path:"/login",component:C},{path:"/success",component:m}],B=(0,c.p7)({history:(0,c.PO)("/bad-web-site/"),routes:T});B.replace({path:"*",redirect:"/"});var P=B;(0,o.ri)(l).use(P).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,r<s&&(s=r));if(a){t.splice(c--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/bad-web-site/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(u)var c=u(n)}for(e&&e(o);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkhello_world_vue"]=self["webpackChunkhello_world_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6362)}));o=n.O(o)})();
//# sourceMappingURL=app.33209b54.js.map