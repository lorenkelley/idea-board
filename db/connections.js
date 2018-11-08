require('dotenv').config()

const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/my-idea-board')


mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose