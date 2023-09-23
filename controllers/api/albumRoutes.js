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
        const albumData = await Albums.create(req.body)
        res.status(200).json(albumData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try{
      const updateAlbum = await Albums.findOne({
        where:{
          id: req.params.id
        }
      })
      if(updateAlbum){
        await updateAlbum.update(req.body);
        res.status(200).json(updateAlbum);
        return;
      }
      res.status(404).json('DELETE Album error')
    }catch(err){
      res.status(500).json(err)
    }
  });
  
  router.delete('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try{
      const deleteAlbum = await Albums.findOne({
        where:{
          id: req.params.id
        }
      })
      if(deleteAlbum){
        await deleteAlbum.destroy();
        res.status(200).json(deleteAlbum);
        return;
      }
      res.status(404).json('DELETE Album error')
    }catch(err){
      res.status(500).json(err)
    }
  });

module.exports = router;