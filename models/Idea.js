const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Idea = new Schema ({
    title: String,
    username: String
 
})

module.exports = mongoose.model('Idea', Idea)