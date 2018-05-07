const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
    var notes = [];
    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch(e){

    }

    return notes;
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body)=>{
    var notes = fetchNotes();

    var duplicateNotes = notes.filter((note)=> note.title === title); // the same as normal arrow function using {return}

    if(duplicateNotes.length === 0){
        var note = {
            title,
            body
        };
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var read = (title)=>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((n) => n.title === title);
    return filteredNotes[0];
};  
var remove = (title)=>{
    var notes = fetchNotes();
    var notesToKeep = notes.filter((note)=> note.title !== title);
    saveNotes(notesToKeep);

    return notes.length !== notesToKeep.length;
};
var list = ()=>{
    var notes = fetchNotes();
    _.each(notes, (note)=>{
        console.log(note.title);
    });
};

module.exports = {
    addNote,
    read: read, //the other lines are same as this one
    remove,
    list
};