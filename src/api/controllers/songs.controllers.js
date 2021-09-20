const service = require('../services/songs.services');

const getAll = (req, res) => {
    service.getAll(req, res);
};

const getById = (req, res) => {
    service.getById(req, res);
};

const createSong = (req, res) => {
    service.createSong(req, res);
};

const updateSong = (req, res) => {
    service.updateSong(req, res);
};

const deleteSong = (req, res) => {
    service.deleteSong(req, res);
};


module.exports = {
    createSong,
    updateSong,
    deleteSong,
    getAll,
    getById
};
