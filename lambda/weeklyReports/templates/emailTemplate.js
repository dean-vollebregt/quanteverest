
let HTML =
    "<html>" +
        "<body >" +
            "<table width='1280px' height='720px' border='0'  background='https://s3-ap-southeast-2.amazonaws.com/www.example.com/images/everest-crossing.jpg'>"+
                "<tr>" +
                    "<td style='text-align:center; padding-left: 480px'>" +
                        "<h1 style='color:white'>Your Weekly QuantEverest Report</h1>" +
                        "<a href='https://s3-ap-southeast-2.amazonaws.com/www.example.com/reports/QuantEverest-Weekly-Report.pdf' target='_blank'>" +
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
                Data: "Here is your weekly QuantEverest report of leading economic indicators and commodity prices"
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Weekly Report'
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