const songsRepository = require('../services/song.service');


const getAll = async (req, res) => {
     
};


const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const song = await songsRepository.getById(id);

        if(song) {
            console.log(`🟢 Song found`);
            return res.status(200).json(song).end();
        } 
        console.log(`🟠 Song not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const create = async (req, res) => {
    try{
        const song = {
            name: req.body.name,
            artist: req.body.artist,
            album: req.body.album,
            cover: req.body.cover,
            url: req.body.url,
            lyrics: req.body.lyrics
        };

        // Check if song already exists
        if(await songsRepository.getBySignature(song.name, song.artist)) {
            console.log(`🟠 Song "${song.name}" of the artist "${song.artist}" has already been registered in the system`);
            return res.status(403).send('Song already exists').end();
        }

        // Create new song
        console.log(`🟢 Creating new song: ${song.name}`);
        let newSong = await songsRepository.create(song);
        return res.status(201).json(newSong).end();

        
    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const update = async (req, res) => {
    try {
        const id = req.params.id;
        let song = await songsRepository.getById(id);

        if(song) {
            
            song = {
                name: req.body.name || song.name,
                artist: req.body.artist || song.artist,
                album: req.body.album || song.album,
                cover: req.body.cover || song.cover,
                url: req.body.url || song.url,
                lyrics: req.body.lyrics || song.lyrics
            };

            songsRepository.update(id, song);
            console.log(`🟢 Song updated`);
            return res.status(200).json(song).end();
        } 
        console.log(`🟠 Song not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const remove = async (req, res) => {
    try {
        const id = req.params.id;
        let song = await songsRepository.getById(id);

        if(song) {
            songsRepository.remove(id);
            console.log(`🟢 Song removed from DB`);
            return res.status(200).json(song).end();
        } 
        console.log(`🟠 Song not found`);
        return res.status(404).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


module.exports = {
    create,
    update,
    remove,
    getAll,
    getById
};