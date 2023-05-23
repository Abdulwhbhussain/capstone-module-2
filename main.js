(()=>{"use strict";var n,e,r,t,o,a,i,s,c,d,p,l,u,f,m={28:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,'* {\r\n  box-sizing: border-box;\r\n  font: 1em sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #f5f5f5;\r\n  color: #333;\r\n  font-family: "Open Sans", sans-serif;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  overflow: scroll;\r\n}\r\n\r\n.capstone-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1em;\r\n  margin: 25px auto;\r\n}\r\n\r\n.header-container {\r\n  background-color: goldenrod;\r\n  border: 5px solid #333;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  padding: 0 1em;\r\n  position: relative;\r\n  top: 15px;\r\n  width: 95%;\r\n  z-index: 1;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\nnav>ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\nnav>ul>li {\r\n  margin: 0 15px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #333 !important;\r\n}\r\n\r\na:hover {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n}\r\n\r\nmain {\r\n  background-color: #fff;\r\n  margin: 30px auto;\r\n  padding: 20px 30px;\r\n  width: 90%;\r\n  display: grid;\r\n  /* Define Auto Row size */\r\n  grid-auto-rows: 100px;\r\n  /*Define our columns */\r\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  column-gap: 5em;\r\n  row-gap: 2em;\r\n}\r\n\r\n.footer-container {\r\n  background-color: goldenrod;\r\n  border: 5px solid #333;\r\n  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);\r\n  padding: 0 1em;\r\n  position: relative;\r\n  width: 95%;\r\n  z-index: 1;\r\n  height: 60px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n\r\n}\r\n\r\nh5 {\r\n  border: 1px solid #333;\r\n}\r\n\r\n.color {\r\n  color: darkred;\r\n}',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var p=r(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var r=h[n]={id:n,exports:{}};return m[n](r,r.exports,v),r.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),r=v(795),t=v.n(r),o=v(569),a=v.n(o),i=v(565),s=v.n(i),c=v(216),d=v.n(c),p=v(589),l=v.n(p),u=v(28),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("DOMContentLoaded",function(){const n=document.getElementsByClassName("capstone-container")[0];console.log(n),n.innerHTML='\x3c!-- Header of the Api Based Web App --\x3e\n    <header class="header-container">\n      \x3c!-- Logo of the Api Based Web App --\x3e\n      <div class="logo">\n        <p>Logo Here!</p>\n      </div>\n      \x3c!-- Navbar of The Api based web app --\x3e\n      <nav>\n        <ul>\n          <li><a href="#">Spaceships(6)</a></li>\n          <li><a href="#">Planets</a></li>\n          <li><a href="#">Races</a></li>\n        </ul>\n      </nav>\n    </header>\n    \x3c!-- Main Content of the Api Based Web App --\x3e\n    <main>\n      \x3c!-- Section of the Api Based Web App --\x3e\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n      <h5>dummy</h5>\n    </main>\n    \x3c!-- Footer of the Api Based Web App --\x3e\n    <footer class="footer-container">\n      <p>© Created by Microverse under CC license</p>\n    </footer>'}())})();