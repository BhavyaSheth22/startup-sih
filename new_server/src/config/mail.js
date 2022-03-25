const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user:process.env.MAIL_ID, 
      pass: process.env.MAIL_PASSWORD,
    },
  });


module.exports=transporter;