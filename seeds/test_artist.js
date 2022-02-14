const {  User } = require('../models');

const test_data = [
  {
    first_name: 'Zoe A ',
    last_name: 'McTamaney',
    username: 'ZoeM',
    email: 'antoinette.illustrations@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'1',
    is_valid: true
  },
  {
    first_name: 'Kelly',
    last_name: 'Verity',
    username: 'KellyV',
    email: 'dreamrunnerwolf@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'2',
    is_valid: true
  },
  {
    first_name: 'Desiree',
    last_name: 'Horton',
    username: 'DesireH',
    email: 'cofccrafts@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'3',
    is_valid: true
  },
  {
    first_name: 'Danny',
    last_name: 'Mansmith',
    username: 'DannyM',
    email: 'dannymansmith@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'4',
    is_valid: true
  },
  {
    first_name: 'Elaine',
    last_name: 'Corets',
    username: 'ElaineC',
    email: 'ecorets@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'5',
    is_valid: true
  },
  {
    first_name: 'Violetta',
    last_name: 'Wolkoff Price',
    username: 'ViolettaWolkoffPrice',
    email: 'theelizabethbathery@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'6',
    is_valid: true
  },
  {
    first_name: 'Heather',
    last_name: 'Cornelius',
    username: 'HeatherCornelius',
    email: 'heatherkcornelius@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'7',
    is_valid: true
  },
  {
    first_name: 'Lilith',
    last_name: 'Erion',
    username: 'LilithE',
    email: 'dancingwolfpictures@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'8',
    is_valid: true
  },
  {
    first_name: 'Rachel',
    last_name: 'Lauter',
    username: 'RachelL',
    email: 'missrachelelizabeth@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'9',
    is_valid: true
  },
  {
    first_name: 'Shannon',
    last_name: 'Forseth',
    username: 'ShannonForseth',
    email: 'Shannonboxrz@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'10',
    is_valid: true
  },
  {
    first_name: 'Bree',
    last_name: 'Rose',
    username: 'BreeRose',
    email: 'Breesadirarose@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'11',
    is_valid: true
  },
  {
    first_name: 'Sami',
    last_name: 'Kempf',
    username: 'SamiKempf',
    email: 'toothandsnails@gmail.com',
    password: 'artsea123',
    is_artist: 'Artist',
    unique_string:'12',
    is_valid: true
  },
  {
    first_name: 'Art',
    last_name: 'Lover',
    username: 'AL1',
    email: 'art@love.com',
    password: 'pass321',
    is_artist: 'User',
    unique_string:'13',
    is_valid: true
},
{
  first_name: 'Joe',
  last_name: 'Joe',
  username: 'joejoe',
  email: 'joe@joe.com',
  password: 'pass123',
  is_artist: 'User',
  unique_string:'14',
  is_valid: true
},
  {
    first_name: 'p',
    last_name: 's',
    username: 'ps',
    email: 'ps@g.com',
    password: '$2b$10$JHZBakpjr.jfNpmTHYQbYOKbJjT0fSRx/B/qjZpAjtcv..HMh2Va2',
    is_artist: 'User',
    unique_string:'84386487',
    is_valid: true
  },
  {
    first_name: 'o',
    last_name: 'd',
    username: 'od',
    email: 'od@g.com',
    password: '$2b$10$7SiygQffKvvUrCHvIJKOZ.59q36BOXaqXIDyrn.ugwZ0buVbeMRiu',
    is_artist: 'Artist',
    unique_string:'32534192',
    is_valid: true
  }

];

const seedUser = () => User.bulkCreate(test_data);

module.exports = seedUser;