// routes/protectedRoutes.js
const express = require('express');
const authenticateToken = require('../middleware/authMiddleWare');

const router = express.Router();

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This route is protected' });
});

module.exports = router;
