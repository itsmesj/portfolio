(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();document.getElementById("vids-btn");document.getElementById("obj-btn");document.getElementById("gops-btn");const m=document.getElementById("hamburger"),i=document.getElementById("mobile-menu"),r=document.getElementById("hamburger-icon");document.getElementById("nav-links");i.classList.add("hidden");m.addEventListener("click",()=>{i.classList.toggle("hidden"),r.classList.contains("fa-bars")?(r.classList.remove("fa-bars"),r.classList.add("fa-times")):(r.classList.remove("fa-times"),r.classList.add("fa-bars"))});const u=i.querySelectorAll("a");u.forEach(n=>{n.addEventListener("click",()=>{i.classList.add("hidden"),r.classList.remove("fa-times"),r.classList.add("fa-bars")})});emailjs.init("tK_x9if5WPjE_WFfQ");document.getElementById("contact-form").addEventListener("submit",function(n){n.preventDefault();const t=document.getElementById("response-message");emailjs.sendForm("service_zjw03uk","template_sl2kywg",this).then(function(o){t.textContent="Your message has been sent successfully!",t.classList.remove("hidden","text-red-500"),t.classList.add("text-green-500"),document.getElementById("contact-form").reset()},function(o){t.textContent="Oops! Something went wrong. Please try again.",t.classList.remove("hidden","text-green-500"),t.classList.add("text-red-500")})});let c=0;function a(n){const t=document.getElementById("carousel-images"),o=t.children.length;n==="next"&&c<o-1?c++:n==="prev"&&c>0&&c--,t.scrollLeft=t.clientWidth*c}document.getElementById("prev-btn").addEventListener("click",()=>a("prev"));document.getElementById("next-btn").addEventListener("click",()=>a("next"));