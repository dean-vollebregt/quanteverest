const allUsers = require('../supporting/allUsers.js').allUsers;
const activeSubscriptions = require('../../../lambda/weeklyReports/functions/activeSubscriptions.js').activeSubscriptions;

describe('activeSubscriptions', () => {

    let subscriptions;

    beforeAll(() => {
        subscriptions = activeSubscriptions(allUsers.Items)
    });

    it('Checks an afterMarkets pdf report has been generated',() => {
        expect(subscriptions).toContain("test@gmail.com")
    });
});