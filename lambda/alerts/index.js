'use strict';

const asxData = require('./functions/asxData.js');
const prepareSMSContent = require('./functions/prepareSMSContent.js').prepareSMSContent;
const dynamoService = require('./services/dynamoService.js').dynamoService;
const activeSubscriptions = require('./functions/activeSubscriptions.js').activeSubscriptions;
const snsService = require('./services/snsService.js').snsService;

exports.handler = async function() {
    try {
        const stockPriceChanges = await asxData.stockPriceChange(asxData.asxCodes);
        const smsContent = await prepareSMSContent(stockPriceChanges);
        const allUsers = await dynamoService();
        const subscribedMobiles = await activeSubscriptions(allUsers.Items)
        const confirmation = await snsService(subscribedMobiles, smsContent);
    } catch(err){
        console.log(err);
    }
};
