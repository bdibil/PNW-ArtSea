const sequelize = require('../config/connection');
const SeedArtType = require('./SeedArtType');
const SeedArtPiece = require('./SeedArtPiece');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await SeedArtType();

  await SeedArtPiece();

  process.exit(0);
};

seedAll();
