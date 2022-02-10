const { Artist } = require('../models');

const test_data = [
  {
    first_name: 'Joe',
    last_name: 'Joe',
    username: 'joejoe',
    email: 'joe@joe.com',
    password: 'pass123',
  },
  {
    first_name: 'Don',
    last_name: 'Nod',
    username: 'DonNod',
    email: 'don@nod.com',
    password: 'pass321',
  },

];

const seedArtist = () => Artist.bulkCreate(test_data);

module.exports = seedArtist;
