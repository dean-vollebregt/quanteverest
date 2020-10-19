const dynamoService = require('../../../lambda/dynamo/services/dynamoService.js');

describe('getNotifications', () => {

    let response, event = {};

    event.userName = 'test@gmail.com';

    beforeAll(async () => {
        response = await dynamoService.getNotifications(event);
    }, 10000);

    it('Gets the users current subscription preferences',() => {
        expect(response.Item.notifications.M.sms_alert.BOOL).toBe(true);
    });
});

describe('setNotifications', () => {

    let response, event = {
        'userName' : 'test@gmail.com',
        'sms_alert' : true,
        'after_market_report': true,
        'weekly_report': true
    };

    beforeAll(async () => {
        response = await dynamoService.setNotifications(event);
    }, 20000);

    it('Updates a users subscription preferences',() => {
        expect(response.Attributes.notifications.M.sms_alert.BOOL).toBe(true);
    });
});

describe('createUserAccessLog', () => {

    let response, event = {};

    event.newUser = {
        user_identifier: 'test@gmail.com',
        account_creation_date : '31/12/1999'
    }

    beforeAll(async () => {
        response = await dynamoService.createUserAccessLog(event);
    }, 20000);

    it('creates a new users access log',() => {
        expect(Number(response.Attributes.logins.N)).not.toBeLessThan(0);
    });
});

describe('updateUserAccessLog', () => {

    let response, event = {
        'userName': 'test@gmail.com',
        'attempts': 1
    };

    beforeAll(async () => {
        response = await dynamoService.updateUserAccessLog(event);
    }, 20000);

    it('tests the users login count has been incremented',() => {
        expect(Number(response.Attributes.logins.N)).toBeGreaterThan(1);
    });
});

describe('createWebUser', () => {

    let response, event = {};

    event.newUser = {
        // Remove for security reasons
    }

    beforeAll(async () => {
        response = await dynamoService.createWebUser(event);
    }, 20000);

    it('Checks a new test user has been created',() => {
        expect(response.Attributes.new_user.S).toBe("yes")
    });
});