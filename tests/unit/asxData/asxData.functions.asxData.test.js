const asxData = require('../../../lambda/asxData/functions/asxData.js');

describe('getXJOHistory', () => {

    let XJOLevel;

    beforeAll(async () => {
        XJOLevel = await asxData.getXJOHistory();
    }, 20000);

    it('Gets the most current level of the ASX 200 Index',() => {
        expect(XJOLevel[0].last).toBeGreaterThan(3000);
    });

    it('Gets the 12 month % change of the ASX 200 Index',() => {
        expect(Math.abs(XJOLevel[0].twelveMonthPercent)).toBeGreaterThan(0);
    });
});

describe('getCompaniesWithOptionsData', () => {

    let companiesWithOptions, asxCompanies = ['AGL','MQG'];

    beforeAll(async () => {
        companiesWithOptions = await asxData.getCompaniesWithOptionsData(asxCompanies);
    }, 20000);

    it('Gets shares price data on ASX listed companies',() => {
        expect(companiesWithOptions[0].code).toBe('AGL');
    });

    it('Calculates the one day share price change',() => {
        expect(Math.abs(companiesWithOptions[1].oneDayPercent)).toBeGreaterThan(0);
    });

    it('Calculates the 12 month share price change',() => {
        expect(Math.abs(companiesWithOptions[1].twelveMonthPercent)).toBeGreaterThan(0);
    });
});
