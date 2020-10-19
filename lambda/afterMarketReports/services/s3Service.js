const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: 'ap-southeast-2'
});

const fsPromise = require('fs').promises;

async function sendFileToS3(fileName) {

    const path = '/tmp/' + fileName;

    try {
        const data = await fsPromise.readFile(path);

        const params = {
            Bucket: 'www.example.com/reports',
            Key: fileName,
            Body: data,
        };

        return await s3.upload(params).promise();

    } catch(error) {
        throw error
    }
}

async function downloadFromS3() {

    try {
        let params = {
            Bucket: 'quanteverest/data',
            Key: 'afterMarketReportsData.JSON',
        };

        let data = await s3.getObject(params).promise();

        return await fsPromise.writeFile('/tmp/afterMarketReportsData.JSON', data.Body);

    } catch(error) {
        throw error;
    }
}

module.exports = {
    sendFileToS3,
    downloadFromS3
};
