const { Art_Lover } = require('../models');

const test_data = [
    {
        first_name: 'Art',
        last_name: 'Lover',
        username: 'AL1',
        email: 'art@love.com',
        password: 'pass321',
    },
    {
      first_name: 'Joe',
      last_name: 'Joe',
      username: 'joejoe',
      email: 'joe@joe.com',
      password: 'pass123',
    },
    
  ];
  

const seedArtLover = () => Art_Lover.bulkCreate(test_data);

module.exports = seedArtLover;
