const Sequelize = require("sequelize");
const sequelize = new Sequelize("Sequalizestudent_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.studentmodel=require('../model/model.tblstudent')(sequelize,Sequelize)
db.loginmodel = require('../model/model.tbllogin')(sequelize, Sequelize)
db.coursemodel = require('../model/model.tblcourse')(sequelize, Sequelize)
db.institutemodel = require('../model/model.tblinstitute')(sequelize, Sequelize)
db.locationmodel = require('../model/model.tbllocation')(sequelize, Sequelize)
db.factmodel = require('../model/model.tblfact')(sequelize, Sequelize)

db.studentmodel.hasMany(db.factmodel)
db.factmodel.belongsTo(db.studentmodel,{foreignKey: 'stud_id'})

db.coursemodel.hasMany(db.factmodel)
db.factmodel.belongsTo(db.coursemodel,{foreignKey: 'course_id'})

db.institutemodel.hasMany(db.factmodel)
db.factmodel.belongsTo(db.institutemodel,{foreignKey: 'inst_id'})

db.locationmodel.hasMany(db.factmodel)
db.factmodel.belongsTo(db.locationmodel, { foreignKey: 'loc_id' })


module.exports = db;
