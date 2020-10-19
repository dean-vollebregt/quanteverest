const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

let messageIds = [];
let emailTemplate = require('../templates/emailTemplate.js').emailTemplate;

async function sendEmail(activeSubscriptions) {

    for (let email of activeSubscriptions)  {

        emailTemplate.Destination.ToAddresses = [ email ];

        try {
            let sendPromise = await new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(emailTemplate).promise();
            console.log(sendPromise.MessageId);
            messageIds.push(sendPromise.MessageId)

        } catch(error) {
            console.log(error);
        }
    }

    return messageIds;
}

module.exports = {
    sendEmail
};

