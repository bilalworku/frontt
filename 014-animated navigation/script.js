const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

// from click event toggle the active class.
toggle.addEventListener("click", () => nav.classList.toggle("active"));
