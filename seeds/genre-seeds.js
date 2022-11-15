//setup the seed object for the genre page to create catagories
const { Genre } = require('../models');

const genredata = [
  {
    genre_name: 'Rock',
    img: 'rock-image.jpg'
  },
  {
    genre_name: 'Pop',
    img: 'pop-image.jpg'
  },
  {
    genre_name: 'Rap',
    img: 'rap-image.jpg'
  },
  {
    genre_name: 'Country',
    img: 'country-image.jpg'
  },
];

const seedGenre = () => Genre.bulkCreate(genredata);

module.exports = seedGenre;
