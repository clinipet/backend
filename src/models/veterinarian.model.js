const db = require('../config/database');

const Veterinarian = {
  getAll: () => {
    return db.query('SELECT * FROM clinipet.veterinarians');
  },
  
  getById: (id) => {
    return db.query('SELECT * FROM clinipet.veterinarians WHERE id = $1', [id]);
  },
  
  create: (veterinarian) => {
    const { name, specialty, crmv, contact, status } = veterinarian;
    return db.query(
      'INSERT INTO clinipet.veterinarians (name, specialty, crmv, contact, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, specialty, crmv, contact, status]
    );
  },
  
  update: (id, veterinarian) => {
    const { name, specialty, crmv, contact, status } = veterinarian;
    return db.query(
      'UPDATE clinipet.veterinarians SET name = $1, specialty = $2, crmv = $3, contact = $4, status = $5 WHERE id = $6 RETURNING *',
      [name, specialty, crmv, contact, status, id]
    );
  },
  
  delete: (id) => {
    return db.query('DELETE FROM clinipet.veterinarians WHERE id = $1', [id]);
  },

  count: () => {
    return db.query('SELECT COUNT(*) FROM clinipet.veterinarians');
  },

  getConsultationsToday: () => {
    return db.query(`
      SELECT COUNT(*) 
      FROM clinipet.consultations 
      WHERE DATE(date) = CURRENT_DATE
    `);
  },

  getAverageRating: () => {
    return db.query('SELECT AVG(rating) FROM clinipet.veterinarians');
  }
};

module.exports = Veterinarian;