const fs = require('fs');
const generatePngImages = require('../../../lambda/weeklyReports/functions/generatePNGImages.js').generatePngImages;

describe('generatePngImages', () => {

    let fileExists;

    beforeAll(async () => {
        await generatePngImages();
        fileExists = fs.existsSync('/tmp/seekTimeSeries.png');
    }, 10000);

    it('Checks a seekTimeSeries.png file has been created',() => {
        expect(fileExists).toBe(true);
    });
});
