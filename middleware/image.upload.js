var express = require("express");
var router = express.Router();
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    const unique = file.originalname.slice(0,file.originalname.lastIndexOf("."));
     let ext = file.originalname.substring(file.originalname.lastIndexOf("."),file.originalname.length);
      cb(null, file.fieldname + "-" + unique + ext);
  },

 });

const upload = multer({
  storage: storage,
  limits: 1024 * 1024 * 5,

  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
    
  },
});

module.exports = {upload:upload};
