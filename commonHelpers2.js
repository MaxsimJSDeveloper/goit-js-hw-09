import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{T as n}from"./assets/vendor-b8415275.js";const t=document.querySelector(".feedback-form");t.addEventListener("input",l);function l(){const e={email:t.elements.email.value.trim(),message:t.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}window.addEventListener("load",r);function r(){const e=localStorage.getItem("feedback-form-state");if(e){const{email:m,message:a}=JSON.parse(e);t.elements.email.value=m,t.elements.message.value=a}}t.addEventListener("submit",i);function i(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");const m=t.elements.email.value.trim(),a=t.elements.message.value.trim();if(m===""||a===""){new n("Please enter your email and message!",n.TYPE_ERROR,n.TIME_NORMAL);return}c({email:m,message:a}),t.reset()}function c(e){const m=document.querySelector(".form-list"),a=document.createElement("li"),s=document.createElement("h3"),o=document.createElement("p");s.textContent=`email: ${e.email}`,o.textContent=`message: ${e.message}`,a.appendChild(s),a.appendChild(o),m.appendChild(a)}
//# sourceMappingURL=commonHelpers2.js.map