const STAGE = process.env.STAGE;
const sesService = require('../../../lambda/weeklyReports/services/sesService.js');

describe('sesService', () => {

    let messageIds;
    let activeSubscriptions= ['test@gmail.com'];

    beforeAll(async () => {
        // run live tests on dev only
        if(STAGE === 'dev') {
            messageIds = await sesService.sendEmail(activeSubscriptions);
        } else {
            messageIds = ['01000174d33a4c36-7e0fe181-f796-4bd0-bb91-912503233396-000000']
        }
    }, 10000);

    it('Sends the After Market Report to subscribed users',() => {
        expect(messageIds[0].length).toBeGreaterThan(50);
    });
});