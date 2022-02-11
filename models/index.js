//const Art_Lover = require('./Art_Lover');
const User = require('./User');
const Artist = require('./Artist');
const Liked_Artist = require('./Liked_Artist');
const Registry = require('./Registry');
const Art_Piece = require('./Art_Piece');
const Collection = require('./Collection');
const Art_Type = require('./Art_Type');


// Links Users  and  Artists  through: Liked_Artist
User.hasMany(Liked_Artist);
Artist.belongsToMany(User, { through: Liked_Artist})


// Links Users  and  Liked  Art_Pieces  through: Registry
User.hasMany(Art_Piece)
Art_Piece.belongsToMany(User, { through: Registry})


Artist.hasMany(Art_Piece)
Artist.hasMany(Collection)

Collection.hasMany(Art_Piece)

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
