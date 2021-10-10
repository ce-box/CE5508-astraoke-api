const { Strategy } = require('passport-local');
const UserService = require('../../../api/services/user.service');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
    }, 
    async (email, password, done) => {
        try {
            let user = await service.findByEmail(email);
            if (!user) {
                done(boom.unauthorized(), false);
            }
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                done(boom.unauthorized(), false);
            }
            user = user.toObject();
            delete user.password;
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
);

module.exports = LocalStrategy;