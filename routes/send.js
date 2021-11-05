const router = require('express').Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

router.route('/send').post((req, res) => {

    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var fullName = firstName + ` ` + lastName;
    var email = req.body.email
    var phone = req.body.phone
    var message = req.body.message
    var content = `
        Name: ${fullName} \n 
        email: ${email} \n
        Phone: ${phone} \n
        Description: ${message} \n
        `

    var mail = {
        from: fullName,
        to: 'jayson@boltmediaokc.com',
        subject: 'Bolt Media Contact Request!',
        text: content
    }

    var transport = {
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    }

    var transporter = nodemailer.createTransport(transport);

    transporter.verify((error, success) => {
        if(error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages.')
        }
    })

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

module.exports = router;