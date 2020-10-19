const snsService = require('../../../lambda/alerts/services/snsService.js').snsService;

describe('alerts snsService', () => {

    let confirmation;
    let subscribedMobiles = ["0439283771"];
    let priceHistory ="Test up 3.07% \nTest down -3.96% \n"

    beforeAll(async () => {
        confirmation = await snsService(subscribedMobiles, priceHistory);
    }, 10000);

    it('Sends company price alerts to subscribed users',() => {
        expect(confirmation.MessageId.length).toBeGreaterThan(30);
    });
});