const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
});
