const AWS = require('aws-sdk');
const SES = new AWS.SES({ region: 'us-east-1' });

let response, sentEmails = [];

async function sesService(emailsToBeSent) {

    for (const email of emailsToBeSent) {
        response = await SES.sendEmail(email).promise();
        sentEmails.push(response.MessageId);
    }

    return sentEmails;
}

module.exports = {
    sesService
};

