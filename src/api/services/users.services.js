const repository = require('../repositories/users.repository');

const insertUser = async (req, res) => {

    user = {
        username: req.body.username,
        pass: req.body.pass,
        premium: req.body.premium
    };

    try {
        // Check for an existing user

        // Create new user
        console.log(`🟢 Creating new user: ${user}`);
        const newUser = await repository.insertUser(user);
        return res.status(200).json(newUser).end();
        
    } catch(err) {
        return res.status(500).send(err.message).end();
    }   
    
}

module.exports = {
    insertUser
};