const repository = require('../repositories/songs.repository');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
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

};

const updateSong = async (req, res) => {

};

const deleteSong = async (req, res) => {

};


module.exports = {
    createSong,
    updateSong,
    deleteSong,
    getAll,
    getById
};