const reportContent = require('../../../lambda/afterMarketReports/functions/reportContent.js').reportContent;

describe('reportContent', () => {

    let content;

    beforeAll(async () => {
        content = await reportContent();
    });

    it('Gets the index level for a an index option',() => {
        expect(content[0].XJO.[0].stock).toBeGreaterThan(3000);
    });

    it('Gets the expiry in days for an index option',() => {
        expect(content[0].XJO.[0].stock).toBeGreaterThan(179);
    });
});