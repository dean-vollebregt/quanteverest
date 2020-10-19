function activeSubscriptions(allUsers) {

    let subscribedUsers = [];

    for (let user of allUsers)  {

        let approvedAccount = user.approved_account.BOOL;
        let isSubscribed = user.notifications.M.after_market_report.BOOL;
        let email = user.email.S;

        if (approvedAccount === true && isSubscribed === true && email) {
            subscribedUsers.push(email);
        }
    }

    return subscribedUsers;
}

module.exports = {
    activeSubscriptions
};
