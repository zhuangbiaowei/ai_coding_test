const cards = Array.from(document.querySelectorAll(".card"));

function runEntryAnimation() {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    card.style.top = rect.top + 120 + "px";
    card.offsetHeight; // force reflow
    window.setTimeout(() => {
      card.classList.add("card--visible");
    }, Number(card.dataset.delay));
  });
}

runEntryAnimation();

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const offset = Math.max(0, 1 - rect.top / window.innerHeight);
    card.style.opacity = offset;
    card.style.top = (1 - offset) * 120 + "px";
  });
});
