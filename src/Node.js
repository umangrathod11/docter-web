const twilio = require('twilio');

const client = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');

async function sendSMS(to, message) {
  try {
    const response = await client.messages.create({
      body: message,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to,
    });

    console.log('SMS sent:', response.sid);
    return response.sid;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}

module.exports = { sendSMS };
