const express = require('express');
const { issueBook, getUser } = require('../Controllers/userControl');
const router = express.Router();

router.post('/issueBook',issueBook);
router.get('/getUser',getUser);

module.exports = router;