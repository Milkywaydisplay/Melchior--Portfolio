window.addEventListener("scroll", () => {
  const athlete = document.getElementById("athlete");
  if (!athlete) return;
  const offset = window.scrollY * 0.05;
  athlete.style.transform = `translateY(${offset}px)`;
});

window.addEventListener("load", () => {
  document.getElementById("athlete").classList.add("visible");
});
