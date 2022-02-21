module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tblstudents",
    {
      stud_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stud_fname: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      stud_lname: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      stud_address: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      stud_city: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      stud_email: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      profileURL: {
        type: Sequelize.STRING(400),
        allowNull: true,
        defaultValue: "No Image",
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return model;
};
