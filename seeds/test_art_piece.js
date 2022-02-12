const { Art_Piece } = require('../models');

const test_data = [
  {
    //can we change title to category?
    title: '',
    //artist_name changed to company_name
    artist_name: 'Antoinette Illustrations',
    file_name: '01-ZoeMcTamaney.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Illustration',
    artist_name: 'Art of Kelly Dean Verity',
    file_name: '02-KellyDeanVerity.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    artist_name: 'Co-op of Creation',
    file_name: '03-CoOpCreations.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Fiber Arts',
    artist_name: 'Danny  Mansmith',
    file_name: '04-DannyMansmith.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Fiber Arts',
    artist_name: 'Elaine Corets Fiber Artist',
    file_name: '05-ElaineCorets.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    artist_name: 'Elizabeth Bathery',
    file_name: '06-ViWPrice.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Ceramics',
    artist_name: 'Heather Cornelius Ceramics',
    file_name: '07-HeatherCornelius.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    artist_name: 'Lady Noire ',
    file_name: '08-LilithMErion.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    artist_name: 'Moons and Artistry',
    file_name: '09-RachelSanders.jpeg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Home Decor',
    artist_name: 'SkeleLights ',
    file_name: '10-ShannonBoxrz.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Apothecary',
    artist_name: 'Stone Circles LLC',
    file_name: '11-BreeRose.jpg',
    cloud_url: 'fake_art_123.com',
  },
  {
    title: 'Jewelry',
    artist_name: 'Tooth and Snail Studio',
    file_name: '12-SamiKempf.jpg',
    cloud_url: 'fake_art_123.com',
  },


];

const seedArt = () => Art_Piece.bulkCreate(test_data);

module.exports = seedArt;
