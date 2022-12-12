const express = require('express');
require('./config/db')
const app = express();
const data = require('./routes/index')
require('dotenv').config()
PORT = process.env.PORT
app.use('/api', data)
app.listen(PORT, () => {
    console.log('server running', `${PORT}`)
})