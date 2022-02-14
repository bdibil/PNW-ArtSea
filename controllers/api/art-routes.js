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
    } catch (err) {
        return err;
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
    } catch (err) {
        return err;
    }
};

router.post('/create', async (req, res) => {
    let url = req.body.url.split('/');
    try {
        const newArtPiece = await Art_Piece.create({
            title: req.body.title,
            artist_name: req.session.name,
            file_name: url[url.length-1],
            cloud_url: req.body.url,
            upload_timestamp: req.body.uploadTimestamp,
            like_count: 0,
            art_type_id: req.body.artType,
            user_id: req.session.user_id
        });
        res
            .status(200)
            .json({"message": "Art upload Successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports.getLatest = getLatest;
module.exports.getMostLiked = getMostLiked;
module.exports.router = router;