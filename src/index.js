// /backend/index.js
require('dotenv').config();
const express = require('express');
const userRoutes = require('../src/routes/user');
const bodyParser = require('body-parser');
const authRoutes = require('../src/routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/users', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
