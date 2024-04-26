document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    const currentSection = getCurrentSection();
    if (currentSection) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      const correspondingLink = document.querySelector(
        `.nav-link[href="#${currentSection.id}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });

  function getCurrentSection() {
    const sections = document.querySelectorAll(".section");
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        return section;
      }
    }
    return null;
  }
});
