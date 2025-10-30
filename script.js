window.addEventListener("load", () => {
  const logo = document.querySelector(".logo-animado");
  const header = document.getElementById("menuSuperior");
  const conteudo = document.getElementById("conteudo");

  // Move o logo depois de 1 segundo
  setTimeout(() => {
    logo.classList.add("mover");
  }, 1000);

  // Depois que a animação terminar (aqui 4.5s), remove "oculto" e mostra o header
  setTimeout(() => {
    header.classList.remove("oculto");   // <- remove a classe que estava escondendo
    header.classList.add("mostrar");     // <- adiciona classe que faz o fade-in
    conteudo.style.opacity = "1";
  }, 4500);
});
