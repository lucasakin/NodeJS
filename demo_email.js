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
  to: 'joedio.borges@ifc.edu.com',
  subject: 'desafio proposto pelo professor',
  text: 'Lucas Lopes Teixeira 2B  mzek arsv inal bpqn'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});