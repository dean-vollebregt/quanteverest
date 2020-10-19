const sendConfirmationEmail = require('../../../lambda/sendEmails/functions/sendConfirmationEmail.js').sendConfirmationEmail;

describe('sendConfirmationEmail', () => {

    let emailsToBeSent, event = {};

    event.payload = [{
        'email' : 'test@gmail.com',
        'approvedRole' : 'Basic',
        'approvedAccount': true
    }]

    beforeAll(() => {
        emailsToBeSent = sendConfirmationEmail(event);
    });

    it('Send new users a confirmation email',() => {
        expect(emailsToBeSent[0].Message.Subject.Data).toBe('Welcome to QuantEverest');
    });
});