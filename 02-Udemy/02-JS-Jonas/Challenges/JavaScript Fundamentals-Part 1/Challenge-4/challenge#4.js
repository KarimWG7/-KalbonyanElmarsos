////////////////
// CHALLENGE#4
////////////////

const bill = 430;
let tip;
console.log(
  `The bill was $${bill}, the tip was $${
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, the total value is $${bill + tip} sir`
);


