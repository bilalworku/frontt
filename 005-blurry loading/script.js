const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  if (load > 99) clearInterval(int);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};
 
// For reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// https://chatgpt.com/c/676ee032-fb38-8006-9cd6-77bdba1eeb10
// for opacity maps load from (0-100) to 1 - 0(not visible)
// for blur maps load from (0-100) to 30 - 0px(no blur)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// set an interval to call blurring() every 30ms.
let int = setInterval(blurring, 30);
