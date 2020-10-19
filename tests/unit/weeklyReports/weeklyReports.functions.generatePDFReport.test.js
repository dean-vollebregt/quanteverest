const fs = require('fs');
const generatePdfReport = require('../../../lambda/weeklyReports/functions/generatePDFReport.js').generatePdfReport;

describe('generatePdfReport', () => {

    const fileName = 'QuantEverest-Weekly-Report.pdf';

    beforeAll(async () => {
        await generatePdfReport(fileName);
        fileExists = fs.existsSync('/tmp/QuantEverest-Weekly-Report.pdf');
    });

    it('Checks a Quanteverest weekly pdf report has been generated',() => {
        expect(fileExists).toBe(true);
    });
});