const min = 1,
  max = 10,
  random = Math.floor(Math.random() * (max - min + 1) + min);

let atm = 0,
  guess,
  running = true;

while (running) {
  guess = window.prompt(`THE GUESSING GAME BETWEEN ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number.");
    continue;
  }

  if (guess < min || guess > max) {
    window.alert("Your guess is not in the valid range.");
    window.alert(`Please enter a number between ${min} and ${max}.`);
    continue;
  }

  atm++;

  if (guess !== random) {
    window.alert("Oops! Wrong guess, try again :3");
  } else {
    window.alert(
      `That's right, you won in ${atm} attempt${atm === 1 ? "" : "s"} ! *_*`,
    );
    running = false;
  }
}
