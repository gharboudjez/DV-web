function rollDice() {
  const diceNumberInput = document.getElementById("dice-number");
  const diceResults = document.getElementById("dice-results");
  const dicePhotos = document.getElementById("dice-photos");
  const rollButton = document.getElementById("roll-button");

  const diceCount = Math.min(
    6,
    Math.max(1, Number(diceNumberInput.value) || 1),
  );
  diceNumberInput.value = diceCount;

  rollButton.disabled = true;
  rollButton.textContent = "Rolling...";
  diceResults.textContent = "Shuffling the fate...";
  dicePhotos.innerHTML = "";

  setTimeout(() => {
    const results = [];
    const photos = [];
    let total = 0;

    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      results.push(roll);
      total += roll;
      photos.push(`<img src="../imgs/${roll}.png" alt="Dice ${roll}" />`);
    }

    diceResults.innerHTML = `Results: ${results.join(", ")}<br>Total: ${total}`;
    dicePhotos.innerHTML = photos.join(" ");
    rollButton.disabled = false;
    rollButton.textContent = "Roll Dice";
  }, 600);
}
