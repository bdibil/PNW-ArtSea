const { Art_Piece } = require('../models');

const test_data = [
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 10000,
    stock: 15,
    category_id: 4,
    artist_id:6
  },
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 10000,
    stock: 15,
    category_id: 2,
    artist_id:4
  },
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 10000,
    stock: 15,
    category_id: 3,
    artist_id:3
  },
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 10000,
    stock: 15,
    category_id: 1,
    artist_id:2
  },
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 10000,
    stock: 1,
    category_id: 2,
    artist_id: 3
  },
  {
    //can we change category to category?
    piece_name: "starry knight",
    image: 'fake_art_@123.com',
    price: 100,
    stock: 7,
    category_id: 2,
    artist_id: 4
  },
];

const seedArt = () => Art_Piece.bulkCreate(test_data);

module.exports = seedArt;
