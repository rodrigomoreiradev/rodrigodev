function initScrollSuave() {
  const LinksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //   forma alternativa
    //   const topo = section.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }
  LinksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
  });
}
initScrollSuave();

const sections = document.querySelectorAll(".js-scroll");
const metadeTela = window.innerHeight * 0.76;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const visible = sectionTop - metadeTela < 0;
    if (visible) {
      section.classList.add("ativo");
    } else {
      section.classList.remove("ativo");
    }
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);
