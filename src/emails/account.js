const mailgun = require("mailgun-js");
const DOMAIN = "sandbox6c4d5fef47494555ae5f13f7e49ef9dc.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
// const data = {
//   from: "Excited User <me@sandbox6c4d5fef47494555ae5f13f7e49ef9dc.mailgun.org>",
//   to: "sarah12smith@btinternet.com",
//   subject: "Mum",
//   text: "Hi",
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
// });
const sendWelcomeEmail = (email, name) => {
  const data = {
    from: "Barnaby <me@sandbox6c4d5fef47494555ae5f13f7e49ef9dc.mailgun.org>",
    to: email,
    subject: "Welcome to the app",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};

const sendCancellationEmail = (email, name) => {
  const data = {
    from: "Barnaby <me@sandbox6c4d5fef47494555ae5f13f7e49ef9dc.mailgun.org>",
    to: email,
    subject: "Sorry to see you go",
    text: `Dear ${name}. Let us know what we could have done to kept you.`,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
