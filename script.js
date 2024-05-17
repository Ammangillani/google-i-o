const sections = document.querySelectorAll(".section");
const sidebarHeadings = document.querySelectorAll(".navbar-nav li");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      sidebarHeadings.forEach((heading) => {
        heading.classList.remove("active");
        if (heading.dataset.target === entry.target.id) {
          heading.classList.add("active");
        }
      });
    }
  });
}, options);
console.log("sections", sections, observer);
sections.forEach((section) => {
  observer.observe(section);
});
