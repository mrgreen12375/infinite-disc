const router = require('express').Router();
const { Album, Genre } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const albumtData = await Album.findAll({
            include: [
            {model: Genre},
            ]
        });
        res.status(200).json(albumtData);
    }catch(err){
    res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const albumtData =  await Album.findByPk(req.params.id, {
            include: [
            {model: Genre},
            ]
        });
        if(albumtData){
            res.status(200).json(albumtData);
            return;
        }
        res.status(404).json('Album Error')

    }catch(err){
    res.status(500).json(err)
    }
});

module.exports = router;