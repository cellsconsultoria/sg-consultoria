window.addEventListener("load", () => {
  const logo = document.querySelector(".logo-animado");
  const header = document.getElementById("menuSuperior");
  const conteudo = document.getElementById("conteudo");

  // Move o logo depois de 1 segundo
  setTimeout(() => {
    logo.classList.add("mover");
  }, 1000);

  // Mostra o cabeçalho e o conteúdo suavemente
  setTimeout(() => {
    header.classList.add("mostrar");
    conteudo.style.opacity = "1";
  }, 4500);
});
