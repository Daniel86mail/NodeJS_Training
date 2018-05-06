console.log('starting app.js');
//core modules
const fs = require('fs');
//3rd party modules
const _ = require('lodash');
const yargs = require('yargs');
//my modules
const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];

switch(command){
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note)
            console.log(`Note ${argv.title} saved`);
        else
            console.log('A note with the same title already exits');
        break;
    case 'read':
        notes.read(argv.title);
        break;
    case 'remove':
        notes.remove(argv.title);
        break;
    case 'list':
        notes.list();
        break;
    default:
        console.log('command not recognized');
        break;
}
