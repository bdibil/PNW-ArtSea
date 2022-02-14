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
      },
      items: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'registry',
      indexes:[{
            unique: true,
            fields: ['user_id']
      }]
    }
  );



module.exports = Registry;