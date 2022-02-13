const { QueryTypes } = require('sequelize');

async function getArtPieces () {
    const sql = await sequelize.query("SELECT * FROM `art_piece`", { type: QueryTypes.SELECT });
    let artPieces = [];

    sql.forEach(art => {
        artPieces.push(art);
    })
    return artPieces;
}

module.exports.getArtPieces = getArtPieces;