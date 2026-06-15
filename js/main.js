// ============================= 
// HEADER SCROLL (efeito shrink)
// =============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else { 
    header.classList.remove("scrolled");
  }
});


// =============================
// MAPA INTERATIVO
// =============================

// ELEMENTOS DO TEXTO
const titulo = document.getElementById("titulo");
const sub = document.getElementById("sub");
const descricao = document.getElementById("descricao");
const botao = document.getElementById("btn-descobrir");

// BASE DE DADOS DOS DISTRITOS
const dadosDistritos = {
  aveiro: {
    titulo: "Aveiro",
    sub: "Conhecida como a Veneza de Portugal.",
    descricao:
      "Canais, moliceiros coloridos e uma forte tradição marítima fazem de Aveiro um destino único para explorar cultura e paisagem.",
    link: "https://www.discoveraveiro.pt/"
  },

  leiria: {
    titulo: "Leiria",
    sub: "História e património.",
    descricao:
      "O castelo de Leiria domina a paisagem e conta séculos de história. A região mistura natureza, praias e património cultural.",
    link: "https://www.visiteleiria.pt/"
  },

  coimbra: {
  titulo: "Coimbra",
  sub: "Cidade universitária.",
  descricao:
    "Berço de uma das universidades mais antigas da Europa, Coimbra é rica em tradição académica, cultura e história.",
  link: "https://visitecoimbra.pt/"
  },


  viseu: {
    titulo: "Viseu",
    sub: "Tradição e vinho.",
    descricao:
      "Conhecida pela sua ligação ao vinho do Dão, Viseu combina património histórico com uma forte identidade cultural.",
    link: "https://www.visitviseudaolafoes.pt/"
  },

  guarda: {
    titulo: "Guarda",
    sub: "A cidade mais alta de Portugal.",
    descricao:
      "Com vistas impressionantes e proximidade à Serra da Estrela, a Guarda oferece natureza, história e autenticidade.",
    link: "https://www.visitguarda.pt/en/"
  },

  castelobranco: {
    titulo: "Castelo Branco",
    sub: "Natureza e tradição.",
    descricao:
      "Entre jardins históricos e paisagens naturais, Castelo Branco destaca-se pela sua autenticidade e tranquilidade.",
    link: "https://turismodocentro.pt/concelho/castelo-branco/"
  }
};

const dadosDistritosEN = {
  aveiro: {
    titulo: "Aveiro",
    sub: "Known as the Venice of Portugal.",
    descricao:
      "Canals, colorful moliceiro boats and a strong maritime tradition make Aveiro a unique destination to explore culture and landscapes.",
    link: "https://www.discoveraveiro.pt/"
  },

  leiria: {
    titulo: "Leiria",
    sub: "History and heritage.",
    descricao:
      "Leiria Castle dominates the landscape and holds centuries of history. The region blends nature, beaches and cultural heritage.",
    link: "https://www.visiteleiria.pt/"
  },

  coimbra: {
    titulo: "Coimbra",
    sub: "University city.",
    descricao:
      "Home to one of the oldest universities in Europe, Coimbra is rich in academic tradition, culture and history.",
    link: "https://visitecoimbra.pt/"
  },

  viseu: {
    titulo: "Viseu",
    sub: "Tradition and wine.",
    descricao:
      "Known for its connection to Dão wine, Viseu combines historical heritage with a strong cultural identity.",
    link: "https://www.visitviseudaolafoes.pt/"
  },

  guarda: {
    titulo: "Guarda",
    sub: "The highest city in Portugal.",
    descricao:
      "With impressive views and proximity to Serra da Estrela, Guarda offers nature, history and authenticity.",
    link: "https://www.visitguarda.pt/en/"
  },

  castelobranco: {
    titulo: "Castelo Branco",
    sub: "Nature and tradition.",
    descricao:
      "Between historic gardens and natural landscapes, Castelo Branco stands out for its authenticity and tranquility.",
    link: "https://turismodocentro.pt/concelho/castelo-branco/"
  }
};

function getDados(id) {
  return document.documentElement.lang === "en"
    ? dadosDistritosEN[id]
    : dadosDistritos[id];
}


// =============================
// INTERAÇÃO COM MAPA
// =============================
const distritosSVG = document.querySelectorAll(".distrito");
const nomes = document.querySelectorAll('.nome-distrito');

let distritoSelecionado = null;

