const db = require("../model/index");
const { Op, col, fn } = require("sequelize");

//find student deatils location wise
let locationwisestudentdeatils = (req, res) => {
  db.factmodel
    .findAndCountAll({
      include: [
        { model: db.locationmodel, attributes: ["loc_id","loc_name", "loc_state"] },
        {
          model: db.studentmodel,
          attributes: ["stud_fname", "stud_lname", "stud_email"],
        },
      ],
      attributes: ["fact_id", "total_fees"],
      where: { loc_id: req.params.id },
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//find student deatils location wise and course wise
let locationAndCourseWiseStudentDetails = (req, res) => {
  db.factmodel
    .findAndCountAll({
      include: [
        { model: db.locationmodel, attributes: ["loc_id","loc_name", "loc_state"] },
        { model: db.coursemodel, attributes: ["course_id","course_name"] },
        {
          model: db.studentmodel,
          attributes: ["stud_fname", "stud_lname", "stud_email"],
        },
      ],
      attributes: ["fact_id", "total_fees"],
      where: {
        [Op.and]: [{ loc_id: req.body.loc_id, course_id: req.body.course_id }],
      },
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//find course wise student deatils from all location
let courseWiseStudentDetailsFromAllLocation = (req, res) => {
  db.factmodel
    .findAndCountAll({
      include: [
        { model: db.locationmodel, attributes: ["loc_name", "loc_state"] },
        { model: db.coursemodel, attributes: ["course_id","course_name"] },
        {
          model: db.studentmodel,
          attributes: ["stud_fname", "stud_lname", "stud_email"],
        },
      ],
      attributes: ["fact_id", "total_fees"],
      where: { course_id: req.params.id },
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Find locationwise fees details
let findfeeslocationwise = (req, res) => {
  db.factmodel
    .findAll({  
      include: [
        { model: db.locationmodel, attributes: ["loc_name", "loc_state"] },
      ],

      attributes: [
        [fn("sum", col("actual_fees")), "Actual_Fees"],
        [fn("sum", col("gst")), "GST_Amount"],
        [fn("sum", col("discountamt")), "Discount_amount"],
        [fn("sum", col("total_fees")), "total_amount"],
      ],
      group: ["loc_name"],
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Find locationwise total fees
let findfeesbylocationid = (req, res) => {
  db.factmodel
    .findAll({
      include: [
        {
          model: db.locationmodel,
          attributes: ["loc_id", "loc_name", "loc_state"],
        },
      ],

      attributes: [
        [fn("sum", col("actual_fees")), "Actual_Fees"],
        [fn("sum", col("gst")), "GST_Amount"],
        [fn("sum", col("discountamt")), "Discount_amount"],
        [fn("sum", col("total_fees")), "total_amount"],
      ],
      where: { loc_id: req.params.id },
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

//Find total collected fees course wise from all locations
let findfeescoursewise = (req, res) => {
  db.factmodel
    .findAll({
      include: [{ model: db.coursemodel, attributes: ["course_name"] }],

      attributes: [
        [fn("sum", col("actual_fees")), "Actual_Fees"],
        [fn("sum", col("gst")), "GST_Amount"],
        [fn("sum", col("discountamt")), "Discount_amount"],
        [fn("sum", col("total_fees")), "total_amount"],
      ],
      group: ["course_name"],
    })
    .then((data) => {
      res.send({ data: data });
    })
    .catch((err) => {
      res.send({ error: true, message: err.message });
    });
};

module.exports = {
  locationwisestudentdeatils: locationwisestudentdeatils,
  locationAndCourseWiseStudentDetails: locationAndCourseWiseStudentDetails,
  courseWiseStudentDetailsFromAllLocation:
    courseWiseStudentDetailsFromAllLocation,
  findfeeslocationwise: findfeeslocationwise,
  findfeesbylocationid: findfeesbylocationid,
  findfeescoursewise: findfeescoursewise,
};
