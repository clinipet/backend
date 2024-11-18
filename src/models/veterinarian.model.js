const db = require('../config/database');

const Veterinarian = {
    count : () => {
        return db.query('SELECT COUNT(*) FROM clinipet.veterinarians');
    }
}

module.exports = Veterinarian;