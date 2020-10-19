const fs = require('fs')
const vega = require('vega')
const sharp = require('sharp');

let prepareSeekTemplate = require('../templates/seekTimeSeries.js').prepareSeekTemplate

async function generatePngImages() {

    process.env.FONTCONFIG_PATH='/var/task/fonts'

    try {
        const seekTimeSeriesTemplate = await prepareSeekTemplate();
        const svg = await new vega.View(vega.parse(seekTimeSeriesTemplate), {renderer: 'none'}).toSVG();
        const result = await sharp(Buffer.from(svg)).toFormat('png').toFile('/tmp/seekTimeSeries.png')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    generatePngImages
};

