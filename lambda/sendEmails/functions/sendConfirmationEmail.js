function sendConfirmationEmail(event){

    let emails = [];
    let updatedUsersArray = event.payload;

    updatedUsersArray.forEach(function(user){

        let eParams = {
            Destination: {
                ToAddresses: [`${user.email}`]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data:
                            `
                            <div>
                                Hello & welcome. Let me start out by telling you about the myth behind the legend ....
                            </div>
                            <br>
                            <div>
                                Some say he died up there on Everest, others say he walked north to a remote village in Tibet where he herds goats and
                                teaches the villagers about risk management and tail-hedging. Whatever the case, I'll always remember him as a no-nonsense 
                                straight talker that let his winners run and cut his losses the moment a position turned against him. I'll never forget the 
                                time he bought puts on the S&P index in 87, shorted the pound in 92, sold off Enron in 2000, bought into Googles 2004 IPO or bet big
                                against the banks in 2008.
                            </div>
                            <br>
                            <div>
                                We wish you great success in your trading.
                            </div>
                            <br>
                            <div>
                                The QuantEverest Team.
                            </div>`
                    }
                },
                Subject: {
                    Data: "Welcome to QuantEverest"
                }
            },
            Source: "QuantEverest <no-reply@quanteverest.com>"
        };
        emails.push(eParams);
    });
    return emails;
}

module.exports = {
    sendConfirmationEmail
};

