const {QueryTypes} = require("sequelize");
const {Registry, Art_Piece} = require("../../models");
const router = require('express').Router();
const delim = ","

router.post("/addRemoveLikes", async (req, res) => {
    const userid = req.session.user_id;
    const artid = req.body.artid;
    const action = req.body.action;

    const sql = await sequelize.query("SELECT * FROM `art_piece` where id="+artid, { type: QueryTypes.SELECT });

    let newLiked = ""
    if(action === "add") {
        const current = sql[0].liked_by
        let numLikes = parseInt(sql[0].like_count)
        if(current) {
            current.split(delim).push(userid);
            newLiked = current.size > 1 ? current.join(delim) : current;
        } else {
            newLiked = userid.toString();
        }
        numLikes += 1;
        await insertOrUpdate(newLiked, numLikes, artid)
        res.json({
            msg: "Art Liked",
            count: numLikes
        });
    } else {
        const current = sql[0].liked_by
        let numLikes = parseInt(sql[0].like_count)

        if(current) {
            const currentSet = new Set(current);
            currentSet.delete(userid.toString());
            if(currentSet.size > 0) {
                newLiked = Array.from(currentSet).join(delim);
            } else {
                newLiked = null
            }
            console.log("newLiked "+newLiked)
            numLikes -= 1;
            await insertOrUpdate(newLiked, numLikes, artid);
        }
        res.json({
            msg: "Like Removed",
            count: numLikes
        });
    }
});

async function insertOrUpdate(likedBy, numLikes, artId) {
    return await Art_Piece.update(
        {liked_by: likedBy, like_count: numLikes},{where:{id: artId}}
    );

}

module.exports = router;