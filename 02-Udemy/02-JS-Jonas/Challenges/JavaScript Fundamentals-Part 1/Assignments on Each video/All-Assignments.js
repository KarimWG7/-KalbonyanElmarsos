// LECTURE: Values and Variables

let country = "Egypt";
let continent = "Africa";
let population = 105;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Tyoes
const isIsLand = false;
let language;
console.log(typeof isIsLand);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);

// LECTURE: let, const and var

language = "Arabic";
console.log(typeof language);

// LECTURE: Basic Operators

let x = 10 + 5;
x += 10; // x = x+10
x -= 10; // x = x-10
x *= 10; // x = x*10
x++; // x = x+1
x--; // x = x-1
population++;
const halfPopulation = population / 2;
console.log(halfPopulation);
const fPopulation = 6;
// console.groupCollapsed(population > fPopulation)
const averagePopulation = 33;
// console.groupCollapsed(population < averagePopulation )
let description =
  "Portugal is in Europe, and its 11 million people speak potuguese";
console.log(description);

//LECTURE: The Conditional (Ternary) Operator
console.log(
  `Portugal's population is ${population >= 33 ? "above" : "below"} average`
);

// LECTURE: Taking Decisions: if / else Statements
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

// LECTURE: Strings and Template Literals
country = "Portugal";
continent = "Europe";
population = 11;
language = "potuguese";
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
  console.log(`${country} population s above average`);
} else {
  console.log(`${country}'s population is 22 million below average`);
}

// LECTURE: Type Conversion and Coercion
"9" - "5"; // 4
"19" - "13" + "17"; // 617
"19" - "13" + 17; // 23
"123" < 57; // false
5 + 6 + "4" + 9 - 4 - 2; //  1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===
const city = prompt("what's your favorite city");

if (city === "Alexandria" || "Alex") {
  console.log("Yep, me too I love it");
} else if (city === "Cairo") {
  console.log("Cairo is also a nice city");
} else if (city === "Aswan") {
  console.log("Aswan is also a nice city");
} else {
  console.log("Tha's not Alex or Cairo or Aswan ");
}
if (city !== "Alexandria" && city !== "Alex") {
  console.log("why not Alexandria");
}

// LECTURE: Logical Operators
const hasLessThan50Million = true;
const speaksEnglish = true;
const anIsland = false;

if (hasLessThan50Million && !anIsland && speaksEnglish) {
  console.log("you should live in portugal");
} else {
  console.log("Portugal doesn's meet your ccriteria");
}

// LECTURE: The switch Statement

const launguage = "arabic";
switch (launguage) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
