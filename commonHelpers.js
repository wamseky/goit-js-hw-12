import{a as h,S as b,i as c}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function p(r,e){const o="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await h.get(l,{params:{per_page:15,page:e,key:o,q:r,image_type:"photo",safesearch:"true",orientation:"horizontal"}})).data}function m(r){return r.map(e=>`
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
          </li>`).join("")}const y=new b(".gallery a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let d=1,f=null;u();n();async function v(r){r.preventDefault(),f=a.form.elements.query.value.trim(),d=1,a.gallery.innerHTML="",g();try{const o=(await p(f,d)).hits;o.length===""&&c.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),o.length===0&&c.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3}),a.gallery.innerHTML=m(o),o.length<15?n():x(),y.refresh()}catch{console.log(error)}finally{u(),a.form.reset(),n()}}a.form.addEventListener("submit",v);a.loadMoreBtn.addEventListener("click",async()=>{try{g();const r=await p(f,++d),e=document.querySelectorAll(".gallery-item").length;a.gallery.insertAdjacentHTML("beforeend",m(r.hits));const o=document.querySelectorAll(".gallery-item");o.length>e&&o[e].scrollIntoView({block:"start",behavior:"smooth"}),y.refresh(),r.hits.length<15&&(n(),c.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(r){throw new Error(r.status)}finally{u()}});function x(){a.loadMoreBtn.classList.remove("is-hidden")}function n(){a.loadMoreBtn.classList.add("is-hidden")}function g(){a.loader.style.display="block"}function u(){a.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
