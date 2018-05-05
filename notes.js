console.log('starting notes.js');

var addNote = (title, body)=>{
    console.log('adding ' + title + ' ' + body);
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