const bcrypt = require('bcryptjs');
const db = require('../config/database');

const User = {
    create: async (userData) => {
        const { username, email, password } = userData;

        if (!username || !email || !password) {
            throw new Error('Missing required fields');
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const query = `
                      INSERT INTO clinipet.users (username, email, password)
                      VALUES ($1, $2, $3)
                      RETURNING id, username, 
                    `;

        try {
            const result = await db.query(query, [username, email, hashedPassword]);
            return result.rows[0];
        } catch (error) {
            if (error.constraint === 'users_username_key') {
                throw new Error('Username already exists');
            }
            if (error.constraint === 'users_email_key') {
                throw new Error('Email already exists');
            }
            throw error;
        }
    },

    findByUsername: async (username) => {
        const query = 'SELECT * FROM clinipet.users WHERE username = $1';
        const result = await db.query(query, [username]);
        return result.rows[0];
    },

    findById: async (id) => {
        const query = 'SELECT * FROM clinipet.users WHERE id = $1';
        const result = await db.query(query, [id]);
        return result.rows[0];
    },

    findByEmail: async (email) => {
        const query = 'SELECT * FROM clinipet.users WHERE email = $1';
        const result = await db.query(query, [email]);
        return result.rows[0];
    },

    isValidPassword: async (user, password) => {
        return await bcrypt.compare(password, user.password);
    },

    getUserProfiles: async (userId) => {
        const query = `
            SELECT p.name
            FROM clinipet.profiles p
            JOIN clinipet.user_profiles up ON p.id = up.profile_id
            WHERE up.user_id = $1
        `;
        const result = await db.query(query, [userId]);
        return result.rows.map(row => row.name);
    },

    update: async (id, userData) => {
        const { username, email } = userData;
        const query = `
      UPDATE users
      SET username = $1, email = $2
      WHERE id = $3
      RETURNING id, username, email
    `;
        const result = await db.query(query, [username, email, id]);
        return result.rows[0];
    },

    delete: async (id) => {
        const query = 'DELETE FROM users WHERE id = $1';
        await db.query(query, [id]);
    }
};

module.exports = User;