(function(){"use strict";var t={187:function(t,e,n){var o=n(9242),r=n(3396);function i(t,e,n,o,i,a){const s=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(s,{msg:"Welcome to Your Vue.js App"})}var a=n(7139),s=n.p+"img/huge-picture.a394fadf.jpg";const u={class:"helloworld"};function l(t,e,n,o,i,l){return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("h1",null,(0,a.zw)(l.message),1),i.showButton?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:e[0]||(e[0]=(...e)=>t.buttonClick&&t.buttonClick(...e)),class:"hellobutton"},"Cliquez-moi")):(0,r.kq)("",!0),(0,r._)("img",{width:"100",height:"100",src:s,style:(0,a.j5)({width:i.imageWidth+"px",height:i.imageHeight+"px",top:i.imageTop+"px",left:i.imageLeft+"px"}),alt:"Changing Image"},null,4)])}var c={data(){return{messages:["Hello World","Bonjour le monde","Hola Mundo"],currentMessageIndex:0,imageUrl:"/image.jpg",imageWidth:700,imageHeight:500,imageTop:0,imageLeft:0,showButton:!0}},async beforeMount(){const t=()=>{for(let t=0;t<1e6;t++){}};for(let e=0;e<1e4;e++)t()},async mounted(){function t(t){return new Promise((e=>setTimeout(e,t)))}await t(1e3),console.log("wait 1000 ms"),setInterval((()=>{this.currentMessageIndex=(this.currentMessageIndex+1)%this.messages.length}),1e3),setInterval((()=>{this.imageWidth=Math.floor(700*Math.random())+300,this.imageHeight=Math.floor(500*Math.random())+200,this.imageTop=Math.floor(Math.random()*(window.innerHeight-this.imageHeight)),this.imageLeft=Math.floor(Math.random()*(window.innerWidth-this.imageWidth))}),1e3),setInterval((()=>{this.showButton=!this.showButton}),500);const e=async()=>{await fetch("https://www.octo.com/assets/logo-mini.svg",{mode:"no-cors"})};for(let n=0;n<100;n++)e()},computed:{message(){return this.messages[this.currentMessageIndex]}}},h=n(89);const f=(0,h.Z)(c,[["render",l]]);var g=f,m={name:"App",components:{HelloWorld:g}};const d=(0,h.Z)(m,[["render",i]]);var p=d;(0,o.ri)(p).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(e&&e(o);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkhello_world_vue"]=self["webpackChunkhello_world_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(187)}));o=n.O(o)})();
//# sourceMappingURL=app.bd83ef1b.js.map