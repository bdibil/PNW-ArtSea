const { User } = require('../models');

const test_data = [
    {
        id:1,  
        first_name: 'Art',
        last_name: 'Lover',
        username: 'AL1',
        email: 'art@love.com',
        password: 'pass321',
    },
    {
      id:2, 
      first_name: 'Joe',
      last_name: 'Joe',
      username: 'joejoe',
      email: 'joe@joe.com',
      password: 'pass123',
    },
    
  ];
  

const seedUsers = () => User.bulkCreate(test_data);

module.exports = seedUsers;
