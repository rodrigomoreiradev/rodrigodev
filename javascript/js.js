function initAnimaScrol() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const winMetade = window.innerHeight * 0.72;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top;
        const mostrarSections = sectionTopo - winMetade < 0;
        if (mostrarSections) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScrol();
