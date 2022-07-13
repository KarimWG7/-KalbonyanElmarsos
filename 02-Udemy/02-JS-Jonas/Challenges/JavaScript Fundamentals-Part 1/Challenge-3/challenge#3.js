////////////////
// CHALLENGE#3
////////////////
let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 91 + 110) / 3;

if (dolphinsAverage > koalasAverage) {
  console.log(`Dolphins is the winner with score of ${dolphinsAverage}`);
} else if (dolphinsAverage < koalasAverage) {
  console.log(`Koalas is the winner with score of ${koalasAverage}`);
} else if (dolphinsAverage === koalasAverage) {
  console.log(`It's a draw with score of ${koalasAverage}`);
}

dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 123) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins is the winner with score of ${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas is the winner with score of ${koalasAverage}`);
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`It's a draw with score of ${koalasAverage}`);
}

dolphinsAverage = (97 + 112 + 101) / 3;
koalasAverage = (109 + 95 + 106) / 3;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins is the winner with score of ${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas is the winner with score of ${koalasAverage}`);
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`It's a draw with score of ${koalasAverage}`);
} else {
  console.log(`no one will win becuase they both didn't hit 100 point`);
}
