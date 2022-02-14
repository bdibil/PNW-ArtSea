const { QueryTypes } = require('sequelize');
const {User} = require("../../models");

async function getArtistNames () {
    let artistNames = [];
    try {
        await User.findAll({
            where: {
                is_artist: "Artist"
            }
        }).then(function(entries){
            entries.forEach(artist => {
                artistNames.push({
                    "name" : artist.first_name + " " + artist.last_name,
                    "id" : artist.id
                });
            });
        });
    } catch (err) {
        res.status(500).json(err);
    }
    return artistNames;
}

module.exports.getArtistNames = getArtistNames;