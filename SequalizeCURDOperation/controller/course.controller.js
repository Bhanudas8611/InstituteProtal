const db = require("../model/index");
const { validationResult } = require("express-validator");

//Show all Course Data
let findall = (req, res) => {
  db.coursemodel
    .findAll({
      attributes: ["course_name", "course_duration"],
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Find Course details by Course id
let findcourseByID = (req, res) => {
  db.coursemodel
    .findAll(
      { where: { course_id: req.params.id } },
      {
        attributes: ["course_name", "course_duration"],
      }
    )
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Insert Record in Course Table
let insertcourse = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    let data = {
      course_name: req.body.course_name,
      course_duration: req.body.course_duration,
    };

    db.coursemodel
      .create(data)
      .then((result) => {
        res.send({ error: false, message: `Record Insert Sucessfully` });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
    
  }
};

//Update Course details by using Course ID
let updatecourse = (req, res) => {
  let data = {
    course_name: req.body.course_name,
    course_duration: req.body.course_duration,
  };

  db.coursemodel
    .update(data, { where: { course_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Delete Course record by Course id
let deletecourse = (req, res, next) => {
  db.coursemodel
    .destroy({ where: { course_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored Deleted Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  findall: findall,
  findcourseByID: findcourseByID,
  insertcourse: insertcourse,
  updatecourse: updatecourse,
  deletecourse: deletecourse,
};
