const repository = require('../repositories/songs.repository');


const getAll = async (req, res) => {
    try {
        const songs = await repository.getAll();
        console.log('🟢 Request for the entire song catalog');
        return res.status(200).json(songs).end();

    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const song = await repository.getSongById(id);

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


const createSong = async (req, res) => {
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
        if(await repository.songExists(song.name, song.artist)) {
            console.log(`🟠 Song "${song.name}" of the artist "${song.artist}" has already been registered in the system`);
            return res.status(403).send('Song already exists').end();
        }

        // Create new song
        console.log(`🟢 Creating new song: ${song.name}`);
        let newSong = await repository.insertSong(song);
        return res.status(201).json(newSong).end();

        
    } catch(err) {
        console.log(`🔴 Internal Server Error`);
        return res.status(500).send(err.message).end();
    } 
};


const updateSong = async (req, res) => {
    try {
        const id = req.params.id;
        let song = await repository.getSongById(id);

        if(song) {
            
            song = {
                name: req.body.name || song.name,
                artist: req.body.artist || song.artist,
                album: req.body.album || song.album,
                cover: req.body.cover || song.cover,
                url: req.body.url || song.url,
                lyrics: req.body.lyrics || song.lyrics
            };

            repository.updateSong(id, song);
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


const deleteSong = async (req, res) => {
    try {
        const id = req.params.id;
        let song = await repository.getSongById(id);

        if(song) {
            repository.deleteSong(id);
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
    createSong,
    updateSong,
    deleteSong,
    getAll,
    getById
};