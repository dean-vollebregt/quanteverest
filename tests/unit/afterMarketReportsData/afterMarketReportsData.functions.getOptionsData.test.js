const fs = require('fs').promises;
const optionsData = require('../../../lambda/afterMarketReportsData/functions/getOptionsData.js');

describe('getOptionsData', () => {

    let rawHTML, asxCode = 'CBA';

    beforeAll(async () => {
        rawHTML = await optionsData.getOptionsData(asxCode)
    }, 10000);

    it('Gets rawHTML to parse for XJO data',() => {
        expect(rawHTML).toContain('CBA')
    });

    it('Expects to find Call option data',() => {
        expect(rawHTML).toContain('Call')
    });
});

describe('parseHTML', () => {

    let optionsCompany, rawHTML, asxCode = 'CBA';

    beforeAll(async () => {
        rawHTML = await fs.readFile(process.cwd() +'/unit/supporting/rawHTMLCBA.txt');
        optionsCompany = await optionsData.parseHTML(rawHTML, asxCode);
    }, 10000);

    it('Contains an object called XJO',() => {
        expect(Object.keys(optionsCompany)[0]).toContain('CBA')
    });

    it('Contains a value called',() => {
        expect(Object.values(optionsCompany)[0][0]).toMatchObject({"type": "Put"})
    });
});
