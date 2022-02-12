const { Art_Type } = require('../models');

const art_type = [
  {
    type: 'Apothecary',
  },
  {
    type: 'Ceramics',
  },
  {
    type: 'Fiber Arts',
  },
  {
    type: 'Home Decor',
  },
  {
    type: 'Illustrations',
  },
  {
    type: 'Jewelry',
  },
  {
    type: 'Oddities',
  }
];

 

const seedCategory = () => Art_Type.bulkCreate(art_type);

module.exports = seedCategory;
