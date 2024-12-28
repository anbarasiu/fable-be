require('dotenv').config();
const AWS = require('aws-sdk');

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
    const url = s3.getSignedUrl('getObject', params);
    return url;
};