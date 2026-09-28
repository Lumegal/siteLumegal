// Menu-toggle (menú hamburguer)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  // Menu mobile
  menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("active");
  });

  // Links do menu
  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Se não for uma âncora (#), deixa o navegador
      // seguir normalmente para outra página
      if (!href || !href.startsWith("#")) {
        return;
      }

      e.preventDefault();

      const targetSection = document.querySelector(href);

      if (!targetSection) return;

      // Fecha menu mobile
      nav?.classList.remove("active");

      requestAnimationFrame(() => {
        const headerHeight = header?.getBoundingClientRect().height || 0;

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        history.pushState(null, "", href);

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    });
  });

  // Se a página foi aberta com #defensa
  const hash = window.location.hash;

  if (hash) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const targetSection = document.querySelector(hash);

        if (targetSection) {
          const headerHeight = header?.getBoundingClientRect().height || 0;

          const targetPosition =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 50);
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona as imagens e o modal
  const images = document.querySelectorAll(".about-image img, .modal-image");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  // Adiciona evento de clique para exibir o modal
  images.forEach((image) => {
    image.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = image.src; // Define o src da imagem clicada no modal
    });
  });

  // Fecha o modal ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".image-modal");
  const modalImage = document.querySelector("#modalImage");

  // Adiciona evento a todas as imagens com a classe "modal-image"
  document.querySelectorAll(".modal-image").forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modal.classList.add("active");
    });
  });

  // Fecha o modal ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modalImage.src = ""; // Limpa o src
    }
  });
});
