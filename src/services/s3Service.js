require('dotenv').config();
const AWS = require('aws-sdk');
const logger = require('../utils/logger');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const BUCKET_NAME = process.env.BUCKET_NAME;

exports.getBook = async (fileName) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${fileName}`,
        Expires: 3600 // URL expiration time in seconds
    };
    try {
        const url = s3.getSignedUrl('getObject', params);
        logger.info(`Generated signed URL for file: ${fileName}`);
        return url;
    } catch (error) {
        logger.error(`Error generating signed URL for file ${fileName}: ${error.message}`);
        throw error;
    }
};