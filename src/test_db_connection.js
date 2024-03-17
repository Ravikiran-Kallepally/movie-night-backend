// test_db_connection.js
const pool = require('./db');

// Attempt to get a connection from the pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release();
});
