const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}); 


const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

langBtn.addEventListener("click", function(e){
    e.stopPropagation();
    langDropdown.classList.toggle("show");
});

document.addEventListener("click", function(){
    langDropdown.classList.remove("show");
});

