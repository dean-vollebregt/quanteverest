const sendAdminEmail = require('../../../lambda/sendEmails/functions/sendAdminEmail.js').sendAdminEmail;

describe('sendAdminEmail', () => {

    let emailsToBeSent, event = {};

    event.newUser = {
        email: 'test@gmail.com',
        full_name : 'Test',
        mobile: '0439283771',
        requested_role : 'Premium',
    }

    beforeAll(() => {
        emailsToBeSent = sendAdminEmail(event);
    });

    it('Prepares a new account email notification for the administrator',() => {
        expect(emailsToBeSent[0].Message.Subject.Data).toBe('New Request for Premium Access');
    });
});