//core modules
const fs = require('fs');
//3rd party modules
const _ = require('lodash');
const yargs = require('yargs');
//my modules
const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];

var printNote = (note) =>{
    console.log(note.title);
    console.log('---');
    console.log(note.body);
    console.log('   ');   
}

switch(command){
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note)
            console.log(`Note ${argv.title} saved`);
        else
            console.log('A note with the same title already exits');
        break;
    case 'read':
        var note = notes.read(argv.title);
        if(note)
            printNote(note);   
        else
            console.log('Note not found');
        break;
    case 'remove':
        var removedNote = notes.remove(argv.title);
        var message = removedNote ? `the note ${argv.title} was removed` : 'the note was not found';
        console.log(message);
        break;
    case 'list':
        var items = notes.list();
        console.log(`printing ${items.length} note(s)`);
        _.each(items, (note) => printNote(note));
        break;
    default:
        console.log('command not recognized');
        break;
}
