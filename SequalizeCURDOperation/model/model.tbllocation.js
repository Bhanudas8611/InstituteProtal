module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tbllocation",
    {
      loc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      loc_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      loc_state: {
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
