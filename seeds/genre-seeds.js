const { Genre } = require('../models');

const genredata = [
  {
    genre_name: 'Rock',
  },
  {
    genre_name: 'Pop',
  },
  {
    genre_name: 'Rap',
  },
  {
    genre_name: 'Country',
  },
];

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;
