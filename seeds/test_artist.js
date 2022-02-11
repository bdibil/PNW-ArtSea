const { Artist } = require('../models');

const test_data = [
  {
    first_name: 'Zoe A ',
    last_name: 'McTamaney',
    username: 'ZoeM',
    email: 'antoinette.illustrations@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Kelly',
    last_name: 'Verity',
    username: 'KellyV',
    email: 'dreamrunnerwolf@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Desiree',
    last_name: 'Horton',
    username: 'DesireH',
    email: 'cofccrafts@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Danny',
    last_name: 'Mansmith',
    username: 'DannyM',
    email: 'dannymansmith@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Elaine',
    last_name: 'Corets',
    username: 'ElaineC',
    email: 'ecorets@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Violetta',
    last_name: 'Wolkoff Price',
    username: 'ViolettaWolkoffPrice',
    email: 'theelizabethbathery@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Heather',
    last_name: 'Cornelius',
    username: 'HeatherCornelius',
    email: 'heatherkcornelius@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Lilith',
    last_name: 'Erion',
    username: 'LilithE',
    email: 'dancingwolfpictures@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Rachel',
    last_name: 'Lauter',
    username: 'RachelL',
    email: 'missrachelelizabeth@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Shannon',
    last_name: 'Forseth',
    username: 'ShannonForseth',
    email: 'Shannonboxrz@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Bree',
    last_name: 'Rose',
    username: 'BreeRose',
    email: 'Breesadirarose@gmail.com',
    password: 'artsea123',
  },
  {
    first_name: 'Sami',
    last_name: 'Kempf',
    username: 'SamiKempf',
    email: 'toothandsnails@gmail.com',
    password: 'artsea123',
  },

];

const seedArtist = () => Artist.bulkCreate(test_data);

module.exports = seedArtist;
