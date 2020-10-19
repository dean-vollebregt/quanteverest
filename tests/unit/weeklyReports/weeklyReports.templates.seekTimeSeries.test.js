let prepareSeekTemplate = require('../../../lambda/weeklyReports/templates/seekTimeSeries.js').prepareSeekTemplate

describe('prepareSeekTemplate', () => {

    let response;

    beforeAll(async () => {
        response = await prepareSeekTemplate();
    }, 10000);

    it('Contains Seek data for the past 12 weeks',() => {
        expect(response.data[0].values.length).toBe(12)
    });

    it('Contains Seek data for the past 12 weeks',() => {
        expect(Number(response.data[0].values[11].y)).toBeGreaterThan(50000)
    });
});