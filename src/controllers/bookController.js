const s3Service = require('../services/s3Service');
const fs = require('fs').promises;
const path = require('path');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.getBooks = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/content.json');
        const data = await fs.readFile(filePath, 'utf8');
        const books = JSON.parse(data);
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBook = async (req, res) => {
    const { fileName } = req.params;
    try {
        const book = await s3Service.getBook(fileName);
        res.send(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};