const { validationResult } = require("express-validator");
const db = require("../model/index");

let insertfees = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({ errors: errors.array() });
  } else {
    let gst =
      (req.body.actual_fees -
        req.body.actual_fees * (req.body.discount_percentage / 100)) *
      (req.body.gst_percentage / 100);
    let discount = req.body.actual_fees * (req.body.discount_percentage / 100);
    let total_fees = req.body.actual_fees - discount + gst;

    let data = {
      inst_id: req.body.inst_id,
      course_id: req.body.course_id,
      loc_id: req.body.loc_id,
      stud_id: req.body.stud_id,
      actual_fees: req.body.actual_fees,
      discount_percentage: req.body.discount_percentage,
      discountamt: discount,
      gst: gst,
      total_fees: total_fees,
    };

    db.factmodel
      .create(data)
      .then((result) => {
        res.send({ error: false, message: `Record Insert Sucessfully` });
      })
      .catch((err) => {
        res.send({ error: true, message: err.message });
      });
  }
};

let updatefees = (req, res) => {
  let gst =
    (req.body.actual_fees -
      req.body.actual_fees * (req.body.discount_percentage / 100)) *
    (req.body.gst_percentage / 100);
  let discount = req.body.actual_fees * (req.body.discount_percentage / 100);
  let total_fees = req.body.actual_fees - discount + gst;

  let data = {
    inst_id: req.body.inst_id,
    course_id: req.body.course_id,
    loc_id: req.body.loc_id,
    stud_id: req.body.stud_id,
    actual_fees: req.body.actual_fees,
    discount_percentage: req.body.discount_percentage,
    discountamt: discount,
    gst: gst,
    total_fees: total_fees,
  };
  db.factmodel
    .update(data, { where: { fact_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored updated Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let deletefees = (req, res, next) => {
  db.factmodel
    .destroy({ where: { fact_id: req.params.id } })
    .then((result) => {
      res.send({ error: false, message: "Recored Deleted Sucessfully" });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

let findall = (req, res) => {
  let pagenumber = req.body.pagenumber;
  let noofrows = req.body.noofrows;
  let offset = (pagenumber - 1) * noofrows;
  let fetchrow = noofrows;

  db.factmodel
      .findAll({
       
      include: [
        { model: db.institutemodel, attributes: ["inst_name"] },
        { model: db.coursemodel, attributes: ["course_name"] },
        { model: db.locationmodel, attributes: ["loc_name", "loc_state"] },
        {
          model: db.studentmodel,
          attributes: ["stud_fname", "stud_lname", "stud_email"],
        },
      ],
          attributes: [
          "fact_id",
        "actual_fees",
        "discountamt",
        "gst",
        "total_fees",
        "createdAt",
      ],
      offset: offset,
      limit: fetchrow,
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  insertfees: insertfees,
  updatefees: updatefees,
  deletefees: deletefees,
  findall: findall,
};
