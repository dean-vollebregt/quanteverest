const optionsData = require('./functions/optionsData.js');

exports.handler = async function(event, context) {

    let asxCode = event.code

    try {
        console.log('ASX CODE: ' + asxCode)
        let stockPrice = await optionsData.stockPrice(asxCode);
        let optionsJSON = await optionsData.optionsDataJSON(asxCode);
        let optionsCompany = await optionsData.parseOptionsJSON(optionsJSON, stockPrice, asxCode);
        return optionsCompany
    } catch (err) {
        console.log(err);
    }
};