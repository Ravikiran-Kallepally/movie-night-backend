// /backend/src/models/User.js
const pool = require("../db");

// User model
class User {
  static createUser({ username, email, password }) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO Users (username, email, password_hash) VALUES (?, ?, ?)";
      pool.query(query, [username, email, password], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  static findOne(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Users WHERE email = ?';
      pool.query(query, email, (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0) {
            resolve(results[0]); // Return the first user found
          } else {
            resolve(null); // No user found
          }
        }
      });
    });
  }

}

module.exports = User;
