(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),s=document.getElementById("timer-seconds"),c=setInterval((()=>{(()=>{let e=(()=>{let e=new Date("19 january 2022").getTime(),t=(new Date).getTime(),n=Math.floor((e-t)/1e3);return{timeRemaining:n,days:Math.floor(n/60/60/24),hours:Math.floor(n/60/60%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}})();e.timeRemaining>=0&&(e.days<=9?t.textContent="0"+e.days:t.textContent=e.days,e.hours<=9?n.textContent="0"+e.hours:n.textContent=e.hours,e.minutes<=9?o.textContent="0"+e.minutes:o.textContent=e.minutes,e.seconds<=9?s.textContent="0"+e.seconds:s.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(c))})()}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),s=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",s),n.addEventListener("click",s),o.forEach((e=>e.addEventListener("click",s)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let o,s=0;const c=()=>{screen.width>768?(s++,o=requestAnimationFrame(c),s<=20?(e.style.opacity=.05*s,e.style.display="block"):cancelAnimationFrame(o)):e.style.display="block"};t.forEach((e=>{e.addEventListener("click",(()=>{c()}))})),n.addEventListener("click",(()=>{e.style.display="none",e.style.opacity="",s=0}))})()})();