//setup post route to create new inventory cards
const router = require('express').Router();
const { Albums } = require('../../models');

router.get('/', async (req, res) => {
    try{
      const albumData = await Albums.findAll();
      res.status(200).json(albumData);
    }catch(err){
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try{
      const albumData = await Albums.findByPk(req.params.id);
      res.status(200).json(albumData);
    }catch(err){
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const albumData = await Albums.create(req.body)
        res.status(200).json(albumData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;