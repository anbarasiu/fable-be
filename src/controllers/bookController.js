const s3Service = require('../services/s3Service');
const fs = require('fs').promises;
const path = require('path');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const logger = require('../utils/logger');

exports.getBooks = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../data/content.json');
        const data = await fs.readFile(filePath, 'utf8');
        const books = JSON.parse(data);
        logger.info('Books data retrieved successfully');
        res.json(books);
    } catch (error) {
        logger.error(`Error retrieving books data: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

exports.getBook = async (req, res) => {
    const { fileName } = req.params;
    try {
        const book = await s3Service.getBook(fileName);
        logger.info(`Book data retrieved successfully for file: ${fileName}`);
        res.send(book);
    } catch (error) {
        logger.error(`Error retrieving book data for file ${fileName}: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};