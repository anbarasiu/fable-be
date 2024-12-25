const s3Service = require('../services/s3Service');

exports.getBooks = async (req, res) => {
    try {
        const books = await s3Service.listBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBook = async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await s3Service.getBook(bookId);
        res.send(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};