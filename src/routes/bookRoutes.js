const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/:bookId', bookController.getBook);

module.exports = router;