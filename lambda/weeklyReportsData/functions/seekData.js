const request = require('request-promise');
const cheerio = require('cheerio');

async function seekWeeklyJobCount(){

    const searchUrl = "https://www.seek.com.au/jobs";

    try {
        let rawHTML = await request.get(searchUrl);
        let $ = cheerio.load(rawHTML);
        let weeklyCount = $('strong[data-automation="totalJobsCount"]').text().replace(/,/g,'');
        return weeklyCount;
    } catch (err) {
        console.log('Got an error:', err.message)
    }
}

module.exports = {
    seekWeeklyJobCount
};