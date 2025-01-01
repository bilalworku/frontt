const toggles = document.querySelectorAll(".faq-toggle");

// for each faq add a toggle(on and off) to active  
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
