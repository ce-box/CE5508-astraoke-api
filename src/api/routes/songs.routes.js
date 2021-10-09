const express = require('express');
const passport = require('passport');

const { checkApiKey, checkRoles, passwordValidator } = require('../middlewares/auth.handler');
const SongService = require('./../services/song.service');

const router = express.Router();
const service = new SongService();

router.get('/', checkApiKey, async (req, res, next) => {
    try {
        const songs = await service.find();
        return res.status(200).json(songs).end();
    } catch(error) {
        next(error);
    }
});

router.get('/:id', checkApiKey, async (req, res, next) => {
    try {
        const { id } = req.params;
        const song = await service.findOne(id);
        res.json(song);
    } catch(error) {
        next(error);
    } 
});

router.post('/', 
    checkApiKey,
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    async (req, res, next) => {
        try{
            const song = req.body;
    
            // Check if song already exists
            if(await service.findByMetadata(song.name, song.artist)) {
                console.log(`🟠 Song "${song.name}" of the artist "${song.artist}" has already been registered in the system`);
                return res.status(403).send('Song already exists').end();
            }
    
            // Create new song
            console.log(`🟢 Creating new song: ${song.name}`);
            let newSong = await service.create(song);
            res.status(201).json(newSong);
            
        } catch(error) {
            next(error);
        } 
    }
);

router.patch('/:id', 
    checkApiKey,
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    async (req, res, next) => {
        try{
            const { id } = req.params;
            const body = req.body;
            let song = await service.findOne(id);
    
            if(song) {
                
                song = {
                    name: body.name || song.name,
                    artist: body.artist || song.artist,
                    album: body.album || song.album,
                    cover: body.cover || song.cover,
                    url: body.url || song.url,
                    lyrics: body.lyrics || song.lyrics
                };
    
                service.update(id, song);
                res.json(song);
            }
            
        } catch(error) {
            next(error);
        }
    }
);

router.delete('/:id',
    checkApiKey,
    passport.authenticate('jwt', {session: false}),
    checkRoles('admin','premium-user'),
    async (req, res, next) => {
        try{
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({id})
            
        } catch(error) {
            next(error);
        }
    }
);

module.exports = router;
