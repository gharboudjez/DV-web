function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "-_.";
  let characters = "";
  let password = "";

  characters += lowercase ? lowercaseChars : "";
  characters += uppercase ? uppercaseChars : "";
  characters += numbers ? numberChars : "";
  characters += symbols ? symbolChars : "";

  if (characters.length === 0) {
    passwordDisplay.textContent = "Please select at least one character type.";
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordDisplay.textContent = password;
}
const passwordDisplay = document.getElementById("passwordDisplay");
const generateButton = document.getElementById("generateBtn");

generateButton.addEventListener("click", () => {
  const selectedLength = document.querySelector(
    'input[name="passwordLength"]:checked',
  );

  if (!selectedLength) {
    passwordDisplay.textContent = "Please select a password length.";
    return;
  }

  const selectedOperations = Array.from(
    document.querySelectorAll('input[name="operation"]:checked'),
  ).map((operation) => operation.value);

  generatePassword(
    Number(selectedLength.value),
    selectedOperations.includes("lowercase"),
    selectedOperations.includes("uppercase"),
    selectedOperations.includes("numbers"),
    selectedOperations.includes("special"),
  );
});
