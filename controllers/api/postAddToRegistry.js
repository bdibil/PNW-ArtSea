const {QueryTypes} = require("sequelize");
const {Registry} = require("../../models");
const router = require('express').Router();
const delim = ","

router.post("/addToRegistry", async (req, res) => {
    const userid = req.body.userid;
    const artid = req.body.artid;

    console.log("artid "+artid);
    const sql = await sequelize.query("SELECT * FROM `registry` where user_id="+userid, { type: QueryTypes.SELECT });

    if(sql.length > 0) {
        const current = sql[0].items;
        if(current.split(delim).includes(artid)) {
            res.json("Already in registry");
        } else {
            const newItems = current + delim + artid
            await insertOrUpdate(newItems, userid);
            res.json("Added to registry");
        }
    } else {
        await insertOrUpdate(artid, userid);
        res.json("Added to registry");
    }
});

async function insertOrUpdate(items, userid) {
    return await Registry.upsert({
        items: items,
        user_id: userid
    });

}

module.exports = router;