const dotenv = require('dotenv');

dotenv.config();

const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'crearch.conseil@gmail.com', // your email address to send email from
    pass: 'V@lpit@17600!!' // your gmail account password
  }
});

module.exports = transporter;