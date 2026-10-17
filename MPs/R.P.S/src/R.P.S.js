const pchoice = document.getElementById("p-choice");
const cchoice = document.getElementById("c-choice");
const resultElement = document.getElementById("result");
const resultBox = document.getElementById("result-box");
const winsValue = document.getElementById("wins-value");
const lossesValue = document.getElementById("losses-value");
const tiesValue = document.getElementById("ties-value");
const streakValue = document.getElementById("streak-value");
const resetButton = document.getElementById("reset-button");

const choices = ["rock", "paper", "scissors"];
const choiceIcons = { rock: "✊", paper: "✋", scissors: "✌️" };
let wins = 0;
let losses = 0;
let ties = 0;
let streak = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result;
  let resultClass;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    resultClass = "result-tie";
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    resultClass = "result-win";
    wins++;
    streak++;
  } else {
    result = "You lose!";
    resultClass = "result-loss";
    losses++;
    streak = 0;
  }

  pchoice.textContent = `${choiceIcons[playerChoice]} ${playerChoice}`;
  cchoice.textContent = `${choiceIcons[computerChoice]} ${computerChoice}`;
  resultElement.textContent = result;
  resultBox.className = resultClass;
  winsValue.textContent = wins;
  lossesValue.textContent = losses;
  tiesValue.textContent = ties;
  streakValue.textContent = streak;
}

resetButton.addEventListener("click", () => {
  wins = 0;
  losses = 0;
  ties = 0;
  streak = 0;
  pchoice.textContent = "—";
  cchoice.textContent = "—";
  resultElement.textContent = "Choose a move to start!";
  resultBox.className = "result-idle";
  winsValue.textContent = wins;
  lossesValue.textContent = losses;
  tiesValue.textContent = ties;
  streakValue.textContent = streak;
});

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;

  const keyChoices = { 1: "rock", 2: "paper", 3: "scissors" };
  const playerChoice = keyChoices[event.key];

  if (playerChoice) play(playerChoice);
});
