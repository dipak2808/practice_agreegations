const express = require('express')
const router = express.Router()
const data = require ('./contract')
router.use('/data',data)



module.exports = router
