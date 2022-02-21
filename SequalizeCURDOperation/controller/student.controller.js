const db = require("../model/index");
const Sequelize = require("sequelize");
const { validationResult } = require("express-validator");
const { email } = require("../middleware/nodemailer.middleware");

//const student = db.studentmodel;

let insert = (req, res) => {
  let profileURL = "";
  const error = validationResult(req);

  if (!error.isEmpty()) {
    res.status(400).send({ error: error.array() });
  } else {
    if (req.file) {
      profileURL = req.file.filename;
    } else {
      res.send({ Error: true, message: "Upload only png, jpeg and jpg file" });
    }

    let data = {
      stud_fname: req.body.stud_fname,
      stud_lname: req.body.stud_lname,
      stud_address: req.body.stud_address,
      stud_city: req.body.stud_city,
      stud_email: req.body.stud_email,
      profileURL: profileURL,
    };

    db.studentmodel
      .create(data)
      .then((result) => {
        email(req, res);
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  }
};

let findall = (req, res) => {
  db.studentmodel
    .findAll({
      attributes: [
        "stud_fname",
        "stud_lname",
        "stud_address",
        "stud_city",
        "stud_email",
      ],
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let countAllRecords = (req, res) => {
  db.studentmodel
    .count()
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let findstudentID = (req, res) => {
  db.studentmodel
    .findAll({ where: { Stud_id: req.params.id } })
    .then((result) => {
      res.send({ result: result });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let updatestudent = (req, res) => {
  let data = {
    stud_fname: req.body.stud_fname,
    stud_lname: req.body.stud_lname,
    stud_address: req.body.stud_address,
    stud_city: req.body.stud_city,
    stud_email: req.body.stud_email,
  };
  db.studentmodel
    .update(data, { where: { Stud_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let deletestudent = (req, res, next) => {
  db.studentmodel
    .destroy({ where: { Stud_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored Deleted Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  insert: insert,
  findall: findall,
  findstudentID: findstudentID,
  deletestudent: deletestudent,
  updatestudent: updatestudent,
  countAllRecords: countAllRecords,
};
