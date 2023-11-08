const express = require('express');
const router = express.Router();
const authService = require('../services/user_service');
const User = require('../models/user-model');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.signUpWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing up', error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.signInWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing in', error: error.message });
  }
});

// Add routes for signing in with Facebook and Google

module.exports = router;