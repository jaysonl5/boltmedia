var nodemailer = require('nodemailer');
require('dotenv').config();

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) { 
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});