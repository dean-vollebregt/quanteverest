const optionsData = require('./functions/optionsData.js');
const s3Service = require('./services/s3Service.js').sendFileToS3;
const storeArrayOfOptions = require('./functions/storeArrayOfOptions.js').storeArrayOfOptions;

exports.handler = async function() {

    let fileName = 'afterMarketReportsData.JSON';
    let arrayOfOptions = [];

    try {

        for (let asxCode of optionsData.asxCodes) {
            console.log('ASX CODE: ' + asxCode)
            let stockPrice = await optionsData.stockPrice(asxCode);
            let optionsJSON = await optionsData.optionsDataJSON(asxCode);
            let optionsCompany = await optionsData.parseOptionsJSON(optionsJSON, stockPrice, asxCode);
            if (optionsCompany !== 0) arrayOfOptions.push(optionsCompany);
        }

        await storeArrayOfOptions(fileName, arrayOfOptions)
        await s3Service(fileName);

    } catch (err) {
        console.log(err);
    }
}
