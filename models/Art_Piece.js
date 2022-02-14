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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist_name: {
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
      upload_timestamp: {
          type: DataTypes.BIGINT,
          allowNull: false,
      },
      like_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
          liked_by: {
          type: DataTypes.STRING,
          allowNull: true,
          primaryKey: false,
      },
      collection_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
      },
      art_type_id: {
          type: DataTypes.INTEGER,
          allowNull: true ,
      }
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