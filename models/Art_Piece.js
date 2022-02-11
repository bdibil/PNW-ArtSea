const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Art_Piece extends Model {}


Art_Piece.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //can we change title to category?
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //artist_name changed to company_name
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cloud_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'art_piece',
    }
  );



module.exports = Art_Piece;