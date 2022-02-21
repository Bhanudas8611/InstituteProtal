var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const checkToken = require("./middleware/checktoken.middlwware");
const studentRouter = require('./routes/student.routes');
const loginRouter = require("./routes/login.routes");
const locationRouter = require("./routes/location.routes");
const instituteRouter = require('./routes/institute.routes')
const courseRouter = require('./routes/course.routes')
const factRouter = require('./routes/fact.routes')
const reportRouter=require('./routes/feesreport.routes')

const db= require('./model');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'upload')))

db.sequelize.sync();
//db.sequelize.sync({force:true});

app.use("/login", loginRouter);
app.use("/location", checkToken, locationRouter);
app.use("/student", checkToken, studentRouter);
app.use("/institute", checkToken, instituteRouter);
app.use("/course", checkToken, courseRouter);
app.use("/fees", checkToken, factRouter);
app.use("/report", checkToken, reportRouter);

module.exports = app;
