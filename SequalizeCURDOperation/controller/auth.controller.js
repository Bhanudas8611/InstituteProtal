const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../model/index");
const { validationResult } = require("express-validator");

//Create new user
let createuser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    let salt = await bycrpt.genSalt(10);
    let hashpassword = await bycrpt.hash(req.body.user_password, salt);

    let data = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: hashpassword,
      user_type: req.body.user_type,
    };

    db.loginmodel
      .create(data)
      .then((result) => {
        res.send({ error: false, message: `Record Insert Sucessfully` });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  }
};

//Generate token
let login = async (req, res) => {
  db.loginmodel
    .findAll({ where: { user_email: req.body.user_email } })
    .then(async (result) => {
      const issame = await bycrpt.compare(
        req.body.user_password,
        result[0].user_password
      );
      if (issame) {
        let token = jwt.sign(
          { user_id: result[0].User_id, user_name: result[0].user_name },
          "secret",
          { algorithm: "HS256", expiresIn: 6000 * 6000 }
        );
        res.send({ error: false, token: token });
      } else {
        res.send({ error: true, message: "Invalid user name and password" });
      }
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};
module.exports = {
  createuser: createuser,
  login: login,
};
