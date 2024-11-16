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
        const { client_id, pet_id, date, time, status } = appointment;
        return db.query(
            'UPDATE clinipet.appointments SET client_id = , pet_id = , date = , time = , status =  WHERE id =  RETURNING *',
            [client_id, pet_id, date, time, status, id]
        );
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
        return db.query('UPDATE clinipet.appointments SET status = "Cancelado" WHERE id = $1', [id]);
    },

    dashboardView: () => {
        return db.query('SELECT * FROM clinipet.daily_appointments');
    }

};

module.exports = Appointment;