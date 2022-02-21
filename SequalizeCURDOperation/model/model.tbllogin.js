module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tbllogin",
    {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      user_type: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
           
    },
    {
      freezeTableName: true,
    }
  );
  return model;
};
