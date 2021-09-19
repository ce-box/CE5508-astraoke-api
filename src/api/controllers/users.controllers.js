const service = require('../services/users.services');

const getAll = (req, res) => {

};

const getById = (req, res) => {
    
};

const signup = (req, res) => {
    service.signup(req, res);
};

const login = (req, res) => {
    service.login(req, res);
};


const updateUser = (req, res) => {

};

const deleteUser = (req, res) => {

};

module.exports = {
    getAll,
    getById,
    signup,
    login,
    updateUser,
    deleteUser
};