//let x = Math.floor(Math.random() * 100 - 1) + 1;

//console.log(x);

//const min = 50;
//const max = 100;

//let randomNumberfloor = Math.floor(Math.random() * (max - min + 1)) + min;
//console.log(randomNumberfloor);

//let randomNumberceil = Math.ceil(Math.random() * (max - min + 1)) + min;
//console.log(randomNumberceil);

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
///
let age = 17;
let license = age >= 18 ? "You can drive" : "You cannot drive";
console.log(license);

const mytext = document.getElementById("ageInput");
const checkAgeButton = document.getElementById("checkAge");
const ageResult = document.getElementById("ageResult");
let userAge;

checkAgeButton.onclick = function () {
  userAge = Number(mytext.value);
  if (userAge >= 18) {
    ageResult.textContent = "You can drive.";
  } else {
    ageResult.textContent = "You cannot drive.";
  }
};
///
const mycheckbox = document.getElementById("myCheckbox");
const visa = document.getElementById("visa");
const mustercard = document.getElementById("mustercard");
const redot = document.getElementById("redot");
const paypal = document.getElementById("paypal");
const submitBtn = document.getElementById("submitBtn");
const subres = document.getElementById("subres");
const paymen = document.getElementById("paymen");

submitBtn.onclick = function () {
  if (mycheckbox.checked) {
    subres.textContent = "You have accepted the terms and conditions.";
  } else {
    subres.textContent = "You must accept the terms and conditions.";
  }

  if (visa.checked) {
    paymen.textContent = "You have selected Visa.";
  } else if (mustercard.checked) {
    paymen.textContent = "You have selected MasterCard.";
  } else if (redot.checked) {
    paymen.textContent = "You have selected Redot.";
  } else if (paypal.checked) {
    paymen.textContent = "You have selected PayPal.";
  } else {
    paymen.textContent = "You have not selected any payment method.";
  }
};
///
const ageInput = document.getElementById("timeInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const gridingstate = document.getElementById("gridingstate");
let state;

checkAgeBtn.onclick = function () {
  const age = Number(ageInput.value);
  age > 12 ? (state = true) : (state = false);
  gridingstate.textContent = state ? "good evening." : "good morning.";
};
///
let amount = 0;
const amountInput = document.getElementById("amountInput");
const checkAmountBtn = document.getElementById("checkAmountBtn");
const thedis = document.getElementById("thedis");
const newamount = document.getElementById("newamount");

checkAmountBtn.onclick = function () {
  amount = Number(amountInput.value);
  amount > 1000
    ? (thedis.textContent = "You are eligible for a discount!")
    : (thedis.textContent = "You are not eligible for a discount:().");
  newamount.textContent =
    amount > 1000
      ? `Your new amount is $${(amount * 0.85).toFixed(2)}`
      : `Your amount is $${amount.toFixed(2)}`;
};
///
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
}
///
let username = "zineddine gharboudje";
console.log(username.charAt(0));
console.log(username.lastIndexOf("o"));
console.log(username.toUpperCase());
console.log(username.length);
console.log(username.slice(1, 3));
///
let firstName = username.slice(0, username.indexOf(" "));
let lastName = username.slice(username.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);
///
let username2 = "ziNEddIne";
username2 =
  username2.trim().charAt(0).toUpperCase() +
  username2.trim().slice(1).toLowerCase();
console.log(username2);
///
const temp = 25;
const isWithinRange =
  temp <= 30 && temp >= 20
    ? "The temperature is within the desired range."
    : "The temperature is not within the desired range.";
console.log(isWithinRange);
///
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
///
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the loop when i is 3
  }
  console.log(i);
}
///
function happybortheday(username) {
  console.log(`happy dear ${username}`);
  console.log("happy bortheday to you");
}

happybortheday("Zinou");

function add(x, y) {
  return x + y;
}

console.log(add(2, 3));

function evorod(x) {
  if (Number.isNaN(x)) {
    return "Please enter a valid number.";
  }
  return x % 2 === 0 ? "even" : "odd";
}

const numberinput = document.getElementById("numinput");
const checkeod = document.getElementById("checkeod");
const resultm = document.getElementById("resultm");

checkeod.onclick = function () {
  const value = Number(numberinput.value);
  resultm.textContent = `The number is ${evorod(value)}.`;
};

numberinput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkeod.click();
  }
});
