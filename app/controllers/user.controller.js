const db = require("../models");
const crypto = require("crypto");
const nodemailer = require('nodemailer');
const User = db.user;
const ResetToken = db.ResetToken;
const utils = db.utils;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");

exports.forgot = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (req.body.email == null) {
        return res.status(200).send({message: "success"});
    }
    ResetToken.update({
            used: 1
        },
        {
            where: {
                email: req.body.email
            }
        });
    let token = crypto.randomBytes(64).toString('base64');
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1 / 24);
    ResetToken.create({
        email: req.body.email,
        expiration: expireDate,
        token: token,
        used: 0
    });
    utils.findOne({
        where: {
            utils_ID: '1'
        }
    }).then(function (utils) {
        let transport = nodemailer.createTransport({
            host: utils.host,
            port: utils.port,
            auth: {
                user: utils.user,
                pass: utils.password
            }
        });
        const message = {
            from: utils.user,
            to: req.body.email,
            replyTo: 'no-reply@lionel-batt.fr',
            subject: 'Reset your Password',
            text: 'To reset your password, please click the link below.\n\nhttp://localhost:8080/api/user/reset-password?token=' + encodeURIComponent(token) + '&email=' + req.body.email
        }
        if (!utils.user) {
                return res.status(404).send({message: "une erreur est survenue"});
            }
            transport.sendMail(message, function (err, info) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(info);
                }
            });
    });
    return res.status(200).send({message: "success"});
};

exports.resetPassword = (req, res , next) => {
    ResetToken.findOne({
        where: {
            email: req.query.email,
            token: req.query.token,
            used: 0
        }
    })
        .then(ResetToken => {
            if (ResetToken == null) {
                return res.status(404).send({message: "Token has expired. Please try password reset again."});
            }
            res.status(200).send({
                token: ResetToken.token,
            });
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
}

exports.changePassword = (req, res, next) => {

  if (req.body.password !== req.body.ConfirmPassword){
    return res.status(404).send({ message: "les mots de passe ne correspondent pas" });
  }
  ResetToken.findOne({
      where: {
        email: req.query.email,
        token: req.query.token,
        used: 0
    }
  })
    .then(ResetToken => {
      if (ResetToken == null) {
        return res.status(404).send({ message: "Token not found. Please try again" });
      }
      ResetToken.update({
        used: 1
      },
      {
        where: {
          email: req.query.email
        }
      });
      User.update({
        password: bcrypt.hashSync(req.body.password, 8)
      },
      {
        where: {
          email: req.query.email
        }
      });
      return res.status(200).send({ message: "Le mot de passe a bien été réinitialiser" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};