const STAGE = process.env.STAGE
const AWS = require('aws-sdk');
let dynamo =  new AWS.DynamoDB({region: 'ap-southeast-2'});

// Code removed for security reasons

module.exports = {
    getNotifications,
    setNotifications,
    createUserAccessLog,
    updateUserAccessLog,
    createWebUser
};

