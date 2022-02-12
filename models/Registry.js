const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Registry extends Model {}


Registry.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate:{
          notEmpty: true
        },
      },
      registry_name: {
        type: DataTypes.INTEGER
      },
      user_id: {
        type: DataTypes.INTEGER,
        references:{
        model: 'user',
        key: 'id'
      },
    },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'registry',
    }
  );



module.exports = Registry;