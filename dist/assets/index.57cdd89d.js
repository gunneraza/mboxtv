import{C as e,S as r,N as i}from"./vendor.d7a79133.js";!function(e=".",r="__import__"){try{self[r]=new Function("u","return import(u)")}catch(i){const s=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[r]=e=>new Promise(((i,l)=>{const o=new URL(e,s);if(self[r].moduleMap[o])return i(self[r].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${r}.moduleMap['${o}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){l(new Error(`Failed to import: ${e}`)),t(a)},onload(){i(self[r].moduleMap[o]),t(a)}});document.head.appendChild(a)})),self[r].moduleMap={}}}("/assets/");function s(i){let s=document.querySelector(i.slider),t=s.querySelector(i.wrapper);e.get(i.url,{params:{api_key:"f927b11b076bee22e44f6342e850d0a5",language:"en-US",page:1}}).then((e=>{e.data.results.forEach((e=>{t.innerHTML+=`\n                <div class="swiper-slide slider__slide">\n                    <div class="slider__item">\n                        <img src="${"https://image.tmdb.org/t/p/w500/"+e.poster_path}" alt="${e.original_title}">\n                    </div>\n                </div>\n            `})),new r(s,{loop:!0,spaceBetween:4,breakpoints:{1500:{slidesPerView:6},1200:{slidesPerView:5},768:{slidesPerView:3},576:{slidesPerView:2}},navigation:{nextEl:".slider__button"}})}))}r.use(i),s({url:"https://api.themoviedb.org/3/movie/popular",wrapper:".slider__wrapper",slider:".movie-slider"}),s({url:"https://api.themoviedb.org/3/tv/popular",wrapper:".slider__wrapper",slider:".tv-slider"}),window.addEventListener("DOMContentLoaded",(e=>{new r(".channels-slider",{loop:!0,navigation:{nextEl:".slider__button"},breakpoints:{640:{slidesPerView:2},768:{slidesPerView:4},1024:{slidesPerView:5}}}),new r(".actors-slider",{loop:!0,slidesPerView:1,navigation:{nextEl:".slider__button"},breakpoints:{640:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1200:{slidesPerView:5}}})}));