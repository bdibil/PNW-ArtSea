const { Art_Piece } = require('../models');

const test_data = [
  {
    //can we change title to category?
    title: 'testTitle',
    //artist_name changed to company_name
    artist_name: 'Antoinette Illustrations',
    file_name: 'ZoeMcTamaney.jpg',
    cloud_url: '/images/ZoeMcTamaney.jpg',
    upload_timestamp: 1,
    like_count: 5,

  },
  {
    title: 'Illustration',
    artist_name: 'Art of Kelly Dean Verity',
    file_name: 'KellyDeanVerity.jpg',
    cloud_url: '/images/KellyDeanVerity.jpg',
    upload_timestamp: 2,
    like_count: 4,
  },
  {
    title: 'Apothecary',
    artist_name: 'Co-op of Creation',
    file_name: 'CoOpCreations.jpeg',
    cloud_url: '/images/CoOpCreations.jpeg',
    upload_timestamp: 3,
    like_count: 8,
  },
  {
    title: 'Fiber Arts',
    artist_name: 'Danny  Mansmith',
    file_name: 'DannyMansmith.jpeg',
    cloud_url: '/images/DannyMansmith.jpeg',
    upload_timestamp: 4,
    like_count: 1,
  },
  {
    title: 'Fiber Arts',
    artist_name: 'Elaine Corets Fiber Artist',
    file_name: 'ElaineCorets.jpeg',
    cloud_url: '/images/ElaineCorets.jpeg',
    upload_timestamp: 5,
    like_count: 3,
  },
  {
    title: 'Apothecary',
    artist_name: 'Elizabeth Bathery',
    file_name: 'ViWPrice.jpg',
    cloud_url: '/images/ViWPrice.jpg',
    upload_timestamp: 6,
    like_count: 2,
  },
  {
    title: 'Ceramics',
    artist_name: 'Heather Cornelius Ceramics',
    file_name: 'HeatherCornelius.jpg',
    cloud_url: '/images/HeatherCornelius.jpg',
    upload_timestamp: 7,
    like_count: 7,
  },
  {
    title: 'Home Decor',
    artist_name: 'Lady Noire ',
    file_name: 'LilithMErion.jpg',
    cloud_url: '/images/LilithMErion.jpg',
    upload_timestamp: 8,
    like_count: 10,
  },
  {
    title: 'Home Decor',
    artist_name: 'Moons and Artistry',
    file_name: 'RachelSanders.jpeg',
    cloud_url: '/images/RachelSanders.jpeg',
    upload_timestamp: 9,
    like_count: 6,
  },
  {
    title: 'Home Decor',
    artist_name: 'SkeleLights ',
    file_name: 'ShannonBoxrz.jpg',
    cloud_url: '/images/ShannonBoxrz.jpg',
    upload_timestamp: 10,
    like_count: 12,
  },
  {
    title: 'Apothecary',
    artist_name: 'Stone Circles LLC',
    file_name: 'BreeRose.jpg',
    cloud_url: '/images/BreeRose.jpg',
    upload_timestamp: 11,
    like_count: 2,
  },
  {
    title: 'Jewelry',
    artist_name: 'Tooth and Snail Studio',
    file_name: 'SamiKempf.jpg',
    cloud_url: '/images/SamiKempf.jpg',
    upload_timestamp: 12,
    like_count: 4,
  },


];

const seedArt = () => Art_Piece.bulkCreate(test_data);

module.exports = seedArt;
