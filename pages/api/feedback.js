import nodemailer from 'nodemailer';

export default async function Feedback(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.BURNER_ACCOUNT_MAIL,
      pass: process.env.BURNER_ACCOUNT_CODE,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.BURNER_ACCOUNT_MAIL,
    to: process.env.ACCOUNT_MAIL,
    subject: 'Feedback for AirJourni',
    text: 'Hello',
    html: `<div>${req.body.message}</div>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ message: 'success' });
}
