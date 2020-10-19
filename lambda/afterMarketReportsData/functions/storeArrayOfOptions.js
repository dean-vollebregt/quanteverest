const fs = require('fs').promises;

async function storeArrayOfOptions(fileName, arrayOfOptions) {

    let arrayOfOptionsJSON = JSON.stringify(arrayOfOptions);

    await fs.writeFile('/tmp/' + fileName, arrayOfOptionsJSON)
}

module.exports = {
    storeArrayOfOptions
};