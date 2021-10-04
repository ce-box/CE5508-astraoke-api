const Song = require('../models/song');

const insertSong = async(song) => {
    const newSong = new Song({
        name: song.name,
        artist: song.artist,
        album: song.album,
        cover: song.cover,
        url: song.url,
        lyrics: song.lyrics
    });

    await newSong.save();
    return newSong;
};


const getAll = async () => {
    const songList = await Song.find();
    return songList;
}


const getSongById = async (id) => {
    const song = await Song.findById(id);
    return song;
};


const songExists = async (name, artist) => {
    const song = await Song.findOne({
        name:`${name}`,
        artist:`${artist}`
    });
    return song;
};


const updateSong = async (id, _song) => {
    const song = Song.findByIdAndUpdate(id, _song);
    return song;
};


const deleteSong = async (id) => {
    const song = Song.findByIdAndDelete(id);
    return song;
};


module.exports = {
    insertSong,
    updateSong,
    deleteSong,
    getAll,
    getSongById,
    songExists
};
