var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelectorAll(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close"),c=document.querySelectorAll(".modal"),s=document.querySelector("body");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-modal"),o=document.querySelector('.modal[data-modal="'+t+'"]');o.classList.add("active"),o.closest(".js-overlay-modal").classList.add("active"),s.classList.add("no-scroll")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),this.closest(".js-overlay-modal").classList.remove("active"),s.classList.remove("no-scroll")}))})),c.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".js-overlay-modal.active").classList.remove("active"),s.classList.remove("no-scroll"))}),!1),t.forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),s.classList.remove("no-scroll")}))}))}));
//# sourceMappingURL=index.98cd912b.js.map