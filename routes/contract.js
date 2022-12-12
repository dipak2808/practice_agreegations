const express = require('express');
const  router = express.Router();
const { contractData } = require('../controllers/data');




router.post('/', contractData)


module.exports = router;