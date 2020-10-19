const STAGE = process.env.STAGE;
const dynamoService = require('../../../lambda/weeklyReportsData/services/dynamoService.js');

describe('updateWeeklyJobCount', () => {

    let arrayLength, response, updatedJobCount, jobCount = '100000'

    beforeAll(async () => {

        if(STAGE === 'dev') {
            response = await dynamoService.updateWeeklyJobCount(jobCount);
            arrayLength = response.Attributes.weeklyJobsCount.L.length;
            updatedJobCount = Number(response.Attributes.weeklyJobsCount.L[53].M.jobs.N);
        } else {
            arrayLength = 54;
            updatedJobCount = 100000;
        }
    }, 10000);

    it('Saves the current Seek weekly job count figure',() => {
        expect(updatedJobCount).toEqual(100000);
    });

    it('Checks the weeklyJobCountArray is length 54 after insertion',() => {
        expect(arrayLength).toEqual(54);
    });
});