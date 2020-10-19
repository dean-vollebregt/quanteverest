function sendAdminEmail(event) {

    let newUser = event.newUser;

    let eParams = {
        Destination: {
            ToAddresses: ['test@gmail.com']
        },
        Message: {
            Body: {
                Text: {
                    Data: `
                Name : ${newUser.full_name} 
                Email: ${newUser.email}
                Mobile: ${newUser.mobile}
                has requested ${newUser.requested_role} access, please check the user administration panel.`
                }
            },
            Subject: {
                Data: `New Request for ${newUser.requested_role} Access`
            }
        },
        Source: "QuantEverest <no-reply@quanteverest.com>"
    };
    return [ eParams ];
}

module.exports = {
    sendAdminEmail
};


