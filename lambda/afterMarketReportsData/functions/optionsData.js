const axios = require('axios');
const moment = require('moment')

let asxCodes = [
    'AGL', 'ALD', 'AMC', 'AMP', 'ANN', 'ANZ', 'ASX', 'AWC', 'AZJ', 'BEN', 'BHP', 'BLD', 'BOQ', 'BSL', 'BXB', 'CBA',
    'CCL', 'CIM', 'COL', 'CPU', 'CSL', 'CSR', 'CWN', 'FLT', 'FMG', 'GMG', 'GPT', 'HVN', 'IAG', 'IFL', 'ILU', 'IPL',
    'JHX', 'LLC', 'MGR', 'MPL', 'MQG', 'MTS', 'MYR', 'NAB', 'NCM', 'NEC', 'ORG', 'ORI', 'OSH', 'OZL', 'QAN', 'QBE',
    'RHC', 'RIO', 'RRL', 'S32', 'SCG', 'SEK', 'SGM', 'SGP', 'SGR', 'SHL', 'STO', 'SUN', 'SYD', 'TAH', 'TCL', 'TLS',
    'TWE', 'WBC', 'WES', 'WOR', 'WOW', 'WPL', 'XJO'
]

async function stockPrice(optionASXCode) {

    let searchUrl = "https://www.removed_by_dean_for_security_reasons.com"

    try {
        return await axios.get(searchUrl);
    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

async function optionsDataJSON(optionASXCode) {

    let temp, query, queryString = '';
    let start = moment().startOf('month').add(5, 'months')

    for (let i = 0; i < 30; i++) {
        temp = start.clone();
        query = '&expiryDates[]=' + temp.add(2, 'weeks').day("thursday").format("YYYY-MM-DD")
        if([3,6,9,12].includes(temp.month() + 1)){
            queryString += query;
        }
        start.add(1, 'month')
    }

    let searchUrl = "https://www.removed_by_dean_for_security_reasons.com"

    try {
        return await axios.get(searchUrl);
    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

function parseOptionsJSON(optionsJSON, stockPrice, asxCode){

    let allOptionsArray = []
    let arrayOfCallOptions = []
    let arrayOfPutOptions = [];

    if(typeof optionsJSON === 'undefined') return 1
    if(typeof stockPrice === 'undefined') return 1

    optionsJSON.data.data.items.forEach(function(item) {
        item.exerciseGroups.forEach(function(option){
            allOptionsArray.push(option.call)
            allOptionsArray.push(option.put)
        })
    });


    let today = moment();

    allOptionsArray.forEach(function(item) {

        let expiryInDays = Math.abs(today.diff( item.dateExpiry,'days'))
        let underlyingPrice = Number(stockPrice.data.data.priceLast)
        let volume = Number(item.volume)

        if(expiryInDays > 180 && volume > 0) {

            let code = item.symbol
            let type = item.chainType
            let expiry = new Date(item.dateExpiry).toLocaleDateString();
            let strike = item.priceExercise
            let percentITM = (type === "Call") ? ((((underlyingPrice - strike) / underlyingPrice) * 100).toFixed(2)) : ((((strike - underlyingPrice) / underlyingPrice) * 100).toFixed(2));
            let last = (typeof item.priceLast !== 'undefined') ? item.priceLast : 0
            let marginPrice = (typeof item.priceTheoretical !== 'undefined') ? Math.abs(item.priceTheoretical) : 0
            marginPrice = (asxCode === 'XJO') ? marginPrice*100 :  marginPrice
            let breakEvenPrice = (type === "Call") ? ( strike + marginPrice) : (strike - marginPrice);
            let breakEvenPercent = (type === "Call") ? ((((breakEvenPrice / underlyingPrice) - 1) * 100).toFixed(2)) : ((((breakEvenPrice / underlyingPrice) - 1) * 100).toFixed(2));
            marginPrice = marginPrice.toFixed(2);
            breakEvenPrice = (asxCode !== 'XJO') ? (breakEvenPrice).toFixed(2) : (breakEvenPrice).toFixed(0)
            underlyingPrice = (asxCode !== 'XJO') ? (underlyingPrice).toFixed(2) : (underlyingPrice).toFixed(0)

            let option = {
                type: type,
                code: code,
                expiry: expiry,
                expiryInDays: expiryInDays,
                strike: strike,
                stock: underlyingPrice,
                percentITM: percentITM,
                last: last,
                volume: volume,
                marginPrice: marginPrice,
                breakEvenPrice: breakEvenPrice,
                breakEvenPercent: breakEvenPercent
            };

            (type === "Call") ? arrayOfCallOptions.push(option) : arrayOfPutOptions.push(option);
        }
    });

    if (arrayOfCallOptions.length > 0 || arrayOfPutOptions.length > 0 ){

        let optionsCompany = {};

        optionsCompany[ asxCode ] = arrayOfCallOptions.concat(arrayOfPutOptions)

        return (optionsCompany);
    }

    return 0;
}

module.exports = {
    stockPrice,
    optionsDataJSON,
    parseOptionsJSON,
    asxCodes
};