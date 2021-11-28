const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const User = require('../models/user.model');

class UserService {

    constructor() {}
    
    async findByEmail(email) {
        let user = await User.findOne({'email':`${email}`});
        return user;
    }
}

module.exports = UserService;