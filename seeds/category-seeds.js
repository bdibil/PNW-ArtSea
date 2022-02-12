const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Wands',
  },
  {
    category_name: 'Moon-Catchers',
  },
  {
    category_name: 'Jewelery',
  },
  {
    category_name: 'Sculptures',
  },
  {
    category_name: 'Native-art',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
