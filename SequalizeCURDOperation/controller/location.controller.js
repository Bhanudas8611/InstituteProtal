const { validationResult } = require("express-validator");
const db = require("../model/index");

//Show all location Data
let findall = (req, res) => {
  db.locationmodel
  .findAll({
    attributes: ["loc_name", "loc_state"],
  })
  .then((data) => {
    res.send({ data: data });
  })
  .catch((err) => {
    res.send({ error: true, message: err.message });
  });
};

//Find location details by location id
let findLocationByID = (req, res) => {
  db.locationmodel
    .findAll(
      { where: { loc_id: req.params.id } },
      {
        attributes: ["loc_name", "loc_state"],
      }
    )
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Insert Record in Location Table
let insertlocation = (req, res) => {
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    let data = {
      loc_name: req.body.loc_name,
      loc_state: req.body.loc_state,
    };

    db.locationmodel
      .create(data)
      .then((result) => {
        res.send({ error: false, message: `Record Insert Sucessfully` });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
    
  }
};

//Update Location details by using location ID
let updatelocation = (req, res) => {
  let data = {
    loc_name: req.body.loc_name,
    loc_state: req.body.loc_state,
  };

  db.locationmodel
    .update(data, { where: { loc_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Delete location record by location id
let deletelocation = (req, res, next) => {
  db.locationmodel
    .destroy({ where: { loc_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored Deleted Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  findall: findall,
  findLocationByID: findLocationByID,
  insertlocation: insertlocation,
  updatelocation: updatelocation,
  deletelocation: deletelocation,
};
