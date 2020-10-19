let fs = require('fs');
let path = require('path');
let pdfPrinter = require('pdfmake');

let fonts = {
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
    Symbol: {
        normal: 'Symbol'
    },
    ZapfDingbats: {
        normal: 'ZapfDingbats'
    }
};

async function generatePdfReport(fileName) {

    let  printer = new pdfPrinter(fonts);

    let docDefinition = {
        content: [
            {
                image: path.resolve(__dirname,'../images/banner.png'),
                width: 510,
            },
            {text: 'Seek weekly job count (3 months)', style: 'subheader', margin: [ 145, 15, 10, 5 ]},
            {
                image: '/tmp/seekTimeSeries.png',
                width: 400,
                height: 120,
                margin: [40, 0]
            },
            {text:'Disclaimer', style: 'header', pageBreak: 'before'},
            {
                text: [
                    'This document has been prepared without taking account of the objectives ',
                    'financial situation or needs of any particular individual. Any individual  ',
                    'should before acting on the information in this document, consider the appropriateness of the information,  ',
                    'having regard to the individual’s objectives, financial situation and needs and, if necessary seek appropriate professional advice. \n\n ',
                    'QuantEverest may engage in transactions in a manner inconsistent with this research document.',
                ],
                fontSize: 8,
                lineHeight: 1.2
            },
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 13,
                bold: true,
                margin: [0, 10, 0, 5]
            }
        },
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    let file = fs.createWriteStream( '/tmp/' + fileName);
    pdfDoc.pipe(file);
    pdfDoc.end();
}

module.exports = {
    generatePdfReport
};

