const dynamoService = require('../../../lambda/alerts/services/dynamoService.js').dynamoService;

describe('alerts dynamoService', () => {

    let allUsers;

    beforeAll(async () => {
        allUsers = await dynamoService();
    }, 10000);

    it('Queries DynamoDB for After Market Report Subscribers',() => {
        expect(allUsers.Items).toContainEqual(expect.objectContaining({"email": {"S": "test@email.com"}}))
    });
});