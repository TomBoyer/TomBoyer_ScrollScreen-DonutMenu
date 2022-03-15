let skewedOne = document.querySelector(".skewedOne");
let skewedTwo = document.querySelector(".skewedTwo");

window.addEventListener('scroll', ()=>{
    let value1 = -20 + window.scrollY/30
    let value2 = 20 + window.scrollY/-30

    skewedOne.style.transform = "skewY("+ value1 +"deg)"
    skewedTwo.style.transform = "skewY("+ value2 +"deg)"
})