const fs = require('fs').promises;
const optionsData = require('../../../lambda/optionsData/functions/getOptionsData.js');

describe('optionsDataHTML', () => {

    let rawHTML, optionASXCode ='CBA';

    beforeAll(async () => {
        rawHTML = await optionsData.optionsDataHTML(optionASXCode);
    }, 10000);

    it('Gets rawHTML to parse for CBA data',() => {
        expect(rawHTML).toContain('CBA');
    });
});

describe('parseHTML', () => {

    let rawHTML, arrayOfOptions;

    beforeAll(async () => {
        rawHTML = await fs.readFile(process.cwd() + '/unit/supporting/rawHTMLCBA.txt');
        arrayOfOptions = await optionsData.parseHTML(rawHTML);
    }, 10000);

    it('Contains an array of objects with keys named asxCode',() => {
        expect(Object.keys(arrayOfOptions[3])).toContain('asxCode');
    });

    it('Contains an array of objects with valid strike prices',() => {
        expect(arrayOfOptions[7].strike).toBeGreaterThan(0)
    });
});