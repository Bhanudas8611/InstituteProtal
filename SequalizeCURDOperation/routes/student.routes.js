var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const studentcontroller = require("../controller/student.controller");
const{upload}=require('../middleware/image.upload')

router.post(
  "/insert",upload.single('profileURL'),
  checkvalidation.validationforstudent(),
  studentcontroller.insert
);
router.post(
  "/update/:id",
  checkvalidation.validationforstudent(),
  studentcontroller.updatestudent
);
router.get("/findall", studentcontroller.findall);
router.get("/countall", studentcontroller.countAllRecords);
router.get("/findbyid/:id", studentcontroller.findstudentID);
router.get("/delete/:id", studentcontroller.deletestudent);

module.exports = router;
