const STAGE = process.env.STAGE
const AWS = require('aws-sdk');
let dynamo =  new AWS.DynamoDB({region: 'ap-southeast-2'});

async function dynamoService() {

    let payload = {
        "TableName": "WebUsers-" + STAGE,
        "ProjectionExpression": "email, approved_account, notifications"
    };

    return await dynamo.scan(payload).promise();
}

module.exports = {
    dynamoService
};