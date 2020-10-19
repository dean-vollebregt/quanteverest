const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: 'ap-southeast-2'
});

const fsPromise = require('fs').promises;

async function sendFileToS3(fileName) {

    let path = '/tmp/' + fileName;

    try {
        let fileData = await fsPromise.readFile(path);

        let params = {
            Bucket: 'quanteverest/data',
            Key: fileName,
            Body: fileData,
        };

        return await s3.upload(params).promise();

    } catch(error) {
        throw error;
    }
}

module.exports = {
    sendFileToS3
};
