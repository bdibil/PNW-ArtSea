const Art_Lover = require('./Art_Lover');
const Artist = require('./Artist');
const Liked_Artist = require('./Liked_Artist');
const Registry = require('./Registry');
const Art_Piece = require('./Art_Piece');
const Collection = require('./Collection');
const Art_Type = require('./Art_Type');



// Links Art_Lovers  and  Artists  through: Liked_Artist
Art_Lover.hasMany(Liked_Artist);
Artist.belongsToMany(Art_Lover, { through: Liked_Artist})


// Links Art_Lovers  and  Liked  Art_Pieces  through: Registry
Art_Lover.hasMany(Art_Piece)
Art_Piece.belongsToMany(Art_Lover, { through: Registry})


Artist.hasMany(Art_Piece)
Artist.hasMany(Collection)

Collection.hasMany(Art_Piece)

Art_Type.hasMany(Art_Piece)



// console.log("test")

module.exports = { 
    Art_Lover, 
    Artist, 
    Liked_Artist, 
    Registry, 
    Art_Piece, 
    Collection, 
    Art_Type,
};
