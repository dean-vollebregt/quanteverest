'use strict';

const getXJOHistory = require('./functions/asxData.js').getXJOHistory;
const getCompaniesWithOptionsData = require('./functions/asxData.js').getCompaniesWithOptionsData;
const asxCompanies = require('./functions/asxData.js').asxCompanies

exports.handler = async function() {
    try {
        let XJOLevel = await getXJOHistory();
        let companiesWithOptions = await getCompaniesWithOptionsData(asxCompanies);
        let allPriceHistory = XJOLevel.concat(companiesWithOptions);
        return allPriceHistory;
    } catch(err){
        console.log(err);
    }
};