const { QueryTypes } = require('sequelize');

async function getRegistry(userId) {
    let artPieces = [];
    const sql = await sequelize.query("SELECT * FROM `registry` WHERE user_id="+userId, { type: QueryTypes.SELECT });
    if(sql.length > 0){
        const artIds = sql[0].items;

        const registrySql = await sequelize.query("SELECT * FROM `art_piece` WHERE id IN("+artIds+");", { type: QueryTypes.SELECT });

        registrySql.forEach(art => {
            artPieces.push(art);
        });

        console.log(artPieces[0].id);
    }
    return artPieces;
}

module.exports.getRegistry = getRegistry;