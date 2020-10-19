const axios = require('axios');

const asxCodes = [
    'AGL', 'ALD', 'AMC', 'AMP', 'ANN', 'ANZ', 'ASX', 'AWC', 'AZJ', 'BEN', 'BHP', 'BLD', 'BOQ', 'BSL', 'BXB', 'CBA',
    'CCL', 'CIM', 'COL', 'CPU', 'CSL', 'CSR', 'CWN', 'FLT', 'FMG', 'GMG', 'GPT', 'HVN', 'IAG', 'IFL', 'ILU', 'IPL',
    'JHX', 'LLC', 'MGR', 'MPL', 'MQG', 'MTS', 'MYR', 'NAB', 'NCM', 'NEC', 'ORG', 'ORI', 'OSH', 'OZL', 'QAN', 'QBE',
    'RHC', 'RIO', 'RRL', 'S32', 'SCG', 'SEK', 'SGM', 'SGP', 'SGR', 'SHL', 'STO', 'SUN', 'SYD', 'TAH', 'TCL', 'TLS',
    'TWE', 'WBC', 'WES', 'WOR', 'WOW', 'WPL', 'XJO'
];

async function stockPriceChange(asxCodes) {

    let stockPriceChanges = [];

    for (let asxCode of asxCodes){

        console.log('ASX Code: ' + asxCode)

        try {
            let searchUrl = "https://www.removed_by_dean_for_security_reasons.com"

            let data =  await axios.get(searchUrl);

            if(typeof data === 'undefined') continue

            let oneDayPercent = data.data.data.priceChangePercent

            let item = {
                'code': asxCode,
                'oneDayPercent' : Number(oneDayPercent.toFixed(2))
            };

            stockPriceChanges.push(item);

        } catch (err) {
            console.log('Got an error:', err.message)
        }
    }

    return stockPriceChanges
}

module.exports = {
    asxCodes,
    stockPriceChange
};