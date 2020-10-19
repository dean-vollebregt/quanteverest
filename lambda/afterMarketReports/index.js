'use strict';

const s3Service = require('./services/s3Service.js');
const reportContent = require('./functions/reportContent.js').reportContent;
const generatePDF = require('./functions/generatePDF.js').generatePDF;
const dynamoService = require('./services/dynamoService.js').dynamoService;
const activeSubscriptions = require('./functions/activeSubscriptions.js').activeSubscriptions;
const sesService = require('./services/sesService.js').sendEmail;

let fileName = 'QuantEverest-After-Market-Report.pdf';

exports.handler = async function() {
    try {
        await s3Service.downloadFromS3();
        let content = await reportContent()
        await generatePDF(content, fileName);
        await s3Service.sendFileToS3(fileName);
        let allUsers = await dynamoService();
        let subscriptions = activeSubscriptions(allUsers.Items);
        let email = await sesService(subscriptions);
    } catch(err){
        console.log(err);
    }
};