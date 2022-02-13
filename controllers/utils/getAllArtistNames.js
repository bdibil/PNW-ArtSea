const { QueryTypes } = require('sequelize');

async function getArtistNames () {
    const sql = await sequelize.query("SELECT first_name, last_name FROM `user`", { type: QueryTypes.SELECT });
    let artistNames = [];
    sql.forEach(artist => {
        artistNames.push(artist.first_name + " " + artist.last_name);
    });
    return artistNames;
}

module.exports.getArtistNames = getArtistNames;