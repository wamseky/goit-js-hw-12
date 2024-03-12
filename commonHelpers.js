import{a as h,S as b,i as n}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();async function m(t,e){const o="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await h.get(l,{params:{per_page:15,page:e,key:o,q:t,image_type:"photo",safesearch:"true",orientation:"horizontal"}})).data}function p(t){return t.map(e=>`
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
          </li>`).join("")}const y=new b(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let d=1,f=null;u();i();async function v(t){t.preventDefault(),f=s.form.elements.query.value.trim(),d=1,s.gallery.innerHTML="",g();try{const o=(await m(f,d)).hits;o.length===""&&n.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}),o.length===0&&n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3}),s.gallery.innerHTML=p(o),o.length<15?i():x(),y.refresh()}catch{n.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}finally{u(),s.form.reset(),i()}}s.form.addEventListener("submit",v);s.loadMoreBtn.addEventListener("click",async()=>{try{g();const t=await m(f,++d),e=document.querySelectorAll(".gallery-item").length;s.gallery.insertAdjacentHTML("beforeend",p(t.hits));const o=document.querySelectorAll(".gallery-item");o.length>e&&o[e].scrollIntoView({block:"start",behavior:"smooth"}),y.refresh(),t.hits.length<15&&(i(),n.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(t){throw new Error(t.status)}finally{u()}});function x(){s.loadMoreBtn.classList.remove("is-hidden")}function i(){s.loadMoreBtn.classList.add("is-hidden")}function g(){s.loader.style.display="block"}function u(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
