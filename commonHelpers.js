import{a as h,S as b,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();async function p(t,e){const s="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await h.get(l,{params:{per_page:15,page:e,key:s,q:t,image_type:"photo",safesearch:"true",orientation:"horizontal"}})).data}function m(t){return t.map(e=>`
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
          </li>`).join("")}const y=new b(".gallery a",{captionsData:"alt",captionDelay:250}),a={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let f=1,i=null;u();c();async function v(t){if(t.preventDefault(),i=a.form.elements.query.value.trim(),f=1,a.gallery.innerHTML="",i===""){n.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}g();try{const s=(await p(i,f)).hits;s.length===""&&n.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),a.gallery.innerHTML=m(s),s.length<15?c():x(),y.refresh()}catch{n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}finally{u(),a.form.reset(),c()}}a.form.addEventListener("submit",v);a.loadMoreBtn.addEventListener("click",async()=>{try{g();const t=await p(i,++f),e=document.querySelectorAll(".gallery-item").length;a.gallery.insertAdjacentHTML("beforeend",m(t.hits));const s=document.querySelectorAll(".gallery-item");s.length>e&&s[e].scrollIntoView({block:"start",behavior:"smooth"}),y.refresh(),t.hits.length<15&&(c(),n.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(t){throw new Error(t.status)}finally{u()}});function x(){a.loadMoreBtn.classList.remove("is-hidden")}function c(){a.loadMoreBtn.classList.add("is-hidden")}function g(){a.loader.style.display="block"}function u(){a.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
