const Mb = document.getElementById("Mb");
const Ml = document.getElementById("Ml");
const min = 1;
const max = 6;
let randomNmber;

Mb.onclick = function () {
  randomNmber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNmber);
  Ml.textContent = randomNmber;
};
