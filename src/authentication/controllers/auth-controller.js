import { Router } from 'express';
const router = Router();
import { signUpWithEmailAndPassword, signInWithEmailAndPassword } from '../services/user_service';
import User from '../models/user-model';

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signUpWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing up', error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signInWithEmailAndPassword(email, password);
    res.json(new User(user.uid, user.email, user.displayName));
  } catch (error) {
    res.status(400).json({ message: 'Error signing in', error: error.message });
  }
});

// Add routes for signing in with Facebook and Google

export default router;