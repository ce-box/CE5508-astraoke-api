const service = require('../services/users.services');

const getAll = (req, res) => {
    service.getAll(req, res);
};

const getById = (req, res) => {
    service.getById(req, res);
};

const signup = (req, res) => {
    service.signup(req, res);
};

const login = (req, res) => {
    service.login(req, res);
};


const updateUser = (req, res) => {
    service.updateUser(req, res);
};

const deleteUser = (req, res) => {
    service.deleteUser(req, res);
};

module.exports = {
    getAll,
    getById,
    signup,
    login,
    updateUser,
    deleteUser
};