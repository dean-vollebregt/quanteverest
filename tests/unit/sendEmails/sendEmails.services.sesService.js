const emailsToBeSent = require('../supporting/sampleEmail.js').sampleEmail;
const sesService = require('../../../lambda/sendEmails/services/sesService.js').sesService;

describe('sesService', () => {

    let messageIds;

    beforeAll(async () => {
        messageIds = await sesService(emailsToBeSent);
    }, 10000);

    it('Sends emails',() => {
        expect(messageIds[0].length).toBeGreaterThan(50);
    });
});