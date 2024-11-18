const db = require('../config/database');

const Pet = {
  getAll: () => {
    return db.query('SELECT * FROM clinipet.pets');
  },
  
  getById: (id) => {
    return db.query('SELECT * FROM clinipet.pets WHERE id = ', [id]);
  },

  create: (pet) => {
    const { client_id, name, species, breed, birth_date } = pet;
    return db.query(
        'CALL clinipet.create_pet($1, $2, $3, $4, $5)',
        [client_id, name, parseInt(species), breed, birth_date]
    );
  },

  update: (id, pet) => {
    const { client_id, name, species, breed, birth_date } = pet;
    return db.query(
        'CALL clinipet.update_pet($1, $2, $3, $4, $5, $6)',
        [id, client_id, name, species, breed, birth_date]
    );
  },

  delete: (id) => {
    return db.query('CALL clinipet.delete_pet($1)', [id]);
  },

  count: (species = null) => {
    return db.query(
        'SELECT COUNT(*) FROM clinipet.pets WHERE ($1::int4 IS NULL OR species = $1)',
        [species]
    );
  },


  findByClient: (client_id) => {
    return db.query('SELECT id, name  FROM clinipet.pets WHERE client_id = $1', [client_id]);
  },

  getAllDetailed: () => {
    return db.query('SELECT * FROM clinipet.pet_details');
  },
  getDetailedById: (id) => {
    return db.query('SELECT * FROM clinipet.pet_details WHERE pet_id = $1', [id]);
  },
  getAllSpecies: () => {
    return db.query('SELECT * from clinipet.species');
  }


};

module.exports = Pet;
