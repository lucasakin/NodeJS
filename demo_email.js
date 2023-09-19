var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lucas.akinoriprogweb@gmail.com',
    pass: 'mzek arsv inal bpqn'
  }
});

var mailOptions = {
  from: 'lucas.akinoriprogweb@gmail.com',
  to: 'lucaohulk@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});