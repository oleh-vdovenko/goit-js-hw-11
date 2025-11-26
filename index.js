import{a as m,S as f,i as c}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function g(r){return m.get("https://pixabay.com/api/",{params:{key:"53377567-48fe25733f93d655972fbcb7e",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function d({webformatURL:r,largeImageURL:t,tags:o,likes:a,views:e,comments:s,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img class="gallery-image" src="${r}" alt="${o}">
            </a>
            <ul class="image-stats">
                <li class="image-stats-item">
                    <h2 class="stats-text">Likes</h2>
                    <p class="stats-value">${a}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Views</h2>
                    <p class="stats-value">${e}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Comments</h2>
                    <p class="stats-value">${s}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Downloads</h2>
                    <p class="stats-value">${i}</p>
                </li>
            </ul>
          </li>`}let h=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(r){const t=r.map(d).join("");n.gallery.innerHTML=t,h.refresh()}function y(){n.gallery.innerHTML=""}function b(){n.loader.style.display="block"}function u(){n.loader.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault(),y();const t=new FormData(l),o=Object.fromEntries(t.entries());if(o["search-text"].trim()===""){c.show({message:"Please enter a search query!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3}),l.reset();return}b(),g(o["search-text"].trim()).then(a=>{a.hits.length===0?(c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"20",backgroundColor:"yellow",position:"center",timeout:2e3}),u()):p(a.hits),u()}).catch(a=>{u(),c.show({message:"Your request is fail!",messageColor:"white",messageSize:"20",backgroundColor:"red",position:"center",timeout:2e3})}),l.reset()});
//# sourceMappingURL=index.js.map
