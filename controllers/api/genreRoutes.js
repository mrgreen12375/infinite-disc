const router = require('express').Router();
const { Genre, Album } = require('../../models');

router.get('/', async (req, res) => {
    try{
      const genreData = await Genre.findAll({
        include: [{model: Album}]
      });
      res.status(200).json(genreData);
    }catch(err){
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try{
      const genreData = await Genre.findByPk(req.params.id, {
        include: [{model: Album}]
      });
      if(genreData){
        res.status(200).json(genreData);
        return;
      }
      res.status(404).json('Genre Error')
  
    }catch(err){
      res.status(500).json(err);
    }
  });

  module.exports = router;
