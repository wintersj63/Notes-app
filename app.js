const chalk = require('chalk')
const yargs = require('yargs')
const noteUtilities = require('./notes.js')

// Customize the yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    // Refactored method to use ES6 method definition syntax
    handler(argv) {
        noteUtilities.addNote(argv.title, argv.body)

    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // Refactored method to use ES6 method definition syntax
    handler (argv) {
        noteUtilities.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    // Refactored method to use ES6 method definition syntax
    handler() {
        noteUtilities.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // Refactored method to use ES6 method definition syntax
    handler(argv) {
        // Call the readNote function
        noteUtilities.readNote(argv.title)
    }
})

// add, remove, read, list 

yargs.parse();
