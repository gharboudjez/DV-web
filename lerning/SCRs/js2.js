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

Mb.onclick = () => {
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

checkAgeButton.onclick = () => {
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

submitBtn.onclick = () => {
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

checkAgeBtn.onclick = () => {
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

checkAmountBtn.onclick = () => {
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

checkeod.onclick = () => {
  const value = Number(numberinput.value);
  resultm.textContent = `The number is ${evorod(value)}.`;
};

numberinput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkeod.click();
  }
});

const wordInput = document.getElementById("wordInput");
const displayWordBtn = document.getElementById("displayWordBtn");
const displaymessage = document.getElementById("displmessage");
const displresult = document.getElementById("displresult");

displayWordBtn.onclick = () => {
  let timer = 3;
  displaymessage.textContent = `Waiting for ${timer} seconds...`;
  displresult.textContent = "";

  const countdown = setInterval(() => {
    timer--;

    if (timer > 0) {
      displaymessage.textContent = `Waiting for ${timer} seconds...`;
    } else {
      clearInterval(countdown);
      displaymessage.textContent = "done!";
      displresult.textContent = wordInput.value.toUpperCase();
    }
  }, 1000);
};

const hello = (name, age) => {
  console.log(`Hello, ${name}!`);
  console.log(`Your age is ${age}.`);
};

hello("Zineddine", 20);

const person0 = {
  firstName: "Zineddine",
  lastName: "Gharboudje",
  age: 20,
  isStudent: true,
  greet: () => {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
  eat: () => {
    console.log(`${this.firstName} is healthy.`);
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: false,
  greet: () => {
    console.log(`Hey, my name is ${this.firstName} ${this.lastName}.`);
  },
  eat: () => {
    console.log(`${this.firstName} is fastfood.`);
  },
};
console.log(person0.firstName);
console.log(person1.firstName);
person0.greet();
person1.greet();
person0.eat();
console.log(person1);

function createPensol(mark, color, price) {
  this.mark = mark;
  this.color = color;
  this.price = price;
  this.right = () => {
    console.log(`The ${this.mark} pen is writing.`);
  };
}
const pensol1 = new createPensol("Bic", "blue", 1.5);
const pensol2 = new createPensol("Faber-Castell", "red", 2.0);

pensol1.right();
pensol2.right();

class school {
  static schoolnum = 0;
  constructor(name, location, stars, tax) {
    this.name = name;
    this.location = location;
    this.stars = stars;
    this.tax = tax;
    school.schoolnum++;
    const totalPrice = () => {
      return this.tax * 1000;
    };
    this.totalPrice = totalPrice();
  }

  displayInfo() {
    console.log(
      `School Name: ${this.name}, Location: ${this.location}, Stars: ${this.stars}, Total Price: $${this.totalPrice.toFixed(2)}`,
    );
  }
}

const school1 = new school("THE FUTURE", "New York", 4, 0.05);
const school2 = new school("ELEGENCE", "Los Angeles", 5, 0.1);

school1.displayInfo();
school2.displayInfo();
console.log(`Total number of schools: ${school.schoolnum}`);

class human {
  alive = true;
}
class man extends human {
  gender = "male";
}
class woman extends human {
  gender = "female";
}

console.log(new man());
console.log(new woman());

class shuman {
  alive = true;
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
  }
  working() {
    console.log(
      `${this.name} is ${this.isWorking ? "working" : "not working"}.`,
    );
  }
}
class shman extends shuman {
  constructor(name, age, gender) {
    super(name, age, true);
    this.mgender = gender;
  }
  working() {
    super.working();
  }
}
class shwoman extends shuman {
  constructor(name, age, gender) {
    super(name, age, false);
    this.fgender = gender;
  }
}

const sarah = new shwoman("Sarah", 18, "female");
const zineddine = new shman("Zineddine", 20, "male");

sarah.working();
zineddine.working();

class h_w {
  constructor(name, Height, Weight) {
    this.name = name;
    this.Height = Height;
    this.Weight = Weight;
  }
  set name(newname) {
    if (typeof newname === "string" && newname.trim() !== "") {
      this._name = newname;
    }
  }
  get name() {
    return this._name;
  }
  set Height(newHigh) {
    newHigh > 0
      ? (this._Height = newHigh)
      : console.log("Invalid height value.");
  }
  get Height() {
    return this._Height;
  }
  set Weight(newWeight) {
    newWeight > 0
      ? (this._Weight = newWeight)
      : console.log("Invalid weight value.");
  }
  get Weight() {
    return this._Weight;
  }
  get area() {
    return (this._Height * this._Weight) / 10000;
  }
}

const person = new h_w("John Doe", 180, 75);
console.log(`Name: ${person.name.trim()}
Height: ${person.Height} cm
Weight: ${person.Weight} kg
Area: ${person.area} m²`);

function savegame() {
  let score = 5;

  function increaseScore(points) {
    score += points;
    console.log(`Score: ${score}`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`Score: ${score}`);
  }

  function getScore() {
    console.log(`Current Score: ${score}`);
  }

  return {
    increaseScore,
    decreaseScore,
    getScore,
  };
}

let player1 = savegame();

player1.increaseScore(10);
player1.getScore();
player1.decreaseScore(10);
