const dynamoService = require('../../../lambda/afterMarketReports/services/dynamoService.js').dynamoService;

describe('dynamoService', () => {

    let allUsers;

    beforeAll(async () => {
        allUsers = await dynamoService();
    }, 10000);

    it('Queries DynamoDB for After Market Report Subscribers',() => {
        expect(allUsers.Items).toContainEqual(expect.objectContaining({"email": {"S": "test@gmail.com"}}))
    });
});