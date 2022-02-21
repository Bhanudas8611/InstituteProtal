var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const locationcontroller = require("../controller/location.controller");


router.get("/findall", locationcontroller.findall);
router.get("/findbyid/:id", locationcontroller.findLocationByID);
router.post(
  "/update/:id",
  checkvalidation.validationforlocation(),
  locationcontroller.updatelocation
);
router.post("/delete/:id", locationcontroller.deletelocation);
router.post(
  "/insert",
  checkvalidation.validationforlocation(),
  locationcontroller.insertlocation
);
module.exports = router;
