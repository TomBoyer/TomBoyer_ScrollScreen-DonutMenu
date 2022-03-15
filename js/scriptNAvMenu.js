//active class on click menu
let menuToggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let header = document.querySelector("header");
let content = document.querySelector(".content");
let li = document.querySelectorAll("li");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  header.classList.toggle("active");
});

//move indicator mousemove
function activeIndicator() {
  li.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
li.forEach((item) => item.addEventListener("mouseover", activeIndicator));

//remove activ scroll
window.addEventListener("scroll", () => {
  menu.classList.remove("active");
  menuToggle.classList.remove("active");
  header.classList.remove("active");
});

//remove activ click body
content.addEventListener("click", () => {
  menu.classList.remove("active");
  menuToggle.classList.remove("active");
  header.classList.remove("active");
});

//tracking active menu li
const list = document.querySelectorAll("li");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
