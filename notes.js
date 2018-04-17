console.log('Starting notes.js');

const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  let notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
  console.log('Getting note', title);
};

let removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
