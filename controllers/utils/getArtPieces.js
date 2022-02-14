const { QueryTypes } = require('sequelize');
const {Art_Piece} = require("../../models");
const delim = ","


async function getAllArtPieces(loggedIn, userId, category, artist) {
    console.log("req.session.loggedIn " + loggedIn);
    console.log("req.session.user_id " + userId);
    console.log("getAllArtPieces("+category+", "+artist+")");
    let sql = "SELECT * FROM `art_piece`";
    let artPieces = [];
    let flag = 0;

    if((category !== 0 && category !== undefined) || (artist != 0 && artist !==undefined)) {
        sql += " WHERE ";
    }

    if(category !== 0 && category !== undefined) {
        sql += "art_type_id="+category

        if( artist != 0 && artist !==undefined ) {
            sql += " AND user_id="+artist;
            flag = 1;
        }
    }

    if(flag === 0 && (artist != 0 && artist !==undefined) ) {
        sql += "user_id="+artist;
    }

    console.log("sql = "+sql);

    let sqlResult = await sequelize.query(sql, { type: QueryTypes.SELECT });

    sqlResult.forEach(art => {
        art.state = loggedIn ? "active" : "disabled";
        if(userId) {
            if(art.liked_by) {
                art.liked = art.liked_by.split(delim).includes(userId.toString());
            }
            else {
                art.liked = false
            }
        }
        artPieces.push(art);
    })

    console.log("artPieces10 : "+artPieces);

    return artPieces;
}

async function getArtistArtPieces(user_id) {
    let arts = {};
    try {
        const artistArts = await Art_Piece.findAll({
            where: {
                user_id: user_id
            }
        }).then(function(entries){
            console.log("entries11 ="+entries);
            arts = entries;
        });

        console.log("arts = "+arts);
        return arts;
    } catch (err) {
        return err;
    }
}

async function getArtPieces(category) {
    // let arts = [];
    // try {
    //     await Art_Piece.findAll({
    //         where: {
    //             art_type_id: category
    //         }
    //     }).then(function(entries){
    //         console.log("entries = "+JSON.stringify(entries));
    //         entries.forEach(art => {
    //             arts.push(art);
    //         });
    //     });
    // } catch (err) {
    //     console.log("filtered = "+err);
    //     res.status(500).json(err);
    // }
    // return arts;

    const sql = await sequelize.query("SELECT * FROM `art_piece` WHERE art_type_id="+category, { type: QueryTypes.SELECT });
    let artPieces = [];

    sql.forEach(art => {
        artPieces.push(art);
    })

    console.log("artPieces : "+artPieces);
    return artPieces;
}

module.exports.getAllArtPieces = getAllArtPieces;
module.exports.getArtistArtPieces = getArtistArtPieces;
module.exports.getArtPieces = getArtPieces;