const { Art_Piece } = require('../models');

const test_data = [
  {
    //can we change title to category?
    title: '',
    //artist_name changed to company_name
    company_name: 'Antoinette Illustrations',
    file_name: 'ZoeMcTamaney.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Illustration',
    company_name: 'Art of Kelly Dean Verity',
    file_name: 'KellyDeanVerity.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    company_name: 'Co-op of Creation',
    file_name: 'CoOpCreations.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Fiber Arts',
    company_name: 'Danny  Mansmith',
    file_name: 'DannyMansmith.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Fiber Arts',
    company_name: 'Elaine Corets Fiber Artist',
    file_name: 'ElaineCorets.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    company_name: 'Elizabeth Bathery',
    file_name: 'ViWPrice.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Ceramics',
    company_name: 'Heather Cornelius Ceramics',
    file_name: 'HeatherCornelius.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    company_name: 'Lady Noire ',
    file_name: 'LilithMErion.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    company_name: 'Moons and Artistry',
    file_name: 'RachelSanders.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    company_name: 'SkeleLights ',
    file_name: 'ShannonBoxrz.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    company_name: 'Stone Circles LLC',
    file_name: 'BreeRose.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Jewelry',
    company_name: 'Tooth and Snail Studio',
    file_name: 'SamiKempf.jpg',
    cloud_url: 'fake_art_123.com',
  },


];

const seedArt = () => Art_Piece.bulkCreate(test_data);

module.exports = seedArt;
