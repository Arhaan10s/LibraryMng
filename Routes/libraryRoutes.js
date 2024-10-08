const express = require('express');
const router = express.Router();
const { createLib, updateLib, deleteLib, getLib } = require('../Controllers/libraryControls');

router.post('/createLib',createLib);
router.put('/updateLib',updateLib);
router.get('/getLib',getLib);
router.delete('/deleteLib',deleteLib);


module.exports = router;