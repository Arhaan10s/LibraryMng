const express = require('express');
const router = express.Router();
const { addBookToLibrary, getBook, deleteBook, updateBook } = require('../Controllers/libraryBookControl');

router.post('/addBookToLibrary',addBookToLibrary);
router.put('/updateBook',updateBook);
router.delete('/deleteBook',deleteBook);
router.get('/getBook',getBook);

module.exports = router;