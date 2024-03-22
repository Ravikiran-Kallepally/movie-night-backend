// routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  //console.log("req.body : " ,req.body)
  //This is where we are calling the model 
  //const user = await User.findOne({ email });
  const user = await User.findOne(email);

  //console.log("user await User.findOne({ email });",user)
  if (!user) {
    console.log("User does not exist in DB ")
    return res.status(400).json({ message: 'Invalid email or password ok ' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  console.log("Passwords to compare",password,+":" + user.password)
  if (!validPassword) {
    console.log("Password is incorrect ")
    return res.status(400).json({ message: 'Invalid email or password psk' });
  }

  const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

module.exports = router;
