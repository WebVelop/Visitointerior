/* =========================================
   HAMBURGUER
========================================= */

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

});
 
/* =========================================
   LEAFLET MAP
========================================= */

const map = L.map('map').setView([40.3, -7.6], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

  attribution: '&copy; OpenStreetMap'

}).addTo(map); 

/* =========================================
   MARKER
========================================= */

const marker = L.marker([40.3, -7.6]).addTo(map);

/* =========================================
   EVENTOS HOVER
========================================= */

const cards = document.querySelectorAll(".evento-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    const lat = card.dataset.lat;
    const lng = card.dataset.lng;

    map.flyTo([lat, lng], 12, {

      duration:1.5

    });

    marker.setLatLng([lat, lng]);

  });

});

/* =========================================
   CALENDÁRIO
========================================= */

const dias = document.querySelectorAll(".dia");

dias.forEach(dia => {

  dia.addEventListener("click", () => {

    dias.forEach(btn => {

      btn.classList.remove("active");

    });

    dia.classList.add("active");

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