// CLICK (selecionar distrito)
distritosSVG.forEach(distrito => {
  distrito.addEventListener("click", () => {

    const id = distrito.id;
    const dados = getDados(id);
    if (!dados) return;

    // REMOVER SELEÇÃO ANTERIOR
    distritosSVG.forEach(d => d.classList.remove('ativo'));
    nomes.forEach(n => n.classList.remove('ativo'));

    // ATIVAR NOVO
    distrito.classList.add('ativo');
    distritoSelecionado = id;

    const nome = document.querySelector(`.nome-distrito[data-id="${id}"]`);
    if (nome) nome.classList.add('ativo');

    // ATUALIZAR TEXTO COM FADE
    titulo.style.opacity = 0;
    sub.style.opacity = 0;
    descricao.style.opacity = 0;

    setTimeout(() => {
      titulo.innerText = dados.titulo;
      sub.innerText = dados.sub;
      descricao.innerText = dados.descricao;

      titulo.style.opacity = 1;
      sub.style.opacity = 1;
      descricao.style.opacity = 1;
    }, 200);

    // 🔥 ATUALIZAR BOTÃO
    botao.textContent = "Descobrir mais sobre " + dados.titulo;
  });
});


// =============================
// HOVER (nome fica negrito)
// =============================
distritosSVG.forEach(distrito => {

  distrito.addEventListener('mouseenter', () => {
    const id = distrito.id;

    nomes.forEach(n => n.classList.remove('ativo'));

    const nome = document.querySelector(`.nome-distrito[data-id="${id}"]`);
    if (nome) nome.classList.add('ativo');
  });

  distrito.addEventListener('mouseleave', () => {

    nomes.forEach(n => n.classList.remove('ativo'));

    if (distritoSelecionado) {
      const nome = document.querySelector(`.nome-distrito[data-id="${distritoSelecionado}"]`);
      if (nome) nome.classList.add('ativo');
    }

  });

});


// =============================
// BOTÃO (ir para página)
// =============================
botao.addEventListener('click', (e) => {

  e.preventDefault();

  if (!distritoSelecionado) return;

  const dados = getDados(distritoSelecionado);

  if (dados.link) {
    window.open(dados.link, "_blank");
  }

});



const anuncios = document.querySelectorAll('.slider-inner a');
const slider = document.querySelector('.slider-inner');

let index = 0;
let autoplay;

function iniciarSlider() {

  autoplay = setInterval(() => {

    anuncios[index].classList.remove('ativo');

    index = (index + 1) % anuncios.length;

    anuncios[index].classList.add('ativo');

  }, 6000);

}


function pararSlider() {
  clearInterval(autoplay); 
}

iniciarSlider();

// computador
slider.addEventListener('mouseenter', pararSlider);
slider.addEventListener('mouseleave', iniciarSlider);

// DISTRITO INICIAL 
window.addEventListener("load", () => {

  const distritoInicial = "coimbra";

  const dados = getDados(distritoInicial);

  titulo.innerText = dados.titulo;
  sub.innerText = dados.sub;
  descricao.innerText = dados.descricao;

  botao.textContent =
    "Descobrir " + dados.titulo;

  distritoSelecionado = distritoInicial;

  // ativar distrito no mapa
  const distrito =
    document.getElementById(distritoInicial);

  if (distrito) {
    distrito.classList.add("ativo");
  }

  // ativar nome
  const nome = document.querySelector(
    `.nome-distrito[data-id="${distritoInicial}"]`
  );

  if (nome) {
    nome.classList.add("ativo");
  }

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

// ======================================
// HERO CINEMATOGRÁFICO
// ======================================

const tl = gsap.timeline();


// HERO INTEIRO
tl.from(".hero-overlay", {
  opacity: 0,
  scale: 1.1,

  duration: 2,
  ease: "power2.out"
});


// TÍTULO
tl.from(".hero-content h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, 0.4);


// TEXTO
tl.from(".hero-content p", {
  y: 30,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out"
}, 0.8);


// BOTÃO
tl.fromTo(".hero-btn",
{
  y: 20,
  opacity: 0
},
{
  y: 0,
  opacity: 1,

  duration: 0.8,
  ease: "power3.out"
}, 1.1);


// FEATURES
tl.from(".hero-features div", {
  y: 15,
  opacity: 0,
  duration: 0.7,

  stagger: 0.12,

  ease: "power2.out"
}, 1.3);





const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");

langBtn.addEventListener("click", function(e){
    e.stopPropagation();
    langDropdown.classList.toggle("show");
});

document.addEventListener("click", function(){
    langDropdown.classList.remove("show");
});

