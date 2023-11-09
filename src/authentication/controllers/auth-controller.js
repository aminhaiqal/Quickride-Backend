import { Router } from 'express';
const router = Router();
import AuthService from '../services/user_service.js';
import User from '../models/user-model.js';

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AuthService.signUpWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing up', error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AuthService.signInWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing in', error: error.message });
  }
});

// Add routes for signing in with Facebook and Google

export default router;