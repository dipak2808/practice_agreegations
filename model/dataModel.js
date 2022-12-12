const mongoose = require('mongoose')
const dataModel = new mongoose.Schema({
    name:{type: String},
})
module.exports = mongoose.model('contracts', dataModel)    