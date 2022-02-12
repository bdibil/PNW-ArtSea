const sequelize = require('../config/connection');

// Import seed files as needed 
const seedArtist = require('./test_artist');
const seedArtLover = require('./test_art_lover');
const seedArt = require('./test_art_piece');



const seedAll = async () => {
  await sequelize.sync({ force: true });

//  Seed Artist Info  with  ->  test_artist.js  data
  await seedArtist();

//  Seed Artist Info  with  ->  test_art_lover.js  data
  await seedArtLover();

//  Seed Art Pieces Info  with  ->  test_art_piece.js  data
  await seedArt();

  process.exit(0);
};

seedAll();
