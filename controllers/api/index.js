const router = require('express').Router();
const userRoutes = require('./userRoutes');
const genreRoutes = require('./genreRoutes');
const albumRoutes = require('./albumRoutes');

router.use('/users', userRoutes);
router.use('/genre', genreRoutes);
router.use('/album', albumRoutes);

module.exports = router;
