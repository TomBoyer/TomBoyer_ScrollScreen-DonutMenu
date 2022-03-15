let skewed = document.querySelector(".skewed");
let text = document.querySelector(".text");

window.addEventListener("scroll", () => {
  let value = -20 + window.scrollY / 50;
  skewed.style.transform = "skewY(" + value + "deg)";

  /* text.style.transform = "color:#333" */
});
