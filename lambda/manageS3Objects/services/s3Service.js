const AWS = require('aws-sdk');
let s3 = new AWS.S3();

async function createS3Object(event) {

    let params = {
        Bucket : "www.example.com/docs",
        Key : event.fileName,
        Body : Buffer.from(event.fileData, 'base64')
    };

    try {
        return await s3.upload(params).promise();
    } catch (err) {
        return err
    }
}

async function deleteS3Object(event) {

    let params = {
        Bucket : "www.example.com/docs",
        Key : event.fileName
    };

    try {
        return await s3.deleteObject(params).promise();
    } catch (err) {
        return err
    }
}

module.exports = {
    createS3Object,
    deleteS3Object
};