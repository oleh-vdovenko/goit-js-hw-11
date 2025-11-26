import{a as m,S as u,i as f}from"./assets/vendor-DvfmeZXB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(a){return m.get("https://pixabay.com/api/",{params:{key:"53377567-48fe25733f93d655972fbcb7e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".preloader")};function g({webformatURL:a,largeImageURL:s,tags:o,likes:r,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${a}" alt="${o}">
            </a>
            <ul class="image-stats">
                <li class="image-stats-item">
                    <h2 class="stats-text">Likes</h2>
                    <p class="stats-value">${r}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Views</h2>
                    <p class="stats-value">${e}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Comments</h2>
                    <p class="stats-value">${t}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Downloads</h2>
                    <p class="stats-value">${i}</p>
                </li>
            </ul>
          </li>`}let p=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(a){const s=a.map(g).join("");l.gallery.innerHTML=s,p.refresh()}function y(){l.gallery.innerHTML=""}function L(){l.loader.classList.add("loader")}function n(){l.loader.classList.remove("loader")}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault(),y(),L();const s=new FormData(c),o=Object.fromEntries(s.entries());d(o["search-text"].trim()).then(r=>{r.data.hits.length===0||o["search-text"].trim()===""?(f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3}),n()):(h(r.data.hits),n())}).catch(r=>{console.log("false")}),c.reset()});
//# sourceMappingURL=index.js.map
