import{t as l,r as c,w as f}from"./writeEffect.02e29cf3.js";import{x as m}from"./vendor.c67067dd.js";import"./sleep.b2c92b69.js";const p=async(e,t)=>{t.dispatch("done"),await l(typeof t.loop=="number"?t.loop:1500);const n=e.innerHTML.replaceAll("&amp;","&");for(let a=n.length-1;a>=0;a--)n[a]===">"&&(a=n.lastIndexOf("<",a)),e.innerHTML=n.slice(0,a),await l(t.interval)};let r=[];const y=e=>{for(;;){const t=c(0,e.length),n=typeof r=="number"&&t!==r;if(Array.isArray(r)&&!r.includes(t)||n)return n&&(r=[]),r.push(t),e[t];r.length===e.length&&(r=r.pop())}},o=async({currentNode:e,text:t},n)=>{await f({currentNode:e,text:t},n);const a=t.replaceAll("&","&amp;");e.innerHTML===a&&await p(e,n),m(e,n.parentElement,i=>{e===i?i.classList.remove("typing"):i.classList.remove("finished-typing")})},T=async(e,t)=>{for(;;)if(t.loop)for(const n of e)await o(n,t);else if(t.loopRandom){const n=y(e);await o(n,t)}};export{T as mode};
