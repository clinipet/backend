const Veterinarian = require('../models/veterinarian.model');

exports.totalVeterinarians = async(req, res) => {
    try {
        const result = await Veterinarian.count();
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}