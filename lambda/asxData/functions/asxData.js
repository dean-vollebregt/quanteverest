const request = require('request-promise');
const cheerio = require('cheerio');

const asxCompanies = ['AGL','AMC','AMP','ANN','ANZ','ASX','AWC','AZJ','BEN','BHP','BLD','BOQ','BSL','BXB','CBA',
    'CCL','CIM','CPU','CSL','CSR','CTX','CWN','CYB','FLT','FMG','GMG','GPT','HVN','IAG','IFL','ILU','IPL','JHX','LLC',
    'MGR','MPL','MQG','MTS','MYR','NAB','NCM','ORG','ORI','OSH','OZL','QAN','QBE','RHC','RIO','RRL','S32','SCG','SEK','SGM',
    'SGP','SGR','SHL','STO','SUN','SYD','TAH','TCL','TLS','TWE','WBC','WES','WOR','WOW','WPL'];

async function getXJOHistory(){

    try {
        // First API Call for recent data
        let searchUrlRecent = "https://www.removed_by_dean_for_security_reasons.com"
        let rawHTML = await request.get(searchUrlRecent);
        let $ = cheerio.load(rawHTML);

        let last = Number($('td').eq(0).text());
        let oneDayPercent = Number($('td').eq(3).text().replace("%",""));

        // Second API Call for historic data
        let searchUrlHistoric = "https://www.removed_by_dean_for_security_reasons.com";
        let historicalLevelsRaw = await request.get(searchUrlHistoric);
        let historicalLevels = (JSON.parse(historicalLevelsRaw)).reverse();

        let threeMonthLevel = historicalLevels[62][4];
        let threeMonthPercent = Number((((last-threeMonthLevel)/threeMonthLevel)*100).toFixed(2))

        let sixMonthLevel = historicalLevels[123][4];
        let sixMonthPercent = Number((((last-sixMonthLevel)/sixMonthLevel)*100).toFixed(2))

        let nineMonthLevel = historicalLevels[188][4];
        let nineMonthPercent = Number((((last-nineMonthLevel)/nineMonthLevel)*100).toFixed(2))

        let twelveMonthLevel = historicalLevels[253][4];
        let twelveMonthPercent = Number((((last-twelveMonthLevel)/twelveMonthLevel)*100).toFixed(2))

        let item = {
            'code': 'XJO',
            'last': last,
            'oneDayPercent' : oneDayPercent,
            'threeMonthPercent' : threeMonthPercent,
            'sixMonthPercent': sixMonthPercent,
            'nineMonthPercent': nineMonthPercent,
            'twelveMonthPercent': twelveMonthPercent
        };

        return [item];

    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

async function getCompaniesWithOptionsData(asxCompanies) {
    let array = [];

    for (let company of asxCompanies){
        try {
            // First API Call for recent data
            let searchURLRecent = "https://www.removed_by_dean_for_security_reasons.com";
            let responseRaw = await request.get(searchURLRecent);
            let response = JSON.parse(responseRaw);
            let last = Number(response.last_price);
            let oneDayPercent = +(Number(response.change_in_percent.replace("%","")).toFixed(2))

            // Second API Call for historic data
            let searchURLHistoric = "https://www.removed_by_dean_for_security_reasons.com";
            let historicalPricesRaw = await request.get(searchURLHistoric);
            let historicalPrices = JSON.parse(historicalPricesRaw);

            let threeMonthPrice = historicalPrices.data[63].close_price
            let threeMonthPercent = Number((((last-threeMonthPrice)/threeMonthPrice)*100).toFixed(2))

            let sixMonthPrice = historicalPrices.data[126].close_price
            let sixMonthPercent = Number((((last-sixMonthPrice)/sixMonthPrice)*100).toFixed(2))

            let nineMonthPrice = historicalPrices.data[189].close_price
            let nineMonthPercent = Number((((last-nineMonthPrice)/nineMonthPrice)*100).toFixed(2))

            let twelveMonthPrice = historicalPrices.data[252].close_price
            let twelveMonthPercent = Number((((last-twelveMonthPrice)/twelveMonthPrice)*100).toFixed(2))

            let item = {
                'code': company,
                'last': last,
                'oneDayPercent' : oneDayPercent,
                'threeMonthPercent' : threeMonthPercent,
                'sixMonthPercent': sixMonthPercent,
                'nineMonthPercent': nineMonthPercent,
                'twelveMonthPercent': twelveMonthPercent
            };
            array.push(item);
        } catch (err) {
            console.log('Got an error:', err.message)
        }
    }
    return array;
}

module.exports = {
    getXJOHistory,
    getCompaniesWithOptionsData,
    asxCompanies
};