//setup functions that will seed the genre and album objects
const sequelize = require('../config/connection');
const seedGenre = require('./genre-seeds');
const seedAlbums = require('./albums-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenre();

  await seedAlbums();

  process.exit(0);
};

seedAll();
