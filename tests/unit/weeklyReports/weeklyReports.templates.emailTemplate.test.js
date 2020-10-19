let emailTemplate = require('../../../lambda/weeklyReports/templates/emailTemplate.js').emailTemplate;

describe('emailTemplate', () => {

    it('Sends the After Market Report to subscribed users',() => {
        expect(emailTemplate.Source).toBe('QuantEverest <research@quanteverest.com>')
    });
});