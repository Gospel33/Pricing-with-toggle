const toggle = document.getElementById("toggle");
const flexed = document.getElementById("flexed");

toggle.addEventListener("change", (e) => {
  flexed.classList.toggle("show-monthly");
});
