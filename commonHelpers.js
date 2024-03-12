import{a as g,S as b,i as u}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();async function p(r,e){const a="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await g.get(l,{params:{per_page:15,page:e,key:a,q:r,image_type:"photo",safesearch:"true",orientation:"horizontal"}})).data}function m(r){return r.map(e=>`
          <li class="gallery-item">
            <div class="gallery-box item-card-wrapper">
              <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
              </a>
              <div class="card-box">
                <div>
                  <p class="card-box-text"><b>Likes</b></p>
                  <p class="card-box-text">${e.likes}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Views</b></p>
                  <p class="card-box-text">${e.views}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Comments</b></p>
                  <p class="card-box-text">${e.comments}</p>
                </div>
                <div>
                  <p class="card-box-text"><b>Downloads</b></p>
                  <p class="card-box-text">${e.downloads}</p>
                </div>
              </div>
            </div>
          </li>`).join("")}const y=new b(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let c=1,d=null;f();n();async function v(r){r.preventDefault(),d=s.form.elements.query.value.trim(),c=1,s.gallery.innerHTML="",h();try{const a=(await p(d,c)).hits;a.length===""&&u.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),s.gallery.innerHTML=m(a),a.length<15?n():x(),y.refresh()}catch{console.log(error)}finally{f(),s.form.reset(),n()}}s.form.addEventListener("submit",v);s.loadMoreBtn.addEventListener("click",async()=>{try{h();const r=await p(d,++c),e=document.querySelectorAll(".gallery-item").length;s.gallery.insertAdjacentHTML("beforeend",m(r.hits));const a=document.querySelectorAll(".gallery-item");a.length>e&&a[e].scrollIntoView({block:"start",behavior:"smooth"}),y.refresh(),r.hits.length<15&&(n(),u.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(r){throw new Error(r.status)}finally{f()}});function x(){s.loadMoreBtn.classList.remove("is-hidden")}function n(){s.loadMoreBtn.classList.add("is-hidden")}function h(){s.loader.style.display="block"}function f(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
