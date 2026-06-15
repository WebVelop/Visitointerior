/* =========================
   MENU MOBILE
========================= */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}


/* =========================
   FORMULÁRIO CONTACTOS
========================= */
const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = new FormData(form);

    try{

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      if(response.ok){

        form.reset();

        document.getElementById("popup-sucesso").style.display = "flex";

      }

    }catch(error){

      alert("Ocorreu um erro ao enviar a mensagem.");

    }

  });

} 


const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

langBtn.addEventListener("click", function(e){
    e.stopPropagation();
    langDropdown.classList.toggle("show");
});

document.addEventListener("click", function(){
    langDropdown.classList.remove("show");
});

