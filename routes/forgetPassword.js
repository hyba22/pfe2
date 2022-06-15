const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const transport = require("nodemailer-smtp-transport");
require("dotenv").config();
const express = require("express");
const router=express.Router();


//mailing options and transportor
const options = {
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
const mail = nodemailer.createTransport(transport(options));
const user = Users.email;

    
    router.post('/forgotPassword', (req, res) => {
      if (req.body.email === '') {
        res.status(400).send('email required');
      }      
      user.find({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        if (user === null) {          
          res.status(403).send('email not in db');
        } else {
          const token = crypto.randomBytes(20).toString('hex');
          user.update({
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000,
          });
  
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.EMAIL_ADDRESS}`,
              pass: `${process.env.EMAIL_PASSWORD}`,
            },
          });
  
          const mailOptions = {
            from: process.env.USER,            
            to:user.email,
            subject: 'Link To Reset Password',
            text:
              'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
              + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
              + `http://localhost:3031/reset/${token}\n\n`
              + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
          };
  
          
  
          transporter.sendMail(mailOptions, (err, res) => {
            if (err) {

            } else {              
              res.status(200).json('recovery email sent');
            }
          });
        }
      });
    });
module.exports = router;