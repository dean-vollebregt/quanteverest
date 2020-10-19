let fs = require('fs');
const path = require("path");

const generatePDF = require('../../../lambda/afterMarketReports/functions/generatePDF.js').generatePDF;

describe('generatePDF', () => {

    let fileName = 'QuantEverest-After-Market-Report.pdf';
    let location = path.resolve(__dirname, "../supporting/afterMarketReportsData.JSON")
    let content = JSON.parse(fs.readFileSync(location, 'utf8'))
    let fileExists;

    beforeAll(async () => {
        await generatePDF(content, fileName);
        fileExists = fs.existsSync('/tmp/QuantEverest-After-Market-Report.pdf');
    });

    it('Checks an afterMarkets pdf report has been generated',() => {
        expect(fileExists).toBe(true);
    });
});