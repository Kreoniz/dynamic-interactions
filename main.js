(()=>{var n={219:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(650),r=t.n(o),i=t(196),s=t.n(i)()(r());s.push([n.id,".drop-down {\n  --main-color: #a3e635;\n  --hover-color: white;\n  --text-color: #0a0a0a;\n  --border-width: 2px;\n  --border-color: #0a0a0a;\n  --border: var(--border-width) solid var(--border-color);\n\n  position: relative;\n\n  color: var(--text-color);\n}\n\n.drop-down-title {\n  position: relative;\n\n  font-weight: 600;\n  padding: 0.5em 1em;\n  border: var(--border);\n\n  background-color: var(--main-color);\n  transition: background-color 0.2s ease;\n}\n\n.drop-down-options {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  background-color: var(--main-color);\n\n  transition: transform 0.6s, opacity 0.3s;\n}\n\n.drop-down-option {\n  margin: calc(-1 * var(--border-width)) 0;\n  padding: 5px;\n  border: var(--border);\n}\n\n.drop-down-title:hover,\n.drop-down-option:hover {\n  cursor: pointer;\n  background-color: var(--hover-color);\n}\n\n.drop-down-option:hover {\n  outline: 1px solid var(--border-color)\n}\n\n.drop-down.closed .drop-down-options {\n  opacity: 0;\n  transform: translate(0, -50%) scale(0);\n}\n",""]);const a=s},976:(n,e,t)=>{"use strict";t.d(e,{Z:()=>k});var o=t(650),r=t.n(o),i=t(196),s=t.n(i),a=t(189),d=t.n(a),c=new URL(t(801),t.b),l=new URL(t(345),t.b),u=new URL(t(731),t.b),p=new URL(t(594),t.b),f=new URL(t(933),t.b),h=new URL(t(927),t.b),m=s()(r()),b=d()(c),v=d()(l),g=d()(u),y=d()(p),w=d()(f),x=d()(h);m.push([n.id,`@font-face {\n  font-family: 'Oxygen';\n  src: url(${b}) format('woff2')\n    url(${v}) format('ttf');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Oxygen';\n  src: url(${g}) format('woff2'),\n    url(${y}) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Oxygen';\n  src: url(${w}) format('woff2'),\n    url(${x}) format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n`,""]);const k=m},288:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(650),r=t.n(o),i=t(196),s=t.n(i)()(r());s.push([n.id,".menu {\n  --border-width: 2px;\n  border-top: 10px solid black;\n}\n\n.menu-items {\n  display: flex;\n}\n\n.hidden-menu-items {\n  display: none;\n}\n\n.hidden-menu-items.expanded {\n  position: absolute;\n  z-index: 1;\n  background-color: #ffffff;\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.hidden-menu-items > * {\n  flex: 1 0 auto;\n}\n\n.menu-item {\n  border: var(--border-width) solid grey;\n  border-top: none;\n  margin-left: calc(-1 * var(--border-width));\n}\n\n.menu-item:first-child {\n  margin-left: 0;\n}\n\n.menu-link {\n  display: block;\n  padding: 10px 20px;\n\n  color: inherit;\n  text-decoration: none;\n}\n\n.menu-link:hover {\n  text-decoration: underline;\n}\n\n.more-btn {\n  position: relative;\n\n  background-color: pink;\n  padding: 10px 20px;\n\n  font-weight: 700;\n  font-size: inherit;\n}\n\n.more-btn:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.more-btn::after,\n.more-btn::before {\n  margin-left: 5px;\n}\n\n.more-btn::after {\n  content: 'v';\n}\n\n.more-btn.expanded::after {\n  content: '^';\n}\n",""]);const a=s},986:(n,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(650),r=t.n(o),i=t(196),s=t.n(i)()(r());s.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const a=s},475:(n,e,t)=>{"use strict";t.d(e,{Z:()=>p});var o=t(650),r=t.n(o),i=t(196),s=t.n(i),a=t(986),d=t(976),c=t(219),l=t(288),u=s()(r());u.i(a.Z),u.i(d.Z),u.i(c.Z),u.i(l.Z),u.push([n.id,'body {\n  font-size: 18px;\n  font-family: "Oxygen";\n  line-height: 1.4;\n  overflow: hidden;\n}\n\n.content {\n  padding: 50px;\n}\n\n.content > * {\n  display: flex;\n  gap: 50px;\n\n  margin-bottom: 100px;\n}\n',""]);const p=u},196:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(s[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},189:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},650:n=>{"use strict";n.exports=function(n){return n[1]}},62:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},s=[],a=0;a<n.length;a++){var d=n[a],c=o.base?d[0]+o.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var d=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},566:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},911:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},107:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},552:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},227:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},571:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>'},927:(n,e,t)=>{"use strict";n.exports=t.p+"f84757bd7291dfa0f08e.ttf"},933:(n,e,t)=>{"use strict";n.exports=t.p+"858dcb6503923b6a2d75.woff2"},345:(n,e,t)=>{"use strict";n.exports=t.p+"9d47ba3c3a03b4e1810d.ttf"},801:(n,e,t)=>{"use strict";n.exports=t.p+"6d09169cb99ead677654.woff2"},594:(n,e,t)=>{"use strict";n.exports=t.p+"56e5848476493abbd93e.ttf"},731:(n,e,t)=>{"use strict";n.exports=t.p+"bf5c69c33f81cae7a4f6.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(62),e=t.n(n),o=t(552),r=t.n(o),i=t(566),s=t.n(i),a=t(107),d=t.n(a),c=t(911),l=t.n(c),u=t(227),p=t.n(u),f=t(475),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=t(571),b=t.n(m);const v=new class{constructor(n,e){this.title=n,this.titles=Object.keys(e),this.callbacks=Object.values(e)}get html(){const n=document.createElement("div");n.classList.add("drop-down","closed");const e=document.createElement("div");e.textContent=this.title,e.classList.add("drop-down-title");const t=document.createElement("ul");t.classList.add("drop-down-options");for(let n=0;n<this.titles.length;n+=1){const e=document.createElement("li");e.classList.add("drop-down-option"),e.textContent=this.titles[n],e.addEventListener("click",this.callbacks[n]),t.appendChild(e)}return n.appendChild(e),n.appendChild(t),n}}("LINKS",{"The Odin Project":()=>window.open("https://www.theodinproject.com"),"Kreoniz's github":()=>window.open("https://github.com/Kreoniz"),"Sparkles!":function(){const n=document.body.offsetWidth-30,e=document.body.offsetHeight,t=["#15803d","#84cc16","#65a30d","#4d7c0f","#3f6212"];for(let o=0;o<50;o+=1){const o=document.createElement("div");o.innerHTML=b();const r=o.querySelector("svg");r.classList.add("sparkle");const i=Math.round(Math.random()*n),s=Math.round(Math.random()*e),a=t[Math.round(Math.random()*t.length)];r.style.width="30px",r.aspectRatio=1,r.style.top=0,r.style.left=`${i}px`,r.style.position="absolute",r.style.zIndex=100,r.style.fill=a,r.animate({opacity:[1,0],transform:["translateY(-100%)",`translateY(${s}px)`]},{fill:"both",duration:3*e}),setTimeout((()=>r.remove()),3*e),document.querySelector(".content").appendChild(r)}}});document.querySelector(".drop-downs").appendChild(v.html);const g=document.querySelectorAll(".drop-down");function y(){return Math.min(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)}g.forEach((n=>{n.querySelector(".drop-down-title").addEventListener("click",(()=>{g.forEach((e=>{e!==n&&e.classList.add("closed")})),n.classList.toggle("closed")}))}));const w=new class{constructor(n,e,t){this.shownMenu=document.querySelector(`#${n}`),this.hiddenMenu=document.querySelector(`#${e}`),this.more=document.querySelector(`#${t}`),this.more.addEventListener("click",(()=>{this.hiddenMenu.classList.toggle("expanded"),this.more.classList.toggle("expanded")})),this.items=[...this.hiddenMenu.querySelectorAll("li")]}get shownItems(){const n=[],e=y();let t=this.more.offsetWidth;this.shownMenu.appendChild(this.more);for(let o=0;o<this.items.length;o+=1)t+=this.items[o].offsetWidth,t<=e&&n.push(this.items[o]);return n.push(this.more),n}get hiddenItems(){const n=[],e=y();let t=this.more.offsetWidth;for(let o=0;o<this.items.length;o+=1)t+=this.items[o].offsetWidth,t>e&&n.push(this.items[o]);return n}render(){this.more.style.flex="initial";for(let n=0;n<this.shownItems.length;n+=1)this.shownMenu.appendChild(this.shownItems[n]);for(let n=0;n<this.hiddenItems.length;n+=1)this.hiddenMenu.appendChild(this.hiddenItems[n]);this.more.style.flex="1 1 auto"}}("shown-menu","hidden-menu","more-btn");w.render(),window.addEventListener("resize",(()=>w.render()))})()})();