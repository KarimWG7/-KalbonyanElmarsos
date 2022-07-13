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


//CHALLENGE#1

//1
const [players1, players2] = game.players;
//2
const [gk, ...feildsPlayers] = players1;
console.log(gk, feildsPlayers);
//3
const allPlayers = [...players1, ...players2];
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, team2, draw);
//6
const printGoals = function (...number) {
  console.log(`${number.length} goals were scored tonight by ${number}`);
};

printGoals('Davies', 'Muller', 'Muller', 'Kimmich');
printGoals(...game.scored);
//7
team1 < team2 && console.log(`Team 1 wins the match`);
team1 < team2 || console.log(`Team 2 wins the match`);

