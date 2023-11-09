import { Router } from 'express';
const router = Router();
import authController from '../controllers/auth-controller.js';

router.use('/auth', authController);

export default router;
