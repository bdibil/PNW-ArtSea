const sequelize = require('../config/connection');

// Import seed files as needed 
const seedAllUsers = require('./test_artist');
const seedArt = require('./test_art_piece');
const seedRegistry = require('./test_registry');
const seedArtType = require('./art_type');


const seedAll = async () => {
  await sequelize.sync({ force: true });

//  Seed Artist Info  with  ->  test_artist.js  data
  await seedAllUsers();
  await seedArtType();

//  Seed Art Pieces Info  with  ->  test_art_piece.js  data
  await seedArt();

  await seedRegistry();

  process.exit(0);
};

seedAll();
