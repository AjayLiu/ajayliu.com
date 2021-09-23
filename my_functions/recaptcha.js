const axios = require("axios");

const secret = process.env.RECAPTCHA_SECRET_KEY;
exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const { token } = data;
  try {
    const response = await axios({
      method: "POST",
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    });
    const isSuccess = response.data.success;
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: isSuccess,
      }),
    };
  } catch (e) {
    console.error("error");
    return {
      statusCode: 500,
    };
  }
};
