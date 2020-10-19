const seekWeeklyJobCount = require('../../../lambda/weeklyReportsData/functions/seekData.js').seekWeeklyJobCount;

describe('seekWeeklyJobCount', () => {

    let jobCount;

    beforeAll(async () => {
        jobCount = await seekWeeklyJobCount();
    }, 10000);

    it('Gets the current number of jobs advertised on seek',() => {
        expect(Number(jobCount)).toBeGreaterThan(50000);
    });
});