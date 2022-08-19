const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");

const { addNote, removeNote, listNotes, readNote } = require("./notes");

// const command = process.argv[2];
// console.log(process.argv);
// if (command === "add") {
//   console.log(chalk.blue.inverse("Adding note!"));
// } else if (command === "remove") {
//   console.log(chalk.red.inverse("Removing note!"));
// }

// Customize yargs version
yargs.version("1.1.0");

/*******  add remove read list *******/
const body = chalk.green.inverse("Body");
const title = chalk.blue.inverse("Title");
// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "The note content",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});
// create remove command
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "The existing note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});
// creat list command
yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler() {
    listNotes();
  },
});
// creat read command
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});
// console.log(yargs.argv);
yargs.parse();
