module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tblinstitute",
    {
      inst_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      inst_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      inst_type: {
        type: Sequelize.STRING(100),
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
