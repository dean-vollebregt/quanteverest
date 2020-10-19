const dynamoService = require('../../../lambda/weeklyReports/services/dynamoService.js');

describe('getSubscriptions', () => {

    let allUsers;

    beforeAll(async () => {
        allUsers = await dynamoService.getSubscriptions();
    }, 10000);

    it('Queries DynamoDB for weeklyReport Subscribers',() => {
        expect(allUsers.Items).toContainEqual(expect.objectContaining({"email": {"S": "test@email.com"}}))
    });
});

describe('getSeekData', () => {

    let response;

    beforeAll(async () => {
        response = await dynamoService.getSeekData();
    }, 10000);

    it('Queries DynamoDB for Seek job count time series data',() => {
        expect(Number(response.Item.weeklyJobsCount.L[53].M.jobs.N)).toBeGreaterThan(50000)
    });

    it('Receives an array of length 54',() => {
        expect(response.Item.weeklyJobsCount.L.length).toEqual(54)
    });
});