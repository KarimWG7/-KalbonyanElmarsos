////////////////////////
// CHALLENGE#1
////////////////////////

const clacAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = clacAverage(44, 23, 71);
let scoreKoalas = clacAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins wins (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Dolphins wins (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return "No one wins";
  }
};
console.log(checkWinner(scoreDolphins, scoreKoalas))

scoreDolphins = clacAverage(85, 54, 41);
scoreKoalas = clacAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas))