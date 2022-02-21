var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const institutecontroller = require("../controller/institute.controller");

router.get("/findall", institutecontroller.findall);
router.get("/findbyid/:id", institutecontroller.findinstituteByID);
router.post(
  "/update/:id",
  checkvalidation.validationforinstitute(),
  institutecontroller.updateinstitute
);
router.post("/delete/:id", institutecontroller.deleteinstitute);
router.post(
  "/insert",
  checkvalidation.validationforinstitute(),
  institutecontroller.insertinstitute
);
module.exports = router;
