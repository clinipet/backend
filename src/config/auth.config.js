require('dotenv').config()
const secret = process.env.JWT_SECRET;
module.exports = {
    jwtSecret: secret,
};