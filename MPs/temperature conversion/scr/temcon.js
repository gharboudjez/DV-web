const tempInput = document.getElementById("tempinput");
const toFah = document.getElementById("tofah");
const toCls = document.getElementById("tocls");
const result = document.getElementById("result");
let tempValue = 0;

function updateTheme(value) {
  const theme = value < 15 ? "cold" : value <= 25 ? "normal" : "hot";
  document.body.className = `theme-${theme}`;
  document.querySelector("h1").className = `theme-${theme}`;
}

function convert() {
  tempValue = Number(tempInput.value);
  if (isNaN(tempValue)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  updateTheme(tempValue);

  if (toFah.checked) {
    result.textContent = ((tempValue * 9) / 5 + 32).toFixed(2) + " °F";
  } else if (toCls.checked) {
    result.textContent = (((tempValue - 32) * 5) / 9).toFixed(2) + " °C";
  } else {
    result.textContent = "Please select a conversion option.";
  }
}
