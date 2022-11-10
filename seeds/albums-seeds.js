const { Albums } = require('../models');

const albumdata = [
  {
    album_name: 'The Wall',
    artist_name: 'Pink Floyd',
    price: 25.00,
    stock: 18,
    genre_id: 1,
  },
  {
    album_name: 'Get a Grip',
    artist_name: 'Aerosmith',
    price: 20.00,
    stock: 15,
    genre_id: 1,
  },
  {
    album_name: 'Queen II',
    artist_name: 'Queen',
    price: 30.00,
    stock: 9,
    genre_id: 1,
  },
  {
    album_name: 'Thriller',
    artist_name: 'Michael Jackson',
    price: 25.00,
    stock: 6,
    gallery_id: 2,
  },
  {
    album_name: 'The Greatest Hits 1971-1975',
    artist_name: 'The Eagles',
    price: 20.00,
    stock: 8,
    gallery_id: 2,
  },
  {
    album_name: 'Gold: Greatest Hits',
    artist_name: 'ABBA',
    price: 30.00,
    stock: 10,
    gallery_id: 2,
  },
  {
    album_name: 'The Eminem Show',
    artist_name: 'Eminem',
    price: 25.00,
    stock: 8,
    gallery_id: 3,
  },
  {
    album_name: 'All Eyez on Me',
    artist_name: '2Pac',
    price: 23.00,
    stock: 4,
    gallery_id: 3,
  },
  {
    album_name: 'Life After Death',
    artist_name: 'The Notorious BIG',
    price: 50.00,
    stock: 2,
    gallery_id: 3,
  },
  {
    album_name: 'The Gambler',
    artist_name: 'Kenny Rogers',
    price: 28.00,
    stock: 11,
    gallery_id: 4,
  },
  {
    album_name: 'Always and Forever',
    artist_name: 'Randy Travis',
    price: 19.00,
    stock: 21,
    gallery_id: 4,
  },
  {
    album_name: 'No Fences',
    artist_name: 'Garth Brooks',
    price: 68.00,
    stock: 3,
    gallery_id: 4,
  },
];

const seedAlbums = () => Albums.bulkCreate(albumdata);

module.exports = seedAlbums;
