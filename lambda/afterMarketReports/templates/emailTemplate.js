
let HTML =
    "<html>" +
        "<body>" +
            "<table width='960px' height='600px' border='0'  background='https://s3-ap-southeast-2.amazonaws.com/www.example.com/images/everest_night.jpg'>" +
                "<tr>" +
                    "<td style='text-align:center'>" +
                        "<h1 style='color:white'>After Market Report - Options</h1>" +
                        "<a href='https://s3-ap-southeast-2.amazonaws.com/www.example.com/reports/QuantEverest-After-Market-Report.pdf' target='_blank'>" +
                            "<button type='button'>View Now</button>" +
                        "</a>" +
                    "</td>" +
                "</tr>" +
            "</table>" +
        "</body>" +
    "</html>";

let emailTemplate = {
    Destination: {
        ToAddresses: []
    },
    Message: {
        Body: {
            Html: {
                Charset: "UTF-8",
                Data: HTML
            },
            Text: {
                Charset: "UTF-8",
                Data: "Here is your daily QuantEverest after market report"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'After Market Report - Options'
        }
    },
    Source: "QuantEverest <research@quanteverest.com>",
    ReplyToAddresses: [
        'research@quanteverest.com'
    ],
};

module.exports = {
    emailTemplate
};