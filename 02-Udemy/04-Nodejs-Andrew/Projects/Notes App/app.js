const chalk = require('chalk')
const getNotes = require("./notes");

const firstNote = getNotes("my first note");

console.log(firstNote);
console.log(chalk.green.inverse("Success!!"));
console.log(chalk.red.inverse("Error!"));


