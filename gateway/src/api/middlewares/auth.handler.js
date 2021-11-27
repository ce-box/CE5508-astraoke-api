const boom = require('@hapi/boom');
const { config } = require("../../config");

const regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

const passwordValidator = (req, res, next) => {
    const pass = req.body.pass;
    
    if(!regex.test(pass)) {
        console.log(`🔴 Password does not comply with the required rules`);
        next(boom.expectationFailed());
    }

    next();
};

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api'];
    if(apiKey === config.apiKey) {
        next();
    } else {
        next(boom.unauthorized());
    }
};

const checkRoles = (...roles) => {
    return (req, res, next) => {
        const role = req.user.role;
        if(roles.includes(role)) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
};

module.exports = { 
    passwordValidator,
    checkApiKey,
    checkRoles
};
