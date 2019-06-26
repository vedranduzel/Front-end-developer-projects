const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");

hamburger.addEventListener("click", function(){
    drawer.classList.toggle("open");
});
