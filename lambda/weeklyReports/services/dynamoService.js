const STAGE = process.env.STAGE
const AWS = require('aws-sdk');
let dynamo =  new AWS.DynamoDB({region: 'ap-southeast-2'});

async function getSubscriptions() {

    let payload = {
        "TableName": "WebUsers-" + STAGE,
        "ProjectionExpression": "email, approved_account, notifications"
    };

    return await dynamo.scan(payload).promise();
}

async function getSeekData() {

    let payload = {
        "TableName": "weeklyReports-" + STAGE,
        "Key": {
            "seekData" : { "S" : "weeklyJobsCount" }
        },
        "ProjectionExpression": "weeklyJobsCount"
    };

    return await dynamo.getItem(payload).promise();
}

module.exports = {
    getSubscriptions,
    getSeekData
};