const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/:fileName', bookController.getBook);

module.exports = router;