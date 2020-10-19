const cognitoService = require('../../../lambda/administrator/services/cognitoService.js');

describe('enableCognitoUser', () => {

    let response, event = {};

    event.payload = [{
        'email' : 'test@email.com',
        'approvedAccount': true
    }];

    beforeAll(async () => {
        response = await cognitoService.enableCognitoUser(event);
    }, 20000);

    it('Enables a new users cognito account through Admin approval',() => {
        expect(response[0]).toBe('test@email.com');
    });
});

describe('disableCognitoUser', () => {

    let response, event = {
        'newUser': {
            'email': 'test@email.com'
        }
    };

    beforeAll(async () => {
        response = await cognitoService.disableCognitoUser(event);
    }, 20000);

    it('Disables a users cognito account',() => {
        expect(response.$response.error).toBe(null);
    });
});

describe('validateCredentials', () => {

    let response, event = {};

    event.accessToken = 'InvalidAccessToken'

    beforeAll(async () => {
        response = await cognitoService.validateCredentials(event);
    }, 20000);

    it('Invalidates an unauthorised request for Admin methods',() => {
        expect(response).toBe(false)
    });
});

