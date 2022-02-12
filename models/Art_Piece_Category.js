const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


class Art_Piece_Category extends Model {}


Art_Piece_Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
          category_id: {
            type: DataTypes.INTEGER,
            references:{
              model: 'category',
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
    
  module.exports = Art_Piece_Category;