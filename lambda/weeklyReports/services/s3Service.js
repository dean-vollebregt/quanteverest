const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: 'ap-southeast-2'
});

const fsPromise = require('fs').promises;

async function sendFileToS3(fileName) {

    let path = '/tmp/' + fileName;

    try {
        let data = await fsPromise.readFile(path);

        let params = {
            Bucket: 'www.example.com/reports',
            Key: fileName,
            Body: data,
        };

        return await s3.upload(params).promise();
    } catch(error) {
        throw error;
    }
}

module.exports = {
    sendFileToS3
};
