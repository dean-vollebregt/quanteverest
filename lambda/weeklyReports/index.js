'use strict';

const generatePngImages = require('./functions/generatePNGImages.js').generatePngImages;
const generatePdfReport = require('./functions/generatePDFReport.js').generatePdfReport;
const sendFileToS3 = require('./services/s3Service.js').sendFileToS3;
const dynamoService = require('./services/dynamoService.js');
const activeSubscriptions = require('./functions/activeSubscriptions.js').activeSubscriptions;
const sesService = require('./services/sesService.js').sendEmail;

exports.handler = async function() {

    const fileName = 'QuantEverest-Weekly-Report.pdf';

    try {
        const generatePNG = await generatePngImages();
        const pdfReport = await generatePdfReport(fileName);
        const sendFile = await sendFileToS3(fileName);
        const allUsers = await dynamoService.getSubscriptions();
        const subscriptions = activeSubscriptions(allUsers.Items);
        const email = await sesService(subscriptions);
    } catch(err){
        console.log(err);
    }
}