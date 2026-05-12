const scrollBtn = document.getElementById("scrollToTopBtn");

document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.querySelector(".hero-text");
  const colors = ["star-pink", "star-gold", "star-red"];
  const starCount = 100;

const fragment = document.createDocumentFragment();

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.textContent = "★";
    star.className = `star star${i + 1} ${colors[Math.floor(Math.random() * colors.length)]}`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    fragment.appendChild(star);
  }

  if (starsContainer) {
    starsContainer.appendChild(fragment);
  }

  const readMoreButtons = document.querySelectorAll(".read-more");
  let openContent = null;

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      const postContentContainer = button.closest(".post-content");
      const fullContent = postContentContainer.querySelector(".full-content");

      if (openContent && openContent !== fullContent) {
        openContent.style.display = "none";
        openContent.parentElement.querySelector(".read-more").textContent =
          "Devamını Oku";
      }

      if (fullContent.style.display === "block") {
        fullContent.style.display = "none";
        button.textContent = "Devamını Oku";
        openContent = null;
      } else {
        fullContent.style.display = "block";
        button.textContent = "Daha Az Göster";
        openContent = fullContent;
      }
    });
  });

  document.addEventListener("click", () => {
    if (openContent) {
      openContent.style.display = "none";
      openContent.parentElement.querySelector(".read-more").textContent =
        "Devamını Oku";

      openContent = null;
    }
  });

  const menuIcon = document.querySelector(".menu-icon");
  const navUl = document.querySelector(".blog-menu");
  const body = document.body;

  if (menuIcon && navUl) {
    menuIcon.addEventListener("click", () => {
      navUl.classList.toggle("active");
      body.classList.toggle("no-scroll");
    });

    const menuLinks = navUl.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navUl.classList.remove("active");
        body.classList.remove("no-scroll");
      });
    });
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader-fashion");
  setTimeout(function () {
    if (preloader) {
      preloader.classList.add("hidden");
      window.scrollTo(0, 0);
      if (window.location.hash) {
        history.replaceState(
          "",
          document.title,
          window.location.pathname + window.location.search,
        );
      }
      document.body.style.overflow = "";
    }
  }, 2000);
});
