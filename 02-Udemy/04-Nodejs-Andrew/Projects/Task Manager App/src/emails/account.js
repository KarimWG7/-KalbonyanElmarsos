const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "karimdaana777@gmail.com",
    subject: "Thanks for joining in",
    text: `Hello ${name}, welcome to the app.
    Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "karimdaana777@gmail.com",
    subject: "We are sorry to hear that",
    text: `Hi, ${name}.
Can you please tell us why did you delete your account to improve the app.
We are soory for not satisfing you`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
