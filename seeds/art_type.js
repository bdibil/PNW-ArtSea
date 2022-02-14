const { Art_Type } = require('../models');

const data = [
    {
        type: 'Apothecary',
    },
    {
        type: 'Ceramics',
    },
    {
        type: 'Fiber Arts',
    },
    {
        type: 'Home Decor',
    },
    {
        type: 'Illustrations',
    },
    {
        type: 'Jewelry',
    },
    {
        type: 'Oddities',
    }
];


const seedUser = () => Art_Type.bulkCreate(data);

module.exports = seedUser;
