async function prepareSMSContent(stockPriceChanges) {

    let up_movements = '';
    let down_movements = '';

    stockPriceChanges.forEach(company => {

        if (Math.abs(company.oneDayPercent) > 3) {

            let direction = (Math.sign(company.oneDayPercent) > 0) ? 'up' : 'down';

            if(direction === 'up') {
                up_movements  += `${company.code} ${direction} ${company.oneDayPercent}% \n`;
            }
            if(direction === 'down') {
                down_movements  += `${company.code} ${direction} ${company.oneDayPercent}% \n`;
            }
        }
    });

    return up_movements + down_movements;
}

module.exports = {
    prepareSMSContent
};
