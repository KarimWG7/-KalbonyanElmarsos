/*
// JavaScript Fundamentals – Part 2


//LECTURE: Functions

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}
const finland = describeCountry("Finland", 6, "Helsinki")
let egypt = describeCountry("Egypt", 103.25, "Cairo")
const sudan = describeCountry("Sudan", 45.27, "Khartom")

console.log(egypt)
console.log(finland)
console.log(sudan)

// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(country, population) {
  const percentage = `${country} which has ${population} million people has a percentage 0f %${(100 * population) / 7800} of the world population`
  return  percentage
}
const china = percentageOfWorld1("China" ,1441)
console.log(china)



const percentageOfWorld2 = function (country, population) {
  const percentage = `${country} which has ${population} million people has a percentage 0f %${(100 * population) / 7800} of the world population`
  return  percentage
}
egypt = percentageOfWorld2("Egypt", 103.25)
console.log(egypt)

const percentageOfWorld3 = (country, population) =>  {
  const percentage = `${country} which has ${population} million people has a percentage 0f %${(100 * population) / 7800} of the world population`
  return  percentage
}

// LECTURE: Arrow Functions

console.log(percentageOfWorld3("Egypt", 103.25))
 

// LECTURE: Functions Calling Other Functions
const percentageOfWorld4 = function(population){
  return (100 * population)/7800
}
const descripePopulation  = function(country, population) {
  const percentage = percentageOfWorld4(population)
  return  `${country} which has ${population} million people has a percentage 0f %${percentage} of the world population`
}
console.log(descripePopulation("Egypt", 103.25))


// LECTURE: Introduction to Arrays

const populations = [103, 45, 1441, 60];
console.log(populations.length === 4);
const percentage = (population) => (population * 100) / 7800;
const percentages = [
  percentage(populations[0]),
  percentage(populations[1]),
  percentage(populations[2]),
  percentage(populations[3]),
];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods)


const neighbours = ["Sudan", "Libea", "Suria", "Moraco"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (!neighbours.includes('Germany')){
  console.log("Probably not a central European country :D")
}
const index = neighbours.indexOf('Libea')
neighbours[index] = 'Germany'
console.log(neighbours);

// LECTURE: Introduction to Objects

const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 103,
  neighbours: ['Sudan', 'Libea', 'Surea']
}

// LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} and acapital called ${myCountry.capital}`
);
myCountry.population = 105;
console.log(myCountry)
myCountry['population']= 103;
console.log(myCountry)

// LECTURE: Object Methods
const myCountry = {
  country: 'Egypt',
  capital: 'Cairo',
  language: 'Arabic',
  population: 103,
  neighbours: ['Sudan', 'Libea', 'Surea'],
  descripeMyCountry: function(){
    return (
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} and acapital called ${this.capital}`
    );
  }
}
console.log(myCountry.descripeMyCountry())



// LECTURE: Iteration: The for Loop

for(let vote = 1; vote <= 50; vote++ ) {
  console.log(`Voter number ${vote} is currently voting`)
}



// LECTURE: Looping Arrays, Breaking and Continuing

const populations = [103, 45, 1441, 60];
console.log(populations.length === 4);
const percentage = (population) => (population * 100) / 7800;
const percentages = [
  percentage(populations[0]),
  percentage(populations[1]),
  percentage(populations[2]),
  percentage(populations[3]),
];

console.log(percentages);


const percentages2 = []
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentage(populations[i]))
}
console.log(percentages2)


// LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"]
];


for (let array = 0; array < listOfNeighbours.length; array++) {
  for(let country= 0; country < listOfNeighbours[array].length ;country++) {
    console.log(`Neighbour: ${listOfNeighbours[array][country]}`)
  }
}

*/

