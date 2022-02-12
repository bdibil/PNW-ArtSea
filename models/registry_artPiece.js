const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


class Registry_ArtPiece extends Model {}


Registry_ArtPiece.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
          registry_id: {
            type: DataTypes.INTEGER,
            references:{
              model: 'registry',
              key: 'id'
            }
          },
         art_piece_id:{
           type: DataTypes.INTEGER,
           references:{
             model: 'art-piece',
             key: 'id'
           },
         },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'art-piece-category',
      });
    
  module.exports = Registry_ArtPiece;