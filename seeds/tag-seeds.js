const { Art_Piece_Category } = require('../models');

const Art_Piece_Category = [
  {
    Art_Piece_Category_name: 'wood wands',
  },
  {
    Art_Piece_Category_name: 'dream catchers',
  },
  {
    Art_Piece_Category_name: 'necklaces',
  },
  {
    Art_Piece_Category_name: 'earrings',
  },
  {
    Art_Piece_Category_name: 'clay sculptures',
  },
  {
    Art_Piece_Category_name: 'MoonPeopleProduct',
  },
  {
    Art_Piece_Category_name: 'stones',
  },
  {
    Art_Piece_Category_name: 'wizard skart collections of oddities',
  },
];

const seedArtPieceCategory = () => Tag.bulkCreate(Art_Piece_Category_name)

module.exports = seedTags;
