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
        piece_name:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        image:{
          type: DataTypes.STRING,
          allowNull: true,
        },
          price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: { isDecimal: true },
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {isNumeric: true},
          },
          category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id'
      
            },
        },
        artist_id:{
          type: DataTypes.INTEGER,
          references: {
            model: 'artist',
          },
        }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'art-piece',
    }
  );
  
module.exports = Art_Piece;