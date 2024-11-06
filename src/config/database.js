const { Pool } = require('pg');
require('dotenv').config()
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbTable = process.env.DB_TABLE;

const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbTable,
  password: dbPass,
  port: dbPort,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
