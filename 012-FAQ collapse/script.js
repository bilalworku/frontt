const toggles = document.querySelectorAll(".faq-toggle");

// for each node add a toggle(on and off) for active 
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
