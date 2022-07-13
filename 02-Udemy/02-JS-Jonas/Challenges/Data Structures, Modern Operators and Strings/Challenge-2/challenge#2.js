const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//CHALLENGE#2

// 1
for (const [x, j] of game.scored.entries()){
  console.log(`Goal ${x+1}: ${j}`);
};
//2
let sum = 0
const values = Object.values(game.odds)
for (const x of values){
  sum += x
}
const oddsAverage = sum/values.length
console.log(oddsAverage);

//3
for(const [x,v] of  Object.entries(game.odds)) {
  const teamStr = x ==='x' ? 'draw': `victory ${game[x]}`
  console.log(`Odds of ${teamStr} ${v}`);
}

//4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);