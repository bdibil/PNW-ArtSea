const {QueryTypes} = require("sequelize");
const {Art_Piece} = require("../../models");
const router = require('express').Router();
const delim = ","

router.post("/addRemoveLikes", async (req, res) => {
    const userid = req.session.user_id;
    const artid = req.body.artid;
    const action = req.body.action;

    const artPiece = await Art_Piece.findOne({where: {id: artid} })

    let newLikeBy = ""
    const currentLikeBy = artPiece.liked_by
    let currentLikeCount = parseInt(artPiece.like_count)
    if(action === "add") {
        if(currentLikeCount > 0) {
            let tempLikeBy = currentLikeBy.split(delim);
            tempLikeBy.push(userid);
            newLikeBy = tempLikeBy.size > 1 ? tempLikeBy.join(delim) : tempLikeBy;
        } else {
            newLikeBy = userid.toString();
        }
        artPiece.liked_by = newLikeBy.toString();
        artPiece.like_count = currentLikeCount+1;
        await artPiece.save();
        res.json({
            msg: "Art Liked",
            count: currentLikeCount+1
        });
    } else {
        if(currentLikeCount > 0) {
            const currentSet = new Set(currentLikeBy.split(delim));
            currentSet.delete(userid.toString());
            if(currentSet.size > 0) {
                newLikeBy = Array.from(currentSet).join(delim);
            } else {
                newLikeBy = null
            }
            artPiece.liked_by = newLikeBy;
            artPiece.like_count = currentLikeCount-1;
            await artPiece.save();
        }
        res.json({
            msg: "Like Removed",
            count: currentLikeCount-1
        });
    }
});

module.exports = router;