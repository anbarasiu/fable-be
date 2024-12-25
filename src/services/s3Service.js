const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const BUCKET_NAME = process.env.BUCKET_NAME;

exports.listBooks = async () => {
    const params = {
        Bucket: BUCKET_NAME,
        Prefix: 'books/'
    };
    const data = await s3.listObjectsV2(params).promise();
    return data.Contents.map(item => item.Key);
};

exports.getBook = async (bookId) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `books/${bookId}`
    };
    const data = await s3.getObject(params).promise();
    return data.Body.toString('utf-8');
};

exports.updatePosition = async (bookId, position) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: `positions/${bookId}.json`,
        Body: JSON.stringify({ position }),
        ContentType: 'application/json'
    };
    await s3.putObject(params).promise();
};