const User = require('./User');
const ArtType = require('./ArtType');
const ArtPiece = require('./ArtPiece');

ArtType.hasMany(ArtPiece, {
  foreignKey: 'ArtType_id',
});

ArtPiece.belongsTo(ArtType, {
  foreignKey: 'ArtType_id',
});
 
User.belongsTo(ArtPiece,{
  foreignKey: 'User_id',
})

User.hasMany(ArtPiece, {
  foreignKey: 'ArtPiece_id',
})

module.exports = { User, ArtType, ArtPiece };
