const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Liked_Artist extends Model {}


Liked_Artist.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'liked_artist',
    }
  );



module.exports = Liked_Artist;