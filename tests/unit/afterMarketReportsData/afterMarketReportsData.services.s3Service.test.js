const s3Service = require('../../../lambda/afterMarketReportsData/services/s3Service.js');

describe('AfterMarketReportsData sendFileToS3', () => {

    let fileName = 'afterMarketReportsData.JSON'
    let s3FileLocation = 'https://quanteverest.s3.ap-southeast-2.amazonaws.com/data/afterMarketReportsData.JSON';
    let response;

    beforeAll(async () => {
        response = await s3Service.sendFileToS3(fileName);
    }, 10000);

    it('Sends the After Market Report JSON Data the correct S3 Location',() => {
        expect(response.Location).toBe(s3FileLocation);
    });
})