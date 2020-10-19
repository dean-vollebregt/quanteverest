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

async function generatePDF(content, fileName) {

    let  printer = new pdfPrinter(fonts);

    let docDefinition = {
        pageMargins: [ 20, 20, 20, 20 ],
        content: [
            {
                image: path.resolve(__dirname,'../images/banner.png'),
                width: 555,
            },

            // Content inserted here as 3rd element

            {text:'Disclaimer', style: 'header', pageBreak: 'before'},
            {
                text: [
                    'This document has been prepared without taking account of the objectives ',
                    'financial situation or needs of any particular individual. Any individual ',
                    'should before acting on the information in this document, consider the appropriateness of the information, ',
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

    let count = 1;

    for (let company of content) {

        let name = Object.keys(company)[0]
        let options = Object.values(company)[0]

        let subheader = {text: name, style: 'subheader'}

        let item = {
            style: 'tableExample',
            table: {
                widths: [ 60, '*', '*', '*', '*', '*', '*', '*', '*', '*', '*' ],
                body: [
                    [ 'code', 'type', 'strike', 'stock', 'ITM%', 'BE', 'BE%', 'days', 'last', 'volume', 'margin']
                    // append rows here
                ]
            }
        }

        for(let option of options){
            let row =  [ option.code, option.type, option.strike, option.stock, option.percentITM, option.breakEvenPrice, option.breakEvenPercent, option.expiryInDays, option.last, option.volume, option.marginPrice]
            item.table.body.push(row);
        }

        docDefinition.content.splice(count, 0, subheader, item);
        count = count + 2
    }

    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    let file = fs.createWriteStream( '/tmp/' + fileName);
    pdfDoc.pipe(file);
    pdfDoc.end();
}

module.exports = {
    generatePDF
};

