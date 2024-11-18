const db = require('../config/database');

const Veterinarian = {
    obterTodos: () => {
        return db.query(`
            SELECT id, name, email, phone, license_number, 
                   specialization, created_at, updated_at 
            FROM clinipet.veterinarians
        `);
    },

    obterPorId: (id) => {
        return db.query(
            'SELECT * FROM clinipet.veterinarians WHERE id = $1',
            [id]
        );
    },

    criar: (veterinario) => {
        const {
            name,
            email,
            password_hash,
            phone,
            license_number,
            specialization
        } = veterinario;

        return db.query(
            `INSERT INTO clinipet.veterinarians 
            (name, email, password_hash, phone, license_number, specialization) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING id, name, email, phone, license_number, specialization`,
            [name, email, password_hash, phone, license_number, specialization]
        );
    },

    atualizar: (id, veterinario) => {
        const {
            name,
            email,
            phone,
            license_number,
            specialization
        } = veterinario;

        return db.query(
            `UPDATE clinipet.veterinarians 
            SET name = $1, email = $2, phone = $3, 
                license_number = $4, specialization = $5,
                updated_at = CURRENT_TIMESTAMP 
            WHERE id = $6 
            RETURNING id, name, email, phone, license_number, specialization`,
            [name, email, phone, license_number, specialization, id]
        );
    },

    excluir: (id) => {
        return db.query('DELETE FROM clinipet.veterinarians WHERE id = $1', [id]);
    },

    contar: () => {
        return db.query('SELECT COUNT(*) FROM clinipet.veterinarians');
    }
};

module.exports = Veterinarian;