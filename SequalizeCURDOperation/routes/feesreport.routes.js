var express = require("express");
var router = express.Router();
const reportcontroller = require("../controller/feesreport.controller");



router.get("/locationwisestudentdeatils/:id", reportcontroller.locationwisestudentdeatils);
router.post("/locationAndCourseWiseStudentDetails", reportcontroller.locationAndCourseWiseStudentDetails);
router.get("/courseWiseStudentDetailsFromAllLocation/:id", reportcontroller.courseWiseStudentDetailsFromAllLocation);
router.get("/findfeeslocationwise", reportcontroller.findfeeslocationwise);
router.get("/findfeesbylocationid/:id", reportcontroller.findfeesbylocationid);
router.get("/findfeescoursewise", reportcontroller.findfeescoursewise);



module.exports = router;
