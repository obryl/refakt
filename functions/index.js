const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.mailSend = functions.https.onCall((data) => {
    const login = functions.config().gmail.email;
    const password = functions.config().gmail.password;


    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: login,
        pass: password
      }
    });

    let mailOptions = {
      from: 'noreply@refakt.com',
      to: 'brylkovsky@gmail.com',
      // cc: 'refakt95@gmail.com',
      replyTo: data.email,
      subject: 'Повідомлення з refact.if.ua',
      html: `<h4>Ім'я клієнта: ${data.name}</h4>
                   <h4>Номер телефону: ${data.phone}</h4>
                   <h4>Електронна скринька: ${data.email}</h4>
                   <p>Повідомлення: ${data.message}</p>
                   <p>${data.date}</p>`
    };

    return transporter.sendMail(mailOptions).then((success, error) => {
      if (success) {
        return success
      } else return error
    })

  }
);


