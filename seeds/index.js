const sequelize = require('../config/connection');
const seedCategory = require('./artType');

// Import seed files as needed 
// const seedArtist = require('./test_artist');
const seedUsers = require('./user.js');
const seedArt = require('./art_piece');
const seedRegistry = require('./registry-seeds');
const seedCategories = require('./category-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategory();
//  Seed Artist Info  with  ->  test_artist.js  data
  await seedArtist();

//  Seed Artist Info  with  ->  test_art_lover.js  data
  await seedUsers();

//  Seed Art Pieces Info  with  ->  test_art_piece.js  data
  await seedArt();

  //  Seed Art Pieces Info  with  ->  test_art_piece.js  data
  await seedRegistry();

//  Seed Art Pieces Info  with  ->  test_art_piece.js  data
await seedCategories();





  process.exit(0);
};

seedAll();
