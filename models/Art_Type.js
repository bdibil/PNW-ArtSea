const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Art_Type extends Model {}


Art_Type.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'art_type',
    }
);



module.exports = Art_Type;