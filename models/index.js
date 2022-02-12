const User = require('./User');
const Artist = require('./Artist');
const Liked_Artist = require('./Liked_Artist');
const Registry = require('./Registry');
const Art_Piece = require('./Art_Piece');
const Category = require('./Category');
const Art_Piece_Category = require('./Art_Piece_Category');
const Registry_ArtPiece = require('./registry_artPiece');


// Links Users  and  Artists  through: Liked_Artist
// hasMany method means "target" is foreignKey and "source" is primaryKey EX: USER is our source (PK) liked_artist is (FK)
User.hasMany(Liked_Artist,{ foreignKey:"user_id", onDelete:CASCADE});

// belongsTo means the "source" is (PK) target is (FK)
// ex: user is the source (PK) it belongsToMany Artist which is the target (FK)
User.belongsToMany(Artist,{through: Liked_Artist, foreignKey:"user_id"}); // has many?????
Artist. belongsToMany(User,{through: Liked_Artist, foreignKey:"artist_id"})


Registry.belongsTo(User, { foreignKey:"user_id" });
// cs - added from here  - cs 02/12/2022
// defining registry in the erd
Art_Piece.belongsToMany(Registry,{through: Registry_ArtPiece, foreignKey:"art_piece_id"}); // has many?????


//possibly category has many art piece- but don't need it?  
Category.belongsToMany(Art_Piece,{through: Art_Piece_Category, foreignKey:"category_id"}); // has many?????
Art_Piece.belongsToMany(Category,{through: Art_Piece_Category,foreignKey:"art_piece_category"})

Art_Piece.belongsTo(Artist, { foreignKey:"artist_id", onDelete:CASCADE});

// console.log("test")

module.exports = { 
    User, 
    Artist, 
    Liked_Artist, 
    Registry, 
    Art_Piece,
    Category,
    Art_Piece_Category, 
    Registry_ArtPiece,
};
