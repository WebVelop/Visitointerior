const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card");

filtros.forEach(btn => {

  btn.addEventListener("click", () => {

    filtros.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filtro = btn.dataset.filter;

    cards.forEach(card => {

      if(filtro === "all"){
        card.style.display = "block";
      }

      else if(card.classList.contains(filtro)){
        card.style.display = "block";
      }

      else{
        card.style.display = "none";
      }

    });

  });

});
 

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

});

// FECHAR MENU MOBILE AO CLICAR
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("ativo");
    hamburger.classList.remove("ativo");

  });

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

