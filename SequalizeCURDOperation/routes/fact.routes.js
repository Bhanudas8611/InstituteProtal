var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const factcontroller = require("../controller/fact.controller");


router.post("/insertfees",checkvalidation.validationforfees(), factcontroller.insertfees);
router.post("/updatefees/:id",checkvalidation.validationforfees(),factcontroller.updatefees);
router.post("/findall", factcontroller.findall);
// router.get("/countall", factcontroller.countAllRecords);
// router.get("/findbyid/:id", factcontroller.findstudentID);
router.get("/deletefees/:id", factcontroller.deletefees);

module.exports = router;
