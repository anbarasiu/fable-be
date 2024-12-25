const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const BUCKET_NAME = process.env.BUCKET_NAME;

exports.getBook = async (bookId) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `books/${bookId}`
    };
    const data = await s3.getObject(params).promise();
    return data.Body.toString('utf-8');
};