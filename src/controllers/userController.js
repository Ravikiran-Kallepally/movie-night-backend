// /backend/src/controllers/userController.js
const bcrypt = require('bcryptjs');
const User = require('../controllers/userController.js');

// Register a new user
async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const userId = await User.createUser({ username, email, password: hashedPassword });

    res.status(201).json({ userId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { registerUser };
