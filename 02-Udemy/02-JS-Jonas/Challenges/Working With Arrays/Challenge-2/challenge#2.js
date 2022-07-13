// challenge#2
const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(age => age > 18);
  const average = humanAge.reduce((sum, age) => sum + age, 0) / humanAge.length;
  humanAge.push(`Average of ages is ${average}`);

  return humanAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));