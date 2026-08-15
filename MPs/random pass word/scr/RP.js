function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "-_.";
  let characters = "";
  let password = "";

  characters += lowercaseChars ? lowercaseChars : "";
  characters += uppercaseChars ? uppercaseChars : "";
  characters += numberChars ? numberChars : "";
  characters += symbolChars ? symbolChars : "";

  if (characters.length === 0) {
    return "Please select at least one character type.";
  }
  if (length < 1 || length > 6) {
    return "Password length must be between 1 and 6 characters.";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

const Pl = 6;
const lowercase = true;
const uppercase = true;
const numbers = true;
const symbols = true;

const password = generatePassword(Pl, lowercase, uppercase, numbers, symbols);
console.log(password);
