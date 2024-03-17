// /backend/src/models/User.js
const pool = require('../db');

// User model
class User {
  static createUser({ username, email, password }) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO Users (username, email, password_hash) VALUES (?, ?, ?)';
      pool.query(query, [username, email, password], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }
}

module.exports = User;
