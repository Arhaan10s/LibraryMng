const express = require('express');
const router = express.Router();
const {createBook} = require('../Controllers/bookControl');

router.post('/createBook',createBook);


 module.exports = router;