//const Art_Lover = require('./Art_Lover');
const User = require('./User');
const Artist = require('./Artist');
const Liked_Artist = require('./Liked_Artist');
const Registry = require('./Registry');
const Art_Piece = require('./Art_Piece');
const Collection = require('./Collection');
const Art_Type = require('./Art_Type');

// Links Users  and  Liked  Art_Pieces  through: Registry
Art_Piece.belongsTo(User, {foreignKey: "user_id"})

User.hasOne(Registry)
Registry.belongsTo(User,{foreignKey: "user_id"})
// Art_Piece.belongsToMany(User, { through: Registry})

Art_Type.hasMany(Art_Piece)



// console.log("test")

module.exports = { 
    User, 
    Artist, 
    Liked_Artist, 
    Registry, 
    Art_Piece, 
    Collection, 
    Art_Type,
};
