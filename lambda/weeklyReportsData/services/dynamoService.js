const STAGE = process.env.STAGE
const AWS = require('aws-sdk');
let dynamo =  new AWS.DynamoDB({region: 'ap-southeast-2'});

async function updateWeeklyJobCount(jobCount) {

    await trimWeeklyJobsCountArray();

    let date = new Date().toLocaleDateString('en-AU');

    let payload = {
        TableName: "weeklyReports-" + STAGE,
        Key: {
            seekData: {"S": "weeklyJobsCount"}
        },
        UpdateExpression: "Set weeklyJobsCount = list_append(weeklyJobsCount, :weeklyCount)",
        ExpressionAttributeValues: {
            ":weeklyCount": {
                "L" : [
                    {
                        "M": {
                            "jobs": { "N": jobCount },
                            "date": { "S": date }
                        }
                    }
                ]
            }
        },
        ReturnValues: "UPDATED_NEW"
    }

    return await dynamo.updateItem(payload).promise();
}

async function trimWeeklyJobsCountArray() {

    let payload = {
        TableName: "weeklyReports-" + STAGE,
        Key: {
            seekData: {"S": "weeklyJobsCount"}
        },
        UpdateExpression: "Remove weeklyJobsCount[0] ",
        ReturnValues: "ALL_NEW"
    }

    return await dynamo.updateItem(payload).promise();
}

module.exports = {
    updateWeeklyJobCount
};