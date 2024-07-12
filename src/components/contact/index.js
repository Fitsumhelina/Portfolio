const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST route for form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your Gmail email
            pass: 'your-password' // Replace with your Gmail password
        }
    });

    // Setup email data with unicode symbols
    const mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: 'dev.fitsum@gmail.com', // List of receivers
        subject: 'Feedback from Contact Form', // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Plain text body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
