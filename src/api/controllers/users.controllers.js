const service = require('../services/users.services');

const getAll = (req, res) => {

};

const getById = (req, res) => {
    
};

const createUser = (req, res) => {
    service.insertUser(req, res);
};


const updateUser = (req, res) => {

};

const deleteUser = (req, res) => {

};

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser
};