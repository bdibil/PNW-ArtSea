require('dotenv').config();
const router = require('express').Router();
const { Art_Piece } = require('../../models');

const getLatest = async () => {
    let arts = {};
    try {
        const latestArts = await Art_Piece.findAll({
            limit: 3,
            order: [ [ 'upload_timestamp', 'DESC' ]]
        }).then(function(entries){
            arts = entries;
        });

        return arts;
        // console.log(arts);
        // res.send(arts[0]);
        // res.render('login', { art : arts[0] });
    } catch (err) {
        res.status(500).json(err);
    }
};

const getMostLiked = async () => {
    let arts = {};
    try {
        const latestArts = await Art_Piece.findAll({
            limit: 3,
            order: [ [ 'like_count', 'DESC' ]]
        }).then(function(entries){
            arts = entries;
        });

        console.log(arts);
        return arts;
        // console.log(arts);
        // res.send(arts[0]);
        // res.render('login', { art : arts[0] });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports.getLatest = getLatest;
module.exports.getMostLiked = getMostLiked;