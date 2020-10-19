const dynamoService = require('./services/dynamoService.js');

exports.handler = async function(event) {

    let operation = event.operation;

    switch (operation) {
        case 'createWebUser':
            return await dynamoService.createWebUser(event);
        case 'createUserAccessLog':
            return await dynamoService.createUserAccessLog(event);
        case 'updateUserAccessLog':
            return await dynamoService.updateUserAccessLog(event);
        case 'getNotifications':
            return await dynamoService.getNotifications(event);
        case 'setNotifications':
            return await dynamoService.setNotifications(event);
        default:
            return new Error(`Unrecognized operation "${operation}"`);
    }
};

