const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

admin.initializeApp();

// Replace with your SendGrid API Key
sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  const { email, textarea } = req.body;

  const msg = {
    to: 'dev.fitsum@gmail.com', // Change to your recipient
    from: 'your-verified-email@example.com', // Change to your verified sender
    subject: 'Contact Form Submission',
    text: `Email: ${email}\n\nMessage: ${textarea}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});
