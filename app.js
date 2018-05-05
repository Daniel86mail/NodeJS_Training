console.log('starting app.js');
//core modules
const fs = require('fs');
//3rd party modules
const _ = require('lodash');

//my modules
const notes = require('./notes');

var command = process.argv[2];


switch(command){
    case 'add':
    console.log('adding new note');
    break;
    case 'read':
    console.log('reading note');
    break;
    case 'remove':
    console.log('removing note');
    break;
    case 'list':
    console.log('listing all notes');
    break;
    default:
    console.log('command not recognized');
    break;
}
