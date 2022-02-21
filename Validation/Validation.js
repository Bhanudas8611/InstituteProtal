const { check } = require("express-validator");

let validationforcreateuser = () => {
  return [
    check("user_name")
      .notEmpty()
      .withMessage("User Name is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z)")
      .isLength({ max: 100 })
      .trim(),
    check("user_email")
      .isEmail()
      .withMessage("Enter wrong Email Id")
      .normalizeEmail()
      .notEmpty()
      .withMessage("Email id required")
      .trim(),
    check("user_password")
      .isLength({ min: 7 })
      .withMessage("Password should be at least 7 chars long"),
    check("user_type")
      .notEmpty()
      .withMessage("User Type Required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("User type should be Alphabets"),
  ];
};

let validationforlocation = () => {
  return [
    check("loc_name")
      .notEmpty()
      .withMessage("Location is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z")
      .isLength({ max: 100 })
      .trim(),
    check("loc_state")
      .isLength({ Max: 100 })
      .withMessage("Name length only 100 Character")
      .trim()
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z")
      .notEmpty()
      .withMessage("State Name is required"),
  ];
};

let validationforstudent = () => {
  return [
    check("stud_fname")
      .notEmpty()
      .withMessage("Student first Name is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z")
      .isLength({ max: 100 })
      .trim(),
    check("stud_lname")
      .notEmpty()
      .withMessage("student last Name is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z)")
      .isLength({ max: 100 })
      .trim(),
    check("stud_city")
      .isLength({ Max: 100 })
      .withMessage("Name length only 100 Character")
      .trim()
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z)")
      .notEmpty()
      .withMessage("State Name is required"),
    check("stud_email")
      .isEmail()
      .withMessage("Enter wrong Email Id")
      .normalizeEmail()
      .notEmpty()
      .withMessage("Email id required")
      .trim(),
  ];
};

let validationforinstitute = () => {
  return [
    check("inst_name")
      .notEmpty()
      .withMessage("Institute Name is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z) in Institute Name")
      .isLength({ max: 200 })
      .trim(),
    check("inst_type")
      .notEmpty()
      .withMessage("Institute type is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z) in Institute type")
      .isLength({ max: 100 })
      .trim(),
  ];
};

let validationforcourse = () => {
  return [
    check("course_name")
      .notEmpty()
      .withMessage("Course Name is required")
      .isAlpha("en-US", { ignore: "s" })
      .withMessage("Entry only Alphabets(A-Z,a-z) in Course Name")
      .isLength({ max: 200 })
      .trim(),
    check("course_duration")
      .notEmpty()
      .withMessage("Course Mode is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Course Duration Field"),
  ];
};

let validationforfees = () => {
  return [
    check("inst_id")
      .notEmpty()
      .withMessage("Institute ID is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Institute ID Field"),
    check("course_id")
      .notEmpty()
      .withMessage("course ID is required")
      .isNumeric()
      .withMessage("Enter Only numbers in course ID Field"),
    check("loc_id")
      .notEmpty()
      .withMessage("Location ID is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Location ID Field"),
    check("stud_id")
      .notEmpty()
      .withMessage("Student ID is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Student ID Field"),
    check("actual_fees")
      .notEmpty()
      .withMessage("Actual Fee is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Actual Fee Field"),
    check("discount_percentage")
      .notEmpty()
      .withMessage("Discount percentage is required")
      .isNumeric()
      .withMessage("Enter Only numbers in Discount percentage Field"),
    check("gst_percentage")
      .notEmpty()
      .withMessage("GST percentage is required")
      .isNumeric()
      .withMessage("Enter Only numbers in GST percentage  Field"),
  ];
};

module.exports = {
  validationforlocation: validationforlocation,
  validationforcreateuser: validationforcreateuser,
  validationforstudent: validationforstudent,
  validationforinstitute: validationforinstitute,
  validationforcourse: validationforcourse,
  validationforfees: validationforfees,
};
