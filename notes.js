const fs = require('fs');
const _ = require('lodash');

var addNote = (title, body)=>{
    var notes = [];
    var note = {
        title,
        body
    };

    try{
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch(e){

    }

    var duplicateNotes = notes.filter((note)=> note.title === title); // the same as normal arrow function using {return}

    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var read = (title)=>{
    console.log(`reading ${title}`);
};  
var remove = (title)=>{
    console.log(`removing ${title}`);
};
var list = ()=>{
    console.log('getting all notes');
};

module.exports = {
    addNote,
    read: read, //the other lines are same as this one
    remove,
    list
};