//const { Art_Lover } = require('../models');
const { User } = require('../models');

const test_data = [
    {
        first_name: 'Art',
        last_name: 'Lover',
        username: 'AL1',
        email: 'art@love.com',
        password: 'pass321',
        is_artist: true,
        unique_string:'1',
        is_valid: false
    },
    {
      first_name: 'Joe',
      last_name: 'Joe',
      username: 'joejoe',
      email: 'joe@joe.com',
      password: 'pass123',
      is_artist: false,
      unique_string:'2',
      is_valid: false
    },
    
  ];
  

const seedUser = () => User.bulkCreate(test_data);

module.exports = seedUser;
