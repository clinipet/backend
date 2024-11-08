const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered successfully', userId: user.id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await User.isValidPassword(user, password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // const userProfiles = await User.getUserProfiles(user.id);

        const token = jwt.sign(
            {
                id: user.id
            },
            config.jwtSecret,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};