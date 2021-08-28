export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'nextportfoliobrandon@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: req.body.email ,
      to: 'brandon.ford.617@gmail.com',
      subject: req.body.subject,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div><p>Subject: ${req.body.subject} </p><div><p>Message: ${req.body.message}</p></div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    console.log(req.body)
    res.send('success')
}