const fs = require('fs').promises;
const optionsDataXJO = require('../../../lambda/optionsData/functions/getOptionsDataXJO.js');

describe('getASX200Level', () => {

    let XJOLevel;

    beforeAll(async () => {
        XJOLevel = await optionsDataXJO.getASX200Level();
    }, 10000);

    it('Gets the most current level of the ASX 200 Index',() => {
        expect(XJOLevel).toBeGreaterThan(3000);
    });
});

describe('optionsDataHTMLXJO', () => {

    let rawHTML;

    beforeAll(async () => {
        rawHTML = await optionsDataXJO.optionsDataHTMLXJO();
    }, 20000);

    it('Gets rawHTML to parse for XJO data',() => {
        expect(rawHTML).toContain('XJO')
    });

    it('Expects to find Call option data',() => {
        expect(rawHTML).toContain('Call')
    });
});

describe('XJOparseHTML', () => {

    let optionsXJO, rawHTML, asx200Level = 6000;

    beforeAll(async () => {
        rawHTML = await fs.readFile(process.cwd() +'/unit/supporting/rawHTML.txt');
        optionsXJO = await optionsDataXJO.XJOparseHTML(rawHTML, asx200Level)
    }, 10000);

    it('Contains an array of objects with keys named asxCode',() => {
        expect(Object.keys(optionsXJO[3])).toContain('asxCode');
    });

    it('Contains an array of objects with valid strike prices',() => {
        expect(optionsXJO[7].strike).toBeGreaterThan(0);
    });
});