const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'clinipet',
  password: 'your_password',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
