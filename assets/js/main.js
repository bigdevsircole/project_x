document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (backToTop) {
    const updateBackToTop = () => {
      const shouldShow = window.scrollY > 300;
      backToTop.classList.toggle("show", shouldShow);
      backToTop.classList.toggle("bounce", shouldShow);
    };

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    window.scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

const lite = () => {
  document.getElementById("yin").style.display = "none";
  document.getElementById("yang").style.display = "inline";
  document.getElementById("thor").href = "assets/css/light.css";
};

const nite = () => {
  document.getElementById("yang").style.display = "none";
  document.getElementById("yin").style.display = "inline";
  document.getElementById("thor").href = "assets/css/dark.css";
};

  
