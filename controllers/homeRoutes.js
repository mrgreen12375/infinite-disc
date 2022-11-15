//setup route to login page
//setup route to genre page with auth needed
//setup route to the albums page with auth needed
//setup the data information needed for each page
const router = require('express').Router();
const { Albums, User, Genre } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/genre');
    return;
  }

  res.render('login');
});

router.get('/genre', withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });

    const user = userData.get({ plain: true });

    const genreData = await Genre.findAll()

    const genre = genreData.map((genre) => genre.get({ plain: true }));

    res.render('genre', {
      ...user,
      genre,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/genre/:genre_id/albums', withAuth, async (req, res) => {
  try {
    const albumData = await Albums.findAll({
      where: { genre_id: req.params.genre_id}
    });

    const album = albumData.map((album) => album.get({ plain: true }));

    const genre = await Genre.findOne({
      where: { id: req.params.genre_id }
    })

    const inventory = {
      genre: genre.genre_name,
      album
    }

    res.render('albums', { 
      inventory, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;