const fs = require('fs').promises;

async function reportContent() {
    let data = await fs.readFile('/tmp/afterMarketReportsData.JSON');
    let content = JSON.parse(data);
    return content
}

module.exports = {
    reportContent
};

