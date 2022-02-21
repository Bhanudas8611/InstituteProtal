var express = require("express");
var router = express.Router();
const checkvalidation = require("../Validation/Validation");
const authcontroller = require("../controller/auth.controller");

router.post(
  "/createuser",
  checkvalidation.validationforcreateuser(),
  authcontroller.createuser
);
router.post("/signin", authcontroller.login);

module.exports = router;
