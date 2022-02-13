const router = require('express').Router();
const { QueryTypes } = require('sequelize');

async function getArtTypes() {
    const sql = await sequelize.query("SELECT type FROM `art_type`", { type: QueryTypes.SELECT });
    const artTypes = [];
    sql.forEach(types => {
        artTypes.push(types.type)
    });
    return artTypes;
}

module.exports.getArtTypes = getArtTypes;
