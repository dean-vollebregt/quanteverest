const sendFileToS3 = require('../../../lambda/weeklyReports/services/s3Service').sendFileToS3;

describe('sendFileToS3', () => {

    let response, fileName = 'QuantEverest-Weekly-Reports.pdf';

    beforeAll(async () => {
        response  = await sendFileToS3(fileName);
    }, 10000);

    it('Stores the weekly report PDF in the correct location',() => {
        expect(response.Location).toBe('https://s3.ap-southeast-2.amazonaws.com/www.example.com/reports/QuantEverest-Weekly-Reports.pdf');
    });
});
