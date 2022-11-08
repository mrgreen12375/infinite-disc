const { Genre } = require('../models');

const genredata = [
  {
    name: 'Rock',
  },
  {
    name: 'Pop',
  },
  {
    name: 'Rap',
  },
  {
    name: 'Country',
  },
];

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;
