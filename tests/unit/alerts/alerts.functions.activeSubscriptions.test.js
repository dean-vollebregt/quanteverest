const allUsers = require('../supporting/allUsers.js').allUsers;
const activeSubscriptions = require('../../../lambda/alerts/functions/activeSubscriptions.js').activeSubscriptions;

describe('activeSubscriptions', () => {

    let subscribedMobiles;

    beforeAll(async () => {
        subscribedMobiles = await activeSubscriptions(allUsers.Items)
    }, 10000);

    it('Gets the mobile number of users subscribed to sms alerts',() => {
        expect(subscribedMobiles).toEqual(expect.arrayContaining(["0481764972", "0439283771"]));
    });
});