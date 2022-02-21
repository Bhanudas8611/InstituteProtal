const db = require('../model/index')
const { validationResult } = require("express-validator");

//Show all institute Data
let findall = (req, res) => {
  db.institutemodel
    .findAll({
      attributes: ["inst_name", "inst_type"],
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Find institute details by institute id
let findinstituteByID = (req, res) => {
  db.institutemodel
    .findAll(
      { where: { inst_id: req.params.id } },
      {
        attributes: ["inst_name", "inst_type"],
      }
    )
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Insert Record in institute Table
let insertinstitute = (req, res) => {
   const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    let data = {
      inst_name: req.body.inst_name,
      inst_type: req.body.inst_type,
    };

    db.institutemodel
      .create(data)
      .then((result) => {
        res.send({ error: false, message: `Record Insert Sucessfully` });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
    
  }
};

//Update institute details by using institute ID
let updateinstitute = (req, res) => {
  let data = {
    inst_name: req.body.inst_name,
    inst_type: req.body.inst_type,
  };

  db.institutemodel
    .update(data, { where: { inst_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Delete institute record by institute id
let deleteinstitute = (req, res, next) => {
  db.institutemodel
    .destroy({ where: { inst_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored Deleted Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  findall: findall,
  findinstituteByID: findinstituteByID,
  insertinstitute: insertinstitute,
  updateinstitute: updateinstitute,
  deleteinstitute: deleteinstitute,
};
