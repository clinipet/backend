const db = require('../config/database');

const Appointment = {

    getAll: () => {
        return db.query('SELECT * FROM clinipet.appointments');
    },

    getById: (id) => {
        return db.query('SELECT * FROM clinipet.appointments WHERE id = $1', [id]);
    },

    getByIdHome: (id) => {
        return db.query('SELECT * FROM clinipet.appointments_home WHERE id = $1', [id]);
    },

    create: (appointment) => {
        const { client_id, pet_id, date, time, status } = appointment;
        return db.query(
            'INSERT INTO clinipet.appointments (client_id, pet_id, date, time, status) VALUES (, , , , ) RETURNING *',
            [client_id, pet_id, date, time, status]
        );
    },

    update: (id, appointment) => {
        const { pet_id, date, notes } = appointment;
        return db.query('UPDATE clinipet.appointments SET pet_id = $1, appointment_date = $2, notes = $3 WHERE id = $4 RETURNING *',
            [pet_id, date, notes, id]);
    },

    delete: (id) => {
        return db.query('DELETE FROM clinipet.appointments WHERE id = $1', [id]);
    },

    count: (date = null) => {
        return db.query(
            'SELECT COUNT(*) FROM clinipet.appointments WHERE ($1::date IS NULL OR appointment_date::date = $1::date)',
            [date]
        );
    },

    cancel: (id) => {
        return db.query('UPDATE clinipet.appointments SET status = 2 WHERE id = $1', [id]);
    },

    dashboardView: () => {
        return db.query('SELECT * FROM clinipet.daily_appointments');
    },

    getAllDetailed: () => {
        return db.query('SELECT * FROM clinipet.appointments_details');
    },
    countWeek: () => {
        return db.query('SELECT weekly_appointment_count as count FROM clinipet.count_weekly_appointments');
    }

};

module.exports = Appointment;