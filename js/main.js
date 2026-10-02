(() => {
  document.documentElement.classList.add("js");

  const header = document.querySelector("[data-header]");
  const nav = document.getElementById("site-nav");
  const menuToggle = document.querySelector("[data-menu-toggle]");

  /* ---------- Mobile menu ---------- */

  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  window.matchMedia("(min-width: 1141px)").addEventListener("change", (query) => {
    if (query.matches) setMenuOpen(false);
  });

  /* ---------- Header shadow once the page scrolls ---------- */

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Gentle reveal for a few key blocks ---------- */

  const revealTargets = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target)
          .forEach((target) => {
            target.classList.add("is-visible");
            observer.unobserve(target);
          });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    revealTargets.forEach((target) => observer.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }

  /* ---------- Footer year ---------- */

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
