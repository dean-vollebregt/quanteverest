async function activeSubscriptions(allUsers) {

    let subscribedUsers = [];

    for (let user of allUsers)  {

        let approvedAccount = user.approved_account.BOOL;
        let isSubscribed = user.notifications.M.sms_alert.BOOL;
        let mobile = user.mobile.S;

        if (approvedAccount === true && isSubscribed === true && mobile) {
            subscribedUsers.push(mobile);
        }
    }

    return subscribedUsers;
}

module.exports = {
    activeSubscriptions
};

