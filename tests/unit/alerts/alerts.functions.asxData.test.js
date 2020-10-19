const asxData = require('../../../lambda/alerts/functions/asxData.js');

describe('getXJOHistory', () => {

    let XJOLevel;

    beforeAll(async () => {
        XJOLevel = await asxData.getXJOHistory();
    }, 10000);

    it('Gets the one day % change of the ASX 200 Index',() => {
        expect(Math.abs(XJOLevel[0].oneDayPercent)).toBeGreaterThan(0);
    });
});

describe('getCompanyHistory', () => {

    let companyLevels, asxCompanies = ['AGL','BEN','MQG'];

    beforeAll(async () => {
        companyLevels = await asxData.getCompanyHistory(asxCompanies);
    }, 10000);

    it('Gets shares price data on ASX listed companies',() => {
        expect(companyLevels[0].code).toBe('AGL');
    });

    it('Calculates the one day share price change of given companies',() => {
        expect(Math.abs(companyLevels[2].oneDayPercent)).toBeGreaterThan(0);
    });
});