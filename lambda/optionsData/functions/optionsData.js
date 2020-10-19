const axios = require('axios');
const moment = require('moment');

async function stockPrice(asxCode) {

    let searchUrl = "https://www.removed_by_dean_for_security_reasons.com"

    try {
        return await axios.get(searchUrl);
    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

async function optionsDataJSON(asxCode) {

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

    let searchUrl = "https://www.removed_by_dean_for_security_reasons.com";

    try {
        return await axios.get(searchUrl);
    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

function parseOptionsJSON(optionsJSON, stockPrice, asxCode){

    let optionsArray = [];
    let sortedOptionsArray = [];

    if(typeof optionsJSON === 'undefined') return 1
    if(typeof stockPrice === 'undefined') return 1

    optionsJSON.data.data.items.forEach(function(item) {
        item.exerciseGroups.forEach(function(option){
            optionsArray.push(option.call)
            optionsArray.push(option.put)
        })
    });

    let today = moment();

    optionsArray.forEach(function(item) {

        // Removed for security reasons

        sortedOptionsArray.push(option)
    });

    return sortedOptionsArray;
}

module.exports = {
    stockPrice,
    optionsDataJSON,
    parseOptionsJSON
};