const dynamoService = require('../../../lambda/administrator/services/dynamoService.js');

describe('updateWebUserStatus', () => {

    let response, event = {};

    event.payload = [{
        'email' : 'test@gmail.com',
        'approvedRole' : 'Premium',
        'approvedAccount': true
    }];

    beforeAll(async () => {
        response = await dynamoService.updateWebUserStatus(event);
    }, 20000);

    it('Updates a users role and account approval status',() => {
        expect(response.Attributes.approved_role.S).toBe('Premium');
    });
});

describe('getWebUsers', () => {

    let response;

    beforeAll(async () => {
        response = await dynamoService.getWebUsers();
    }, 20000);

    it('Gets array containing all web users',() => {
        expect(response.Items).toContainEqual(expect.objectContaining({"email": {"S": "test@email.com"}}))
    });
});

describe('getFilesAndHyperlinks', () => {

    let response;

    beforeAll(async () => {
        response = await dynamoService.getFilesAndHyperlinks();
    }, 20000);

    it('Gets array containing all web users',() => {
        expect(typeof response.Items[0].description.S).toBe('string')
    });
});