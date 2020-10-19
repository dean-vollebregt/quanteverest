const base64String = require('../supporting/base64String.js').base64String;
const s3Service = require('../../../lambda/manageS3Objects/services/s3Service');

describe('createS3Object', () => {

    let response;

    let params = {
        "operation": "create",
        "fileName": "test.pdf",
        "fileData": base64String,
        "bucketName": "www.example.com/documents",
    };

    beforeAll(async () => {
        response  = await s3Service.createS3Object(params);
    }, 10000);

    it('Receives the correct location for uploaded s3 file',() => {
        expect(response.Location).toBe('https://s3.ap-southeast-2.amazonaws.com/www.example.com/document/test.pdf');
    });
});

describe('deleteS3Object', () => {

    let response;

    let params = {
        "operation": "delete",
        "fileName": "test.pdf",
        "bucketName": "www.example.com/documents",
    };

    beforeAll(async () => {
        response = await s3Service.deleteS3Object(params);
    }, 20000);

    it('Ensures file is deleted from correct bucket',() => {
        expect(response.$response.error).toBe(null);
    });
});




