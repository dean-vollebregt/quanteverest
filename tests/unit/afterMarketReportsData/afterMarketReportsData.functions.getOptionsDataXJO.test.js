const fs = require('fs').promises;
const optionsDataXJO = require('../../../lambda/afterMarketReportsData/functions/getOptionsDataXJO.js');

describe('getASX200Level', () => {

    let asx200Level;

    beforeAll(async () => {
        asx200Level = await optionsDataXJO.getASX200Level()
    }, 10000);

    it('Gets the most current level of the ASX 200 index',() => {
        expect(Number(asx200Level)).toBeGreaterThan(3000);
    });
});

describe('getOptionsDataXJO', () => {

    let rawHTML;

    beforeAll(async () => {
        rawHTML = await optionsDataXJO.getOptionsDataXJO()
    }, 10000);

    it('Gets rawHTML to parse for XJO data',() => {
        expect(rawHTML).toContain('XJO')
    });

    it('Expects to find Call option data',() => {
        expect(rawHTML).toContain('Call')
    });
});

describe('XJOparseHTML', () => {

    let optionsXJO, rawHTML, asx200Level = '6000';

    beforeAll(async () => {
        rawHTML = await fs.readFile(process.cwd() +'/unit/supporting/rawHTML.txt');
        optionsXJO = await optionsDataXJO.XJOparseHTML(rawHTML, asx200Level)
    }, 10000);

    it('Contains an object called XJO',() => {
        expect(Object.keys(optionsXJO)[0]).toContain('XJO')
    });

    it('Contains a value called',() => {
        expect(Object.values(optionsXJO)[0][0]).toMatchObject({"type": "Call"})
    });
});
