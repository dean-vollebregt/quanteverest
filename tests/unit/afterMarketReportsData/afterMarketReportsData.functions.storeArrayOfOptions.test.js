const fs = require('fs');
const arrayOfOptions = require('../supporting/arrayOfOptions.js').arrayOfOptions;
const storeArrayOfOptions = require('../../../lambda/afterMarketReportsData/functions/storeArrayOfOptions.js').storeArrayOfOptions;

describe('storeArrayOfOptions', () => {

    let fileName = 'afterMarketReportsData.JSON';
    let fileExists;

    beforeAll(async () => {
        await storeArrayOfOptions(fileName, arrayOfOptions)
        fileExists = fs.existsSync('/tmp/afterMarketReportsData.JSON');
    });

    it('Checks an array of AfterMarketReportsData contains XJO test data',() => {
        expect(Object.keys(arrayOfOptions[0])).toContain('XJO');
    });

    it('Checks an array of AfterMarketReportsData has been saved in the correct location',() => {
        expect(fileExists).toBe(true);
    });
});