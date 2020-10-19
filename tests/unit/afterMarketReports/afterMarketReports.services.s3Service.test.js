let fs = require('fs');
const s3Service = require('../../../lambda/afterMarketReports/services/s3Service.js');

describe('s3Service.downloadFromS3', () => {

    let fileExists;

    beforeAll(async () => {
        await s3Service.downloadFromS3();
        fileExists = fs.existsSync('/tmp/afterMarketReportsData.JSON');
    }, 10000);

    it('Gets afterMarketReportsData.JSON from S3 and writes it to /tmp ',() => {
        expect(fileExists).toBe(true);
    });
});

describe('s3Service.sendFileToS3', () => {

    let fileName = 'QuantEverest-After-Market-Report.pdf';
    let s3FileLocation = "https://www.removed_by_dean_for_security_reasons.com";
    let response;

    beforeAll(async () => {
        response = await s3Service.sendFileToS3(fileName);
    }, 10000);

    it('Sends the After Market Report to the correct S3 Location',() => {
        expect(response.Location).toBe(s3FileLocation);
    });
});