module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tblcourse",
    {
      course_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      course_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      course_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
                 
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return model;
};
