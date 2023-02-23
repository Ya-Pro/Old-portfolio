let span = document.querySelector(".first");
const animatetext = () => {
  setTimeout(() => {
    span.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    span.textContent = "Video editor";
  }, 4000);
  setTimeout(() => {
    span.textContent = "Photographer";
  }, 8000);
};
setInterval(animatetext, 12000);
animatetext();
// ...............................home active
// colorsSwitcher;
// the toggle icon
let toggle = document.querySelector(".toggle__icon")
let aside = document.querySelector("aside")
let main = document.getElementById("home")
toggle.addEventListener('click', ()=> {
  aside.classList.toggle("aside_active")
  main.classList.toggle("main_active")
})
//  the btn up
let btnUp = document.querySelector(".btn-up")
window.addEventListener('scroll', ()=> {
  if(window.scrollY >= 600) {
    btnUp.classList.add("show")
  }else {
    btnUp.classList.remove("show")
  }
})
btnUp.addEventListener("click", ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});
