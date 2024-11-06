const db = require('../config/database');

const Pet = {
  getAll: () => {
    return db.query('SELECT * FROM clinipet.pets');
  },
  
  getById: (id) => {
    return db.query('SELECT * FROM clinipet.pets WHERE id = ', [id]);
  },
  
  create: (pet) => {
    const { client_id, name, species, breed, birth_date, weight, gender } = pet;
    return db.query(
      'INSERT INTO clinipet.pets (client_id, name, species, breed, birth_date, weight, gender) VALUES (, , , , , , ) RETURNING *',
      [client_id, name, species, breed, birth_date, weight, gender]
    );
  },
  
  update: (id, pet) => {
    const { name, species, breed, birth_date, weight, gender } = pet;
    return db.query(
      'UPDATE clinipet.pets SET name = , species = , breed = , birth_date = , weight = , gender =  WHERE id =  RETURNING *',
      [name, species, breed, birth_date, weight, gender, id]
    );
  },
  
  delete: (id) => {
    return db.query('DELETE FROM clinipet.pets WHERE id = ', [id]);
  }
};

module.exports = Pet;
