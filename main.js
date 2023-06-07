(()=>{"use strict";var n={28:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'* {\r\n  box-sizing: border-box;\r\n  font: 1em sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: #f5f5f5;\r\n  color: #333;\r\n  font-family: "Open Sans", sans-serif;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n  overflow: scroll;\r\n}\r\n\r\n.capstone-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1em;\r\n  margin: 25px auto;\r\n}\r\n\r\n.header-container {\r\n  background-color: goldenrod;\r\n  border: 5px solid #333;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  padding: 0 1em;\r\n  position: relative;\r\n  top: 15px;\r\n  width: 95%;\r\n  z-index: 1;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.logo > p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nnav > ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style: none;\r\n  padding: 10px;\r\n}\r\n\r\nnav > ul > li {\r\n  margin: 0 15px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #333 !important;\r\n  font-size: 1.5rem;\r\n}\r\n\r\na:hover {\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  background-color: #fff;\r\n  margin: 30px auto;\r\n  padding: 20px 30px;\r\n  width: 90%;\r\n  display: grid;\r\n\r\n  /* Define our columns */\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  column-gap: 5em;\r\n  row-gap: 2em;\r\n}\r\n\r\n.footer-container {\r\n  background-color: goldenrod;\r\n  border: 5px solid #333;\r\n  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);\r\n  padding: 20px 1em;\r\n  position: relative;\r\n  width: 95%;\r\n  z-index: 1;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.footer-container > p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.food-card {\r\n  background-color: #fff;\r\n\r\n  /* border: 1px solid #333; */\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\r\n  padding: 0 1em;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.food-card-image {\r\n  min-width: 80%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  /* border: 1px solid #333; */\r\n}\r\n\r\nimg {\r\n  width: 90%;\r\n  height: 250px;\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  /* border: 3px solid #333; */\r\n}\r\n\r\nh5 {\r\n  border: 1px solid #333;\r\n}\r\n\r\n/* Heart SVG Styling */\r\n.food-card-heart {\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  color: #333;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.food-card-heart:hover {\r\n  color: #fc2e5a;\r\n}\r\n\r\n.title-icon-likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  column-gap: 20%;\r\n  height: 100px;\r\n  width: 100%;\r\n\r\n  /* border: 1px solid #333; */\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.icon-likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n\r\n  /* border: 1px solid #333; */\r\n  row-gap: 10px;\r\n}\r\n\r\n/* Food Card Comments Button Styling */\r\n.food-card-comments {\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  color: #333;\r\n  width: 190px;\r\n  height: 60px;\r\n  background: #fff;\r\n  border: 3px solid #333;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.food-card-comments:hover {\r\n  color: goldenrod;\r\n}\r\n\r\n/* Comments Popup Container Background with Blur Effect */\r\n.popup-container-background {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 100;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Comments Popup Container */\r\n.popup-container {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 101;\r\n  width: 75vw;\r\n  height: 85vh;\r\n  background-color: #fff;\r\n  border-radius: 0;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n  overflow: scroll;\r\n}\r\n\r\n/* Comments Popup Custom Close Button */\r\n.close-button {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 10px;\r\n  margin: 10px;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  font-size: 3.5rem;\r\n  color: #333;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n\r\n.close-button:hover {\r\n  color: goldenrod;\r\n}\r\n\r\n.popup-image-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  /* border: 1px solid #333; */\r\n  min-width: 80%;\r\n\r\n  /* border: 2px solid #333; */\r\n  margin: 20px auto;\r\n  height: auto;\r\n}\r\n\r\n/* Popup Image */\r\n.popup-image {\r\n  width: 50vw;\r\n  height: 60vh;\r\n  object-fit: fill;\r\n}\r\n\r\n.popup-name-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.popup-name-container > h2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  /* border: 1px solid #333; */\r\n}\r\n\r\n.popup-details-container {\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  row-gap: 10px;\r\n}\r\n\r\n.popup-details-upper,\r\n.popup-details-lower {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  column-gap: 20px;\r\n  width: 100%;\r\n\r\n  /* border: 1px solid #333; */\r\n}\r\n\r\nspan {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n\r\n  /* border: 1px solid #333; */\r\n}\r\n\r\n.popup-comments-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-comments-container > h2 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.popup-comments {\r\n  margin-top: 10px;\r\n}\r\n\r\n.individual-comment {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.add-comment > h2 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.add-comment-form {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  row-gap: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  width: 50%;\r\n  height: 30px;\r\n  border: 3px solid #333;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n}\r\n\r\ntextarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  border: 3px solid #333;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  resize: none;\r\n}\r\n\r\n.add-comment-button {\r\n  cursor: pointer;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n  width: auto;\r\n  height: auto;\r\n  background: #fff;\r\n  border: 3px solid #333;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\r\n  padding: 5px 10px;\r\n}\r\n\r\n.add-comment-button:hover {\r\n  color: goldenrod;\r\n}\r\n\r\n/* media query for the medium devices */\r\n@media (max-width: 1024px) {\r\n  main {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .logo > p {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  a {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .footer-container > p {\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\n/* media query for mobile devices */\r\n@media (max-width: 768px) {\r\n  main {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .logo > p {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  a {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .footer-container > p {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .close-button {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n',""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var m=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)r[m].references++,r[m].updater(u);else{var f=o(u,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),m=e.n(p),u=e(28),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const h="YOYr3lMRRi289YuVJOhS",g=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${h}/likes/`,x=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${h}/comments`,v=n=>{const r=document.createElement("div");r.classList.add("popup-container-background");const e=document.createElement("div");e.classList.add("popup-container"),e.innerHTML=`\n    \x3c!-- Close Times Icon --\x3e\n    <button data-close-button class="close-button">&times;</button>\n    \x3c!-- Food Image --\x3e\n    <div class="popup-image-container">\n        <img class="popup-image" src=${n.image} alt=${n.name} draggable="false" />\n    </div>\n    \x3c!-- Food Name --\x3e\n    <div class="popup-name-container"><h2>${n.name}</h2></div>\n    \x3c!-- Food Details --\x3e\n    <div class="popup-details-container">\n    <div class="popup-details-upper"><span>Count: ${n.count}</span><span>ID: ${n.id}</span></div>\n    <div class="popup-details-lower"><span>Likes: ${n.likes}</span><span>Delicious: Yes</span></div>\n    </div>\n    \x3c!-- Comments and comment Details --\x3e\n    <div class="popup-comments-container">\n    <h2>Comments (${n.comments.length})</h2>\n    <div class="popup-comments">${(n=>{const r=document.createElement("div");return r.classList.add("popup-comments"),n.forEach((n=>{const e=document.createElement("div");e.classList.add("individual-comment"),e.innerText=n.comment,r.appendChild(e)})),r.innerHTML})(n.comments)}</div>\n    \x3c!-- Add a Comment --\x3e\n    <div class="add-comment">\n        <h2>Add a Comment</h2>\n        <form class="add-comment-form">\n        <input type="text" name="name" id="name" placeholder="Your Name" required/>\n        <textArea type="text" name="comment" id="comment" placeholder="Your Insights" cols=50 maxLength=500 required></textArea>\n        <button type="submit" class="add-comment-button">Comment</button>\n        </form>\n    </div>\n    </div>\n    `,r.appendChild(e),document.body.appendChild(r),document.querySelector(".close-button").addEventListener("click",(()=>{r.remove()})),document.querySelector(".add-comment-form").addEventListener("submit",(async r=>{r.preventDefault();const e=new Date,t=document.querySelector("#name").value,o=document.querySelector("#comment").value,i=await(async(n,r,e,t)=>{const o=await fetch(x,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:r,username:e,comment:`${n.getMonth()+1}/${n.getDate()}/${n.getFullYear()} ${e}: ${t}`})}),i=await o.text();if("Created"===i)return i})(e,n.id,t,o);if("Created"===i){const r=document.createElement("div");r.classList.add("individual-comment"),r.innerText=`${e.getMonth()+1}/${e.getDate()}/${e.getFullYear()} ${t}: ${o}`,document.querySelector(".popup-comments").appendChild(r),n.comments.push({comment:`${e.getMonth()+1}/${e.getDate()}/${e.getFullYear()} ${t}: ${o}`,creation_date:`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,username:t}),document.querySelector(".popup-comments-container h2").innerText=`Comments (${n.comments.length})`}document.querySelector("#name").value="",document.querySelector("#comment").value=""}))};document.addEventListener("DOMContentLoaded",(async()=>{document.getElementsByClassName("capstone-container")[0].innerHTML='\x3c!-- Header of the Api Based Web App --\x3e\n    <header class="header-container">\n      \x3c!-- Logo of the Api Based Web App --\x3e\n      <div class="logo">\n        <p>Meals</p>\n      </div>\n      \x3c!-- Navbar of The Api based web app --\x3e\n      <nav>\n        <ul>\n          <li><a class="chinese" href="#">Chinese</a></li>\n          <li><a class="american" href="#">American</a></li>\n          <li><a class="russian" href="#">Russian</a></li>\n        </ul>\n      </nav>\n    </header>\n    \x3c!-- Main Content of the Api Based Web App --\x3e\n    <main>\n      \x3c!-- Section of the Api Based Web App --\x3e\n      \n    </main>\n    \x3c!-- Footer of the Api Based Web App --\x3e\n    <footer class="footer-container">\n      <p>© Microverseinc Created by\n      <a href="https://github.com/Abdulwhbhussain">Abdul Wahab |</a>\n      <a href="https://github.com/Enoisong/">Enobong Isong</a>\n      under MIT License</p>\n    </footer>';const n=await(async()=>{const n=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese"),r=(await n.json()).meals,e=[];r.forEach((n=>{const r={count:e.length+1,name:n.strMeal,image:n.strMealThumb,id:n.idMeal};e.push(r)})),(await fetch(g).then((n=>n.json())).then((n=>n))).forEach((n=>{const r=e.find((r=>r.id===n.item_id));r&&(r.likes=n.likes)}));const t=x+"?item_id=";return e.forEach((async n=>{const r=t+n.id,e=await fetch(r).then((n=>n.json())).then((n=>n));n.comments=e})),e})();console.log(n),document.querySelector("nav > ul > li > .chinese").innerHTML=`Chinese(${n.length})`,(n=>{const r=document.querySelectorAll("main")[0];n.forEach((n=>{const e=document.createElement("div");e.classList.add("food-card"),e.innerHTML=`\n            <div class="food-card-image">\n                <img src="${n.image}" alt="${n.name}">\n            </div>\n            <div class="title-icon-likes">\n            <div class="food-card-title">\n                <h3>${n.name}</h3> \n            </div>\n            <div class="icon-likes">\n            \x3c!-- Food Card Heart Icon --\x3e\n            <svg class="food-card-heart" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">\n  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg>\n                \n            \n            \x3c!-- Food Card Like Count --\x3e\n            <div class="food-card-like-count"><p>${n.likes} Likes</p></div>\n            </div>\n            \n            </div>\n            \n            \x3c!-- Food card Comments Button --\x3e\n            \n                <button class="food-card-comments">Comments</button>            \n        `,r.appendChild(e)}))})(n),document.querySelector("nav > ul > li > .american").addEventListener("click",(()=>{alert("Hi Pal! Sorry for Inconvenience. We are working on it.")})),document.querySelector("nav > ul > li > .russian").addEventListener("click",(()=>{alert("Hi Pal! Sorry for Inconvenience. We are working on it.")}));const r=document.querySelectorAll(".food-card-heart");for(let e of r)e.addEventListener("click",(async()=>{e.style.color="#fc2e5a";const r=e.parentElement.previousElementSibling.firstElementChild.innerText,t=e.nextElementSibling,o=n.find((n=>n.name===r)).id,i=n.findIndex((n=>n.name===r)),a=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:o})});"Created"===await a.text()&&(n[i].likes+=1,console.log(n[i].likes),console.log(t),t.innerHTML=`<p>${n[i].likes} Likes</p>`)}));const e=document.querySelectorAll(".food-card-comments");for(let r of e)r.addEventListener("click",(()=>{console.log("comments button clicked",r);const e=r.previousElementSibling.firstElementChild.firstElementChild.innerText,t=n.findIndex((n=>n.name===e));v(n[t])}))}))()})()})();