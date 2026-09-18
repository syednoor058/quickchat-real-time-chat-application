const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    try{
        // Search if the user already exists
        const user = await User.findOne({email: req.body.email});

        // If user exists, return an error
        if(user){
            return res.status(400).send({
                message: 'User already exists', 
                success: false
            });
        }

        // Encrypt the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        // Create and save a new user
        const newUser = new User(req.body);
        await newUser.save();

        res.send({
            message: 'User created successfully', 
            success: true
        });

    } catch (error) {
        console.log(error.message);
        res.send({
            message: 'Error occurred while signing up', 
            error: error.message, 
            success: false
        });
    }
})

module.exports = router;