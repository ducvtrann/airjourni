import nodemailer from 'nodemailer';

export default function Feedback(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.BURNER_ACCOUNT_MAIL,
      pass: process.env.BURNER_ACCOUNT_CODE,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.BURNER_ACCOUNT_MAIL,
    to: process.env.ACCOUNT_MAIL,
    subject: 'Feedback for AirJourni',
    text: 'Hello',
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err) {
    if (err) console.log(err);
  });

  res.status(200).json({ message: 'success' });
}
