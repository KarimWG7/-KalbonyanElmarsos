const fs = require("fs");
const chalk = require("chalk");

const getNotes = (notes) => {
  return notes;
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const dublicatedNote = notes.find((note) => note.title === title);
  if (!dublicatedNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(`Note(${title}) is added succesfully :)`));
  } else {
    console.log(chalk.red.inverse("Note tilte is taken!!"), dublicatedNote);
    console.log(
      chalk.yellow.inverse("Write a note with a deffirent title, please :)")
    );
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removedNote = notes.find((note) => note.title === title);
  if (removedNote) {
    notes.pop(removeNote);
    saveNotes(notes);
    console.log(chalk.green.inverse(`Note(${title}) removed succesfully!`));
  } else {
    console.log(chalk.red.inverse("Note doesn't exist"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes"));
  notes.forEach((note, i) => {
    const noteTitle = chalk.green(note.title);
    console.log(`Note${i + 1}:- ${noteTitle}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    const noteTitle = chalk.blue.inverse(note.title);
    console.log(noteTitle + ":- " + note.body);
  } else {
    console.log(chalk.red.inverse("Note doesn't exist"));
  }
};
module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
