const router = require('express').Router();
const { Albums, User, Genre } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/genre');
    return;
  }

  res.render('login');
});

router.get('/genre', withAuth, async (req, res) => {
  try {
    console.log('here 1')
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
    });
    console.log(userData)
    console.log('here 2')

    const user = userData.get({ plain: true });
    console.log(user)
    console.log('here 3')
    res.render('genre', {
      ...user,
      logged_in: true
    });
    console.log('here 4')
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/genre/:genre_id/albums', async (req, res) => {
  try {
    console.log('here 1')
    const albumData = await Albums.findAll({
      where: { genre_id: req.params.genre_id}
    });

    const album = albumData.map((album) => album.get({ plain: true }));
    console.log(album)
    res.render('albums', { 
      album, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});