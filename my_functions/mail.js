const sgMail = require("@sendgrid/mail");
const axios = require("axios");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { message } = data;
  const mail_to_send = {
    to: process.env.RECIPIENT_EMAIL,
    from: "contact@ajayliu.com",
    subject: `New Entry from ${data.name} ${data.email}`,
    html: message,
  };
  try {
    //send notification to discord
    await axios({
      method: "POST",
      url: process.env.DISCORD_WEBHOOK_URL,
      data: {
        content: `new message: "${message}" from ${data.email}, name: ${data.name}`,
      },
    });

    //send email
    await sgMail.send(mail_to_send);

    return {
      statusCode: 200,
      body: JSON.stringify({
        result: "success",
      }),
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
