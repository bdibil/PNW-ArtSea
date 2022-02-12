const { Registry } = require('../models');

const test_data = [
    {
        id:1,  
        registry_name: 'my registry',
        user_id:1,
    },
    {
        id:2,  
        registry_name: 'bod registry',
        user_id:3,
    },
    
  ];
  

const seedRegistry = () => Registry.bulkCreate(test_data);

module.exports = seedRegistry;
