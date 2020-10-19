const AWS = require('aws-sdk');
const sns = new AWS.SNS({region: 'ap-southeast-2'});

async function snsService(subscribedMobiles, priceHistory) {

   if(priceHistory === ''){
      console.log('no notifcations today');
      return;
   }

   let message = 'QuantEverests\n' + priceHistory;

   for (let mobile of subscribedMobiles)  {

      let formattedMobile = '+61' + mobile.slice(1);

      try {
         let params = {
            Message: message,
            MessageAttributes: {
               'AWS.SNS.SMS.SMSType': {
                  DataType: 'String',
                  StringValue: 'Transactional'
               },
               'AWS.SNS.SMS.SenderID': {
                  DataType: 'String',
                  StringValue: 'qnteverest'
               },
            },
            PhoneNumber: formattedMobile
         };

         return await sns.publish(params).promise();

      } catch(error) {
         throw error;
      }
   }
}

module.exports = {
  snsService
};