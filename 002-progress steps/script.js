const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// select all classes w name circle.
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
 
// when the btn is clicked, + currentActive by 1 and run the update function.
next.addEventListener("click", () => {
  currentActive++; 
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});

// when the button is clicked, - by 1 and run the update function.
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

// iterate over the circle list, make active for those less than current.
const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  // select all active classes, and count the number of actives.
  const actives = document.querySelectorAll(".active");
  // the total are all 4, and set the width in 1/3, 2/3, 3/3 *actives*
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
    // toggle btns to disabled based on condition.
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};
