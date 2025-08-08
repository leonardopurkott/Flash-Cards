document.querySelectorAll(".cartao").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("ativo");
  });
});