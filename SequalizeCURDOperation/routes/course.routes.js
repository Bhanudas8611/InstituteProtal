var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const coursecontroller = require("../controller/course.controller");


router.get("/findall", coursecontroller.findall);
router.get("/findbyid/:id", coursecontroller.findcourseByID);
router.post(
  "/update/:id",
  checkvalidation.validationforcourse(),
  coursecontroller.updatecourse
);
router.post("/delete/:id", coursecontroller.deletecourse);
router.post(
  "/insert",
  checkvalidation.validationforcourse(),
  coursecontroller.insertcourse
);
module.exports = router;
