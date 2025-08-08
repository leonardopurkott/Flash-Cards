const cards = document.querySelectorAll('.Cartao');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});