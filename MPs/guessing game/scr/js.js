const submitButton = document.getElementById("submit-button");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const min = 1,
  max = 10;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

submitButton.onclick = function () {
  const guess = Number(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    message.textContent = "Please enter a valid number.";
  } else if (guess > randomNumber) {
    message.textContent = "Too high!";
  } else if (guess < randomNumber) {
    message.textContent = "Too low!";
  } else {
    message.textContent = "🎉 You win!";
  }
};

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitButton.click();
  }
});
