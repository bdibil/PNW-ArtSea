const { Art_Piece } = require('../models');

const test_data = [
  {
    title: 'Still Life',
    artist_name: 'Joe',
    file_name: 'Still_Life.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Fake Mona Lisa',
    artist_name: 'Joe',
    file_name: 'fake_ml.jpg',
    cloud_url: 'fake_ml_1.com',
  },

];

const seedArt = () => Art_Piece.bulkCreate(test_data);

module.exports = seedArt;
