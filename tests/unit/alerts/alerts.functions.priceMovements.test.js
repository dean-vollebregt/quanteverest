const priceHistory = require('../supporting/companyLevels.js').companyLevels;
const priceMovements = require('../../../lambda/alerts/functions/priceMovements.js').priceMovements;

describe('priceMovements', () => {

    let movements

    beforeAll(async () => {
        movements = await priceMovements(priceHistory);
    }, 10000);

    it('Gets the one day % change of the ASX 200 Index',() => {
        expect(movements).toBe("MQG down -3.07% \nSCG down -3.96% \n");
    });
});