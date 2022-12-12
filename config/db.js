const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, async (error) => {
    if (!error) {
        console.log('connect to db')
    }
})
module.exports = mongoose