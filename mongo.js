const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
	'mongodburi'

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

// first param is the singular name of the model
// const Note = mongoose.model('Note', noteSchema)

// // Creating and saving objects

// const note = new Note({
// 	content: 'Callback-functions suck',
// 	date: new Date(),
// 	important: false,
// })

// note.save().then(result => {
// 	console.log('note saved!')
// 	mongoose.connection.close()
// })

// Fetching objects from the database

// Note.find({ important: true }).then(result => {
// 	result.forEach(note => {
// 		console.log(note)
// 	})
// 	mongoose.connection.close()
// })

