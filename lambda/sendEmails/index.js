const sesService = require('./services/sesService').sesService;
const sendConfirmationEmail = require('./functions/sendConfirmationEmail').sendConfirmationEmail;
const sendAdminEmail = require('./functions/sendAdminEmail').sendAdminEmail;

exports.handler = async function(event) {

    const operation = event.operation;

    let emailsToBeSent;

    switch (operation) {
        case 'sendConfirmationEmail':
            emailsToBeSent = sendConfirmationEmail(event);
            return await sesService(emailsToBeSent);

        case 'sendAdminEmail':
            emailsToBeSent = sendAdminEmail(event);
            return await sesService(emailsToBeSent);
        default:
            return new Error(`Unrecognized operation "${operation}"`);
    }
};
