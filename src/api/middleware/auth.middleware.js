const regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;

const passwordValidator = (req, res, next) => {
    const pass = req.body.pass;
    
    if(!regex.test(pass)) {
        console.log(`🔴 Password does not comply with the required rules`);
        return res.status(412).end();
    }

    next();
};

module.exports = { passwordValidator };