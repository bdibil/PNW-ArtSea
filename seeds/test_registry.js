//const { Art_Lover } = require('../models');
const { User, Registry} = require('../models');

const test_data = [
    {
        id: '1',
        items: '1,2,3,4',
        user_id: '1'
    },
    {
        id: '2',
        items: '3,4,5,6,7,8',
        user_id: '2'
    },
];


const seedRegistry = () => Registry.bulkCreate(test_data);

module.exports = seedRegistry;
