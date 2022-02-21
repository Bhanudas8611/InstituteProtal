module.exports = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "tblfact",
    {
      fact_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      inst_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      loc_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stud_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      actual_fees: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      discount_percentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      discountamt: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      gst: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_fees: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return model;
};
