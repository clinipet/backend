const Appointment = require('../models/appointment.model');

exports.getUpcoming = async (req, res) => {
    try {
        const result = await Appointment.dashboardView();
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.countTotal = async (req, res) => {
    try {
        const date = req.query.date;
        const result = await Appointment.count(date);
        res.json({ count: result.rows[0].count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Appointment.getById(id);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getByIdHome = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Appointment.getByIdHome(id);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.cancelAppointment = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Appointment.cancel(id);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}