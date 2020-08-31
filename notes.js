const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    // const dupNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!(duplicateNote)){
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes)
    console.log(chalk.green.bold.inverse('New note added!'))
    }else {
        console.log(chalk.red.bold.inverse('Title: "' + duplicateNote.title + '" taken'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    }catch (e) {
        return []  
    }   
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.bold.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.bold.inverse('No note found'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    
    notes.forEach((note) => {
      console.log("Title: " + note.title + " Body: " + note.body)  
    });
}

const readNote = (title) => {
    // Create a process where the specified note is read
    const notes = loadNotes()

    // Search for note by title
    // const foundNote = notes.find((note) => note.title === title)
    const foundNote = notes.find((note) => note.title === title)

    // Find note and print title (styled) and body (plain)
    if(foundNote) {
        console.log(chalk.green.bold(foundNote.title))
        console.log(foundNote.body)
    }
    // Note not found, print error message
    else{
        console.log(chalk.red.bold.inverse('No note found!'))
    }    

}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
}