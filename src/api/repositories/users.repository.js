const mongoose = require('mongoose');
const User = require('../models/user');

const insertUser = async (user) => {
    const {
        username,
        pass,
        premium
    } = user;

    const newUser = new User({
        username: username,
        pass: pass,
        premium: premium
    });

    await newUser.save();
    return newUser;
}

module.exports = {
    insertUser
};