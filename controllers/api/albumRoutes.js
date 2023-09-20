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

router.put('/:id', async (req, res) => {
    // delete on tag by its `id` value
    try{
      const deleteTag = await Albums.findOne({
        where:{
          id: req.params.id
        }
      })
      if(deleteTag){
        await deleteTag.update(req.body);
        res.status(200).json(deleteTag);
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
      const deleteTag = await Albums.findOne({
        where:{
          id: req.params.id
        }
      })
      if(deleteTag){
        await deleteTag.destroy();
        res.status(200).json(deleteTag);
        return;
      }
      res.status(404).json('DELETE Album error')
    }catch(err){
      res.status(500).json(err)
    }
  });

module.exports = router;