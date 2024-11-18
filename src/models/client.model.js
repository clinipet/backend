const db = require('../config/database');

const Client = {
    count : () => {
        return db.query('SELECT COUNT(*) FROM clinipet.clients');
    },
    getAllDetailed : () => {
        return db.query('SELECT * FROM clinipet.client_details');
    },
    getSimple: () => {
        return db.query('SELECT id, name FROM clinipet.clients');
    }

};

module.exports = Client;