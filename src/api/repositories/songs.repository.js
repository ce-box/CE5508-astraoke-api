const Song = require('../models/song');

/**
 * 
 * @param {*} song 
 * @returns 
 */
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


/**
 * 
 * @returns 
 */
const getAll = async () => {
    const songList = await Song.find();
    return songList;
}


/**
 * 
 * @param {*} id 
 * @returns 
 */
const getSongById = async (id) => {
    const song = await Song.findById(id);
    return song;
};


/**
 * 
 * @param {*} id 
 * @param {*} _song 
 * @returns 
 */
const updateSong = async (id, _song) => {
    const song = Song.findByIdAndUpdate(id, _song);
    return song;
};


/**
 * 
 * @param {*} id 
 * @returns 
 */
const deleteSong = async (id) => {
    const song = Song.findByIdAndDelete(id);
    return song;
};


module.exports = {
    insertSong,
    updateSong,
    deleteSong,
    getAll,
    getSongById
};
