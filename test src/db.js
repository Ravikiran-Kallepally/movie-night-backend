// /backend/src/db.js
const mysql = require('mysql');

// Create a MySQL pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: '',
  password: '',
  database: 'movie_night_app'
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release();
});

module.exports = pool;
