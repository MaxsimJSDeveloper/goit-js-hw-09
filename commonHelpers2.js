import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),s=document.querySelector(".input"),l=document.querySelector(".text");e.addEventListener("input",o);function o(){const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}window.addEventListener("load",n);function n(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:m}=JSON.parse(t);e.elements.email.value=a,e.elements.message.value=m}}e.addEventListener("submit",r);function r(t){if(t.preventDefault(),localStorage.removeItem("feedback-form-state"),e.elements.email.value===""||e.elements.message.value===""){s.append("Please enter your email !!!"),l.append("Please enter your message !!!");return}console.log({email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map