const router = require('express').Router();
const { Album, User } = require('../models');
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
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('genre', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const genretData = await Genre.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const genres = genretData.map((genre) => genre.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('genre', { 
      genres, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/album', async (req, res) => {
  try {
    const albumData = await Album.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const album = albumData.map((album) => album.get({ plain: true }));

    res.render('album', { 
      album, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/album/:id', async (req, res) => {
  try {
    const albumData = await Album.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const album = albumData.get({ plain: true });

    res.render('album', {
      ...album,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
